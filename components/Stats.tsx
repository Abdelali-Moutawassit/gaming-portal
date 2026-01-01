'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faTrophy, faGamepad, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const stats = [
  { 
    icon: faUsers, 
    value: 2500000, 
    label: 'Active Players',
    suffix: '+',
    color: '#e31e24'
  },
  { 
    icon: faTrophy, 
    value: 15000, 
    label: 'Tournaments',
    suffix: '+',
    color: '#FFD700'
  },
  { 
    icon: faGamepad, 
    value: 500, 
    label: 'Games Available',
    suffix: '+',
    color: '#4CAF50'
  },
  { 
    icon: faGlobe, 
    value: 180, 
    label: 'Countries',
    suffix: '',
    color: '#2196F3'
  },
];

function Counter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
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
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
}

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0a1628] to-[#0f1929] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(227,30,36,0.1)_0%,transparent_50%)]"></div>
      
      <div className="container mx-auto px-8 md:px-24 lg:px-32 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center relative"
            >
              <div className="relative mb-6">
                <div 
                  className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-white/30 transition-all duration-300 group-hover:scale-110"
                  style={{ 
                    boxShadow: `0 10px 30px ${stat.color}20` 
                  }}
                >
                  <FontAwesomeIcon 
                    icon={stat.icon} 
                    className="text-3xl transition-colors duration-300"
                    style={{ color: stat.color }}
                  />
                </div>
              </div>
              
              <h3 className="text-4xl font-black text-white mb-2 tracking-tight">
                <Counter end={stat.value} />
                <span className="text-[#e31e24]">{stat.suffix}</span>
              </h3>
              
              <p className="text-sm text-[#8a9ab0] font-semibold tracking-wider uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
