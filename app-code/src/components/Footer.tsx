'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#060b13', borderTop: '1px solid #1e293b', color: '#94a3b8', padding: '60px 20px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', paddingBottom: '40px' }}>
        
        {/* Brand Summary */}
        <div>
          <h3 style={{ color: '#ffffff', fontSize: '18px', fontWeight: '900', marginBottom: '12px' }}>PASSD.NET</h3>
          <p style={{ fontSize: '13px', lineHeight: '1.6' }}>
            On-demand marketplace empowering RICS APC candidates with custom mentor matching.
          </p>
          <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
            <a href="https://linkedin.com" target="_blank" style={{ color: '#cbd5e1', fontSize: '20px' }}>🔗</a>
            <a href="https://instagram.com" target="_blank" style={{ color: '#cbd5e1', fontSize: '20px' }}>📸</a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ color: '#ffffff', fontSize: '14px', fontWeight: 'bold', marginBottom: '16px', textTransform: 'uppercase' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
            <li><a href="/" style={{ color: '#94a3b8', textDecoration: 'none' }}>Home</a></li>
            <li><a href="/about" style={{ color: '#94a3b8', textDecoration: 'none' }}>About Us</a></li>
            <li><a href="/apply-for-counsellor" style={{ color: '#94a3b8', textDecoration: 'none' }}>Packages</a></li>
            <li><a href="/resources" style={{ color: '#94a3b8', textDecoration: 'none' }}>Resources</a></li>
            <li><a href="/contact" style={{ color: '#94a3b8', textDecoration: 'none' }}>Contact</a></li>
          </ul>
        </div>

        {/* Legal Pages */}
        <div>
          <h4 style={{ color: '#ffffff', fontSize: '14px', fontWeight: 'bold', marginBottom: '16px', textTransform: 'uppercase' }}>Legal</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
            <li><a href="/legal/privacy" style={{ color: '#94a3b8', textDecoration: 'none' }}>Privacy Policy</a></li>
            <li><a href="/legal/cookies" style={{ color: '#94a3b8', textDecoration: 'none' }}>Cookie Policy</a></li>
            <li><a href="/legal/terms" style={{ color: '#94a3b8', textDecoration: 'none' }}>Terms & Conditions</a></li>
            <li><a href="/legal/refunds" style={{ color: '#94a3b8', textDecoration: 'none' }}>Refund Policy</a></li>
            <li><a href="/legal/disclaimer" style={{ color: '#94a3b8', textDecoration: 'none' }}>Disclaimer</a></li>
            <li><a href="/legal/accessibility" style={{ color: '#94a3b8', textDecoration: 'none' }}>Accessibility</a></li>
          </ul>
        </div>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', paddingTop: '20px', borderTop: '1px solid #1e293b', fontSize: '12px', textAlign: 'center' }}>
        <p>© 2026 PASSD LTD. Registered in England & Wales. Headquartered in Cambridge, UK.</p>
      </div>
    </footer>
  );
}