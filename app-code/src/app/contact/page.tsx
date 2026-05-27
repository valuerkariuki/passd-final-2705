'use client';

import React, { useState } from 'react';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({ 
    name: '', email: '', apcPathway: '', subjectDropdown: 'General Enquiry', message: '' 
  });
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const faqs = [
    { 
      q: 'How does the on-demand pricing model function?', 
      a: 'Unlike traditional training providers who lock you into long, fixed-term packages, PASSD allows you to choose exactly the service you want and only pay for that distinct unit.' 
    },
    { 
      q: 'Are your counsellors certified RICS Counsellors?', 
      a: 'Yes, absolutely. Every counsellor matched through our marketplace pipeline platform is a certified RICS Counsellor (MRICS / FRICS) with years of experience conducting actual panels.' 
    },
    { 
      q: 'Can I change my preferred APC pathway support focus later?', 
      a: 'Yes. You can seamlessly switch from one package to another. To do that, please contact us.' 
    }
  ];

  return (
    <div style={{ backgroundColor: '#060b13', color: '#f1f5f9', minHeight: '100vh', padding: '60px 20px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '50px', fontSize: '32px', fontWeight: '800' }}>Contact Our Support Hub</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
          {/* Form Section */}
          <div style={{ backgroundColor: '#0d1527', border: '1px solid #1e293b', padding: '32px', borderRadius: '16px' }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <input type="text" placeholder="Name" style={{ padding: '11px', backgroundColor: '#060b13', border: '1px solid #1e293b', borderRadius: '8px', color: '#fff' }} />
              <input type="email" placeholder="Email" style={{ padding: '11px', backgroundColor: '#060b13', border: '1px solid #1e293b', borderRadius: '8px', color: '#fff' }} />
              <input type="text" placeholder="APC Pathway" style={{ padding: '11px', backgroundColor: '#060b13', border: '1px solid #1e293b', borderRadius: '8px', color: '#fff' }} />
              <select style={{ padding: '11px', backgroundColor: '#060b13', border: '1px solid #1e293b', borderRadius: '8px', color: '#fff' }}>
                <option>General Enquiry</option><option>APC Guidance</option><option>Packages</option><option>Technical Support</option>
              </select>
              <textarea rows={4} placeholder="Message" style={{ padding: '11px', backgroundColor: '#060b13', border: '1px solid #1e293b', borderRadius: '8px', color: '#fff' }} />
              <button type="button" style={{ padding: '12px', backgroundColor: '#f59e0b', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', border: 'none' }}>Route Inquiry Stream</button>
            </form>
          </div>

          {/* FAQ Section */}
          <div>
            <h2 style={{ fontSize: '18px', marginBottom: '20px', fontWeight: '700' }}>Frequently Asked Questions</h2>
            {faqs.map((faq, idx) => (
              <div key={idx} style={{ backgroundColor: '#0d1527', border: '1px solid #1e293b', borderRadius: '10px', marginBottom: '10px' }}>
                <div onClick={() => setActiveFaq(activeFaq === idx ? null : idx)} style={{ padding: '16px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}>
                  {faq.q} <span>{activeFaq === idx ? '▲' : '▼'}</span>
                </div>
                {activeFaq === idx && <div style={{ padding: '16px', color: '#cbd5e1', borderTop: '1px solid #1e293b' }}>{faq.a}</div>}
              </div>
            ))}
            <div style={{ marginTop: '20px', textAlign: 'center', color: '#94a3b8' }}>
              <a href="https://linkedin.com" style={{ color: '#fff', marginRight: '15px' }}>LinkedIn</a>
              <a href="https://instagram.com" style={{ color: '#fff' }}>Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}