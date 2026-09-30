import React from 'react';
import { X, Bookmark, ExternalLink, Trash2 } from 'lucide-react';
import { INTERNSHIP_LISTINGS } from '../../data/launchpadData';

export default function SavedJobsModal({ 
  isOpen, 
  onClose, 
  savedIds, 
  onToggleSave, 
  onOpenDetails,
  allListings
}) {
  if (!isOpen) return null;

  const pool = allListings || INTERNSHIP_LISTINGS;
  const savedListings = pool.filter(item => savedIds.includes(item.id));

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ padding: '26px' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Bookmark size={18} style={{ color: '#d6603a' }} />
            <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#fff' }}>
              Saved Opportunities ({savedListings.length})
            </h3>
          </div>
          <button onClick={onClose} className="btn btn-ghost" style={{ padding: '6px' }}>
            <X size={18} />
          </button>
        </div>

        {savedListings.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '36px 10px', color: '#94a3b8' }}>
            <p style={{ fontSize: '0.92rem', marginBottom: '6px' }}>
              You haven't saved any opportunities yet.
            </p>
            <p style={{ fontSize: '0.8rem', color: '#64748b' }}>
              Click the bookmark icon on any internship card to save it for easy access.
            </p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {savedListings.map(item => (
              <div 
                key={item.id}
                style={{
                  padding: '14px 16px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.025)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <div>
                  <h4 
                    onClick={() => { onClose(); onOpenDetails(item); }}
                    style={{ fontSize: '0.96rem', color: '#fff', fontWeight: '700', cursor: 'pointer' }}
                  >
                    {item.role}
                  </h4>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '2px' }}>
                    {item.company} · <span style={{ color: '#34d399' }}>{item.stipend || 'Not specified'}</span> · {item.location}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <button
                    onClick={() => { onClose(); onOpenDetails(item); }}
                    className="btn btn-secondary btn-sm"
                    style={{ padding: '5px 10px', fontSize: '0.76rem' }}
                  >
                    Details
                  </button>

                  <a
                    href={item.applyLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-sm"
                    style={{ padding: '5px 12px', fontSize: '0.76rem' }}
                  >
                    <span>Apply</span>
                    <ExternalLink size={12} />
                  </a>

                  <button
                    onClick={() => onToggleSave(item.id)}
                    className="btn btn-ghost btn-sm"
                    style={{ padding: '6px', color: '#94a3b8' }}
                    title="Remove from saved"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
