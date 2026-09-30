import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HIRING_PARTNERS } from '../data/launchpadData';

export default function HiringEcosystem() {
  return (
    <section id="companies" className="section" style={{ backgroundColor: 'rgba(7, 10, 19, 0.45)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 40px' }}>
          <span className="section-tag">
            Regional Focus
          </span>
          <h2 className="section-title">
            Companies & Engineering Hubs
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Internship opportunities across Kerala and remote.
          </p>
        </div>

        {/* Ecosystem Hubs */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px',
          marginBottom: '32px'
        }}>
          {HIRING_PARTNERS.map((p, idx) => {
            return (
              <div
                key={idx}
                className="card"
                style={{
                  padding: '20px 22px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px'
                }}
              >
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  flexShrink: 0
                }}>
                  {p.icon}
                </div>

                <div>
                  <h4 style={{ fontSize: '0.98rem', fontWeight: '700', color: '#fff', marginBottom: '3px' }}>
                    {p.name}
                  </h4>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                    {p.category}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clean Informational Note */}
        <div className="card" style={{
          padding: '20px 26px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#38bdf8', textTransform: 'uppercase', marginBottom: '3px' }}>
              Local & Remote Engineering
            </div>
            <p style={{ fontSize: '0.88rem', color: '#cbd5e1', maxWidth: '620px', lineHeight: '1.5', margin: 0 }}>
              Technopark and Infopark host hundreds of active technology teams, offering practical commute options for college students alongside remote roles from national companies.
            </p>
          </div>

          <a 
            href="#internships"
            className="btn btn-secondary btn-sm"
            style={{ padding: '8px 16px', gap: '6px' }}
          >
            <span>Browse Opportunities</span>
            <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
