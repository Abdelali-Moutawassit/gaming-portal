'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const giveaways = [
  {
    bgImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop',
  },
  {
    bgImage: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=600&fit=crop',
  },
];

export default function Giveaway() {
  return (
    <section className="py-20 pb-32 bg-[#0f1929]">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {giveaways.map((giveaway, index) => (
            <div
              key={index}
              className="relative h-[400px] rounded-xl overflow-hidden bg-gradient-to-br from-[#2d1a3d] to-[#1a2940]"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{ backgroundImage: `url(${giveaway.bgImage})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#e31e24]/60 to-[#2d1a3d]/80" />

              {/* Content */}
              <div className="relative z-10 p-12 h-full flex flex-col justify-center">
                <h3 className="text-[42px] font-black mb-6 tracking-[2px]">FREE GIVEAWAY</h3>
                <p className="text-sm leading-relaxed text-white/90 mb-8 tracking-wide">
                  GET A NEW FREE GAME EVERY THURSDAY<br />
                  EXCLUSIVELY FROM EPIC GAMES, AND<br />
                  KEEP THEM FOREVER. DOWNLOAD, PLAY,<br />
                  AND LEAD IN THE EG
                </p>
                <button className="w-16 h-16 rounded-full bg-white/20 border-2 border-white flex items-center justify-center text-white text-2xl hover:bg-white hover:text-[#e31e24] hover:rotate-180 transition-all">
                  <FontAwesomeIcon icon={faCircleNotch} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
