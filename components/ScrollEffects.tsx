'use client';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function ScrollEffects() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(progress);

      // Show/hide scroll to top button
      setShowScrollTop(scrolled > 500);

      // Add parallax effect to elements
      const parallaxElements = document.querySelectorAll('[data-parallax]');
      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.getAttribute('data-parallax') || '0.5');
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });

      // Reveal animations on scroll
      const revealElements = document.querySelectorAll('[data-reveal]');
      revealElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        
        if (isVisible && !element.classList.contains('revealed')) {
          element.classList.add('revealed');
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-black/30 backdrop-blur-sm z-[999]">
        <div
          className="h-full bg-gradient-to-r from-[#e31e24] via-yellow-400 to-blue-500 transition-all duration-300 relative overflow-hidden"
          style={{ width: `${scrollProgress}%` }}
        >
          {/* Animated shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-[#e31e24] to-[#c71a1f] text-white shadow-lg hover:shadow-[0_0_40px_rgba(227,30,36,0.6)] transition-all duration-500 flex items-center justify-center group ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'
        }`}
      >
        <FontAwesomeIcon 
          icon={faArrowUp} 
          className="text-xl group-hover:scale-110 transition-transform" 
        />
        
        {/* Pulse ring */}
        <div className="absolute inset-0 rounded-full border-2 border-[#e31e24] animate-ping opacity-75"></div>
      </button>
    </>
  );
}
