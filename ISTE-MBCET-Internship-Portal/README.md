# ISTE MBCET • Engineering Internship Portal

A student-focused engineering internship directory for **Mar Baselios College of Engineering & Technology (MBCET)**, curated by the **ISTE MBCET Students Chapter**.

---

## 🚀 Running Locally

```bash
cd launchpad-app
npm install
npm run dev
```

To create a production build:
```bash
npm run build
npm run preview
```

---

## ✨ Features & Functionality

- **Engineering Internship Board**: Opportunities across Technopark Thiruvananthapuram, Infopark Kochi, KSUM startups, core engineering, and remote software teams.
- **Search & Multi-Filters**: Filter by discipline (AI/ML, Web Development, Embedded & Robotics, Cloud & DevOps), location, and work mode (Hybrid, On-site, Remote).
- **Practical Opportunity Cards**: Role, company, location, work mode, duration, stipend, skill requirements, and direct application links.
- **Detailed Opportunity View**: Full role description, key responsibilities, prerequisites, and a quick skill checklist for students.
- **Browser Bookmarking**: Save opportunities to a personal shortlist stored locally in your browser.
- **Classmate Alert Sharing**: One-click formatted alerts to share opportunity details with fellow engineering students.
- **Before You Apply Guidelines**: Practical advice to help students evaluate legitimate roles and avoid paid certificate schemes.
- **Suspicious Posting Reporting**: Allows students to flag questionable postings or broken links directly to the student chapter.
- **Employer & Alumni Submission**: Clean submission form for companies and alumni to share opportunities with students.
- **Academic FAQ**: Clear information on semester timings, KTU S8 6-month terms, and college NOC procedures.

---

## 📁 Project Structure

```
launchpad-app/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx             # Clean navigation, bookmark counter, post opportunity CTA
│   │   ├── HeroSection.jsx        # Search bar, role tags, and platform feature highlights
│   │   ├── OpportunitiesFeed.jsx  # Main internship board with filters and clean cards
│   │   ├── ZeroScamPolicy.jsx     # "Before You Apply" student checks & report trigger
│   │   ├── StudentWorkflow.jsx    # Practical 4-step student guide (Search, Review, Prepare, Apply)
│   │   ├── HiringEcosystem.jsx    # Regional engineering hubs across Kerala and remote
│   │   ├── RecruiterSection.jsx   # Submission portal and guidelines for employers & alumni
│   │   ├── FAQSection.jsx         # Grounded student questions on NOCs, eligibility, and stipends
│   │   ├── Footer.jsx             # Campus contacts, disclaimer, and navigation links
│   │   └── modals/
│   │       ├── InternshipDetailModal.jsx # Detailed job view with skill checklist
│   │       ├── PostJobModal.jsx          # Opportunity submission form for employers
│   │       ├── SavedJobsModal.jsx        # Bookmarked listings drawer
│   │       └── ReportJobModal.jsx        # Student reporting modal
│   ├── data/
│   │   └── launchpadData.js       # Internship listings, regional hubs, and FAQ content
│   ├── App.jsx                    # Root component with state management
│   ├── index.css                  # Restrained dark theme styling & typography
│   └── main.jsx
├── index.html                     # Clean metadata & favicon
└── package.json
```
