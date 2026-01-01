'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faXbox, faPlaystation } from '@fortawesome/free-brands-svg-icons';

const platforms = [
  { name: 'PC', icon: faTh },
  { name: 'MOBILE', icon: faMobileAlt },
  { name: 'XBOX', icon: faXbox },
  { name: 'PS4', icon: faPlaystation },
];

export default function Platforms() {
  return (
    <section className="py-20 bg-[#0f1929]">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#1a2940] to-[#0f1929] border border-white/5 p-10 text-center rounded-lg overflow-hidden hover:-translate-y-2.5 hover:border-[#e31e24] hover:shadow-[0_15px_40px_rgba(227,30,36,0.2)] transition-all before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#e31e24]/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FontAwesomeIcon
                icon={platform.icon}
                className="text-5xl text-white mb-5 group-hover:text-[#e31e24] group-hover:scale-110 transition-all"
              />
              <h3 className="text-lg font-bold mb-4 tracking-[2px]">{platform.name}</h3>
              <a
                href="#"
                className="text-[#e31e24] text-xs font-semibold tracking-wider hover:text-white transition-all"
              >
                VIEW GAMES
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
