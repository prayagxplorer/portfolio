import { FiHash, FiCpu, FiCode } from 'react-icons/fi';
import Cipher from './Cipher';

export default function About({ isDecrypted }) {
  return (
    <section id="about" className="container">
      <h2 className="section-title"><FiHash /> <Cipher text="System Overview" isDecrypted={isDecrypted} speed={40} /></h2>
      <div className="grid-2">
        <div>
          <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
            <Cipher text="I am a passionate first-year student diving deep into the world of cryptography and cybersecurity. My journey began with a fascination for mathematics and how algorithms can protect information in the digital age." isDecrypted={isDecrypted} speed={5} />
          </p>
          <p style={{ fontSize: '1.1rem' }}>
            <Cipher text="When I'm not studying asymmetric encryption or hash functions, you can find me participating in Capture The Flag (CTF) competitions and building secure applications." isDecrypted={isDecrypted} speed={10} />
          </p>
        </div>
        <div className="grid-2">
          <div className="card">
            <FiCpu size={32} color="var(--accent-color)" />
            <h3 className="card-title" style={{ marginTop: '1rem' }}><Cipher text="Cryptography" isDecrypted={isDecrypted} speed={30} /></h3>
            <p className="text-secondary" style={{ color: 'var(--text-secondary)' }}><Cipher text="RSA, AES, Elliptic Curves, Hash Functions" isDecrypted={isDecrypted} speed={20} /></p>
          </div>
          <div className="card">
            <FiCode size={32} color="var(--accent-color)" />
            <h3 className="card-title" style={{ marginTop: '1rem' }}><Cipher text="Development" isDecrypted={isDecrypted} speed={30} /></h3>
            <p className="text-secondary" style={{ color: 'var(--text-secondary)' }}><Cipher text="Python, C++, JavaScript, React" isDecrypted={isDecrypted} speed={20} /></p>
          </div>
        </div>
      </div>
    </section>
  );
}
