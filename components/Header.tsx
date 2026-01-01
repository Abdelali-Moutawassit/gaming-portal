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
import { faEnvelope, faUser, faBars, faDownload } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#0a1628]/95 backdrop-blur-xl shadow-[0_5px_30px_rgba(0,0,0,0.5)] py-2' : 'bg-transparent py-4'}`}>
      {/* Top Bar */}
      <div className={`border-b border-white/5 hidden md:block transition-all duration-300 ${scrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100 pb-2'}`}>
        <div className="container mx-auto px-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <span className="text-[10px] font-bold tracking-widest text-[#8a9ab0] uppercase">Follow us</span>
              <div className="flex gap-2">
                {[faFacebookF, faTwitter, faYoutube, faInstagram, faTwitch].map((icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-6 h-6 flex items-center justify-center bg-white/5 rounded text-white/70 hover:text-white hover:bg-[#e31e24] transition-all duration-300 text-xs"
                  >
                    <FontAwesomeIcon icon={icon} />
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-[#8a9ab0]">
              <FontAwesomeIcon icon={faEnvelope} className="text-[#e31e24]" />
              <span>support@gamingportal.com</span>
            </div>
          </div>
        </div>
      </div>

      <nav className="pt-2">
        <div className="container mx-auto px-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="text-2xl font-black tracking-tighter text-white italic">
              GAMING<span className="text-[#e31e24]">PORTAL</span>
            </a>

            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white text-2xl bg-transparent border-none"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
            
            <ul className={`flex-col md:flex-row gap-8 absolute md:relative top-full left-0 md:top-0 w-full md:w-auto bg-[#0a1628] md:bg-transparent p-5 md:p-0 shadow-2xl md:shadow-none ${menuOpen ? 'flex' : 'hidden md:flex'}`}>
              {['GAME', 'NEWS', 'STORE', 'ESPORTS', 'SUPPORT', 'PASS'].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className={`text-xs font-bold tracking-[2px] transition-all relative py-2 block hover:text-[#e31e24] duration-300 ${index === 0 ? 'text-[#e31e24]' : 'text-white'}`}
                  >
                    {item}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-[#e31e24] transition-all duration-300 ${index === 0 ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="hidden md:flex gap-4 items-center">
              <button className="flex items-center gap-2 text-white text-xs font-bold tracking-wider hover:text-[#e31e24] transition-colors">
                <FontAwesomeIcon icon={faUser} />
                <span>LOGIN</span>
              </button>
              <button className="group relative px-6 py-2.5 bg-[#e31e24] rounded overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(227,30,36,0.4)]">
                <div className="relative z-10 flex items-center gap-2 text-white text-xs font-bold tracking-wider">
                  <FontAwesomeIcon icon={faDownload} className="group-hover:animate-bounce" />
                  <span>DOWNLOAD</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#c71a1f] to-[#e31e24] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
