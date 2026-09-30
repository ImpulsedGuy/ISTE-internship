import React, { useState, useMemo } from 'react';
import { 
  MapPin, 
  ExternalLink, 
  Bookmark, 
  Share2, 
  Check
} from 'lucide-react';
import { INTERNSHIP_LISTINGS } from '../data/launchpadData';

const DOMAINS = ['All', 'Web Development', 'AI/ML', 'Embedded & Robotics', 'Cloud & DevOps'];
const LOCATIONS = ['All', 'Technopark Trivandrum', 'Infopark Kochi', 'Remote'];
const WORK_MODES = ['All', 'On-site', 'Hybrid', 'Remote'];

const QUICK_FILTERS = [
  { id: 'all', label: 'All Roles' },
  { id: 'early-years', label: '🎓 1st & 2nd Years' },
  { id: 'sem-break', label: '⏱️ 1-Month Sem Break' },
  { id: 'technopark', label: 'Technopark Trivandrum' },
  { id: 'kochi', label: 'Infopark Kochi' },
  { id: 's8-term', label: '6-Month Terms' },
  { id: 'remote', label: 'Remote' }
];

export default function OpportunitiesFeed({ 
  searchQuery, 
  setSearchQuery, 
  savedIds, 
  onToggleSave, 
  onOpenDetails,
  customListings
}) {
  const activeListings = customListings || INTERNSHIP_LISTINGS;
  const [selectedQuickFilter, setSelectedQuickFilter] = useState('all');
  const [selectedDomain, setSelectedDomain] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedMode, setSelectedMode] = useState('All');
  const [copiedId, setCopiedId] = useState(null);

  const filteredList = useMemo(() => {
    return activeListings.filter(item => {
      const q = searchQuery.toLowerCase().trim();
      const matchSearch = 
        !q ||
        item.role.toLowerCase().includes(q) ||
        item.company.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.eligibility.toLowerCase().includes(q) ||
        (q === '1st year' && item.isEarlyYear) ||
        (q === '2nd year' && item.isEarlyYear) ||
        (q === 'sem break' && item.isSemBreak) ||
        item.skills.some(s => s.toLowerCase().includes(q));

      const matchDomain = selectedDomain === 'All' || item.domain === selectedDomain;

      const matchLoc = 
        selectedLocation === 'All' ||
        (selectedLocation === 'Technopark Trivandrum' && (item.location.toLowerCase().includes('trivandrum') || item.location.toLowerCase().includes('thiruvananthapuram'))) ||
        (selectedLocation === 'Infopark Kochi' && (item.location.toLowerCase().includes('kochi') || item.location.toLowerCase().includes('kalamassery') || item.location.toLowerCase().includes('aluva'))) ||
        (selectedLocation === 'Remote' && item.type === 'Remote');

      const matchMode = selectedMode === 'All' || item.type === selectedMode;

      // Quick filter conditions
      let matchQuick = true;
      if (selectedQuickFilter === 'early-years') {
        matchQuick = Boolean(item.isEarlyYear || item.eligibility.toLowerCase().includes('1st') || item.eligibility.toLowerCase().includes('2nd') || item.eligibility.toLowerCase().includes('s2') || item.eligibility.toLowerCase().includes('s4'));
      } else if (selectedQuickFilter === 'sem-break') {
        matchQuick = Boolean(item.isSemBreak || item.duration.toLowerCase().includes('1 month') || item.duration.toLowerCase().includes('sem break') || item.duration.toLowerCase().includes('weeks'));
      } else if (selectedQuickFilter === 'technopark') {
        matchQuick = item.location.toLowerCase().includes('technopark') || item.location.toLowerCase().includes('trivandrum') || item.location.toLowerCase().includes('thiruvananthapuram');
      } else if (selectedQuickFilter === 'kochi') {
        matchQuick = item.location.toLowerCase().includes('kochi') || item.location.toLowerCase().includes('kalamassery') || item.location.toLowerCase().includes('aluva');
      } else if (selectedQuickFilter === 's8-term') {
        matchQuick = item.duration.toLowerCase().includes('6 month') || item.duration.toLowerCase().includes('1 year');
      } else if (selectedQuickFilter === 'remote') {
        matchQuick = item.type === 'Remote';
      }

      return matchSearch && matchDomain && matchLoc && matchMode && matchQuick;
    });
  }, [searchQuery, selectedDomain, selectedLocation, selectedMode, selectedQuickFilter, activeListings]);

  const copyWhatsAppShare = (item) => {
    const text = `*[ISTE MBCET INTERNSHIP]*\n\n` +
      `*Company*: ${item.company}\n` +
      `*Role*: ${item.role}\n` +
      `*Location*: ${item.location} (${item.type})\n` +
      `*Stipend/Fee*: ${item.stipend || 'Not specified'}\n` +
      `*Duration*: ${item.duration || 'Not specified'}\n` +
      `*Eligibility*: ${item.eligibility || 'Not specified'}\n` +
      (item.deadlineLabel ? `*Deadline*: ${item.deadlineLabel}\n` : '') +
      `*Link*: ${item.applyLink}\n\n` +
      `Shared from ISTE MBCET Internship Platform`;

    navigator.clipboard.writeText(text);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="internships" className="section" style={{ backgroundColor: 'rgba(7, 10, 19, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '28px' }}>
          <div>
            <span className="section-tag">
              Internship Board
            </span>
            <h2 className="section-title">
              Open Technical Opportunities
            </h2>
            <p className="section-desc">
              Explore {filteredList.length} engineering internship openings across Kerala, including KTU semester break programs for 1st & 2nd years.
            </p>
          </div>

          <div style={{ fontSize: '0.84rem', color: '#94a3b8' }}>
            Showing verified public & corporate application links
          </div>
        </div>

        {/* Quick Filter Chips */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          overflowX: 'auto',
          paddingBottom: '10px',
          marginBottom: '16px',
          scrollbarWidth: 'none'
        }}>
          {QUICK_FILTERS.map(qf => {
            const isActive = selectedQuickFilter === qf.id;
            return (
              <button
                key={qf.id}
                onClick={() => setSelectedQuickFilter(qf.id)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  border: isActive ? '1px solid rgba(214, 96, 58, 0.7)' : '1px solid rgba(255, 255, 255, 0.08)',
                  backgroundColor: isActive ? 'rgba(214, 96, 58, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                  color: isActive ? '#ff9d80' : '#cbd5e1',
                  transition: 'all 0.15s ease'
                }}
              >
                {qf.label}
              </button>
            );
          })}
        </div>

        {/* Filter Controls Bar */}
        <div className="card" style={{ padding: '14px 18px', marginBottom: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            
            {/* Domain Tabs */}
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
              <span style={{ fontSize: '0.78rem', color: '#94a3b8', fontWeight: '600', marginRight: '4px' }}>
                Domain:
              </span>
              {DOMAINS.map(dom => (
                <button
                  key={dom}
                  onClick={() => setSelectedDomain(dom)}
                  className={`btn btn-sm ${selectedDomain === dom ? 'btn-primary' : 'btn-secondary'}`}
                  style={{
                    padding: '4px 11px',
                    fontSize: '0.76rem',
                    borderRadius: '7px'
                  }}
                >
                  {dom}
                </button>
              ))}
            </div>

            {/* Location & Mode Secondary Filters */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              borderTop: '1px solid rgba(255, 255, 255, 0.06)',
              paddingTop: '10px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <span style={{ fontSize: '0.78rem', color: '#94a3b8', fontWeight: '600' }}>
                  Location:
                </span>
                {LOCATIONS.map(loc => (
                  <button
                    key={loc}
                    onClick={() => setSelectedLocation(loc)}
                    style={{
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '0.74rem',
                      fontWeight: '500',
                      cursor: 'pointer',
                      border: selectedLocation === loc ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.08)',
                      backgroundColor: selectedLocation === loc ? 'rgba(56, 189, 248, 0.12)' : 'transparent',
                      color: selectedLocation === loc ? '#7dd3fc' : '#94a3b8'
                    }}
                  >
                    {loc}
                  </button>
                ))}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <span style={{ fontSize: '0.78rem', color: '#94a3b8', fontWeight: '600' }}>
                  Work Mode:
                </span>
                {WORK_MODES.map(mode => (
                  <button
                    key={mode}
                    onClick={() => setSelectedMode(mode)}
                    style={{
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '0.74rem',
                      fontWeight: '500',
                      cursor: 'pointer',
                      border: selectedMode === mode ? '1px solid #10b981' : '1px solid rgba(255, 255, 255, 0.08)',
                      backgroundColor: selectedMode === mode ? 'rgba(16, 185, 129, 0.12)' : 'transparent',
                      color: selectedMode === mode ? '#6ee7b7' : '#94a3b8'
                    }}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Opportunity Cards List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {filteredList.map(item => {
            const isSaved = savedIds.includes(item.id);

            return (
              <div
                key={item.id}
                className="card"
                style={{
                  padding: '20px 22px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  position: 'relative'
                }}
              >
                {/* Card Main Row */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '16px'
                }}>
                  {/* Left: Role info */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', flex: 1, minWidth: '280px' }}>
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      color: '#cbd5e1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '700',
                      fontSize: '0.95rem',
                      flexShrink: 0
                    }}>
                      {item.company.charAt(0)}
                    </div>

                    <div>
                      {/* Company & Domain & Badges */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
                        <span style={{ fontSize: '0.92rem', color: '#cbd5e1', fontWeight: '700' }}>
                          {item.company}
                        </span>
                        <span className="badge badge-neutral" style={{ fontSize: '0.7rem' }}>
                          {item.domain}
                        </span>
                        {item.isEarlyYear && (
                          <span style={{
                            fontSize: '0.68rem',
                            color: '#7dd3fc',
                            backgroundColor: 'rgba(56, 189, 248, 0.1)',
                            border: '1px solid rgba(56, 189, 248, 0.25)',
                            padding: '1px 6px',
                            borderRadius: '4px',
                            fontWeight: '600'
                          }}>
                            1st & 2nd Year Friendly
                          </span>
                        )}
                        {item.isSemBreak && (
                          <span style={{
                            fontSize: '0.68rem',
                            color: '#6ee7b7',
                            backgroundColor: 'rgba(16, 185, 129, 0.1)',
                            border: '1px solid rgba(16, 185, 129, 0.25)',
                            padding: '1px 6px',
                            borderRadius: '4px',
                            fontWeight: '600'
                          }}>
                            Sem Break
                          </span>
                        )}
                        {item.source && (
                          <span style={{
                            fontSize: '0.7rem',
                            color: '#94a3b8',
                            backgroundColor: 'rgba(255, 255, 255, 0.04)',
                            padding: '2px 8px',
                            borderRadius: '6px',
                            border: '1px solid rgba(255, 255, 255, 0.06)'
                          }}>
                            Source: {item.source}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 
                        onClick={() => onOpenDetails(item)}
                        style={{
                          fontSize: '1.15rem',
                          fontWeight: '700',
                          color: '#fff',
                          cursor: 'pointer',
                          marginBottom: '6px'
                        }}
                      >
                        {item.role}
                      </h3>

                      {/* Brief description */}
                      <p style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: '1.5', maxWidth: '640px' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Right: Compensation & Duration */}
                  <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                    <div style={{
                      fontSize: '1.05rem',
                      fontWeight: '700',
                      color: item.stipend?.includes('₹') && !item.stipend?.includes('Fee') && !item.stipend?.includes('fee') ? '#34d399' : '#f59e0b'
                    }}>
                      {item.stipend || 'Not specified'}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                      {item.type} · {item.duration || 'Not specified'}
                    </div>
                    {item.deadlineLabel && (
                      <div style={{ fontSize: '0.74rem', color: '#cbd5e1', marginTop: '2px' }}>
                        Deadline: {item.deadlineLabel}
                      </div>
                    )}
                  </div>
                </div>

                {/* Location, Skills, and Actions */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '12px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  paddingTop: '12px'
                }}>
                  {/* Location & Skills */}
                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.78rem', color: '#94a3b8', marginRight: '6px' }}>
                      <MapPin size={13} style={{ color: '#38bdf8' }} />
                      <span>{item.location}</span>
                    </div>

                    <span style={{ color: 'rgba(255, 255, 255, 0.15)', fontSize: '0.75rem' }}>|</span>

                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        style={{
                          padding: '2px 7px',
                          borderRadius: '5px',
                          backgroundColor: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.06)',
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-mono)',
                          color: '#cbd5e1'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Actions: Save, Share, View Details, Apply */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button
                      onClick={() => onToggleSave(item.id)}
                      className="btn btn-secondary btn-sm"
                      style={{ padding: '6px 9px', color: isSaved ? '#ff9d80' : '#94a3b8' }}
                      title={isSaved ? 'Remove from saved' : 'Save opportunity'}
                    >
                      <Bookmark size={14} fill={isSaved ? '#d6603a' : 'none'} />
                    </button>

                    <button
                      onClick={() => copyWhatsAppShare(item)}
                      className="btn btn-secondary btn-sm"
                      style={{ padding: '6px 9px' }}
                      title="Copy alert for classmates"
                    >
                      {copiedId === item.id ? <Check size={14} style={{ color: '#10b981' }} /> : <Share2 size={14} />}
                    </button>

                    <button
                      onClick={() => onOpenDetails(item)}
                      className="btn btn-secondary btn-sm"
                      style={{ padding: '6px 12px' }}
                    >
                      <span>View Details</span>
                    </button>

                    <a
                      href={item.applyLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary btn-sm"
                      style={{ padding: '6px 14px' }}
                    >
                      <span>Apply</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Empty state */}
        {filteredList.length === 0 && (
          <div className="card" style={{ padding: '40px 20px', textAlign: 'center', marginTop: '16px' }}>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '12px' }}>
              No internships match your current search or filter combination.
            </p>
            <button
              onClick={() => { 
                setSearchQuery(''); 
                setSelectedDomain('All'); 
                setSelectedLocation('All'); 
                setSelectedMode('All');
                setSelectedQuickFilter('all');
              }}
              className="btn btn-secondary btn-sm"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
