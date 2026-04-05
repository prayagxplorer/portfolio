import { FiMail, FiTerminal, FiGithub } from 'react-icons/fi';
import Cipher from './Cipher';

export default function Contact({ isDecrypted }) {
  return (
    <section id="contact" className="container">
      <h2 className="section-title"><FiTerminal /> <Cipher text="Establish Connection" isDecrypted={isDecrypted} speed={30} /></h2>
      <div className="card text-center" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <h3 className="card-title" style={{ fontSize: '1.5rem' }}><Cipher text="Ready to Collaborate?" isDecrypted={isDecrypted} speed={40} /></h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', wordBreak: 'break-all' }}>
          <Cipher text="Reach out directly to " isDecrypted={isDecrypted} speed={15} />
          <strong style={{ color: 'var(--accent-color)' }}>
            <Cipher text="prayag.pathak2025@vitstudent.ac.in" isDecrypted={isDecrypted} speed={25} />
          </strong>
          <br /><br />
          <Cipher text="I am always open to discussing new projects, exchanging public keys, or participating in hackathons." isDecrypted={isDecrypted} speed={15} />
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=prayag.pathak2025@vitstudent.ac.in&su=Collaboration%20Inquiry%20via%20Portfolio" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'inline-flex' }}>
            <FiMail style={{ marginRight: '0.5rem' }} /> <Cipher text="Dispatch Message" isDecrypted={isDecrypted} speed={30} />
          </a>
          <a href="https://github.com/prayagxplorer" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ display: 'inline-flex' }}>
            <FiGithub style={{ marginRight: '0.5rem' }} /> <Cipher text="Access GitHub" isDecrypted={isDecrypted} speed={30} />
          </a>
        </div>
      </div>
    </section>
  );
}
