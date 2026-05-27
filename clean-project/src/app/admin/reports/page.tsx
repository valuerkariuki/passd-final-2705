'use client';

import React, { useState, useEffect } from 'react';

export default function AdminReportsLayoutRoute() {
  const [records, setRecords] = useState<any[]>([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');
  const [apcPathway, setApcPathway] = useState('');
  const [apcRoute, setApcRoute] = useState('');
  const [ricsStatus, setRicsStatus] = useState('');

  useEffect(() => {
    executeDataStreamFetch();
  }, [startDate, endDate, selectedPackage, apcPathway, apcRoute, ricsStatus]);

  const executeDataStreamFetch = async () => {
    const res = await fetch('/api/admin/reports', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ startDate, endDate, selectedPackage, apcPathway, apcRoute, ricsStatus, exportType: 'json' })
    });
    if (res.ok) {
      const logs = await res.json();
      setRecords(logs);
    }
  };

  const triggerExportDownloadStream = async (formatExtensionType: 'xlsx' | 'csv') => {
    const res = await fetch('/api/admin/reports', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ startDate, endDate, selectedPackage, apcPathway, apcRoute, ricsStatus, exportType: formatExtensionType })
    });
    if (res.ok) {
      const fileBlob = await res.blob();
      const clickUrl = window.URL.createObjectURL(fileBlob);
      const anchorNode = document.createElement('a');
      anchorNode.href = clickUrl;
      anchorNode.download = `passd_filtered_on_demand_extract.${formatExtensionType}`;
      document.body.appendChild(anchorNode);
      anchorNode.click();
      anchorNode.remove();
    }
  };

  return (
    <div style={{ backgroundColor: '#060b13', color: '#f1f5f9', minHeight: '100vh', fontFamily: 'sans-serif', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '26px', fontWeight: '900', color: '#fff', margin: '0 0 4px 0' }}>📊 Analytical Reporting Dashboard Hub</h1>
        <p style={{ color: '#94a3b8', fontSize: '14px', margin: '0 0 32px 0' }}>Configure filter operators on demand to evaluate pipeline data records maps.</p>

        {/* Requirements Filter Selector Panel Interface element blocks */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', backgroundColor: '#0d1527', border: '1px solid #1e293b', padding: '24px', borderRadius: '16px', marginBottom: '24px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '12px', color: '#94a3b8', marginBottom: '6px' }}>Start Range Date</label>
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} style={{ width: '100%', padding: '10px', boxSizing: 'border-box', backgroundColor: '#060b13', border: '1px solid #1e293b', borderRadius: '6px', color: '#fff' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '12px', color: '#94a3b8', marginBottom: '6px' }}>End Range Date</label>
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} style={{ width: '100%', padding: '10px', boxSizing: 'border-box', backgroundColor: '#060b13', border: '1px solid #1e293b', borderRadius: '6px', color: '#fff' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '12px', color: '#94a3b8', marginBottom: '6px' }}>Package Strategy</label>
            <select value={selectedPackage} onChange={(e) => setSelectedPackage(e.target.value)} style={{ width: '100%', padding: '10px', boxSizing: 'border-box', backgroundColor: '#060b13', border: '1px solid #1e293b', borderRadius: '6px', color: '#fff' }}>
              <option value="">All Support Packages</option>
              <option value="Intensive Service">Intensive Service</option>
              <option value="Balanced Service">Balanced Service</option>
              <option value="FlexPath Service">FlexPath Service</option>
              <option value="Express Service">Express Service</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '12px', color: '#94a3b8', marginBottom: '6px' }}>RICS Account Status</label>
            <select value={ricsStatus} onChange={(e) => setRicsStatus(e.target.value)} style={{ width: '100%', padding: '10px', boxSizing: 'border-box', backgroundColor: '#060b13', border: '1px solid #1e293b', borderRadius: '6px', color: '#fff' }}>
              <option value="">All Account Profiles</option>
              <option value="Yes">Registered Active Profile</option>
              <option value="No">No Profile Configured</option>
            </select>
          </div>
        </div>

        {/* Command Matrix File Export Operations Bar */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
          <button onClick={() => triggerExportDownloadStream('xlsx')} style={{ padding: '12px 20px', backgroundColor: '#10b981', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer' }}>📥 Generate Excel Summary Report (.xlsx)</button>
          <button onClick={() => triggerExportDownloadStream('csv')} style={{ padding: '12px 20px', backgroundColor: '#3b82f6', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer' }}>📄 Export Raw Data Logs Stream (.csv)</button>
        </div>

        {/* Live Grid Stream Matrix Container Data Table */}
        <div style={{ backgroundColor: '#0d1527', border: '1px solid #1e293b', borderRadius: '16px', padding: '24px' }}>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '16px' }}>Queried Applications Stream Data Lines ({records.length})</h3>
          {records.length === 0 ? (
            <p style={{ color: '#64748b', margin: 0, fontSize: '14px' }}>No records found within current parameter filter limits.</p>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #1e293b', color: '#94a3b8', textAlign: 'left' }}>
                    <th style={{ padding: '12px' }}>Date</th>
                    <th style={{ padding: '12px' }}>Candidate ID</th>
                    <th style={{ padding: '12px' }}>Full Name Identity</th>
                    <th style={{ padding: '12px' }}>Pathway Variant</th>
                    <th style={{ padding: '12px' }}>Package Tier</th>
                  </tr>
                </thead>
                <tbody>
                  {records.map((r: any) => (
                    <tr key={r.applicationId} style={{ borderBottom: '1px solid #1e293b', color: '#cbd5e1' }}>
                      <td style={{ padding: '12px' }}>{new Date(r.timestamp).toLocaleDateString('en-GB')}</td>
                      <td style={{ padding: '12px', color: '#f59e0b', fontWeight: 'bold' }}>{r.applicationId}</td>
                      <td style={{ padding: '12px' }}>{r.candidateInfo?.fullName}</td>
                      <td style={{ padding: '12px' }}>{r.apcDetails?.apcPathway || 'General'}</td>
                      <td style={{ padding: '12px', color: '#10b981' }}>{r.billing?.selectedPackage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}