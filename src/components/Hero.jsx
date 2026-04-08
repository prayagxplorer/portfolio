import { FiLock, FiKey } from 'react-icons/fi';
import Cipher from './Cipher';

export default function Hero({ isDecrypted }) {
  return (
    <section className="hero container" id="home">
      <div className="hero-content">
        <div className="crypto-badge float-animation">
          <FiLock className="icon-inline" /> <Cipher text="VIT_STUDENT_PROFILE" isDecrypted={isDecrypted} speed={50} />
        </div>
        <h1 className="hero-title">
          <Cipher text="Prayag" isDecrypted={isDecrypted} speed={30} /><br />
          <span className="highlight-text"><Cipher text="Pathak" isDecrypted={isDecrypted} speed={60} /></span>
        </h1>
        <p className="hero-subtitle">
          <Cipher 
            text="Hi, I'm Prayag Pathak, a student at Vellore Institute of Technology. This portfolio highlights my academic journey, projects, and growth as I continue learning and building." 
            isDecrypted={isDecrypted} 
            speed={10} 
          />
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary"><Cipher text="View Projects" isDecrypted={isDecrypted} /> <FiKey /></a>
          <a href="#about" className="btn btn-secondary"><Cipher text="Academic Details" isDecrypted={isDecrypted} /></a>
        </div>
      </div>
    </section>
  );
}
