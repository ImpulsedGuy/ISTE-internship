import React, { useState } from 'react';
import { X, CheckCircle2, Send } from 'lucide-react';

export default function PostJobModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    company: '',
    role: '',
    domain: 'Web Development',
    location: '',
    type: 'Hybrid',
    stipend: '',
    applyUrl: '',
    contactEmail: '',
    details: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.company || !formData.role) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ padding: '28px' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
          <div>
            <span className="badge badge-neutral" style={{ marginBottom: '6px' }}>For Employers & Alumni</span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#fff' }}>
              Share an Internship Opening
            </h3>
          </div>
          <button onClick={onClose} className="btn btn-ghost" style={{ padding: '6px' }}>
            <X size={18} />
          </button>
        </div>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '36px 16px' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: 'rgba(16, 185, 129, 0.15)',
              color: '#10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 14px'
            }}>
              <CheckCircle2 size={28} />
            </div>
            <h4 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '6px' }}>
              Opportunity Submitted
            </h4>
            <p style={{ fontSize: '0.86rem', color: '#94a3b8', maxWidth: '380px', margin: '0 auto', lineHeight: '1.5' }}>
              Thank you! Our student chapter team will review the details and list the role on the internship board.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <label style={{ fontSize: '0.78rem', color: '#cbd5e1', marginBottom: '4px', display: 'block' }}>Company Name *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. CareStack, Genpro Research"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="premium-input"
                />
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', color: '#cbd5e1', marginBottom: '4px', display: 'block' }}>Role Title *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Software Engineering Intern"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="premium-input"
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
              <div>
                <label style={{ fontSize: '0.78rem', color: '#cbd5e1', marginBottom: '4px', display: 'block' }}>Domain</label>
                <select 
                  value={formData.domain}
                  onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                  className="premium-input"
                  style={{ backgroundColor: '#0a0f1d' }}
                >
                  <option value="Web Development">Web Development</option>
                  <option value="AI/ML">AI/ML</option>
                  <option value="Embedded & Robotics">Embedded & Robotics</option>
                  <option value="Cloud & DevOps">Cloud & DevOps</option>
                  <option value="Other">Other Engineering</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', color: '#cbd5e1', marginBottom: '4px', display: 'block' }}>Work Mode</label>
                <select 
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="premium-input"
                  style={{ backgroundColor: '#0a0f1d' }}
                >
                  <option value="On-site">On-site</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Remote">Remote</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', color: '#cbd5e1', marginBottom: '4px', display: 'block' }}>Monthly Stipend</label>
                <input 
                  type="text" 
                  placeholder="e.g. ₹20,000 / month"
                  value={formData.stipend}
                  onChange={(e) => setFormData({ ...formData, stipend: e.target.value })}
                  className="premium-input"
                />
              </div>
            </div>

            <div>
              <label style={{ fontSize: '0.78rem', color: '#cbd5e1', marginBottom: '4px', display: 'block' }}>Location / City</label>
              <input 
                type="text" 
                placeholder="e.g. Technopark, Thiruvananthapuram"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="premium-input"
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <label style={{ fontSize: '0.78rem', color: '#cbd5e1', marginBottom: '4px', display: 'block' }}>Official Application URL *</label>
                <input 
                  type="url" 
                  required
                  placeholder="https://company.com/careers/role"
                  value={formData.applyUrl}
                  onChange={(e) => setFormData({ ...formData, applyUrl: e.target.value })}
                  className="premium-input"
                />
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', color: '#cbd5e1', marginBottom: '4px', display: 'block' }}>Contact Email</label>
                <input 
                  type="email" 
                  placeholder="careers@company.com"
                  value={formData.contactEmail}
                  onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                  className="premium-input"
                />
              </div>
            </div>

            <div>
              <label style={{ fontSize: '0.78rem', color: '#cbd5e1', marginBottom: '4px', display: 'block' }}>Role Description & Prerequisites</label>
              <textarea 
                rows="3"
                placeholder="Briefly state key project expectations, branch preferences, and duration..."
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="premium-input"
                style={{ resize: 'vertical' }}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '6px' }}>
              <button type="button" onClick={onClose} className="btn btn-secondary btn-sm">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary btn-sm" style={{ padding: '8px 18px' }}>
                <Send size={14} />
                <span>Submit Opportunity</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
