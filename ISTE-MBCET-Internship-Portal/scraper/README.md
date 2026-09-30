# ISTE MBCET • Internship Sourcing & Utility Scripts

This folder contains Python scripts and utilities for aggregating technical internship opportunities across Kerala engineering hubs, including foundation and semester break training programs for junior students (1st & 2nd years).

---

## 🛠️ Overview of Scripts

### 1. `scraper_engine.py` (Regional Opportunity Aggregator)
- Collects and structures internship postings from regional career portals:
  - **Technopark Thiruvananthapuram** (`technopark.org`)
  - **Infopark Kochi** (`infopark.in`)
  - **Kerala Startup Mission (KSUM)** (`startupmission.kerala.gov.in`)
  - **ICT Academy of Kerala (ICTAK)** (`ictkerala.org`) — 1-month KTU semester break foundation programs for 1st & 2nd years.
  - **C-DAC Thiruvananthapuram (STDC)** (`cdac.in` / `stdc-t.in`) — in-plant training and embedded systems/IoT internships.
  - **Keltron Knowledge Services Group (KSG)** (`keltronrec.com`) — PSU industrial training and circuit design.
  - **Maker Village (Kalamassery)** (`makervillage.in`) — hardware digital fabrication & 3D prototyping.
- Flags suspicious postings or unverified third-party fee demands.
- Extracts role title, location, work mode, eligibility, stipend, and official application link.

---

## 🚀 Running the Script

```bash
cd scraper
python scraper_engine.py
```

Outputs formatted JSON records to `scraped_internships.json` that can be reviewed and imported into `src/data/launchpadData.js`.

---

## 📋 Categorization Guidelines for Student Listings

- **1st & 2nd Year Opportunities**:
  - Focus on foundation programs (Web Basics, Python, Embedded C, PCB Soldering, Telecom Networking).
  - Clearly indicate duration (2-4 weeks or 1 month during semester break).
  - Explicitly document fees (e.g., nominal government/institutional training tariff vs. corporate stipend) so students have full transparency.
- **Senior Opportunities (S6–S8)**:
  - 6-month term internships requiring college NOC and placement coordinator sign-off.
  - Direct corporate application links (Company Careers, LinkedIn, ATS).
