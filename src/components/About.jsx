import { FiHash, FiCpu, FiCode } from 'react-icons/fi';
import Cipher from './Cipher';

export default function About({ isDecrypted }) {
  return (
    <section id="about" className="container">
      <h2 className="section-title"><FiHash /> <Cipher text="Academic Overview" isDecrypted={isDecrypted} speed={40} /></h2>
      <div className="grid-2">
        <div>
          <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
            <Cipher text="I am Prayag Pathak, currently studying at Vellore Institute of Technology. I am focused on building a strong foundation through academics, practical work, and continuous learning." isDecrypted={isDecrypted} speed={5} />
          </p>
          <p style={{ fontSize: '1.1rem' }}>
            <Cipher text="This section shares my core academic information so visitors can quickly understand my university background and student profile." isDecrypted={isDecrypted} speed={10} />
          </p>
        </div>
        <div className="grid-2">
          <div className="card">
            <FiCpu size={32} color="var(--accent-color)" />
            <h3 className="card-title" style={{ marginTop: '1rem' }}><Cipher text="University" isDecrypted={isDecrypted} speed={30} /></h3>
            <p className="text-secondary" style={{ color: 'var(--text-secondary)' }}><Cipher text="Vellore Institute of Technology" isDecrypted={isDecrypted} speed={20} /></p>
          </div>
          <div className="card">
            <FiCode size={32} color="var(--accent-color)" />
            <h3 className="card-title" style={{ marginTop: '1rem' }}><Cipher text="Registration No." isDecrypted={isDecrypted} speed={30} /></h3>
            <p className="text-secondary" style={{ color: 'var(--text-secondary)' }}><Cipher text="25BYB0138" isDecrypted={isDecrypted} speed={20} /></p>
          </div>
          <div className="card academic-details-card">
            <h3 className="card-title"><Cipher text="Student Details" isDecrypted={isDecrypted} speed={30} /></h3>
            <div className="detail-list">
              <div className="detail-item">
                <span className="detail-label"><Cipher text="Name" isDecrypted={isDecrypted} speed={20} /></span>
                <span className="detail-value"><Cipher text="Prayag Pathak" isDecrypted={isDecrypted} speed={20} /></span>
              </div>
              <div className="detail-item">
                <span className="detail-label"><Cipher text="University" isDecrypted={isDecrypted} speed={20} /></span>
                <span className="detail-value"><Cipher text="Vellore Institute of Technology" isDecrypted={isDecrypted} speed={20} /></span>
              </div>
              <div className="detail-item">
                <span className="detail-label"><Cipher text="Registration Number" isDecrypted={isDecrypted} speed={20} /></span>
                <span className="detail-value"><Cipher text="25BYB0138" isDecrypted={isDecrypted} speed={20} /></span>
              </div>
              <div className="detail-item">
                <span className="detail-label"><Cipher text="Student Email" isDecrypted={isDecrypted} speed={20} /></span>
                <span className="detail-value"><Cipher text="prayag.pathak2025@vitstudent.ac.in" isDecrypted={isDecrypted} speed={20} /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
