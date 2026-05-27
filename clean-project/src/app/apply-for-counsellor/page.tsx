'use client';

import React, { useState } from 'react';

export default function ApplyForCounsellorRegistrationPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedCandidateId, setGeneratedCandidateId] = useState('');
  const [loading, setLoading] = useState(false);

  // Form State matching criteria arrays
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    linkedinProfile: '',
    hasRicsAccount: 'No', 
    ricsCandidateNumber: '',
    apcRoute: 'Graduate Route',
    apcPathway: 'Quantity Surveying and Construction',
    globalCounsellorPreference: 'No Preference',
    additionalInformation: '',
    selectedPackage: 'Balanced Service',
    packagePrice: '550',
    packageId: 'pkg_balanced_apc'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePackageSelectionToggle = (packageName: string, price: string, id: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedPackage: packageName,
      packagePrice: price,
      packageId: id
    }));
  };

  // =========================================================================
  // 🚀 SUBMISSION MATRIX HANDLING ENGINE (Requirement 11, 12, & 16)
  // =========================================================================
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          linkedinProfile: formData.linkedinProfile,
          hasRicsAccount: formData.hasRicsAccount,
          ricsCandidateNumber: formData.ricsCandidateNumber,
          apcRoute: formData.apcRoute,
          apcPathway: formData.apcPathway,
          globalCounsellorPreference: formData.globalCounsellorPreference,
          additionalInformation: formData.additionalInformation,
          selectedPackage: formData.selectedPackage,
          packagePrice: formData.packagePrice,
          packageId: formData.packageId
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setGeneratedCandidateId(result.applicationId);
        setIsSubmitted(true);
      } else {
        alert('Critical error establishing contact loop with processing core server layers.');
      }
    } catch (err) {
      console.error('Core registration processing fault:', err);
      alert('An error occurred during submission.');
    } finally {
      setLoading(false);
    }
  };

  // =========================================================================
  // 🌟 SUCCESS BANNER CONDUIT RENDERING LAYER (Requirement 16)
  // =========================================================================
  if (isSubmitted) {
    return (
      <div style={{ backgroundColor: '#060b13', color: '#f1f5f9', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif', padding: '20px' }}>
        <div style={{ backgroundColor: '#0d1527', border: '2px solid #10b981', padding: '40px', borderRadius: '24px', maxWidth: '540px', textAlign: 'center', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}>
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>🎉</div>
          
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#ffffff', margin: '0 0 16px 0' }}>
            Thank you for your application.
          </h2>
          
          <p style={{ fontSize: '15px', color: '#cbd5e1', margin: '0 0 8px 0' }}>
            Your Passd Candidate ID is:
          </p>
          
          <div style={{ fontSize: '22px', fontWeight: '900', color: '#f59e0b', backgroundColor: '#060b13', border: '1px solid #1e293b', padding: '12px 24px', borderRadius: '8px', display: 'inline-block', margin: '0 0 16px 0', letterSpacing: '0.05em' }}>
            {generatedCandidateId || 'mark230526001'}
          </div>
          
          <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: '1.6', margin: '0 0 24px 0' }}>
            Please use this ID for all future communication, invoices, and APC support requests.
          </p>
          
          <div style={{ borderTop: '1px solid #1e293b', paddingTop: '20px', fontSize: '14px', color: '#cbd5e1', lineHeight: '1.6' }}>
            We aim to match you with a suitable APC counsellor within 48 hours (excluding weekends).
          </div>
          
          <a href="/" style={{ display: 'inline-block', marginTop: '32px', backgroundColor: '#1e293b', color: '#e2e8f0', textDecoration: 'none', padding: '12px 24px', borderRadius: '8px', fontSize: '14px', fontWeight: 'bold' }}>
            Return to Marketplace Home
          </a>
        </div>
      </div>
    );
  }

  // =========================================================================
  // 📝 REGISTRATION VIEW FORM SCREEN DESIGN
  // =========================================================================
  return (
    <div style={{ backgroundColor: '#060b13', color: '#f1f5f9', minHeight: '100vh', fontFamily: 'sans-serif', padding: '60px 20px' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', backgroundColor: '#0d1527', border: '1px solid #1e293b', padding: '40px', borderRadius: '20px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '900', margin: '0 0 8px 0', color: '#fff' }}>APC Candidate Onboarding Intake</h1>
        <p style={{ color: '#94a3b8', fontSize: '14px', margin: '0 0 32px 0' }}>Provide your RICS profile track to initiate our professional matching suite configuration loops.</p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Group 1: Identity */}
          <div>
            <label style={{ display: 'block', fontSize: '13px', color: '#cbd5e1', marginBottom: '8px', fontWeight: '600' }}>Full Name *</label>
            <input type="text" name="fullName" required value={formData.fullName} onChange={handleInputChange} placeholder="e.g. Mark Robinson" style={{ width: '100%', padding: '12px', boxSizing: 'border-box', backgroundColor: '#060b13', border: '1px solid #1e293b', borderRadius: '8px', color: '#fff', fontSize: '14px' }} />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13px', color: '#cbd5e1', marginBottom: '8px', fontWeight: '600' }}>Email Address *</label>
            <input type="email" name="email" required value={formData.email} onChange={handleInputChange} placeholder="e.g. mark@example.com" style={{ width: '100%', padding: '12px', boxSizing: 'border-box', backgroundColor: '#060b13', border: '1px solid #1e293b', borderRadius: '8px', color: '#fff', fontSize: '14px' }} />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13px', color: '#cbd5e1', marginBottom: '8px', fontWeight: '600' }}>LinkedIn Profile URL</label>
            <input type="url" name="linkedinProfile" value={formData.linkedinProfile} onChange={handleInputChange} placeholder="https://linkedin.com/in/username" style={{ width: '100%', padding: '12px', boxSizing: 'border-box', backgroundColor: '#060b13', border: '1px solid #1e293b', borderRadius: '8px', color: '#fff', fontSize: '14px' }} />
          </div>

          {/* Group 2: RICS Metadata */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#cbd5e1', marginBottom: '8px', fontWeight: '600' }}>RICS Account Status</label>
              <select name="hasRicsAccount" value={formData.hasRicsAccount} onChange={handleInputChange} style={{ width: '100%', padding: '12px', boxSizing: 'border-box', backgroundColor: '#060b13', border: '1px solid #1e293b', borderRadius: '8px', color: '#fff', fontSize: '14px' }}>
                <option value="Yes">Registered Active Profile</option>
                <option value="No">No Profile Configured</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#cbd5e1', marginBottom: '8px', fontWeight: '600' }}>Candidate Number (If applicable)</label>
              <input type="text" name="ricsCandidateNumber" value={formData.ricsCandidateNumber} onChange={handleInputChange} placeholder="e.g. 6123456" style={{ width: '100%', padding: '12px', boxSizing: 'border-box', backgroundColor: '#060b13', border: '1px solid #1e293b', borderRadius: '8px', color: '#fff', fontSize: '14px' }} />
            </div>
          </div>

          {/* Group 3: APC Metric Framework selectors */}
          <div>
            <label style={{ display: 'block', fontSize: '13px', color: '#cbd5e1', marginBottom: '8px', fontWeight: '600' }}>APC Evaluation Route Strategy</label>
            <select name="apcRoute" value={formData.apcRoute} onChange={handleInputChange} style={{ width: '100%', padding: '12px', boxSizing: 'border-box', backgroundColor: '#060b13', border: '1px solid #1e293b', borderRadius: '8px', color: '#fff', fontSize: '14px' }}>
              <option value="Graduate Route">Graduate Route (12 / 24 Month Structured)</option>
              <option value="Senior Professional Route">Senior Professional Assessment Route</option>
              <option value="Academic Route">Academic Route Criteria Matrix</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13px', color: '#cbd5e1', marginBottom: '8px', fontWeight: '600' }}>RICS Core APC Pathway Field</label>
            <select name="apcPathway" value={formData.apcPathway} onChange={handleInputChange} style={{ width: '100%', padding: '12px', boxSizing: 'border-box', backgroundColor: '#060b13', border: '1px solid #1e293b', borderRadius: '8px', color: '#fff', fontSize: '14px' }}>
              <option value="Quantity Surveying and Construction">Quantity Surveying and Construction</option>
              <option value="Commercial Real Estate Property">Commercial Real Estate Property</option>
              <option value="Building Surveying Track">Building Surveying Track</option>
              <option value="Project Management Specialism">Project Management Specialism</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13px', color: '#cbd5e1', marginBottom: '8px', fontWeight: '600' }}>Additional Context & Criteria Notes</label>
            <textarea name="additionalInformation" value={formData.additionalInformation} onChange={handleInputChange} placeholder="Detail any specialized milestones or specific tracking requirements here..." rows={4} style={{ width: '100%', padding: '12px', boxSizing: 'border-box', backgroundColor: '#060b13', border: '1px solid #1e293b', borderRadius: '8px', color: '#fff', fontSize: '14px', resize: 'vertical' }} />
          </div>

          {/* Group 4: Package Tiers Selector Panels */}
          <div>
            <label style={{ display: 'block', fontSize: '13px', color: '#cbd5e1', marginBottom: '12px', fontWeight: '600' }}>Select Support Package Level</label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div 
                onClick={() => handlePackageSelectionToggle('Balanced Service', '550', 'pkg_balanced_apc')}
                style={{ border: `2px solid ${formData.selectedPackage === 'Balanced Service' ? '#f59e0b' : '#1e293b'}`, padding: '16px', borderRadius: '12px', cursor: 'pointer', backgroundColor: formData.selectedPackage === 'Balanced Service' ? 'rgba(245,158,11,0.05)' : '#060b13' }}
              >
                <strong style={{ display: 'block', color: '#fff' }}>Balanced Service Plan</strong>
                <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#f59e0b' }}>£550</span>
              </div>
              
              <div 
                onClick={() => handlePackageSelectionToggle('Intensive Service', '890', 'pkg_intensive_apc')}
                style={{ border: `2px solid ${formData.selectedPackage === 'Intensive Service' ? '#f59e0b' : '#1e293b'}`, padding: '16px', borderRadius: '12px', cursor: 'pointer', backgroundColor: formData.selectedPackage === 'Intensive Service' ? 'rgba(245,158,11,0.05)' : '#060b13' }}
              >
                <strong style={{ display: 'block', color: '#fff' }}>Intensive Service Plan</strong>
                <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#f59e0b' }}>£890</span>
              </div>
            </div>
          </div>

          {/* Action Trigger Node */}
          <button 
            type="submit" 
            disabled={loading}
            style={{ marginTop: '12px', padding: '14px', backgroundColor: '#f59e0b', color: '#020617', border: 'none', borderRadius: '8px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer', transition: '0.2s', opacity: loading ? 0.6 : 1 }}
          >
            {loading ? 'Processing Registration Loops...' : 'Lock In & Complete Checkout Stream'}
          </button>

        </form>
      </div>
    </div>
  );
}