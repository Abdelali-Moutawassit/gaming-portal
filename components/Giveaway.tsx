'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch, faGift, faClock } from '@fortawesome/free-solid-svg-icons';

const giveaways = [
  {
    bgImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop',
    title: 'WEEKLY GIVEAWAY',
    subtitle: 'EPIC GAMES EXCLUSIVE',
    timeLeft: '2 Days Left'
  },
  {
    bgImage: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=600&fit=crop',
    title: 'PREMIUM BUNDLE',
    subtitle: 'LIMITED TIME OFFER',
    timeLeft: '5 Hours Left'
  },
];

export default function Giveaway() {
  return (
    <section id="store" className="py-24 bg-[#0f1929] relative">
      <div className="container mx-auto px-8 md:px-24 lg:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {giveaways.map((giveaway, index) => (
            <div
              key={index}
              data-reveal="scale"
              style={{ animationDelay: `${index * 0.2}s` }}
              className="group relative h-[450px] rounded-2xl overflow-hidden bg-[#0a1628] border border-white/5 hover:border-[#e31e24]/50 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:-translate-y-2 cursor-pointer"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:scale-110 transition-transform duration-700"
                style={{ backgroundImage: `url(${giveaway.bgImage})` }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/80 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />

              {/* Content */}
              <div className="relative z-10 p-12 h-full flex flex-col justify-center items-start">
                <div className="flex items-center gap-2 text-[#e31e24] text-xs font-bold tracking-widest uppercase mb-4 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                  <FontAwesomeIcon icon={faGift} />
                  {giveaway.subtitle}
                </div>
                
                <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter text-white leading-[0.9]">
                  {giveaway.title.split(' ')[0]}<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#8a9ab0]">{giveaway.title.split(' ').slice(1).join(' ')}</span>
                </h3>
                
                <p className="text-sm leading-relaxed text-[#b8c5d6] mb-8 tracking-wide max-w-md">
                  Get a new free game every Thursday exclusively from Epic Games, and keep them forever. Download, play, and lead in the EG.
                </p>
                
                <div className="flex items-center gap-6">
                  <button className="w-16 h-16 rounded-full bg-[#e31e24] text-white flex items-center justify-center text-2xl hover:bg-white hover:text-[#e31e24] hover:rotate-180 transition-all duration-500 shadow-[0_0_20px_rgba(227,30,36,0.4)]">
                    <FontAwesomeIcon icon={faCircleNotch} />
                  </button>
                  
                  <div className="flex flex-col">
                    <span className="text-[#8a9ab0] text-xs font-bold uppercase tracking-wider mb-1">Time Remaining</span>
                    <div className="flex items-center gap-2 text-white font-bold">
                      <FontAwesomeIcon icon={faClock} className="text-[#e31e24]" />
                      {giveaway.timeLeft}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
