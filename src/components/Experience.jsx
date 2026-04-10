import { useState } from 'react';
import { FiAward, FiX, FiStar, FiUser, FiTrendingUp, FiAlertCircle } from 'react-icons/fi';
import Cipher from './Cipher';
import './Experience.css';

function StarRating({ rating }) {
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <FiStar
          key={star}
          style={{
            fontSize: '1.1rem',
            color: star <= rating ? '#f59e0b' : 'var(--card-border)',
            fill: star <= rating ? '#f59e0b' : 'none',
            filter: star <= rating ? 'drop-shadow(0 0 4px rgba(245,158,11,0.5))' : 'none',
            transition: 'color 0.2s ease'
          }}
        />
      ))}
      <span className="rating-text">{rating}/5</span>
    </div>
  );
}

export default function Experience({ isDecrypted }) {
  const [selectedExp, setSelectedExp] = useState(null);

  const experiences = [
    {
      title: "Cybersecurity Analyst Intern",
      date: "June 2025 - Present",
      company: "ShieldNet Systems",
      desc: "Assisted in auditing enterprise networks and deployed intrusion detection systems. Reduced false positive alerts by 20% using automated log analysis.",
      mentorReview: {
        mentor: "Mr. Arjun Kapoor",
        role: "Senior Cybersecurity Analyst, ShieldNet Systems",
        rating: 5,
        performance: "Prayag exceeded all expectations for an intern. He quickly grasped enterprise-level network topologies and delivered meaningful contributions within his first two weeks. His initiative in automating log analysis saved our team hours of manual work every week.",
        strengths: [
          "Exceptional analytical thinking when triaging security incidents",
          "Self-driven — consistently went beyond the assigned scope to deliver better results",
          "Strong written communication in incident reports and documentation"
        ],
        improvements: [
          "Deeper exposure to SIEM platforms like Splunk or IBM QRadar would sharpen incident response speed",
          "Building scripting skills in PowerShell alongside Python will help with Windows-based environments"
        ]
      }
    },
    {
      title: "Freelance Smart Contract Auditor",
      date: "Jan 2025 - Present",
      company: "Various DeFi Clients",
      desc: "Conducted security reviews for Solidity smart contracts. Identified and patched reentrancy vulnerabilities and integer overflows prior to mainnet launches.",
      mentorReview: {
        mentor: "Ms. Kaveri Reddy",
        role: "Lead DeFi Protocol Architect & Client",
        rating: 4,
        performance: "Prayag delivered audit reports that were clear, actionable, and technically accurate. His ability to spot reentrancy vulnerabilities before mainnet deployment saved one of our protocols from a potential exploit. A trusted auditor who communicates findings professionally.",
        strengths: [
          "Thorough auditing methodology — checks both code logic and economic attack vectors",
          "Excellent client communication — reports are detailed yet understandable to non-developers",
          "Quick turnaround without sacrificing audit quality"
        ],
        improvements: [
          "Gaining formal verification experience with tools like Certora would add another layer of assurance",
          "Expanding coverage to Layer 2 and cross-chain bridge protocols would broaden client relevance"
        ]
      }
    },
    {
      title: "Certifications",
      date: "2024 - 2025",
      company: "CompTIA & EC-Council",
      desc: "Earned CompTIA Security+ and Certified Ethical Hacker (CEH) credentials, solidifying foundational knowledge in network security and ethical hacking.",
      mentorReview: {
        mentor: "Prof. Suresh Iyer",
        role: "CEH Exam Trainer & Academic Advisor",
        rating: 5,
        performance: "Prayag cleared both certifications on his first attempt — a milestone that requires genuine dedication. His ability to connect theoretical concepts to hands-on labs was a standout quality throughout the training.",
        strengths: [
          "First-attempt clearance of both Security+ and CEH demonstrates strong foundational knowledge",
          "Excellent grasp of network protocols, threat modeling, and penetration testing methodology",
          "Shows consistent discipline in self-study alongside a demanding academic schedule"
        ],
        improvements: [
          "Pursuing OSCP next would transition theoretical ethical hacking knowledge into hands-on offensive security skills",
          "Contributing to bug bounty platforms like HackerOne would build real-world experience beyond certifications"
        ]
      }
    }
  ];

  return (
    <section id="experience" className="container">
      <h2 className="section-title"><FiAward /> <Cipher text="Experience & Certifications" isDecrypted={isDecrypted} speed={30} /></h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            key={index}
            onClick={() => isDecrypted && setSelectedExp(exp)}
            style={{ cursor: isDecrypted ? 'pointer' : 'default' }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <h3 className="card-title" style={{ marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
                  <Cipher text={exp.title} isDecrypted={isDecrypted} speed={40} />
                </h3>
                <span style={{ color: 'var(--accent-secondary)', fontWeight: 'bold' }}>
                  <Cipher text={exp.date} isDecrypted={isDecrypted} speed={20} />
                </span>
              </div>
              <h4 style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontWeight: '600' }}>
                <Cipher text={exp.company} isDecrypted={isDecrypted} speed={30} />
              </h4>
              <p style={{ color: 'var(--text-secondary)' }}>
                <Cipher text={exp.desc} isDecrypted={isDecrypted} speed={10} />
              </p>
              {isDecrypted && (
                <p style={{ fontSize: '0.8rem', color: 'var(--accent-color)', fontWeight: '600', marginTop: '1rem' }}>
                  View mentor review →
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Mentor Review Modal */}
      {selectedExp && isDecrypted && (
        <div className="modal-overlay" onClick={() => setSelectedExp(null)}>
          <div className="modal-content modal-wide" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedExp(null)}>
              <FiX />
            </button>

            {/* Experience Header */}
            <h3 className="card-title" style={{ fontSize: '1.5rem', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
              {selectedExp.title}
            </h3>
            <p style={{ color: 'var(--accent-secondary)', fontWeight: '600', marginBottom: '0.5rem' }}>{selectedExp.company}</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>{selectedExp.date}</p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2.5rem' }}>{selectedExp.desc}</p>

            {/* Mentor Review Section */}
            <div className="review-section">
              <div className="review-header">
                <div className="review-header-icon"><FiUser /></div>
                <div>
                  <p className="review-mentor-name">{selectedExp.mentorReview.mentor}</p>
                  <p className="review-mentor-role">{selectedExp.mentorReview.role}</p>
                </div>
                <div style={{ marginLeft: 'auto' }}>
                  <StarRating rating={selectedExp.mentorReview.rating} />
                </div>
              </div>

              <div className="review-performance">
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontStyle: 'italic' }}>
                  "{selectedExp.mentorReview.performance}"
                </p>
              </div>

              <div className="review-grid">
                <div className="review-block review-strengths">
                  <h5 className="review-block-title"><FiTrendingUp style={{ marginRight: '0.5rem' }} />Strengths</h5>
                  <ul className="review-list">
                    {selectedExp.mentorReview.strengths.map((s, i) => <li key={i}>{s}</li>)}
                  </ul>
                </div>
                <div className="review-block review-improvements">
                  <h5 className="review-block-title"><FiAlertCircle style={{ marginRight: '0.5rem' }} />Areas to Improve</h5>
                  <ul className="review-list">
                    {selectedExp.mentorReview.improvements.map((imp, i) => <li key={i}>{imp}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
