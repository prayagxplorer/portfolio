import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { FiUnlock } from 'react-icons/fi';
import './App.css';

function App() {
  const [isDecrypted, setIsDecrypted] = useState(false);

  return (
    <div className="app-container">
      {!isDecrypted && (
        <div className="decrypt-overlay">
          <button className="btn btn-primary decrypt-btn" onClick={() => setIsDecrypted(true)}>
            <FiUnlock style={{ marginRight: '8px' }} /> INITIALIZE DECRYPTION
          </button>
        </div>
      )}
      
      {/* We pass the isDecrypted state down to child components so they know when to scramble/descramble */}
      <div style={{ filter: isDecrypted ? 'none' : 'blur(1px)', pointerEvents: isDecrypted ? 'auto' : 'none', opacity: isDecrypted ? 1 : 0.8, transition: 'all 1s ease' }}>
        <Navbar isDecrypted={isDecrypted} />
        <main>
          <Hero isDecrypted={isDecrypted} />
          <About isDecrypted={isDecrypted} />
          <Experience isDecrypted={isDecrypted} />
          <Projects isDecrypted={isDecrypted} />
          <Contact isDecrypted={isDecrypted} />
        </main>
        <footer className="footer text-center">
          <div className="container">
            <p>System.out.println("© " + new Date().getFullYear() + " | Encrypted & Secured by First-Year Student");</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App;
