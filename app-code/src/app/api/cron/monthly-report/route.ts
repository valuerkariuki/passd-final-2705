import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import ExcelJS from 'exceljs';
import nodemailer from 'nodemailer';

const jsonFilePath = path.join(process.cwd(), 'applications.json');

export async function GET(request: Request) {
  try {
    // Optional Protection parameter logic block: verify request execution is at 23:59 on day 30
    const now = new Date();
    
    // To manually trigger/test this framework anytime via browser access, comment out this validation line:
    if (now.getDate() !== 30) {
      return NextResponse.json({ message: 'Automation sequence skipped until the 30th day of the month.' });
    }

    if (!fs.existsSync(jsonFilePath)) return NextResponse.json({ message: 'No metrics dataset logged.' });
    const apps = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8') || '[]');

    const currentMonth = now.getMonth(); 
    const currentYear = now.getFullYear();
    const monthsList = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const fullMonthsLong = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];

    const activeMonthData = apps.filter((a: any) => {
      const appDate = new Date(a.timestamp);
      return appDate.getMonth() === currentMonth && appDate.getFullYear() === currentYear;
    });

    // Compute metrics breakdown
    const packageBreakdown: Record<string, number> = {};
    const routeBreakdown: Record<string, number> = {};
    const pathwayBreakdown: Record<string, number> = {};

    activeMonthData.forEach((a: any) => {
      const pkg = a.billing?.selectedPackage || 'Unknown';
      const rte = a.apcDetails?.apcRoute || 'Unknown';
      const pth = a.apcDetails?.apcPathway || 'Unknown';

      packageBreakdown[pkg] = (packageBreakdown[pkg] || 0) + 1;
      routeBreakdown[rte] = (routeBreakdown[rte] || 0) + 1;
      pathwayBreakdown[pth] = (pathwayBreakdown[pth] || 0) + 1;
    });

    let workbook = new ExcelJS.Workbook();
    let summarySheet = workbook.addWorksheet('Monthly Analytics Summary');

    summarySheet.addRow([`PASSD System Performance Aggregates Log - ${monthsList[currentMonth]} ${currentYear}`]).font = { bold: true, size: 14 };
    summarySheet.addRow([]);
    summarySheet.addRow(['Total Applications Tracked:', activeMonthData.length]).font = { bold: true };
    summarySheet.addRow([]);

    summarySheet.addRow(['Package Metric Breakdown Matrix']).font = { bold: true };
    Object.entries(packageBreakdown).forEach(([k, v]) => summarySheet.addRow([k, v]));
    summarySheet.addRow([]);

    summarySheet.addRow(['RICS APC Route Breakdown Matrix']).font = { bold: true };
    Object.entries(routeBreakdown).forEach(([k, v]) => summarySheet.addRow([k, v]));
    summarySheet.addRow([]);

    summarySheet.addRow(['RICS APC Pathway Field Breakdown Matrix']).font = { bold: true };
    Object.entries(pathwayBreakdown).forEach(([k, v]) => summarySheet.addRow([k, v]));

    // Format standard Requirement 13 naming string conventions
    const fileNameString = `passd_monthly_report_${monthsList[currentMonth]}_${currentYear}.xlsx`;
    const destinationPath = path.join(process.cwd(), fileNameString);
    await workbook.xlsx.writeFile(destinationPath);

    // Requirement 14: Automated SMTP dispatch layout notification logic
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: 'your-email@gmail.com', pass: 'xxxx xxxx xxxx xxxx' }
    });

    await transporter.sendMail({
      from: '"PASSD Analytics Engine" <your-email@gmail.com>',
      to: 'new@passd.net',
      subject: `PASSD Monthly APC Application Report – ${fullMonthsLong[currentMonth]} ${currentYear}`,
      text: `Hello Admin,\n\nPlease find attached the complete PASSD Monthly APC Application Performance Report spreadsheet file tracking log metrics data capture details generated on the 30th at 23:59 server execution loops safely.\n\nTotal registrations recorded: ${activeMonthData.length}\n\nBest regards,\nOperations Node`,
      attachments: [{ filename: fileNameString, path: destinationPath }]
    });

    return NextResponse.json({ success: true, loggedVolume: activeMonthData.length, fileDropped: fileNameString });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}