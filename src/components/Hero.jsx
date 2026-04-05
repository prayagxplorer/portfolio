import { FiLock, FiKey } from 'react-icons/fi';
import Cipher from './Cipher';

export default function Hero({ isDecrypted }) {
  return (
    <section className="hero container" id="home">
      <div className="hero-content">
        <div className="crypto-badge float-animation">
          <FiLock className="icon-inline" /> <Cipher text="RSA_2048_SECURED" isDecrypted={isDecrypted} speed={50} />
        </div>
        <h1 className="hero-title">
          <Cipher text="Securing the Future" isDecrypted={isDecrypted} speed={30} /><br />
          <Cipher text="One" isDecrypted={isDecrypted} speed={50} /> <span className="highlight-text"><Cipher text="Cipher" isDecrypted={isDecrypted} speed={60} /></span> <Cipher text="at a Time." isDecrypted={isDecrypted} speed={30} />
        </h1>
        <p className="hero-subtitle">
          <Cipher 
            text="Hi, I'm a first-year student specializing in Cryptography. I build secure protocols and explore the mathematics behind unbreakable codes." 
            isDecrypted={isDecrypted} 
            speed={10} 
          />
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary"><Cipher text="View Projects" isDecrypted={isDecrypted} /> <FiKey /></a>
          <a href="#contact" className="btn btn-secondary"><Cipher text="Establish Handshake" isDecrypted={isDecrypted} /></a>
        </div>
      </div>
    </section>
  );
}
