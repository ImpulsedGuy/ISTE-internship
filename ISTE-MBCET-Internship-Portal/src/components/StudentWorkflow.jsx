import React from 'react';
import { Search, FileText, CheckCircle, Send } from 'lucide-react';

export default function StudentWorkflow() {
  const STEPS = [
    {
      num: '01',
      title: 'Search & Filter',
      desc: 'Browse openings by engineering domain, skills, location (Technopark, Infopark, Remote), or work mode.',
      icon: Search,
      color: '#d6603a'
    },
    {
      num: '02',
      title: 'Review Requirements',
      desc: 'Check duration, eligibility, stipend, and project scope to ensure it fits your semester schedule and academic rules.',
      icon: FileText,
      color: '#38bdf8'
    },
    {
      num: '03',
      title: 'Prepare Your Profile',
      desc: 'Review the required technical stack, update your resume, and highlight relevant college projects or GitHub code.',
      icon: CheckCircle,
      color: '#10b981'
    },
    {
      num: '04',
      title: 'Apply Directly',
      desc: 'Submit your application through the company’s official career portal or the application link provided.',
      icon: Send,
      color: '#f59e0b'
    }
  ];

  return (
    <section id="how-it-works" className="section" style={{ borderTop: '1px solid var(--border-subtle)', backgroundColor: 'rgba(7, 10, 19, 0.35)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 40px' }}>
          <span className="section-tag">
            Platform Guide
          </span>
          <h2 className="section-title">
            How It Works
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            A straightforward process to help engineering students discover and apply for internships.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px'
        }}>
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="card"
                style={{
                  padding: '24px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  position: 'relative'
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    backgroundColor: `${step.color}15`,
                    color: step.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon size={18} />
                  </div>

                  <span style={{
                    fontSize: '1.1rem',
                    fontWeight: '800',
                    fontFamily: 'var(--font-mono)',
                    color: 'rgba(255, 255, 255, 0.2)'
                  }}>
                    {step.num}
                  </span>
                </div>

                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: '700', color: '#fff', marginBottom: '6px' }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: '1.5', margin: 0 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
