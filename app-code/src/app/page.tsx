'use client';

import React from 'react';

export default function MarketplaceLandingPage() {
  return (
    <div style={{ backgroundColor: '#060b13', color: '#f1f5f9', minHeight: '100vh', fontFamily: 'sans-serif', paddingBottom: '60px', position: 'relative', overflowX: 'hidden' }}>
      
      {/* Background Decorative Glow */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '1280px', h: '600px', backgroundImage: 'radial-gradient(ellipse at top, rgba(245,158,11,0.15), transparent 60%)', pointerEvents: 'none', zIndex: 0 }} />

      {/* Hero Section */}
      <header style={{ position: 'relative', paddingTop: '120px', paddingBottom: '80px', paddingLeft: '20px', paddingRight: '20px', maxWidth: '1100px', margin: '0 auto', textAlign: 'center', zIndex: 10 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)', color: '#f59e0b', px: '16px', py: '6px', padding: '6px 16px', borderRadius: '9999px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '32px' }}>
          <span>🛡️</span> 100% Human Expertise • Zero AI Tools Used
        </div>
        
        <h1 style={{ fontSize: '52px', fontWeight: '900', trackingTight: '-0.025em', color: '#ffffff', margin: '0 0 24px 0', lineHeight: '1.15' }}>
          Find the Right APC Counsellor <br />
          <span style={{ color: '#f59e0b' }}>for Your Journey</span>
        </h1>
        
        <p style={{ fontSize: '18px', color: '#cbd5e1', maxWidth: '760px', margin: '0 auto 40px auto', lineHeight: '1.6', fontWeight: '300' }}>
          Get matched with experienced MRICS and FRICS professionals for APC guidance, mock interviews, competency support, document reviews, and structured APC coaching.
        </p>
        
        {/* ACTION BUTTONS */}
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '16px', maxWidth: '500px', margin: '0 auto' }}>
          <a 
            href="/apply-for-counsellor" 
            style={{ display: 'inline-block', flex: 1, background: 'linear-gradient(to right, #f59e0b, #f97316)', color: '#020617', fontWeight: 'bold', padding: '16px 32px', borderRadius: '12px', textDecoration: 'none', fontSize: '15px', textAlign: 'center', transition: '0.2s' }}
          >
            Get a Counsellor
          </a>
          <a 
            href="#packages" 
            style={{ display: 'inline-block', flex: 1, backgroundColor: '#0d1527', border: '1px solid #1e293b', color: '#e2e8f0', fontWeight: '500', padding: '16px 32px', borderRadius: '12px', textDecoration: 'none', fontSize: '15px', textAlign: 'center', transition: '0.2s' }}
          >
            View Counsellor Packages
          </a>
        </div>
      </header>

      {/* Tailored Matching Engine Module */}
      <section style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto 96px auto', padding: '0 20px', zIndex: 10 }}>
        <div style={{ backgroundColor: '#0d1527', border: '1px solid #1e293b', borderRadius: '24px', padding: '40px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', position: 'relative' }}>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', alignItems: 'center' }}>
            <div style={{ flex: '1 1 500px' }}>
              <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#f59e0b', trackingWidest: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Featured Service</span>
              <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#ffffff', margin: '0 0 16px 0' }}>Need an APC Counsellor?</h2>
              <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: '1.6', margin: '0 0 24px 0' }}>
                We help APC candidates get matched with suitable MRICS and FRICS counsellors based on your pathway, route, experience level, APC goals, and availability.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#cbd5e1' }}><span style={{ color: '#f97316' }}>📌</span> APC pathway support</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#cbd5e1' }}><span style={{ color: '#f97316' }}>📌</span> Structured coaching</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#cbd5e1' }}><span style={{ color: '#f97316' }}>📌</span> Mock interviews</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#cbd5e1' }}><span style={{ color: '#f97316' }}>📌</span> Competency guidance</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#cbd5e1' }}><span style={{ color: '#f97316' }}>📌</span> Document reviews</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#cbd5e1' }}><span style={{ color: '#f97316' }}>📌</span> Global counsellor matching</div>
              </div>
            </div>

            <div style={{ flex: '1 1 300px', backgroundColor: '#060b13', border: '1px solid #1e293b', borderRadius: '16px', padding: '32px', textAlign: 'center' }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>🤝</div>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#ffffff', margin: '0 0 4px 0' }}>Tailored Matching Engine</h3>
              <p style={{ fontSize: '12px', color: '#94a3b8', margin: '0 0 24px 0' }}>We map your requirements context against active verified mentors.</p>
              <a 
                href="/apply-for-counsellor" 
                style={{ display: 'block', backgroundColor: '#f59e0b', color: '#020617', fontWeight: 'bold', py: '12px', padding: '12px', borderRadius: '12px', textDecoration: 'none', fontSize: '14px' }}
              >
                Request a Counsellor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Matrix Section */}
      <section id="packages" style={{ relative: 'true', maxWidth: '1100px', margin: '0 auto', padding: '0 20px 80px 20px', scrollMarginTop: '80px' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '900', color: '#ffffff', margin: '0 0 12px 0' }}>Pick & Choose Packages</h2>
          <p style={{ color: '#94a3b8', fontSize: '15px' }}>Select the transparent milestone service that directly aligns with your timeline.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', alignItems: 'stretch' }}>
          
          {/* Card 1 */}
          <div style={{ backgroundColor: 'rgba(13,21,39,0.5)', border: '1px solid #1e293b', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'between' }}>
            <div style={{ flexGrow: 1 }}>
              <span style={{ fontSize: '10px', fontWeight: 'bold', color: '#94a3b8', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Comprehensive APC Support</span>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#ffffff', margin: '0 0 4px 0' }}>Intensive Service</h3>
              <p style={{ fontSize: '12px', color: '#64748b', margin: '0 0 24px 0' }}>6 Calendar Months Support</p>
              <div style={{ fontSize: '32px', fontWeight: '900', color: '#ffffff', marginBottom: '24px' }}>£700</div>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.5', marginBottom: '24px' }}>Built for highly motivated candidates aiming to qualify quickly and stay accountable.</p>
            </div>
            <a href="/apply-for-counsellor" style={{ display: 'block', width: '100%', textAlign: 'center', backgroundColor: '#0d1527', border: '1px solid #1e293b', color: '#cbd5e1', fontWeight: '600', padding: '10px 0', borderRadius: '8px', textDecoration: 'none', fontSize: '14px' }}>Get a Counsellor</a>
          </div>

          {/* Card 2 (Flagship Highlighted) */}
          <div style={{ backgroundColor: '#0d1527', border: '2px solid #f59e0b', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'between', position: 'relative', boxShadow: '0 20px 25px -5px rgba(245,158,11,0.05)' }}>
            <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#f59e0b', color: '#020617', fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', padding: '2px 12px', borderRadius: '9999px', letterSpacing: '0.05em' }}>Flagship</div>
            <div style={{ flexGrow: 1 }}>
              <span style={{ fontSize: '10px', fontWeight: 'bold', color: '#f59e0b', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Comprehensive APC Support</span>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#ffffff', margin: '0 0 4px 0' }}>Balanced Service</h3>
              <p style={{ fontSize: '12px', color: 'rgba(245,158,11,0.6)', margin: '0 0 24px 0' }}>12 Calendar Months Support</p>
              <div style={{ fontSize: '32px', fontWeight: '900', color: '#ffffff', marginBottom: '24px' }}>£1,300</div>
              <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.5', marginBottom: '24px' }}>Our recommended package for structured guidance, balanced pacing, and consistent support.</p>
            </div>
            <a href="/apply-for-counsellor" style={{ display: 'block', width: '100%', textAlign: 'center', background: 'linear-gradient(to right, #f59e0b, #f97316)', color: '#020617', fontWeight: 'bold', padding: '10px 0', borderRadius: '8px', textDecoration: 'none', fontSize: '14px' }}>Get a Counsellor</a>
          </div>

          {/* Card 3 */}
          <div style={{ backgroundColor: 'rgba(13,21,39,0.5)', border: '1px solid #1e293b', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'between' }}>
            <div style={{ flexGrow: 1 }}>
              <span style={{ fontSize: '10px', fontWeight: 'bold', color: '#94a3b8', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Comprehensive APC Support</span>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#ffffff', margin: '0 0 4px 0' }}>FlexPath Service</h3>
              <p style={{ fontSize: '12px', color: '#64748b', margin: '0 0 24px 0' }}>24 Calendar Months Support</p>
              <div style={{ fontSize: '32px', fontWeight: '900', color: '#ffffff', marginBottom: '24px' }}>£2,500</div>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.5', marginBottom: '24px' }}>Ideal for candidates who prefer a more flexible APC timeline balancing life and long-term prep.</p>
            </div>
            <a href="/apply-for-counsellor" style={{ display: 'block', width: '100%', textAlign: 'center', backgroundColor: '#0d1527', border: '1px solid #1e293b', color: '#cbd5e1', fontWeight: '600', padding: '10px 0', borderRadius: '8px', textDecoration: 'none', fontSize: '14px' }}>Get a Counsellor</a>
          </div>

          {/* Card 4 */}
          <div style={{ backgroundColor: 'rgba(13,21,39,0.5)', border: '1px solid #1e293b', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'between' }}>
            <div style={{ flexGrow: 1 }}>
              <span style={{ fontSize: '10px', fontWeight: 'bold', color: '#94a3b8', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Comprehensive Senior Support</span>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#ffffff', margin: '0 0 4px 0' }}>Express Service</h3>
              <p style={{ fontSize: '12px', color: '#64748b', margin: '0 0 24px 0' }}>3 Calendar Months Support</p>
              <div style={{ fontSize: '32px', fontWeight: '900', color: '#ffffff', marginBottom: '24px' }}>£500</div>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.5', marginBottom: '24px' }}>Designed for the senior professional pathway or Direct Entry / RPQ candidates.</p>
            </div>
            <a href="/apply-for-counsellor" style={{ display: 'block', width: '100%', textAlign: 'center', backgroundColor: '#0d1527', border: '1px solid #1e293b', color: '#cbd5e1', fontWeight: '600', padding: '10px 0', borderRadius: '8px', textDecoration: 'none', fontSize: '14px' }}>Get a Counsellor</a>
          </div>

        </div>
      </section>

      {/* Footer Area */}
      <footer style={{ borderTop: '1px solid #0d1527', padding: '32px 0', textAlign: 'center', fontSize: '12px', color: '#475569', position: 'relative', zIndex: 10 }}>
        <p>© 2026 PASSD.NET. ALL RIGHTS RESERVED. BUILT FOR APC CANDIDATES GLOBALLY.</p>
      </footer>

    </div>
  );
}