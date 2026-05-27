'use client';

import React from 'react';

export default function AboutUsPage() {
  const handleCheckout = (packageName: string) => {
    alert(`🛒 Redirecting to secure checkout gateway for the ${packageName}...`);
  };

  return (
    <div style={{ backgroundColor: '#060b13', color: '#f1f5f9', minHeight: '100vh', fontFamily: 'sans-serif', padding: '60px 20px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#f59e0b', backgroundColor: 'rgba(245, 158, 11, 0.1)', padding: '6px 12px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Our Journey & Mission
          </span>
          <h1 style={{ fontSize: '36px', fontWeight: '800', color: '#ffffff', marginTop: '16px', marginBottom: '12px' }}>
            Why PASSD Exists
          </h1>
        </div>

        {/* Story Section */}
        <div style={{ backgroundColor: '#0d1527', border: '1px solid #1e293b', padding: '35px', borderRadius: '16px', marginBottom: '40px', lineHeight: '1.7' }}>
          <p style={{ margin: '0 0 20px 0', color: '#cbd5e1', fontSize: '15px' }}>
            PASSD was born out of a real challenge. When our founder was going through his own RICS journey, his employer didn’t have any internal RICS members or counsellors to guide him. Driven to succeed, he took a leap of faith: he walked straight into a rival firm, introduced himself, and asked for help.
          </p>
          <p style={{ margin: '0 0 20px 0', color: '#cbd5e1', fontSize: '15px' }}>
            Fortunately, that boldness paid off. He was paired with an incredible counselor and supervisor, passing his APC assessment on the very first try. Grateful for that support, he promised to pay it forward. Over the last 6 years, he has faithfully mentored more than 30 candidates as an official counselor—achieving a <strong>98% success rate</strong>.
          </p>
          <p style={{ margin: 0, color: '#94a3b8', fontSize: '13px', fontStyle: 'italic', borderTop: '1px solid #1e293b', paddingTop: '15px' }}>
            Passd Ltd is a private company registered in England and Wales headquartered in Cambridge, UK.
          </p>
        </div>

        {/* Mission Section */}
        <div style={{ marginBottom: '50px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#ffffff', marginBottom: '16px' }}>
            A Marketplace for Your Success
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '15px', lineHeight: '1.7', marginBottom: '16px' }}>
            We know firsthand how stressful it is to navigate the APC without in-house backing. We also know that corporate-level prep packages from big competitors are far too expensive for individual candidates.
          </p>
          <p style={{ color: '#cbd5e1', fontSize: '15px', lineHeight: '1.7', marginBottom: '30px' }}>
            That’s why we built PASSD. Think of us like an Airbnb or McDonald's model for APC support: an on-demand marketplace where you are in total control. You choose the exact service you need and only pay for that specific help. We never compromise on quality, and we will never lock you into bloated packages full of services you don't actually need.
          </p>
        </div>

        {/* Commercial Conversion Block */}
        <div style={{ borderTop: '1px solid #1e293b', paddingTop: '40px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#ffffff', marginBottom: '24px', textAlign: 'center' }}>
            Our On-Demand Support Options
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={{ backgroundColor: '#0d1527', border: '1px solid #1e293b', padding: '24px', borderRadius: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#ffffff', marginBottom: '8px' }}>Essential Support Matrix</h3>
                <p style={{ color: '#94a3b8', fontSize: '13px', lineHeight: '1.5', marginBottom: '16px' }}>Targeted milestones evaluation and general documentation review loops.</p>
              </div>
              <button onClick={() => handleCheckout('Essential Support Matrix')} style={{ width: '100%', backgroundColor: '#1e293b', color: '#ffffff', border: '1px solid #334155', padding: '10px', borderRadius: '6px', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer' }}>Checkout Plan</button>
            </div>

            <div style={{ backgroundColor: '#0d1527', border: '2px solid #f59e0b', padding: '24px', borderRadius: '12px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 4px 25px rgba(245,158,11,0.1)' }}>
              <span style={{ position: 'absolute', top: '-12px', right: '20px', backgroundColor: '#f59e0b', color: '#020617', fontSize: '11px', fontWeight: '900', padding: '4px 10px', borderRadius: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Most Popular</span>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#ffffff', marginBottom: '8px' }}>Full Counsellor Mentorship</h3>
                <p style={{ color: '#94a3b8', fontSize: '13px', lineHeight: '1.5', marginBottom: '16px' }}>Comprehensive custom pairing with a dedicated RICS counsellor for final interview mastery.</p>
              </div>
              <button onClick={() => handleCheckout('Full Counsellor Mentorship')} style={{ width: '100%', backgroundColor: '#f59e0b', color: '#020617', border: 'none', padding: '10px', borderRadius: '6px', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer' }}>Checkout Plan</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}