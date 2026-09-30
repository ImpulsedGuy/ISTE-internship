"""
ISTE MBCET Internship Portal - Sourcing & Aggregator Utility
===========================================================
Collects and structures engineering internship leads across Kerala
technology hubs, including semester-break foundation programs for
1st and 2nd year students (ICTAK, C-DAC, Keltron KSG, KSUM).
"""

import re
import json
import time
import sys
from datetime import datetime

# Ensure utf-8 output on Windows terminals
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

# Regional Target Watchlist
WATCHLIST_SOURCES = [
    {
        "id": "tech-tvm",
        "name": "Technopark Thiruvananthapuram Careers",
        "base_url": "https://technopark.org/job-search",
        "region": "Thiruvananthapuram",
        "type": "Kerala Tech Park"
    },
    {
        "id": "info-kochi",
        "name": "Infopark Kochi Careers",
        "base_url": "https://infopark.in/companies/job-search",
        "region": "Kochi",
        "type": "Kerala Tech Park"
    },
    {
        "id": "ksum-portal",
        "name": "Kerala Startup Mission (KSUM)",
        "base_url": "https://startupmission.kerala.gov.in/jobs",
        "region": "Kerala Statewide",
        "type": "Startup Ecosystem"
    },
    {
        "id": "ictak-portal",
        "name": "ICT Academy of Kerala (ICTAK)",
        "base_url": "https://ictkerala.org/internships",
        "region": "Thiruvananthapuram / Kochi",
        "type": "Academic & Foundation Training"
    },
    {
        "id": "cdac-tvm",
        "name": "C-DAC Thiruvananthapuram STDC",
        "base_url": "https://stdc-t.in",
        "region": "Thiruvananthapuram",
        "type": "Government R&D & In-Plant Training"
    },
    {
        "id": "keltron-ksg",
        "name": "Keltron Knowledge Services Group",
        "base_url": "https://keltronrec.com",
        "region": "Thiruvananthapuram / Statewide",
        "type": "State PSU Industrial Training"
    }
]

# Suspicious Patterns Flagging
RED_FLAG_PATTERNS = [
    r"telegram\s*@\w+",
    r"crypto|bitcoin|usdt",
    r"processing\s*charge\s*before\s*interview",
    r"pay\s*₹?\d+\s*to\s*get\s*offer"
]

def check_for_red_flags(text: str) -> tuple[bool, str]:
    """Checks job description against suspicious recruitment patterns."""
    for pattern in RED_FLAG_PATTERNS:
        if re.search(pattern, text, re.IGNORECASE):
            return False, f"Flagged suspicious pattern '{pattern}'"
    return True, "Passed basic pattern check"

def extract_compensation_or_fee(text: str) -> str:
    """Parses stipend or training fee details with full transparency."""
    if re.search(r"subsidized|nominal\s*fee", text, re.IGNORECASE):
        fee_match = re.search(r"₹\s*([0-9,]+)", text)
        if fee_match:
            return f"Subsidized fee (~₹{fee_match.group(1)})"
        return "Subsidized student program"

    match = re.search(r"₹\s*([0-9,]+(?:\s*-\s*[0-9,]+)?)\s*(?:/|\s*per)?\s*(?:month|mo)?", text, re.IGNORECASE)
    if match:
        return f"₹{match.group(1)} / month"
    
    return "Not specified"

def run_regional_aggregator() -> list[dict]:
    """
    Ingests and structures regional opportunities, categorizing them
    by semester break suitability and year level.
    """
    print(f"[{datetime.now().strftime('%H:%M:%S')}] Starting ISTE MBCET Regional Internship Ingestion...")
    scraped_leads = []

    # Representative sample records from monitored Kerala portals
    sample_records = [
        {
            "company": "ICT Academy of Kerala (ICTAK)",
            "role": "Full-Stack Web & Python Foundation Intern",
            "domain": "Web Development",
            "location": "Infopark Kochi / Technopark Trivandrum",
            "type": "Hybrid",
            "raw_text": "1-month KTU semester break program for 1st & 2nd years. Subsidized student program ~₹1,800. Web basics, Python, and guided capstone.",
            "apply_url": "https://ictkerala.org/internships",
            "skills": ["Python", "HTML/CSS", "JavaScript", "SQL"],
            "eligibility": "B.Tech S1-S4 (1st & 2nd Years welcome)",
            "duration": "1 Month (Sem Break)",
            "isEarlyYear": True,
            "isSemBreak": True,
            "source": "ICTAK Official"
        },
        {
            "company": "C-DAC Thiruvananthapuram",
            "role": "IoT & Embedded Systems In-Plant Intern",
            "domain": "Embedded & Robotics",
            "location": "Vellayambalam, Thiruvananthapuram",
            "type": "On-site",
            "raw_text": "2-4 week in-plant embedded training at STDC. Nominal fee ~₹3,000. Microcontroller interfacing and sensor protocols for junior B.Tech students.",
            "apply_url": "https://stdc-t.in",
            "skills": ["Embedded C", "Microcontrollers", "Arduino / ESP32", "Sensors"],
            "eligibility": "B.Tech S2, S4, S6 (1st, 2nd & 3rd Years)",
            "duration": "2 to 4 Weeks (Sem Break)",
            "isEarlyYear": True,
            "isSemBreak": True,
            "source": "C-DAC Official"
        },
        {
            "company": "Keltron Knowledge Services Group",
            "role": "Industrial Electronics & PCB Design Intern",
            "domain": "Embedded & Robotics",
            "location": "Spencer Junction, Thiruvananthapuram",
            "type": "On-site",
            "raw_text": "Vacation training for engineering students. Nominal fee ~₹2,000. PCB schematic design, soldering, and circuit diagnostic testing.",
            "apply_url": "https://keltronrec.com",
            "skills": ["PCB Design", "Soldering", "Electronic Hardware", "Circuit Testing"],
            "eligibility": "B.Tech S2, S4, S6 (All Branches)",
            "duration": "2 to 4 Weeks (Sem Break)",
            "isEarlyYear": True,
            "isSemBreak": True,
            "source": "Keltron KSG Portal"
        },
        {
            "company": "Genpro Research",
            "role": "Data Science & Health Analytics Intern",
            "domain": "AI/ML",
            "location": "Technopark Phase 1, Thiruvananthapuram",
            "type": "Hybrid",
            "raw_text": "Clinical data processing and statistical modeling. Stipend ₹22,000 / month. 6 months term for S6/S8.",
            "apply_url": "https://genproresearch.com/careers",
            "skills": ["Python", "Pandas", "SQL", "Data Analytics"],
            "eligibility": "B.Tech CSE / IT / ECE S6/S8",
            "duration": "6 Months",
            "isEarlyYear": False,
            "isSemBreak": False,
            "source": "Company Careers"
        }
    ]

    for item in sample_records:
        print(f"[{datetime.now().strftime('%H:%M:%S')}] Processing: {item['company']} - {item['role']}...")
        is_clean, reason = check_for_red_flags(item["raw_text"])

        if not is_clean:
            print(f"  [EXCLUDED]: {reason}")
            continue

        comp_detail = extract_compensation_or_fee(item["raw_text"])
        lead = {
            "id": f"ingested-{int(time.time())}-{len(scraped_leads) + 1}",
            "company": item["company"],
            "role": item["role"],
            "domain": item["domain"],
            "location": item["location"],
            "type": item["type"],
            "stipend": comp_detail,
            "duration": item["duration"],
            "eligibility": item["eligibility"],
            "skills": item["skills"],
            "applyLink": item["apply_url"],
            "source": item["source"],
            "isEarlyYear": item["isEarlyYear"],
            "isSemBreak": item["isSemBreak"]
        }
        scraped_leads.append(lead)
        print(f"  [ADDED]: {lead['company']} ({comp_detail}) | Duration: {lead['duration']}")

    print(f"[{datetime.now().strftime('%H:%M:%S')}] Ingestion complete: {len(scraped_leads)} opportunities processed.")
    return scraped_leads

if __name__ == "__main__":
    results = run_regional_aggregator()
    with open("scraped_internships.json", "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2)
    print("Saved output to scraped_internships.json")
