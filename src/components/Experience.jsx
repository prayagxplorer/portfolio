import { FiAward } from 'react-icons/fi';
import Cipher from './Cipher';
import './Experience.css'; 

export default function Experience({ isDecrypted }) {
  const experiences = [
    {
      title: "Cybersecurity Analyst Intern",
      date: "June 2025 - Present",
      company: "ShieldNet Systems",
      desc: "Assisted in auditing enterprise networks and deployed intrusion detection systems. Reduced false positive alerts by 20% using automated log analysis."
    },
    {
      title: "Freelance Smart Contract Auditor",
      date: "Jan 2025 - Present",
      company: "Various DeFi Clients",
      desc: "Conducted security reviews for Solidity smart contracts. Identified and patched reentrancy vulnerabilities and integer overflows prior to mainnet launches."
    },
    {
      title: "Certifications",
      date: "2024 - 2025",
      company: "CompTIA & EC-Council",
      desc: "Earned CompTIA Security+ and Certified Ethical Hacker (CEH) credentials, solidifying foundational knowledge in network security and ethical hacking."
    }
  ];

  return (
    <section id="experience" className="container">
      <h2 className="section-title"><FiAward /> <Cipher text="Experience & Certifications" isDecrypted={isDecrypted} speed={30} /></h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
