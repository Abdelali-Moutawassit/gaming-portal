'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faMobileAlt, faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faXbox, faPlaystation } from '@fortawesome/free-brands-svg-icons';

const platforms = [
  { name: 'PC', icon: faDesktop, description: 'Experience ultimate performance' },
  { name: 'MOBILE', icon: faMobileAlt, description: 'Gaming on the go' },
  { name: 'XBOX', icon: faXbox, description: 'Next-gen console gaming' },
  { name: 'PS5', icon: faPlaystation, description: 'Immersive exclusive titles' },
];

export default function Platforms() {
  return (
    <section className="py-24 bg-[#0f1929] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.png')] opacity-[0.03]"></div>
      
      <div className="container mx-auto px-5 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#1a2940] to-[#0f1929] border border-white/5 p-10 text-center rounded-2xl overflow-hidden hover:-translate-y-2 hover:border-[#e31e24]/50 hover:shadow-[0_15px_40px_rgba(227,30,36,0.1)] transition-all duration-500"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#e31e24]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto bg-[#0a1628] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-white/5 group-hover:border-[#e31e24]">
                  <FontAwesomeIcon
                    icon={platform.icon}
                    className="text-3xl text-white group-hover:text-[#e31e24] transition-colors duration-300"
                  />
                </div>
                
                <h3 className="text-xl font-bold mb-2 tracking-[2px] text-white">{platform.name}</h3>
                <p className="text-[#8a9ab0] text-xs mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {platform.description}
                </p>
                
                <a
                  href="#"
                  className="inline-block text-[#e31e24] text-xs font-bold tracking-wider hover:text-white transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-px after:bg-[#e31e24] after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300"
                >
                  VIEW GAMES
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
