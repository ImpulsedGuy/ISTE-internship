import React from 'react';
import { Bookmark, PlusCircle } from 'lucide-react';

export default function Navbar({ savedCount, onOpenSaved, onOpenPostJob }) {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backgroundColor: 'rgba(5, 7, 14, 0.92)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-subtle)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '72px'
      }}>
        {/* Brand */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #d6603a, #b03d19)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: '800',
            fontSize: '0.95rem'
          }}>
            IL
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '1.05rem', fontWeight: '800', color: '#fff', letterSpacing: '-0.02em' }}>
                ISTE MBCET
              </span>
              <span className="badge badge-iste" style={{ fontSize: '0.68rem', padding: '2px 8px' }}>
                Internships
              </span>
            </div>
            <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
              Student Internship Portal
            </div>
          </div>
        </a>

        {/* Navigation Links */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          fontSize: '0.88rem',
          fontWeight: '500'
        }} className="nav-menu">
          <a href="#internships" style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.2s' }}>
            Internships
          </a>
          <a href="#companies" style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.2s' }}>
            Companies
          </a>
          <a href="#resources" style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.2s' }}>
            Resources
          </a>
          <a href="#how-it-works" style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.2s' }}>
            How It Works
          </a>
          <a href="#for-employers" style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.2s' }}>
            For Employers
          </a>
          <a href="#faq" style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.2s' }}>
            FAQs
          </a>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={onOpenSaved}
            className="btn btn-secondary btn-sm"
            style={{ position: 'relative', gap: '6px' }}
            title="Saved internships"
          >
            <Bookmark size={15} />
            <span>Saved</span>
            {savedCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-4px',
                right: '-4px',
                backgroundColor: '#d6603a',
                color: '#fff',
                fontSize: '0.65rem',
                fontWeight: 'bold',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 6px rgba(0,0,0,0.4)'
              }}>
                {savedCount}
              </span>
            )}
          </button>

          <button
            onClick={onOpenPostJob}
            className="btn btn-primary btn-sm"
            style={{ gap: '6px' }}
          >
            <PlusCircle size={15} />
            <span>Post Opportunity</span>
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .nav-menu { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
