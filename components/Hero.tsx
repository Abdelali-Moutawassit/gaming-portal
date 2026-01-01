'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay, faApple } from '@fortawesome/free-brands-svg-icons';
import { faPlay, faStar } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[850px] flex items-center bg-[#0a1628] mt-[0px] overflow-hidden pt-[100px]">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute top-0 right-0 w-full md:w-[70%] h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1600&h=900&fit=crop&q=80)',
          maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,1) 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,1) 100%)'
        }}
      />

      {/* Animated Particles/Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(10,22,40,0.95)_0%,rgba(10,22,40,0.4)_50%,transparent_100%)] z-0" />
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10 z-0 pointer-events-none"></div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-[10%] w-20 h-20 bg-[#e31e24] rounded-full blur-[80px] opacity-60 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-[10%] w-32 h-32 bg-blue-600 rounded-full blur-[100px] opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-[800px]">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8 animate-fadeInUp">
            <span className="w-2 h-2 bg-[#e31e24] rounded-full animate-ping"></span>
            <span className="text-[#e31e24] text-xs font-bold tracking-widest uppercase">New Season Available</span>
          </div>

          <h1 className="text-[60px] md:text-[100px] font-black leading-[0.9] mb-8 uppercase tracking-tighter drop-shadow-2xl animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            WELCOME<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#8a9ab0]">TO THE</span><br />
            <span className="text-[#e31e24] relative inline-block">
              ARENA
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#e31e24]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </h1>
          
          <p className="text-lg leading-relaxed text-[#b8c5d6] mb-10 tracking-wide font-medium max-w-[600px] animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Experience the next generation of competitive gaming. Join millions of players worldwide in the most intense battles ever created.
          </p>

          <div className="flex flex-wrap gap-5 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <button className="group relative px-8 py-4 bg-[#e31e24] text-white font-bold tracking-wider rounded overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(227,30,36,0.5)] hover:-translate-y-1">
              <span className="relative z-10 flex items-center gap-3">
                <FontAwesomeIcon icon={faPlay} />
                PLAY FOR FREE
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#c71a1f] to-[#e31e24] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>

            <div className="flex gap-3">
              <a
                href="#"
                className="flex items-center gap-3 px-5 py-3 bg-[#0f1929]/80 border border-white/10 rounded text-white backdrop-blur-md hover:bg-white hover:text-[#0a1628] hover:border-white transition-all duration-300 group"
              >
                <FontAwesomeIcon icon={faGooglePlay} className="text-2xl group-hover:scale-110 transition-transform" />
              </a>
              
              <a
                href="#"
                className="flex items-center gap-3 px-5 py-3 bg-[#0f1929]/80 border border-white/10 rounded text-white backdrop-blur-md hover:bg-white hover:text-[#0a1628] hover:border-white transition-all duration-300 group"
              >
                <FontAwesomeIcon icon={faApple} className="text-2xl group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div className="mt-12 flex items-center gap-8 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0a1628] bg-gray-600 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-[#0a1628] bg-[#1a2940] flex items-center justify-center text-xs font-bold text-white">
                +2M
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex text-[#e31e24] text-xs mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <FontAwesomeIcon key={i} icon={faStar} />
                ))}
              </div>
              <span className="text-[#8a9ab0] text-xs font-bold tracking-wider">ACTIVE PLAYERS WORLDWIDE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
