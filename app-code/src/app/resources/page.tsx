'use client';

import React, { useState } from 'react';

export default function FreeApcResources() {
  // Static resources data from prompt
  const webinars = [
    {
      title: 'Ask the Assessor',
      description: 'An interactive Q&A session with APC and Associate assessors, providing candidates with the opportunity to ask questions and gain valuable insights into their APC journey and final assessment interview. This session is designed to clarify expectations, offer practical guidance, and support candidates in preparing effectively for your interview.',
      dates: ['2 July 2026, 13:00-14:00 BST']
    },
    {
      title: 'Five APC Pitfalls',
      description: 'A webinar featuring a LionHeart representative, assessor, and FRICS member Steve Joel-Dicks, focusing on five common pitfalls encountered during the APC process. The session provides practical insights and guidance to help candidates avoid these challenges and strengthen their preparation. It will conclude with a dedicated Q&A segment, offering attendees the opportunity to seek clarification and gain further understanding.',
      dates: [
        '1 June 2026, 13:00-14:30 BST',
        '5 August 2026, 10:00-11:30 BST'
      ]
    },
    {
      title: 'Five Keys to APC Success',
      description: 'A webinar featuring a LionHeart representative, assessor, and FRICS member Steve Joel-Dicks, exploring five key factors for success in the APC process. The session will provide practical insights and proven strategies to help candidates approach each stage with confidence and maximise their chances of achieving a positive outcome. It will conclude with a dedicated Q&A segment, giving attendees the opportunity to ask questions and gain further clarity.',
      dates: ['20 July 2026, 13:00-14:30 BST']
    },
    {
      title: 'Final Countdown',
      description: 'The Final Countdown webinar, delivered in collaboration with RICS and LionHeart, is designed for candidates who have already submitted their application for assessment, as well as those who are about to or are very close to submitting. It offers targeted, last-minute guidance to support final preparation. The session covers practical techniques to help manage nerves both in the lead-up to and during the interview, provides a clear overview of the interview structure, and shares valuable tips to help candidates approach their assessment with confidence. The webinar concludes with a Q&A session, giving attendees the opportunity to address any remaining questions ahead of their assessment.',
      dates: [
        '8 June 2026, 13:00-14:00 BST',
        '15 July 2026, 15:00-16:00 BST'
      ]
    }
  ];

  const handleBookNow = (title: string, date: string) => {
    alert(`🎉 Success! You have booked a slot for "${title}" on ${date}. We have sent the access links to your email.`);
  };

  return (
    <div style={{ backgroundColor: '#060b13', color: '#f1f5f9', minHeight: '100vh', fontFamily: 'sans-serif', padding: '60px 20px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: '800', color: '#ffffff', marginBottom: '12px' }}>
            Free APC Resources
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '15px', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
            Boost your preparation with our interactive Q&A sessions, expert-led webinars, and up-to-date industry insights.
          </p>
        </div>

        {/* Webinars Grid List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginBottom: '60px' }}>
          {webinars.map((webinar, index) => (
            <div 
              key={index} 
              style={{ backgroundColor: '#0d1527', border: '1px solid #1e293b', padding: '30px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}
            >
              <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#ffffff', marginBottom: '12px' }}>
                {webinar.title}
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>
                {webinar.description}
              </p>
              
              <div style={{ borderTop: '1px solid #1e293b', paddingTop: '16px' }}>
                <p style={{ fontSize: '12px', color: '#94a3b8', fontWeight: '600', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '0.05em' }}>
                  Available Sessions:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {webinar.dates.map((date, dateIndex) => (
                    <div 
                      key={dateIndex} 
                      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#060b13', padding: '12px 16px', borderRadius: '8px', border: '1px solid #1e293b' }}
                    >
                      <span style={{ fontSize: '14px', color: '#e2e8f0', fontWeight: '500' }}>🗓️ {date}</span>
                      <button 
                        onClick={() => handleBookNow(webinar.title, date)}
                        style={{ backgroundColor: '#f59e0b', color: '#020617', border: 'none', padding: '8px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer', transition: 'background-color 0.2s' }}
                        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#d97706')}
                        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#f59e0b')}
                      >
                        Book Now
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Free CPD Section */}
        <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.4)', border: '1px dashed #334155', padding: '30px', borderRadius: '16px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#ffffff', marginBottom: '8px' }}>
            Free CPD Events & Podcasts
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '20px', lineHeight: '1.5' }}>
            Our free CPD resource list is updated regularly to help you stay ahead of your training benchmarks. Listen to the latest insights directly via RICS.
          </p>
          <a 
            href="https://www.rics.org/news-insights/rics-podcasts" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ display: 'inline-block', backgroundColor: '#1e293b', color: '#ffffff', border: '1px solid #334155', padding: '12px 24px', borderRadius: '8px', fontSize: '14px', fontWeight: 'bold', textDecoration: 'none', transition: 'background-color 0.2s' }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#334155')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#1e293b')}
          >
            Listen to RICS Podcasts ↗
          </a>
        </div>

      </div>
    </div>
  );
}