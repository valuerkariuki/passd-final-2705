import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import ExcelJS from 'exceljs';

const jsonFilePath = path.join(process.cwd(), 'applications.json');

export async function POST(request: Request) {
  try {
    const filters = await request.json();
    const { startDate, endDate, selectedPackage, apcPathway, apcRoute, ricsStatus, exportType } = filters;

    if (!fs.existsSync(jsonFilePath)) return NextResponse.json([]);
    let apps = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8') || '[]');

    // Filtering Criteria Engine Logic
    if (startDate) apps = apps.filter((a: any) => new Date(a.timestamp) >= new Date(startDate));
    if (endDate) apps = apps.filter((a: any) => new Date(a.timestamp) <= new Date(endDate + 'T23:59:59'));
    if (selectedPackage) apps = apps.filter((a: any) => a.billing?.selectedPackage === selectedPackage);
    if (apcPathway) apps = apps.filter((a: any) => a.apcDetails?.apcPathway === apcPathway);
    if (apcRoute) apps = apps.filter((a: any) => a.apcDetails?.apcRoute === apcRoute);
    if (ricsStatus) apps = apps.filter((a: any) => a.ricsStatus?.hasRicsAccount === ricsStatus);

    if (exportType === 'json') return NextResponse.json(apps);

    let workbook = new ExcelJS.Workbook();
    let sheet = workbook.addWorksheet('Filtered Data Logs');

    sheet.columns = [
      { header: 'Submission Date', key: 'date', width: 18 },
      { header: 'Candidate ID', key: 'id', width: 22 },
      { header: 'Full Name', key: 'name', width: 22 },
      { header: 'Email Address', key: 'email', width: 28 },
      { header: 'APC Pathway', key: 'pathway', width: 22 },
      { header: 'APC Route', key: 'route', width: 20 },
      { header: 'Selected Package', key: 'pkg', width: 22 },
      { header: 'RICS Account Status', key: 'rics', width: 20 }
    ];

    apps.forEach((a: any) => {
      sheet.addRow({
        date: new Date(a.timestamp).toLocaleDateString('en-GB'),
        id: a.applicationId,
        name: a.candidateInfo?.fullName,
        email: a.candidateInfo?.email,
        pathway: a.apcDetails?.apcPathway || 'N/A',
        route: a.apcDetails?.apcRoute || 'N/A',
        pkg: a.billing?.selectedPackage,
        rics: a.ricsStatus?.hasRicsAccount
      });
    });

    if (exportType === 'csv') {
      const csvBuffer = await workbook.csv.writeBuffer();
      return new NextResponse(csvBuffer, {
        headers: { 'Content-Type': 'text/csv', 'Content-Disposition': 'attachment; filename="passd_filtered_report.csv"' }
      });
    } else {
      const xlsxBuffer = await workbook.xlsx.writeBuffer();
      return new NextResponse(xlsxBuffer, {
        headers: { 
          'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 
          'Content-Disposition': 'attachment; filename="passd_filtered_report.xlsx"' 
        }
      });
    }
  } catch (err) {
    return NextResponse.json({ error: 'Failed compilation engine loops.' }, { status: 500 });
  }
}