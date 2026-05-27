import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'applications.json');

// GET Route: Pulls all saved records for our dashboard interface
export async function GET() {
  try {
    if (!fs.existsSync(dataFilePath)) {
      return NextResponse.json([]);
    }

    const fileContent = fs.readFileSync(dataFilePath, 'utf8');
    const applications = JSON.parse(fileContent || '[]');
    
    // Sort applications to show the newest submissions first
    applications.sort((a: any, b: any) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

    return NextResponse.json(applications);
  } catch (error) {
    console.error('Admin API Fetch Error:', error);
    return NextResponse.json({ error: 'Failed to retrieve application logs.' }, { status: 500 });
  }
}

// POST Route: Allows you to toggle or update a candidate's status directly from your dashboard
export async function POST(request: Request) {
  try {
    const { applicationId, nextStatus } = await request.json();

    if (!applicationId || !nextStatus) {
      return NextResponse.json({ error: 'Missing update parameters.' }, { status: 400 });
    }

    if (!fs.existsSync(dataFilePath)) {
      return NextResponse.json({ error: 'Data file does not exist.' }, { status: 404 });
    }

    const fileContent = fs.readFileSync(dataFilePath, 'utf8');
    let applications = JSON.parse(fileContent || '[]');

    // Find record match and apply new workflow state
    applications = applications.map((app: any) => {
      if (app.applicationId === applicationId) {
        return { ...app, status: nextStatus };
      }
      return app;
    });

    fs.writeFileSync(dataFilePath, JSON.stringify(applications, null, 2), 'utf8');
    return NextResponse.json({ success: true, updatedId: applicationId, currentStatus: nextStatus });

  } catch (error) {
    console.error('Admin API Update Error:', error);
    return NextResponse.json({ error: 'Failed to modify application state.' }, { status: 500 });
  }
}