import { FiShield } from 'react-icons/fi';
import Cipher from './Cipher';

export default function Navbar({ isDecrypted }) {
  return (
    <nav className="navbar glass-panel">
      <div className="container">
        <a href="#" className="logo">
          <FiShield /> <Cipher text="CryptoDev" isDecrypted={isDecrypted} speed={40} />
        </a>
        <ul className="nav-links">
          <li><a href="#about"><Cipher text="About" isDecrypted={isDecrypted} speed={40} /></a></li>
          <li><a href="#experience"><Cipher text="Experience" isDecrypted={isDecrypted} speed={40} /></a></li>
          <li><a href="#projects"><Cipher text="Protocols" isDecrypted={isDecrypted} speed={40} /></a></li>
          <li><a href="#contact"><Cipher text="Contact" isDecrypted={isDecrypted} speed={40} /></a></li>
        </ul>
      </div>
    </nav>
  );
}
