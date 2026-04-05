import { useState, useEffect } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

export default function Cipher({ text, isDecrypted, speed = 30 }) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    // If we're not decrypted, we just show continuous random static that matches the length.
    if (!isDecrypted) {
      const interval = setInterval(() => {
        setDisplayText(text.split('').map(c => c === ' ' ? ' ' : CHARS[Math.floor(Math.random() * CHARS.length)]).join(''));
      }, 100);
      return () => clearInterval(interval);
    } 
    
    // If decrypted, run a one-time decode animation
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(text.split('').map((char, index) => {
        if (index < iteration) {
          return text[index];
        }
        return char === ' ' ? ' ' : CHARS[Math.floor(Math.random() * CHARS.length)];
      }).join(''));
      
      if (iteration >= text.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3; // decoding speed
    }, speed);

    return () => clearInterval(interval);
  }, [isDecrypted, text, speed]);

  return <span>{displayText}</span>;
}
