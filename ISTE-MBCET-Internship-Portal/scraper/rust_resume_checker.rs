/// ISTE MBCET Internship Launchpad - High-Speed Rust Engine
/// ========================================================
/// Performs sub-millisecond ATS keyword analysis, tokenization,
/// and resume compatibility scoring against scraped technical postings.

use std::collections::HashSet;
use std::time::Instant;

#[derive(Debug)]
pub struct ATSAnalysisResult {
    pub parseability_score: u32,
    pub matched_keywords: Vec<String>,
    pub missing_keywords: Vec<String>,
    pub action_verb_count: usize,
    pub execution_time_micros: u128,
}

pub fn analyze_candidate_resume(resume_text: &str, required_skills: &[&str]) -> ATSAnalysisResult {
    let start_time = Instant::now();
    let resume_lower = resume_text.to_lowercase();

    // 1. High-Impact Action Verb Scan
    let action_verbs = [
        "architected", "developed", "deployed", "engineered",
        "implemented", "optimized", "built", "spearheaded", "designed"
    ];
    let action_verb_count = action_verbs
        .iter()
        .filter(|verb| resume_lower.contains(*verb))
        .count();

    // 2. Keyword Intersection
    let mut matched = Vec::new();
    let mut missing = Vec::new();

    for &skill in required_skills {
        if resume_lower.contains(&skill.to_lowercase()) {
            matched.push(skill.to_string());
        } else {
            missing.push(skill.to_string());
        }
    }

    // 3. Score Calculation
    let skill_ratio = if required_skills.is_empty() {
        1.0
    } else {
        matched.len() as f64 / required_skills.len() as f64
    };

    let base_score = (skill_ratio * 70.0) as u32;
    let verb_bonus = (action_verb_count as u32 * 4).min(20);
    let length_bonus = if resume_text.len() > 300 { 10 } else { 0 };

    let total_score = (base_score + verb_bonus + length_bonus).min(100);
    let elapsed = start_time.elapsed().as_micros();

    ATSAnalysisResult {
        parseability_score: total_score,
        matched_keywords: matched,
        missing_keywords: missing,
        action_verb_count,
        execution_time_micros: elapsed,
    }
}

fn main() {
    println!("🦀 ISTE MBCET Rust High-Speed ATS Analyzer initialized.");
    
    let sample_resume = "
        Computer Science Engineering Student at MBCET.
        Developed full-stack web applications using React, TypeScript, and Node.js.
        Architected RESTful microservices with PostgreSQL database.
        Deployed containerized environments using Docker and Git.
    ";

    let job_skills = ["React", "TypeScript", "Node.js", "Docker", "Python", "Kubernetes"];

    let result = analyze_candidate_resume(sample_resume, &job_skills);
    println!("⚡ Analysis completed in {} µs (microseconds)!", result.execution_time_micros);
    println!("📊 ATS Match Score: {}%", result.parseability_score);
    println!("✅ Matched Skills: {:?}", result.matched_keywords);
    println!("⚠️ Skill Gaps to Address: {:?}", result.missing_keywords);
}
