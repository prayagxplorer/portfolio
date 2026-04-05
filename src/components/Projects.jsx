import { useState } from 'react';
import { FiGithub, FiExternalLink, FiArchive, FiX } from 'react-icons/fi';
import Cipher from './Cipher';

export default function Projects({ isDecrypted }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "On-Chain Document Verifier",
      desc: "A decentralized application to verify document authenticity using blockchain.",
      longDesc: "This project uses Solidity smart contracts on the Ethereum blockchain to store cryptographic hashes of official documents. By verifying the hash on-chain, anyone can prove a document's authenticity without relying on a centralized authority. The frontend was built with React and Web3.js.",
      tags: ["Solidity", "React", "Web3.js", "Ethereum"],
      github: "#"
    },
    {
      title: "Decentralized NGO Fund Tracker",
      desc: "A transparent system for tracking NGO funding and showing payments on-chain.",
      longDesc: "Implemented a blockchain-based ledger to bring 100% transparency to NGO donations. Every payment and fund allocation is recorded on the blockchain. Donors can trace exactly how their funds are spent in real-time, removing intermediaries and mitigating fraud.",
      tags: ["Blockchain", "Smart Contracts", "Next.js"],
      github: "#"
    },
    {
      title: "End-to-End Encrypted Chat",
      desc: "A real-time chat application implementing AES-256 and RSA key exchange.",
      longDesc: "A secure messaging protocol designed from scratch. It uses RSA-2048 to exchange symmetric AES-256 keys, ensuring that even the server hosting the chat cannot read the messages. Features include forward secrecy and digital signatures.",
      tags: ["Python", "Sockets", "Cryptography"],
      github: "#"
    },
    {
      title: "CTF Challenge Platform",
      desc: "A web platform hosting custom cryptography challenges for fellow students.",
      longDesc: "Developed a comprehensive Capture The Flag (CTF) platform where students can practice cryptographic attacks, such as padding oracles, logic flaws, and hash collisions. It features live scoreboards, dynamic flag generation, and automated isolation using Docker.",
      tags: ["React", "Node.js", "Docker"],
      github: "#"
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
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              <FiX />
            </button>
            <h3 className="card-title" style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{selectedProject.title}</h3>
            <div style={{ marginBottom: '1.5rem' }}>
              {selectedProject.tags.map(t => <span className="tag" key={t}>{t}</span>)}
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem' }}>
              {selectedProject.longDesc}
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href={selectedProject.github} className="btn btn-secondary" style={{ textDecoration: 'none' }}><FiGithub className="icon-inline" /> Source Code</a>
              <a href="#" className="btn btn-primary" style={{ textDecoration: 'none' }}><FiExternalLink className="icon-inline" /> Live Demo</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
