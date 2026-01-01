'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faShareAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const newsItems = [
  {
    title: 'THE EVOLUTION OF ESPORTS GAMING',
    category: 'ESPORTS',
    date: 'JAN 15, 2026',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop',
    comments: 12,
    excerpt: 'Explore how esports has grown from small local tournaments to a global phenomenon with millions of viewers.'
  },
  {
    title: 'TOP 10 UPCOMING RPG GAMES',
    category: 'GAMES',
    date: 'JAN 12, 2026',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop',
    comments: 8,
    excerpt: 'Get ready for the most anticipated RPGs of the year. From open worlds to deep narratives, here is what to expect.'
  },
  {
    title: 'NEW HARDWARE RELEASES THIS MONTH',
    category: 'HARDWARE',
    date: 'JAN 10, 2026',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
    comments: 24,
    excerpt: 'A look at the latest gaming gear hitting the shelves. Upgrade your setup with these new peripherals.'
  },
];

export default function News() {
  return (
    <section id="news" className="py-24 bg-[#0f1929] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute -left-20 top-40 w-60 h-60 bg-[#e31e24]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-[#e31e24] font-bold tracking-[3px] text-xs block mb-3 uppercase">From the Blog</span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-wide uppercase italic">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#8a9ab0]">News</span>
            </h2>
          </div>
          <a href="#" className="group flex items-center gap-2 text-white text-xs font-bold tracking-wider hover:text-[#e31e24] transition-colors">
            <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#e31e24] after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300">VIEW ALL ARTICLES</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article 
              key={index}
              className="group bg-[#0a1628] rounded-xl overflow-hidden border border-white/5 hover:border-[#e31e24]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] to-transparent opacity-60"></div>
                <div className="absolute top-4 left-4 bg-[#e31e24] text-white text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-wider shadow-lg">
                  {item.category}
                </div>
              </div>
              
              <div className="p-8 relative">
                <div className="flex items-center gap-4 text-[#8a9ab0] text-[11px] font-medium mb-4 uppercase tracking-wide">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCalendarAlt} className="text-[#e31e24]" />
                    <span>{item.date}</span>
                  </div>
                  <span className="w-1 h-1 bg-[#e31e24] rounded-full"></span>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faComment} className="text-[#e31e24]" />
                    <span>{item.comments} Comments</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 leading-snug group-hover:text-[#e31e24] transition-colors line-clamp-2">
                  <a href="#" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true"></span>
                    {item.title}
                  </a>
                </h3>
                
                <p className="text-[#8a9ab0] text-sm leading-relaxed mb-6 line-clamp-3">
                  {item.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <span className="text-xs font-bold text-white tracking-wider group-hover:text-[#e31e24] transition-colors flex items-center gap-2">
                    READ MORE
                    <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </span>
                  <button className="text-[#8a9ab0] hover:text-white transition-colors relative z-10">
                    <FontAwesomeIcon icon={faShareAlt} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
