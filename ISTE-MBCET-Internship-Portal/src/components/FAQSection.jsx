import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { STUDENT_FAQS } from '../data/launchpadData';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="section" style={{ borderTop: '1px solid var(--border-subtle)', backgroundColor: 'rgba(7, 10, 19, 0.4)' }}>
      <div className="container" style={{ maxWidth: '820px' }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span className="section-tag" style={{ gap: '6px' }}>
            <HelpCircle size={13} style={{ color: '#d6603a' }} />
            <span>Common Questions</span>
          </span>
          <h2 className="section-title">
            Frequently Asked Questions
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Information about engineering internships, academic NOC approvals, and application guidelines.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {STUDENT_FAQS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="card"
                style={{
                  overflow: 'hidden',
                  borderColor: isOpen ? 'rgba(214, 96, 58, 0.35)' : 'var(--border-subtle)'
                }}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    color: '#fff',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: '0.94rem',
                    fontWeight: '600'
                  }}
                >
                  <span>{item.q}</span>
                  <ChevronDown 
                    size={17} 
                    style={{ 
                      color: isOpen ? '#d6603a' : '#94a3b8',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                      flexShrink: 0,
                      marginLeft: '12px'
                    }} 
                  />
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 20px 18px',
                    fontSize: '0.86rem',
                    color: '#94a3b8',
                    lineHeight: '1.6',
                    borderTop: '1px solid rgba(255, 255, 255, 0.04)',
                    paddingTop: '12px'
                  }}>
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
