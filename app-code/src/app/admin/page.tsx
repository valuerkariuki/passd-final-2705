'use client';

import React, { useState, useEffect } from 'react';

export default function AdminDashboardPortal() {
  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const MASTER_ADMIN_PASSCODE = 'passd2026';

  useEffect(() => {
    if (isAuthenticated) {
      fetchApplications();
    }
  }, [isAuthenticated]);

  const fetchApplications = async () => {
    try {
      setLoading(true);

      const res = await fetch('/api/admin/applications');

      if (!res.ok) {
        throw new Error('Could not load applications.');
      }

      const data = await res.json();
      setApplications(data);
    } catch (err: any) {
      setError(err.message || 'Unknown error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const updateApplicationStatus = async (
    applicationId: string,
    currentStatus: string
  ) => {
    const nextStatus =
      currentStatus === 'Pending Match'
        ? 'Counsellor Matched'
        : 'Pending Match';

    try {
      const res = await fetch('/api/admin/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          applicationId,
          nextStatus,
        }),
      });

      if (res.ok) {
        fetchApplications();
      }
    } catch (err) {
      alert('Failed to update status.');
    }
  };

  const triggerInvoiceDownload = (app: any) => {
    const invoiceWindow = window.open('', '_blank');

    if (!invoiceWindow) {
      alert('Please allow popups.');
      return;
    }

    const issueDate = new Date(app.timestamp).toLocaleDateString('en-GB');

    const invoiceId = `INV-${
      app.applicationId?.toUpperCase().replace('APP_', '') || '2026'
    }`;

    const amountDue = app.billing?.packagePrice || 0;

    const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=InvoiceID:${invoiceId}-Amount:GBP${amountDue}`;

    invoiceWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>${invoiceId}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 40px;
            color: #1e293b;
          }

          table {
            width: 100%;
            border-collapse: collapse;
          }

          th {
            background: #0f172a;
            color: white;
            padding: 12px;
            text-align: left;
          }

          td {
            padding: 12px;
            border-bottom: 1px solid #e2e8f0;
          }

          .total {
            font-size: 20px;
            font-weight: bold;
          }

          .print-btn {
            background: #f59e0b;
            border: none;
            padding: 12px 20px;
            border-radius: 6px;
            cursor: pointer;
            margin-bottom: 20px;
            font-weight: bold;
          }
        </style>
      </head>

      <body>

        <button class="print-btn" onclick="window.print()">
          Print / Save PDF
        </button>

        <h1>PASSD.NET Invoice</h1>

        <p><strong>Invoice ID:</strong> ${invoiceId}</p>
        <p><strong>Date:</strong> ${issueDate}</p>

        <hr />

        <h3>Candidate Information</h3>

        <p>
          <strong>Name:</strong>
          ${app.candidateInfo?.fullName || 'N/A'}
        </p>

        <p>
          <strong>Email:</strong>
          ${app.candidateInfo?.email || 'N/A'}
        </p>

        <table>
          <thead>
            <tr>
              <th>Package</th>
              <th>Pathway</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                ${app.billing?.selectedPackage || 'Support Package'}
              </td>

              <td>
                ${app.apcDetails?.apcPathway || 'N/A'}
              </td>

              <td>
                £${amountDue}
              </td>
            </tr>

            <tr>
              <td colspan="2" class="total">
                Total
              </td>

              <td class="total">
                £${amountDue}
              </td>
            </tr>
          </tbody>
        </table>

        <br />

        <h3>Bank Details</h3>

        <p><strong>Bank:</strong> Barclays Bank PLC</p>
        <p><strong>Account Name:</strong> PASSD LTD</p>
        <p><strong>Sort Code:</strong> 20-00-00</p>
        <p><strong>Account Number:</strong> 12345678</p>
        <p><strong>Reference:</strong> ${invoiceId}</p>

        <br />

        <img src="${qrImageUrl}" width="150" />

      </body>
      </html>
    `);

    invoiceWindow.document.close();
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (passcode === MASTER_ADMIN_PASSCODE) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid admin passcode.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div
        style={{
          backgroundColor: '#060b13',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#ffffff',
          padding: '20px',
        }}
      >
        <form
          onSubmit={handleLoginSubmit}
          style={{
            backgroundColor: '#0d1527',
            padding: '40px',
            borderRadius: '16px',
            width: '100%',
            maxWidth: '400px',
          }}
        >
          <h1 style={{ textAlign: 'center' }}>
            PASSD Admin Login
          </h1>

          <input
            type="password"
            placeholder="Enter Passcode"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              marginTop: '20px',
              marginBottom: '20px',
              borderRadius: '8px',
              border: '1px solid #334155',
              backgroundColor: '#020617',
              color: '#ffffff',
            }}
          />

          {error && (
            <p style={{ color: '#ef4444' }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#f59e0b',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: '#060b13',
        minHeight: '100vh',
        color: '#ffffff',
        padding: '40px 20px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1
          style={{
            fontSize: '32px',
            marginBottom: '30px',
          }}
        >
          Admin Dashboard
        </h1>

        <button
          onClick={fetchApplications}
          style={{
            backgroundColor: '#f59e0b',
            color: '#020617',
            border: 'none',
            padding: '10px 16px',
            borderRadius: '8px',
            marginBottom: '30px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Refresh Applications
        </button>

        {loading ? (
          <p>Loading applications...</p>
        ) : applications.length === 0 ? (
          <p>No applications found.</p>
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            {applications.map((app: any) => (
              <div
                key={app.applicationId}
                style={{
                  backgroundColor: '#0d1527',
                  padding: '24px',
                  borderRadius: '16px',
                  border: '1px solid #1e293b',
                }}
              >
                <h2 style={{ marginBottom: '10px' }}>
                  {app.candidateInfo?.fullName || 'Unknown'}
                </h2>

                <p>
                  📧 {app.candidateInfo?.email || 'N/A'}
                </p>

                <p>
                  <strong>Pathway:</strong>{' '}
                  {app.apcDetails?.apcPathway || 'N/A'}
                </p>

                <p>
                  <strong>Route:</strong>{' '}
                  {app.apcDetails?.apcRoute || 'N/A'}
                </p>

                <p>
                  <strong>Package:</strong>{' '}
                  {app.billing?.selectedPackage || 'Custom'}
                </p>

                <p
                  style={{
                    color: '#f59e0b',
                    fontSize: '20px',
                    fontWeight: 'bold',
                  }}
                >
                  £{app.billing?.packagePrice || 0}
                </p>

                <div
                  style={{
                    display: 'flex',
                    gap: '12px',
                    marginTop: '20px',
                    flexWrap: 'wrap',
                  }}
                >
                  <button
                    onClick={() =>
                      updateApplicationStatus(
                        app.applicationId,
                        app.status
                      )
                    }
                    style={{
                      backgroundColor:
                        app.status === 'Counsellor Matched'
                          ? '#ef4444'
                          : '#10b981',
                      color: '#ffffff',
                      border: 'none',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                    }}
                  >
                    {app.status === 'Counsellor Matched'
                      ? 'Mark Pending'
                      : 'Approve Match'}
                  </button>

                  <button
                    onClick={() => triggerInvoiceDownload(app)}
                    style={{
                      backgroundColor: '#1e293b',
                      color: '#ffffff',
                      border: '1px solid #334155',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                    }}
                  >
                    Generate Invoice
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}