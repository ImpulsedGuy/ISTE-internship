import React from 'react';
import { CheckCircle2, ArrowRight, Mail } from 'lucide-react';

export default function RecruiterSection({ onOpenPostJob }) {
  return (
    <section id="for-employers" className="section" style={{ backgroundColor: 'rgba(7, 10, 19, 0.3)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div className="card" style={{
          padding: '36px 32px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
          alignItems: 'center'
        }}>
          <div>
            <span className="section-tag" style={{ marginBottom: '10px' }}>
              For Employers & Alumni
            </span>
            <h2 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#fff', marginBottom: '12px', lineHeight: '1.25' }}>
              Share an Internship Opportunity with Students
            </h2>
            <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: '1.6', marginBottom: '18px' }}>
              Are you an engineering organization, technology startup, or alumnus looking for student interns? Share your openings directly with engineering students across branches.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#cbd5e1' }}>
                <CheckCircle2 size={15} style={{ color: '#10b981', flexShrink: 0 }} />
                <span>Reach students across Computer Science, Electronics, Electrical and related branches</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#cbd5e1' }}>
                <CheckCircle2 size={15} style={{ color: '#10b981', flexShrink: 0 }} />
                <span>Opportunities for 2–3 month summer periods or 6-month semester terms</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#cbd5e1' }}>
                <CheckCircle2 size={15} style={{ color: '#10b981', flexShrink: 0 }} />
                <span>Free to list on the student chapter platform</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button
                onClick={onOpenPostJob}
                className="btn btn-primary"
                style={{ padding: '10px 18px', fontSize: '0.88rem' }}
              >
                <span>Post Opportunity</span>
                <ArrowRight size={14} />
              </button>

              <a
                href="mailto:iste@mbcet.ac.in?subject=Internship%20Posting%20Inquiry%20-%20ISTE%20MBCET"
                className="btn btn-secondary"
                style={{ padding: '10px 18px', fontSize: '0.88rem' }}
              >
                <Mail size={14} />
                <span>Contact Student Chapter</span>
              </a>
            </div>
          </div>

          {/* Right box: Posting Guidelines */}
          <div style={{
            padding: '24px',
            borderRadius: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.025)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: '#d6603a', fontWeight: '700', textTransform: 'uppercase' }}>
              Listing Guidelines
            </div>

            <p style={{ fontSize: '0.86rem', color: '#cbd5e1', lineHeight: '1.5', margin: 0 }}>
              To ensure opportunities are actionable and fair for students, submissions should include:
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.82rem', color: '#94a3b8' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                <span style={{ color: '#38bdf8' }}>•</span>
                <span>Specific role responsibilities and required skill sets</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                <span style={{ color: '#38bdf8' }}>•</span>
                <span>Clear duration and monthly stipend details</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                <span style={{ color: '#38bdf8' }}>•</span>
                <span>Work mode (On-site, Hybrid, or Remote) and location</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                <span style={{ color: '#38bdf8' }}>•</span>
                <span>Official company careers link or organizational email</span>
              </li>
            </ul>

            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '12px', fontSize: '0.76rem', color: '#64748b' }}>
              ISTE MBCET Student Chapter · Nalanchira, Thiruvananthapuram
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
