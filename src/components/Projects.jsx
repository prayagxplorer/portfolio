import { useState } from 'react';
import { FiGithub, FiExternalLink, FiArchive, FiX, FiStar, FiUser, FiTrendingUp, FiAlertCircle } from 'react-icons/fi';
import Cipher from './Cipher';

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

export default function Projects({ isDecrypted }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "On-Chain Document Verifier",
      desc: "A decentralized application to verify document authenticity using blockchain.",
      longDesc: "This project uses Solidity smart contracts on the Ethereum blockchain to store cryptographic hashes of official documents. By verifying the hash on-chain, anyone can prove a document's authenticity without relying on a centralized authority. The frontend was built with React and Web3.js.",
      tags: ["Solidity", "React", "Web3.js", "Ethereum"],
      github: "#",
      mentorReview: {
        mentor: "Prof. Ankit Sharma",
        role: "Blockchain Research Supervisor",
        rating: 5,
        performance: "Exceptional implementation. Prayag demonstrated a deep understanding of on-chain storage mechanics and gas optimization strategies that go well beyond what is expected at this level.",
        strengths: [
          "Strong grasp of Solidity fundamentals and smart contract security",
          "Clean, well-documented React frontend integration with Web3.js",
          "Proactive in identifying edge cases before they became bugs"
        ],
        improvements: [
          "Could explore IPFS for off-chain metadata storage to reduce gas costs",
          "Adding automated unit tests with Hardhat would improve reliability"
        ]
      }
    },
    {
      title: "Decentralized NGO Fund Tracker",
      desc: "A transparent system for tracking NGO funding and showing payments on-chain.",
      longDesc: "Implemented a blockchain-based ledger to bring 100% transparency to NGO donations. Every payment and fund allocation is recorded on the blockchain. Donors can trace exactly how their funds are spent in real-time, removing intermediaries and mitigating fraud.",
      tags: ["Blockchain", "Smart Contracts", "Next.js"],
      github: "#",
      mentorReview: {
        mentor: "Ms. Priya Nair",
        role: "Social Impact Tech Mentor",
        rating: 4,
        performance: "A highly impactful project with real-world social relevance. The transparency layer was built thoughtfully and the Next.js dashboard made the data genuinely accessible to non-technical users.",
        strengths: [
          "Exceptional UI/UX for a non-technical audience",
          "Smart contract logic is clean and auditable",
          "Strong product thinking — focused on real user needs"
        ],
        improvements: [
          "Multi-signature approval before disbursements would add another trust layer",
          "Performance on the dashboard could be improved with server-side rendering"
        ]
      }
    },
    {
      title: "End-to-End Encrypted Chat",
      desc: "A real-time chat application implementing AES-256 and RSA key exchange.",
      longDesc: "A secure messaging protocol designed from scratch. It uses RSA-2048 to exchange symmetric AES-256 keys, ensuring that even the server hosting the chat cannot read the messages. Features include forward secrecy and digital signatures.",
      tags: ["Python", "Sockets", "Cryptography"],
      github: "#",
      mentorReview: {
        mentor: "Dr. Rajan Mehta",
        role: "Applied Cryptography Professor",
        rating: 5,
        performance: "One of the most rigorous cryptographic implementations I have seen from a first-year student. The correct use of forward secrecy and digital signatures shows genuine maturity in security thinking.",
        strengths: [
          "Textbook-accurate RSA-AES hybrid encryption scheme",
          "Forward secrecy implementation is correctly handled",
          "Digital signature verification adds crucial non-repudiation"
        ],
        improvements: [
          "Consider migrating to elliptic-curve cryptography (ECC) for better performance",
          "A more robust key rotation strategy would harden long-lived sessions"
        ]
      }
    },
    {
      title: "CTF Challenge Platform",
      desc: "A web platform hosting custom cryptography challenges for fellow students.",
      longDesc: "Developed a comprehensive Capture The Flag (CTF) platform where students can practice cryptographic attacks, such as padding oracles, logic flaws, and hash collisions. It features live scoreboards, dynamic flag generation, and automated isolation using Docker.",
      tags: ["React", "Node.js", "Docker"],
      github: "#",
      mentorReview: {
        mentor: "Mr. Vivek Rao",
        role: "DevSecOps Lead & Mentor",
        rating: 4,
        performance: "A fully self-contained platform that the student built, deployed, and maintained independently. The Docker isolation strategy for challenge sandboxing was particularly impressive.",
        strengths: [
          "Excellent use of Docker for isolating challenge environments",
          "Dynamic flag generation prevents trivial flag sharing between participants",
          "Clean React frontend with a smooth user experience"
        ],
        improvements: [
          "Rate-limiting on flag submission endpoints would prevent brute force",
          "Automated challenge health checks would reduce downtime during events"
        ]
      }
    }
  ];

  return (
    <section id="projects" className="container">
      <h2 className="section-title"><FiArchive /> <Cipher text="Encrypted Payloads (Projects)" isDecrypted={isDecrypted} speed={30} /></h2>
      <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {projects.map((p, i) => (
          <div
            className="card"
            key={i}
            style={{ display: 'flex', flexDirection: 'column', cursor: isDecrypted ? 'pointer' : 'default' }}
            onClick={() => isDecrypted && setSelectedProject(p)}
          >
            <h3 className="card-title"><Cipher text={p.title} isDecrypted={isDecrypted} speed={40} /></h3>
            <p style={{ marginBottom: '1.5rem', flexGrow: 1, color: 'var(--text-secondary)' }}>
              <Cipher text={p.desc} isDecrypted={isDecrypted} speed={10} />
            </p>
            <div style={{ marginBottom: '1.5rem' }}>
              {p.tags.map(t => <span className="tag" key={t}>{isDecrypted ? t : '***'}</span>)}
            </div>
            {isDecrypted && (
              <p style={{ fontSize: '0.875rem', color: 'var(--accent-color)', fontWeight: '600', marginTop: 'auto' }}>
                Click to expand details &rarr;
              </p>
            )}
          </div>
        ))}
      </div>

      {selectedProject && isDecrypted && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content modal-wide" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              <FiX />
            </button>

            {/* Project Header */}
            <h3 className="card-title" style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{selectedProject.title}</h3>
            <div style={{ marginBottom: '1.5rem' }}>
              {selectedProject.tags.map(t => <span className="tag" key={t}>{t}</span>)}
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem' }}>
              {selectedProject.longDesc}
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem' }}>
              <a href={selectedProject.github} className="btn btn-secondary" style={{ textDecoration: 'none' }}><FiGithub className="icon-inline" /> Source Code</a>
              <a href="#" className="btn btn-primary" style={{ textDecoration: 'none' }}><FiExternalLink className="icon-inline" /> Live Demo</a>
            </div>

            {/* Mentor Review Section */}
            <div className="review-section">
              <div className="review-header">
                <div className="review-header-icon"><FiUser /></div>
                <div>
                  <p className="review-mentor-name">{selectedProject.mentorReview.mentor}</p>
                  <p className="review-mentor-role">{selectedProject.mentorReview.role}</p>
                </div>
                <div style={{ marginLeft: 'auto' }}>
                  <StarRating rating={selectedProject.mentorReview.rating} />
                </div>
              </div>

              <div className="review-performance">
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontStyle: 'italic' }}>
                  "{selectedProject.mentorReview.performance}"
                </p>
              </div>

              <div className="review-grid">
                <div className="review-block review-strengths">
                  <h5 className="review-block-title"><FiTrendingUp style={{ marginRight: '0.5rem' }} />Strengths</h5>
                  <ul className="review-list">
                    {selectedProject.mentorReview.strengths.map((s, i) => <li key={i}>{s}</li>)}
                  </ul>
                </div>
                <div className="review-block review-improvements">
                  <h5 className="review-block-title"><FiAlertCircle style={{ marginRight: '0.5rem' }} />Areas to Improve</h5>
                  <ul className="review-list">
                    {selectedProject.mentorReview.improvements.map((imp, i) => <li key={i}>{imp}</li>)}
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
