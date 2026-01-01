'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faTwitter, 
  faYoutube, 
  faInstagram, 
  faTwitch,
  faDiscord
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhone, faGamepad, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer id="support" className="bg-[#050b14] border-t border-white/5 pt-24 pb-10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto px-8 md:px-24 lg:px-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand & About */}
          <div className="space-y-8">
            <div className="flex items-center gap-2 text-2xl font-black tracking-tighter text-white">
              <FontAwesomeIcon icon={faGamepad} className="text-[#e31e24]" />
              <span>GAMING<span className="text-[#e31e24]">PORTAL</span></span>
            </div>
            <p className="text-[#8a9ab0] text-sm leading-7">
              The ultimate destination for gamers. We provide the latest news, reviews, and exclusive content for the gaming community. Join us and level up your experience.
            </p>
            <div className="flex gap-3">
              {[faFacebookF, faTwitter, faYoutube, faInstagram, faTwitch, faDiscord].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-[#0f1929] border border-white/5 rounded-lg text-[#8a9ab0] hover:text-white hover:bg-[#e31e24] hover:border-[#e31e24] hover:-translate-y-1 transition-all duration-300"
                >
                  <FontAwesomeIcon icon={icon} className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-8 tracking-wider uppercase flex items-center gap-3">
              <span className="w-1 h-6 bg-[#e31e24] rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Games', 'News', 'Store', 'Esports', 'Support', 'Privacy Policy'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="group flex items-center gap-2 text-[#8a9ab0] text-sm hover:text-white transition-all duration-300">
                    <FontAwesomeIcon icon={faChevronRight} className="text-[10px] text-[#e31e24] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest News */}
          <div>
            <h4 className="text-white text-lg font-bold mb-8 tracking-wider uppercase flex items-center gap-3">
              <span className="w-1 h-6 bg-[#e31e24] rounded-full"></span>
              Latest News
            </h4>
            <div className="space-y-6">
              {[
                { title: 'New Update Released for Space Wars', date: 'Jan 15, 2026' },
                { title: 'Championship Finals: Who Will Win?', date: 'Jan 12, 2026' },
                { title: 'Best Gaming Keyboards of 2026', date: 'Jan 08, 2026' },
              ].map((news, index) => (
                <div key={index} className="group cursor-pointer flex gap-4 items-start">
                  <div className="w-16 h-16 bg-[#0f1929] rounded-md overflow-hidden flex-shrink-0 border border-white/5 group-hover:border-[#e31e24]/50 transition-colors">
                     {/* Placeholder for thumbnail */}
                     <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
                  </div>
                  <div>
                    <h5 className="text-white text-sm font-semibold mb-1 leading-snug group-hover:text-[#e31e24] transition-colors line-clamp-2">{news.title}</h5>
                    <span className="text-[#8a9ab0] text-[10px] uppercase tracking-wider">{news.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-bold mb-8 tracking-wider uppercase flex items-center gap-3">
              <span className="w-1 h-6 bg-[#e31e24] rounded-full"></span>
              Contact Us
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-[#0f1929] flex items-center justify-center text-[#e31e24] group-hover:bg-[#e31e24] group-hover:text-white transition-all">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <span className="text-[#8a9ab0] text-sm leading-6 flex-1 pt-2">
                  123 Gaming Street, Digital City,<br />
                  Virtual World 10101
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-[#0f1929] flex items-center justify-center text-[#e31e24] group-hover:bg-[#e31e24] group-hover:text-white transition-all">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <span className="text-[#8a9ab0] text-sm pt-1">+1 (234) 567-8900</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-[#0f1929] flex items-center justify-center text-[#e31e24] group-hover:bg-[#e31e24] group-hover:text-white transition-all">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <span className="text-[#8a9ab0] text-sm pt-1">contact@gamingportal.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#8a9ab0] text-xs font-medium">
            © 2026 <span className="text-white">Gaming Portal</span>. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[#8a9ab0] text-xs font-medium hover:text-[#e31e24] transition-colors">Terms of Service</a>
            <a href="#" className="text-[#8a9ab0] text-xs font-medium hover:text-[#e31e24] transition-colors">Privacy Policy</a>
            <a href="#" className="text-[#8a9ab0] text-xs font-medium hover:text-[#e31e24] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
