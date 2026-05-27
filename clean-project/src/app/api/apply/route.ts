import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import ExcelJS from 'exceljs';

const jsonFilePath = path.join(process.cwd(), 'applications.json');
const masterExcelPath = path.join(process.cwd(), 'passd_candidate_master.xlsx');

async function updateMasterExcelWorkbook(appData: any) {
  let workbook = new ExcelJS.Workbook();
  let worksheet: any;

  if (fs.existsSync(masterExcelPath)) {
    await workbook.xlsx.readFile(masterExcelPath);
    worksheet = workbook.getWorksheet('Applications');
  } else {
    worksheet = workbook.addWorksheet('Applications');
    // Enforcing strict Column Layout Structure 11
    worksheet.columns = [
      { header: 'Submission Date', key: 'submissionDate', width: 20 },
      { header: 'Candidate ID', key: 'candidateId', width: 22 },
      { header: 'Full Name', key: 'fullName', width: 25 },
      { header: 'Email Address', key: 'email', width: 30 },
      { header: 'LinkedIn Profile', key: 'linkedin', width: 35 },
      { header: 'RICS Account Status', key: 'ricsStatus', width: 22 },
      { header: 'RICS Candidate Number', key: 'ricsNum', width: 22 },
      { header: 'APC Route', key: 'apcRoute', width: 20 },
      { header: 'APC Pathway', key: 'apcPathway', width: 25 },
      { header: 'Global Counsellor Preference', key: 'pref', width: 25 },
      { header: 'Additional Information', key: 'additional', width: 45 },
      { header: 'Selected Package', key: 'package', width: 25 }
    ];
    worksheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFF' } };
    worksheet.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '0F172A' } };
  }

  worksheet.addRow({
    submissionDate: new Date(appData.timestamp).toLocaleDateString('en-GB'),
    candidateId: appData.applicationId,
    fullName: appData.candidateInfo.fullName,
    email: appData.candidateInfo.email,
    linkedin: appData.candidateInfo.linkedinProfile || 'N/A',
    ricsStatus: appData.ricsStatus.hasRicsAccount || 'N/A',
    ricsNum: appData.ricsStatus.ricsCandidateNumber || 'N/A',
    apcRoute: appData.apcDetails.apcRoute || 'N/A',
    apcPathway: appData.apcDetails.apcPathway || 'N/A',
    pref: appData.preferences.globalCounsellorPreference || 'N/A',
    additional: appData.preferences.additionalInformation || 'N/A',
    package: appData.billing.selectedPackage
  });

  await workbook.xlsx.writeFile(masterExcelPath);
}

// Requirement 12: Generates isolated summary tracking maps per candidate
async function createSingleApplicationSummaryExcel(appData: any) {
  let workbook = new ExcelJS.Workbook();
  let worksheet = workbook.addWorksheet('Summary');

  worksheet.columns = [
    { header: 'Column', key: 'col', width: 30 },
    { header: 'Value', key: 'val', width: 50 }
  ];

  worksheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFF' } };
  worksheet.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '1E293B' } };

  worksheet.addRows([
    { col: 'Submission Date', val: new Date(appData.timestamp).toLocaleDateString('en-GB') },
    { col: 'Candidate ID', val: appData.applicationId },
    { col: 'Full Name', val: appData.candidateInfo.fullName },
    { col: 'Email Address', val: appData.candidateInfo.email },
    { col: 'LinkedIn Profile', val: appData.candidateInfo.linkedinProfile || 'N/A' },
    { col: 'RICS Account Status', val: appData.ricsStatus.hasRicsAccount },
    { col: 'RICS Candidate Number', val: appData.ricsStatus.ricsCandidateNumber || 'N/A' },
    { col: 'APC Route', val: appData.apcDetails.apcRoute || 'N/A' },
    { col: 'APC Pathway', val: appData.apcDetails.apcPathway || 'N/A' },
    { col: 'Global Counsellor Preference', val: appData.preferences.globalCounsellorPreference || 'N/A' },
    { col: 'Additional Information', val: appData.preferences.additionalInformation || 'N/A' },
    { col: 'Selected Package', val: appData.billing.selectedPackage }
  ]);

  const singleFileDir = path.join(process.cwd(), 'candidate_summaries');
  if (!fs.existsSync(singleFileDir)) {
    fs.mkdirSync(singleFileDir, { recursive: true });
  }

  // Format standard requirement string structure validation name template
  const singleFileName = `${appData.applicationId}_summary.xlsx`;
  await workbook.xlsx.writeFile(path.join(singleFileDir, singleFileName));
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      fullName, email, linkedinProfile, 
      hasRicsAccount, ricsCandidateNumber, 
      apcRoute, apcPathway, 
      globalCounsellorPreference, additionalInformation, 
      selectedPackage, packagePrice, packageId 
    } = body;

    if (!fullName || !email) {
      return NextResponse.json({ success: false, error: 'Missing entry identifiers.' }, { status: 400 });
    }

    // Requirements naming template algorithm matrix logic
    const cleanPrefix = fullName.toLowerCase().replace(/[^a-z]/g, '').substring(0, 4);
    const dateFormattedString = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' }).replace(/\//g, '');
    const candidateTrackingCode = `${cleanPrefix}${dateFormattedString}001`;

    const newApplication = {
      applicationId: candidateTrackingCode,
      timestamp: new Date().toISOString(),
      candidateInfo: { fullName, email, linkedinProfile },
      ricsStatus: { hasRicsAccount, ricsCandidateNumber },
      apcDetails: { apcRoute, apcPathway },
      preferences: { globalCounsellorPreference, additionalInformation },
      billing: { selectedPackage, packagePrice, packageId },
      status: 'Pending Match'
    };

    let currentApplications = [];
    if (fs.existsSync(jsonFilePath)) {
      const fileContent = fs.readFileSync(jsonFilePath, 'utf8');
      currentApplications = JSON.parse(fileContent || '[]');
    }
    currentApplications.push(newApplication);
    fs.writeFileSync(jsonFilePath, JSON.stringify(currentApplications, null, 2), 'utf8');

    await updateMasterExcelWorkbook(newApplication);
    await createSingleApplicationSummaryExcel(newApplication);

    return NextResponse.json({ success: true, applicationId: candidateTrackingCode });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'Error processing dataset streams.' }, { status: 500 });
  }
}