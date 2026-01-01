'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay, faApple } from '@fortawesome/free-brands-svg-icons';

export default function Hero() {
  return (
    <section className="relative min-h-[700px] flex items-center bg-gradient-to-br from-[#1a2940] via-[#0a1628] to-[#2d1a3d] mt-[115px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute top-0 right-0 w-3/5 h-full bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=800&fit=crop)',
          maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)'
        }}
      />

      {/* Radial Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(227,30,36,0.15)_0%,transparent_50%)]" />

      {/* Content */}
      <div className="container mx-auto px-5 relative z-10">
        <div className="max-w-[700px]">
          <h1 className="text-[90px] font-black leading-[0.9] mb-8 uppercase tracking-wider drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            WELCOME<br />
            <span className="text-[#e31e24]">HOME</span>
          </h1>
          
          <p className="text-[15px] leading-relaxed text-[#b8c5d6] mb-10 tracking-wide font-medium">
            VERDANSK RETURNS TO CALL OF DUTY®:<br />
            WARZONE™ WITH ITS FAMILIAR SIGHTS—ALONGSIDE<br />
            NEW UPDATES TO EXCITE EVEN THE BIGGEST<br />
            VERDANSK VETERANS
          </p>

          <div className="flex gap-5">
            <a
              href="#"
              className="flex items-center gap-3 px-6 py-3 bg-black/40 border border-white/10 rounded-md text-white backdrop-blur-md hover:bg-black/60 hover:border-[#e31e24] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)] transition-all"
            >
              <FontAwesomeIcon icon={faGooglePlay} className="text-[32px]" />
              <div className="text-left">
                <span className="text-[10px] text-[#b8c5d6] block">GET IT ON</span>
                <strong className="text-base font-semibold">Google Play</strong>
              </div>
            </a>
            
            <a
              href="#"
              className="flex items-center gap-3 px-6 py-3 bg-black/40 border border-white/10 rounded-md text-white backdrop-blur-md hover:bg-black/60 hover:border-[#e31e24] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)] transition-all"
            >
              <FontAwesomeIcon icon={faApple} className="text-[32px]" />
              <div className="text-left">
                <span className="text-[10px] text-[#b8c5d6] block">Download on the</span>
                <strong className="text-base font-semibold">App Store</strong>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
