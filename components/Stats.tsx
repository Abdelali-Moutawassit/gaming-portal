'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faTrophy, faGamepad, faGlobe, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState, useRef } from 'react';

const stats = [
  { 
    icon: faUsers, 
    value: 2500000, 
    label: 'Active Players',
    suffix: '+',
    color: '#e31e24',
    description: 'Online right now',
    trend: '+12%'
  },
  { 
    icon: faTrophy, 
    value: 15000, 
    label: 'Tournaments',
    suffix: '+',
    color: '#FFD700',
    description: 'This year',
    trend: '+25%'
  },
  { 
    icon: faGamepad, 
    value: 500, 
    label: 'Games Available',
    suffix: '+',
    color: '#4CAF50',
    description: 'Premium titles',
    trend: '+8%'
  },
  { 
    icon: faGlobe, 
    value: 180, 
    label: 'Countries',
    suffix: '',
    color: '#2196F3',
    description: 'Worldwide coverage',
    trend: '+15%'
  },
];

function Counter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return <span ref={counterRef}>{count.toLocaleString()}</span>;
}

export default function Stats() {
  return (
    <section className="py-28 bg-gradient-to-b from-[#0a1628] via-[#0f1929] to-[#0a1628] relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(227,30,36,0.15)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(33,150,243,0.15)_0%,transparent_50%)]"></div>
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{ 
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-[10%] w-32 h-32 bg-[#e31e24]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-[10%] w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-8 md:px-24 lg:px-32 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#e31e24] font-bold tracking-[3px] text-xs uppercase mb-3 block">
            Our Achievements
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-wide uppercase">
            Platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e31e24] to-[#c71a1f]">Statistics</span>
          </h2>
          <p className="text-[#8a9ab0] mt-4 text-lg max-w-2xl mx-auto">
            Join millions of gamers worldwide in the ultimate gaming experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Glow Effect */}
                <div 
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: `${stat.color}40` }}
                ></div>
                
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-white/10 to-transparent border border-white/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 mx-auto"
                    style={{ 
                      boxShadow: `0 15px 35px ${stat.color}30` 
                    }}
                  >
                    <FontAwesomeIcon 
                      icon={stat.icon} 
                      className="text-3xl transition-all duration-500 group-hover:scale-110"
                      style={{ color: stat.color }}
                    />
                  </div>
                  
                  {/* Trend Badge */}
                  <div className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <FontAwesomeIcon icon={faArrowUp} className="text-[8px]" />
                    {stat.trend}
                  </div>
                </div>
                
                {/* Stats */}
                <div className="text-center relative z-10">
                  <h3 className="text-5xl font-black text-white mb-2 tracking-tight">
                    <Counter end={stat.value} />
                    <span 
                      className="font-black"
                      style={{ color: stat.color }}
                    >
                      {stat.suffix}
                    </span>
                  </h3>
                  
                  <p className="text-sm text-white font-bold tracking-wider uppercase mb-2">
                    {stat.label}
                  </p>
                  
                  <p className="text-xs text-[#8a9ab0] font-medium">
                    {stat.description}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="mt-6 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-1000 delay-300"
                    style={{ 
                      backgroundColor: stat.color,
                      width: '0%',
                      animation: 'fillProgress 1.5s ease-out forwards'
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
