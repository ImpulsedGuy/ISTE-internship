import React, { useState } from 'react';
import { X, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function ReportJobModal({ isOpen, onClose }) {
  const [reason, setReason] = useState('Payment Demanded / Fee Violation');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ padding: '24px', maxWidth: '500px' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <AlertTriangle size={18} style={{ color: '#ef4444' }} />
            <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#fff' }}>
              Report a Posting
            </h3>
          </div>
          <button onClick={onClose} className="btn btn-ghost" style={{ padding: '4px' }}>
            <X size={18} />
          </button>
        </div>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '28px 10px' }}>
            <CheckCircle2 size={32} style={{ color: '#10b981', margin: '0 auto 10px' }} />
            <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '4px' }}>
              Report Submitted
            </h4>
            <p style={{ color: '#94a3b8', fontSize: '0.84rem', lineHeight: '1.5' }}>
              Thank you. Our student team will review this listing to help keep the platform reliable for all students.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <p style={{ fontSize: '0.84rem', color: '#94a3b8', margin: 0 }}>
              If a listing asks for payment, has an invalid link, or contains misleading information, please let us know:
            </p>

            <div>
              <label style={{ fontSize: '0.78rem', color: '#cbd5e1', marginBottom: '4px', display: 'block' }}>Reason</label>
              <select 
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="premium-input"
                style={{ backgroundColor: '#0a0f1d' }}
              >
                <option value="Payment Demanded / Fee Violation">Organisation asked for money, training fee, or registration fee</option>
                <option value="Broken Link">Application link is broken, expired, or leads elsewhere</option>
                <option value="Misleading Details">Role description, stipend, or duration is misleading</option>
                <option value="Other Issue">Other issue or duplicate listing</option>
              </select>
            </div>

            <div>
              <label style={{ fontSize: '0.78rem', color: '#cbd5e1', marginBottom: '4px', display: 'block' }}>Details / Listing Information</label>
              <textarea
                rows="3"
                required
                placeholder="Mention the company name, role, or what issue occurred..."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="premium-input"
                style={{ resize: 'vertical' }}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '4px' }}>
              <button type="button" onClick={onClose} className="btn btn-secondary btn-sm">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary btn-sm" style={{ backgroundColor: '#ef4444' }}>
                Submit Report
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
