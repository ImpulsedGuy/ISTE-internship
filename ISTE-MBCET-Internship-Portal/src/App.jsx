import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import OpportunitiesFeed from './components/OpportunitiesFeed';
import StudentWorkflow from './components/StudentWorkflow';
import HiringEcosystem from './components/HiringEcosystem';
import ZeroScamPolicy from './components/ZeroScamPolicy';
import RecruiterSection from './components/RecruiterSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

import { INTERNSHIP_LISTINGS } from './data/launchpadData';

// Modals
import InternshipDetailModal from './components/modals/InternshipDetailModal';
import PostJobModal from './components/modals/PostJobModal';
import SavedJobsModal from './components/modals/SavedJobsModal';
import ReportJobModal from './components/modals/ReportJobModal';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [allListings] = useState(INTERNSHIP_LISTINGS);
  
  // Bookmarks/Saved state stored in localStorage
  const [savedIds, setSavedIds] = useState(() => {
    try {
      const stored = localStorage.getItem('iste_saved_internships');
      return stored ? JSON.parse(stored) : ['int-genpro', 'int-01'];
    } catch {
      return ['int-genpro', 'int-01'];
    }
  });

  // Modal states
  const [selectedJob, setSelectedJob] = useState(null);
  const [isPostJobOpen, setIsPostJobOpen] = useState(false);
  const [isSavedOpen, setIsSavedOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('iste_saved_internships', JSON.stringify(savedIds));
    } catch (e) {
      console.error(e);
    }
  }, [savedIds]);

  const toggleSave = (id) => {
    setSavedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleSelectQuickTag = (tag) => {
    setSearchQuery(tag);
    const feedElement = document.getElementById('internships');
    if (feedElement) {
      feedElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-root">
      {/* Background ambient layer */}
      <div className="bg-ambient"></div>

      <div className="content-layer">
        {/* Navigation */}
        <Navbar 
          savedCount={savedIds.length}
          onOpenSaved={() => setIsSavedOpen(true)}
          onOpenPostJob={() => setIsPostJobOpen(true)}
        />

        {/* Hero Section */}
        <HeroSection 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSelectTag={handleSelectQuickTag}
        />

        {/* Main Internship Board Feed */}
        <OpportunitiesFeed 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          savedIds={savedIds}
          onToggleSave={toggleSave}
          onOpenDetails={(job) => setSelectedJob(job)}
          customListings={allListings}
        />

        {/* Before You Apply - Student Checklist */}
        <ZeroScamPolicy 
          onOpenReport={() => setIsReportOpen(true)}
        />

        {/* How It Works - Practical Steps for Students */}
        <StudentWorkflow />

        {/* Companies & Regional Tech Clusters */}
        <HiringEcosystem />

        {/* For Employers & Alumni */}
        <RecruiterSection 
          onOpenPostJob={() => setIsPostJobOpen(true)}
        />

        {/* Student FAQs */}
        <FAQSection />

        {/* Footer */}
        <Footer />
      </div>

      {/* Modals */}
      <InternshipDetailModal 
        job={selectedJob}
        isOpen={Boolean(selectedJob)}
        onClose={() => setSelectedJob(null)}
        isSaved={selectedJob ? savedIds.includes(selectedJob.id) : false}
        onToggleSave={toggleSave}
      />

      <PostJobModal 
        isOpen={isPostJobOpen}
        onClose={() => setIsPostJobOpen(false)}
      />

      <SavedJobsModal 
        isOpen={isSavedOpen}
        onClose={() => setIsSavedOpen(false)}
        savedIds={savedIds}
        onToggleSave={toggleSave}
        onOpenDetails={(job) => setSelectedJob(job)}
        allListings={allListings}
      />

      <ReportJobModal 
        isOpen={isReportOpen}
        onClose={() => setIsReportOpen(false)}
      />
    </div>
  );
}
