import React from 'react';
import { Search, ArrowRight, Cpu, FileText, ExternalLink } from 'lucide-react';

export default function HeroSection({ searchQuery, setSearchQuery, onSelectTag }) {
  const POPULAR_TAGS = [
    '1st & 2nd Year Friendly',
    '1-Month Sem Break',
    'Technopark Trivandrum',
    'Infopark Kochi',
    'Web Development',
    'AI / Machine Learning',
    'Embedded Systems'
  ];

  return (
    <header style={{
      padding: '64px 0 52px',
      position: 'relative',
      borderBottom: '1px solid var(--border-subtle)',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>

          {/* College student chapter badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '5px 14px',
            borderRadius: '24px',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            fontSize: '0.8rem',
            color: '#cbd5e1',
            marginBottom: '20px'
          }}>
            <span style={{ color: '#d6603a', fontWeight: '700' }}>ISTE MBCET Student Chapter</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.25)' }}>•</span>
            <span>Internship Portal</span>
          </div>

          {/* Main Title */}
          <h1 style={{
            fontSize: 'clamp(2.2rem, 4.8vw, 3.4rem)',
            fontWeight: '800',
            lineHeight: '1.18',
            marginBottom: '16px',
            color: '#ffffff',
            letterSpacing: '-0.025em'
          }}>
            Find engineering internships that match your skills.
          </h1>

          {/* Supporting text */}
          <p style={{
            fontSize: 'clamp(0.98rem, 1.8vw, 1.12rem)',
            color: '#94a3b8',
            lineHeight: '1.6',
            maxWidth: '680px',
            margin: '0 auto 32px'
          }}>
            Explore internship opportunities from technology companies, startups, research teams and engineering organisations across Kerala.
          </p>

          {/* Search Bar */}
          <div style={{
            padding: '6px 8px 6px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: 'rgba(14, 21, 37, 0.9)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '14px',
            boxShadow: '0 12px 32px -8px rgba(0, 0, 0, 0.5)',
            marginBottom: '18px'
          }}>
            <Search size={20} style={{ color: '#94a3b8', flexShrink: 0 }} />
            <input 
              type="text"
              placeholder="Search by role, company or skill"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                color: '#fff',
                fontSize: '0.94rem',
                outline: 'none',
                fontFamily: 'var(--font-body)'
              }}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="btn btn-secondary btn-sm"
                style={{ padding: '4px 10px', fontSize: '0.75rem' }}
              >
                Clear
              </button>
            )}
            <a 
              href="#internships"
              className="btn btn-primary"
              style={{ padding: '9px 20px', fontSize: '0.86rem', flexShrink: 0 }}
            >
              <span>Explore Roles</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Useful Filters / Categories */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '8px',
            fontSize: '0.8rem',
            color: '#64748b'
          }}>
            <span style={{ fontWeight: '500' }}>Filters:</span>
            {POPULAR_TAGS.map(tag => (
              <button
                key={tag}
                onClick={() => onSelectTag(tag)}
                style={{
                  cursor: 'pointer',
                  padding: '4px 11px',
                  fontSize: '0.76rem',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  color: '#94a3b8',
                  transition: 'all 0.15s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(214, 96, 58, 0.4)';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.color = '#94a3b8';
                }}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* 3 Practical Platform Feature Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '16px',
            marginTop: '44px',
            textAlign: 'left'
          }}>
            <div className="card" style={{ padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(214, 96, 58, 0.12)',
                  color: '#d6603a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Cpu size={17} />
                </div>
                <h3 style={{ fontSize: '0.96rem', fontWeight: '700', color: '#fff' }}>Engineering-focused</h3>
              </div>
              <p style={{ fontSize: '0.82rem', color: '#94a3b8', margin: 0, lineHeight: '1.5' }}>
                Internships across software, AI/ML, embedded systems, electronics and other engineering domains.
              </p>
            </div>

            <div className="card" style={{ padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(56, 189, 248, 0.12)',
                  color: '#38bdf8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <FileText size={17} />
                </div>
                <h3 style={{ fontSize: '0.96rem', fontWeight: '700', color: '#fff' }}>Clear internship details</h3>
              </div>
              <p style={{ fontSize: '0.82rem', color: '#94a3b8', margin: 0, lineHeight: '1.5' }}>
                See duration, location, work mode, skills and stipend information before applying.
              </p>
            </div>

            <div className="card" style={{ padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(16, 185, 129, 0.12)',
                  color: '#10b981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <ExternalLink size={17} />
                </div>
                <h3 style={{ fontSize: '0.96rem', fontWeight: '700', color: '#fff' }}>Application links</h3>
              </div>
              <p style={{ fontSize: '0.82rem', color: '#94a3b8', margin: 0, lineHeight: '1.5' }}>
                Apply through the company’s official careers page or the application link provided in the listing.
              </p>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
