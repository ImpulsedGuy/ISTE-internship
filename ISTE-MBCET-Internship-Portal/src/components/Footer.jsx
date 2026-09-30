import React from 'react';
import { ArrowUp, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      backgroundColor: '#05070e',
      borderTop: '1px solid var(--border-subtle)',
      padding: '48px 0 24px',
      position: 'relative'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '32px',
          marginBottom: '32px'
        }}>
          {/* Col 1: About ISTE MBCET */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                backgroundColor: '#d6603a',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '800',
                fontSize: '0.85rem'
              }}>
                IL
              </div>
              <div style={{ fontSize: '0.98rem', fontWeight: '800', color: '#fff' }}>
                ISTE MBCET
              </div>
            </div>

            <p style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: '1.6', marginBottom: '12px' }}>
              A student-managed internship discovery portal by the ISTE Students Chapter at Mar Baselios College of Engineering and Technology, Thiruvananthapuram.
            </p>

            <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
              Focusing on engineering domains across software, AI/ML, electronics, and hardware systems.
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <div style={{ fontSize: '0.82rem', fontWeight: '700', color: '#fff', textTransform: 'uppercase', marginBottom: '12px' }}>
              Navigation
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.84rem' }}>
              <li><a href="#internships" style={{ color: '#94a3b8', textDecoration: 'none' }}>Internships</a></li>
              <li><a href="#companies" style={{ color: '#94a3b8', textDecoration: 'none' }}>Companies</a></li>
              <li><a href="#resources" style={{ color: '#94a3b8', textDecoration: 'none' }}>Resources</a></li>
              <li><a href="#how-it-works" style={{ color: '#94a3b8', textDecoration: 'none' }}>How It Works</a></li>
              <li><a href="#for-employers" style={{ color: '#94a3b8', textDecoration: 'none' }}>For Employers</a></li>
              <li><a href="#faq" style={{ color: '#94a3b8', textDecoration: 'none' }}>FAQs</a></li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <div style={{ fontSize: '0.82rem', fontWeight: '700', color: '#fff', textTransform: 'uppercase', marginBottom: '12px' }}>
              Contact
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.84rem', color: '#94a3b8' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <MapPin size={15} style={{ color: '#d6603a', marginTop: '3px', flexShrink: 0 }} />
                <span>Mar Baselios College of Engineering and Technology, Nalanchira, Thiruvananthapuram, Kerala 695015</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={15} style={{ color: '#d6603a', flexShrink: 0 }} />
                <a href="mailto:iste@mbcet.ac.in" style={{ color: '#cbd5e1', textDecoration: 'none' }}>iste@mbcet.ac.in</a>
              </div>
              <div style={{ display: 'flex', gap: '12px', marginTop: '6px', fontSize: '0.8rem' }}>
                <a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>Privacy Policy</a>
                <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>•</span>
                <a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>Terms</a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          paddingTop: '16px',
          paddingBottom: '16px',
          fontSize: '0.8rem',
          color: '#94a3b8',
          lineHeight: '1.5'
        }}>
          <strong>Disclaimer:</strong> Internship information is provided for informational purposes. Students should verify role details and application requirements with the organisation before applying.
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.04)',
          paddingTop: '14px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.78rem',
          color: '#64748b'
        }}>
          <div>
            © 2026 ISTE MBCET Students Chapter · Mar Baselios College of Engineering & Technology
          </div>

          <button
            onClick={scrollToTop}
            className="btn btn-secondary btn-sm"
            style={{ fontSize: '0.75rem', padding: '4px 10px', gap: '4px' }}
          >
            <span>Back to top</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
