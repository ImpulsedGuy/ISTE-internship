import React from 'react';
import { Globe, FileCheck2, AlertCircle, Building, Flag } from 'lucide-react';

export default function ZeroScamPolicy({ onOpenReport }) {
  const CHECKS = [
    {
      title: 'Check the application source',
      desc: 'Prefer official company career pages and recognised recruitment platforms.',
      icon: Globe,
      color: '#38bdf8'
    },
    {
      title: 'Review the internship details',
      desc: 'Check the role, duration, location, eligibility, stipend and application process before applying.',
      icon: FileCheck2,
      color: '#10b981'
    },
    {
      title: 'Be careful with payments',
      desc: 'Be cautious if an organisation asks for money in exchange for an internship or selection.',
      icon: AlertCircle,
      color: '#ef4444'
    },
    {
      title: 'Verify the organisation',
      desc: 'Check the company’s official website and contact information before sharing personal details.',
      icon: Building,
      color: '#f59e0b'
    }
  ];

  return (
    <section id="resources" className="section" style={{ borderTop: '1px solid var(--border-subtle)', backgroundColor: 'rgba(7, 10, 19, 0.25)' }}>
      <div className="container">
        
        {/* Header Block */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '20px',
          marginBottom: '32px'
        }}>
          <div>
            <span className="section-tag" style={{ color: '#cbd5e1', borderColor: 'rgba(255, 255, 255, 0.1)', background: 'rgba(255, 255, 255, 0.04)' }}>
              Student Checklist
            </span>
            <h2 className="section-title">
              Before you apply
            </h2>
            <p className="section-desc">
              Useful checks to help students evaluate internship opportunities.
            </p>
          </div>

          <button
            onClick={onOpenReport}
            className="btn btn-secondary btn-sm"
            style={{
              padding: '8px 14px',
              gap: '6px',
              color: '#fca5a5',
              borderColor: 'rgba(239, 68, 68, 0.25)'
            }}
          >
            <Flag size={14} style={{ color: '#ef4444' }} />
            <span>Report a Suspicious Posting</span>
          </button>
        </div>

        {/* 4 Grounded Checks Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '16px'
        }}>
          {CHECKS.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div
                key={idx}
                className="card"
                style={{
                  padding: '22px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}
              >
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  backgroundColor: `${c.color}15`,
                  color: c.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Icon size={18} />
                </div>

                <h3 style={{ fontSize: '0.98rem', fontWeight: '700', color: '#fff' }}>
                  {c.title}
                </h3>

                <p style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: '1.5', margin: 0 }}>
                  {c.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
