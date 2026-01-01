'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faTwitter, 
  faYoutube, 
  faInstagram, 
  faTwitch 
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faUser, faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 bg-[#0a1628]/95 backdrop-blur-md transition-all duration-300 ${scrolled ? 'shadow-[0_5px_30px_rgba(0,0,0,0.5)]' : ''}`}>
      <div className="bg-[#0f1929]/90 border-b border-white/5 hidden md:block">
        <div className="container mx-auto px-5 py-2.5">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span className="text-xs text-[#8a9ab0] uppercase">follow us on</span>
              <div className="flex gap-3">
                {[faFacebookF, faTwitter, faYoutube, faInstagram, faTwitch].map((icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-7 h-7 flex items-center justify-center bg-white/5 rounded text-white hover:text-[#e31e24] hover:bg-[#e31e24]/10 transition-all hover:-translate-y-0.5 duration-300"
                  >
                    <FontAwesomeIcon icon={icon} className="text-sm" />
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-white">
              <FontAwesomeIcon icon={faEnvelope} className="text-[#e31e24]" />
              <span>infomall@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      <nav className="py-5">
        <div className="container mx-auto px-5">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white text-2xl bg-transparent border-none"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
            
            <ul className={`flex-col md:flex-row gap-9 absolute md:relative top-full left-0 md:top-0 w-full md:w-auto bg-[#0a1628] md:bg-transparent p-5 md:p-0 ${menuOpen ? 'flex' : 'hidden md:flex'}`}>
              {['GAME', 'NEWS', 'STORE', 'ESPORTS', 'SUPPORT', 'XBOX GAME PASS'].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className={`text-sm font-semibold tracking-wider transition-all relative pb-1 hover:text-[#e31e24] duration-300 ${index === 0 ? 'text-[#e31e24] after:w-full' : 'text-white after:w-0'} after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#e31e24] after:transition-all hover:after:w-full after:duration-300`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-6 py-2.5 bg-transparent border border-white/20 rounded text-white text-xs font-semibold tracking-wider hover:bg-white/10 hover:border-white transition-all duration-300">
                <FontAwesomeIcon icon={faUser} />
                <span className="hidden sm:inline">LOGIN</span>
              </button>
              <button className="px-7 py-2.5 bg-gradient-to-br from-[#e31e24] to-[#c71a1f] rounded text-white text-xs font-bold tracking-wider shadow-[0_4px_15px_rgba(227,30,36,0.3)] hover:shadow-[0_6px_20px_rgba(227,30,36,0.5)] hover:-translate-y-0.5 transition-all duration-300">
                DOWNLOAD NOW
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
