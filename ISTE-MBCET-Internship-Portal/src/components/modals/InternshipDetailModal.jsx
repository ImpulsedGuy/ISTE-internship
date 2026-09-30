import React, { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  Bookmark, 
  Share2, 
  Check, 
  Building2,
  GraduationCap
} from 'lucide-react';

function SkillMatchChecker({ requiredSkills }) {
  const [resumeText, setResumeText] = useState('');
  const [analyzed, setAnalyzed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const matched = requiredSkills.filter(skill => 
    resumeText.toLowerCase().includes(skill.toLowerCase())
  );
  const missing = requiredSkills.filter(skill => 
    !resumeText.toLowerCase().includes(skill.toLowerCase())
  );

  const score = requiredSkills.length > 0 
    ? Math.round((matched.length / requiredSkills.length) * 100) 
    : 0;

  return (
    <div style={{
      marginTop: '16px',
      borderRadius: '12px',
      backgroundColor: 'rgba(255, 255, 255, 0.02)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '14px 16px'
    }}>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer'
        }}
      >
        <span style={{ fontSize: '0.88rem', fontWeight: '700', color: '#fff' }}>
          Check Your Skills Against This Role
        </span>
        <span style={{ fontSize: '0.76rem', color: '#ff9d80', fontWeight: '600' }}>
          {isOpen ? 'Close' : 'Check Skills'}
        </span>
      </div>

      {isOpen && (
        <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <p style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: '1.4' }}>
            Paste keywords or summary from your resume to quickly see which required technical skills are mentioned.
          </p>

          <textarea
            value={resumeText}
            onChange={(e) => {
              setResumeText(e.target.value);
              setAnalyzed(true);
            }}
            placeholder="e.g. Built projects using React, Node.js, Python, SQL, Git..."
            rows={3}
            className="premium-input"
            style={{ fontSize: '0.8rem', resize: 'vertical' }}
          />

          {resumeText && (
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button 
                type="button" 
                onClick={() => { setResumeText(''); setAnalyzed(false); }}
                className="btn btn-ghost btn-sm"
                style={{ fontSize: '0.74rem', padding: '3px 8px' }}
              >
                Clear
              </button>
            </div>
          )}

          {analyzed && resumeText.trim().length > 0 && (
            <div style={{
              padding: '10px 12px',
              borderRadius: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.06)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: '600', color: '#cbd5e1' }}>
                  Matching skills:
                </span>
                <span style={{
                  fontSize: '0.88rem',
                  fontWeight: '700',
                  color: score >= 60 ? '#34d399' : '#ff9d80'
                }}>
                  {matched.length} of {requiredSkills.length} matched ({score}%)
                </span>
              </div>

              {matched.length > 0 && (
                <div style={{ marginBottom: '4px', fontSize: '0.76rem' }}>
                  <span style={{ color: '#34d399' }}>Present: </span>
                  <span style={{ color: '#cbd5e1' }}>{matched.join(', ')}</span>
                </div>
              )}

              {missing.length > 0 && (
                <div style={{ fontSize: '0.76rem' }}>
                  <span style={{ color: '#f59e0b' }}>Missing: </span>
                  <span style={{ color: '#94a3b8' }}>{missing.join(', ')}</span>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function InternshipDetailModal({ 
  job, 
  isOpen, 
  onClose, 
  isSaved, 
  onToggleSave 
}) {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !job) return null;

  const handleShare = () => {
    const text = `*[ISTE MBCET INTERNSHIP]*\n\n` +
      `*Company*: ${job.company}\n` +
      `*Role*: ${job.role}\n` +
      `*Location*: ${job.location} (${job.type})\n` +
      `*Stipend*: ${job.stipend || 'Not specified'}\n` +
      `*Duration*: ${job.duration || 'Not specified'}\n` +
      (job.deadlineLabel ? `*Deadline*: ${job.deadlineLabel}\n` : '') +
      `*Apply*: ${job.applyLink}\n\n` +
      `Shared from ISTE MBCET Internship Platform`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ padding: '28px' }}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '18px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', flexWrap: 'wrap' }}>
              <span className="badge badge-neutral">{job.domain}</span>
              {job.source && (
                <span style={{
                  fontSize: '0.72rem',
                  color: '#94a3b8',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  padding: '2px 8px',
                  borderRadius: '6px',
                  border: '1px solid rgba(255, 255, 255, 0.06)'
                }}>
                  Source: {job.source}
                </span>
              )}
            </div>

            <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#fff', marginBottom: '4px' }}>
              {job.role}
            </h2>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.92rem', color: '#cbd5e1' }}>
              <Building2 size={15} style={{ color: '#d6603a' }} />
              <span style={{ fontWeight: '600' }}>{job.company}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="btn btn-ghost"
            style={{ padding: '6px', borderRadius: '8px' }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Spec Strip */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: '12px',
          padding: '14px 16px',
          borderRadius: '10px',
          backgroundColor: 'rgba(255, 255, 255, 0.025)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          marginBottom: '20px'
        }}>
          <div>
            <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginBottom: '2px' }}>STIPEND</div>
            <div style={{ fontSize: '0.92rem', fontWeight: '700', color: '#34d399' }}>{job.stipend || 'Not specified'}</div>
          </div>

          <div>
            <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginBottom: '2px' }}>LOCATION</div>
            <div style={{ fontSize: '0.85rem', color: '#fff', fontWeight: '600' }}>{job.location}</div>
          </div>

          <div>
            <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginBottom: '2px' }}>WORK MODE</div>
            <div style={{ fontSize: '0.85rem', color: '#fff', fontWeight: '600' }}>{job.type} · {job.duration || 'Not specified'}</div>
          </div>

          <div>
            <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginBottom: '2px' }}>DEADLINE</div>
            <div style={{ fontSize: '0.85rem', color: '#cbd5e1', fontWeight: '600' }}>{job.deadlineLabel || 'Not specified'}</div>
          </div>
        </div>

        {/* Eligibility Callout */}
        {job.eligibility && (
          <div style={{
            padding: '10px 14px',
            borderRadius: '8px',
            backgroundColor: 'rgba(56, 189, 248, 0.06)',
            border: '1px solid rgba(56, 189, 248, 0.15)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.84rem',
            color: '#e0f2fe',
            marginBottom: '20px'
          }}>
            <GraduationCap size={16} style={{ color: '#38bdf8', flexShrink: 0 }} />
            <span><strong>Eligibility:</strong> {job.eligibility}</span>
          </div>
        )}

        {/* Description & Responsibilities */}
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ fontSize: '0.92rem', fontWeight: '700', color: '#fff', marginBottom: '6px' }}>
            About the Role
          </h4>
          <p style={{ fontSize: '0.86rem', color: '#cbd5e1', lineHeight: '1.6', marginBottom: '14px' }}>
            {job.description}
          </p>

          {job.responsibilities && job.responsibilities.length > 0 && (
            <>
              <h4 style={{ fontSize: '0.92rem', fontWeight: '700', color: '#fff', marginBottom: '6px' }}>
                Key Responsibilities
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.84rem', color: '#cbd5e1', marginBottom: '14px' }}>
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: '#38bdf8', marginTop: '2px' }}>•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          {job.prerequisites && (
            <>
              <h4 style={{ fontSize: '0.92rem', fontWeight: '700', color: '#fff', marginBottom: '6px' }}>
                Prerequisites & Skills
              </h4>
              <p style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: '1.5', marginBottom: '10px' }}>
                {job.prerequisites}
              </p>
            </>
          )}

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
            {job.skills.map((skill, sIdx) => (
              <span
                key={sIdx}
                style={{
                  padding: '2px 8px',
                  borderRadius: '5px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  fontSize: '0.74rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#cbd5e1'
                }}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Quick Skill Checklist */}
          <SkillMatchChecker requiredSkills={job.skills} />
        </div>

        {/* Bottom Actions */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '12px',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          paddingTop: '16px'
        }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={() => onToggleSave(job.id)}
              className="btn btn-secondary btn-sm"
              style={{ color: isSaved ? '#ff9d80' : '#94a3b8' }}
            >
              <Bookmark size={14} fill={isSaved ? '#d6603a' : 'none'} />
              <span>{isSaved ? 'Saved' : 'Save'}</span>
            </button>

            <button
              onClick={handleShare}
              className="btn btn-secondary btn-sm"
            >
              {copied ? <Check size={14} style={{ color: '#10b981' }} /> : <Share2 size={14} />}
              <span>{copied ? 'Copied' : 'Share'}</span>
            </button>
          </div>

          <a
            href={job.applyLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
            style={{ padding: '9px 18px', fontSize: '0.86rem' }}
          >
            <span>Apply on Official Website</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
