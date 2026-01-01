'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Marcus Chen',
    role: 'Pro Gamer',
    avatar: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
    comment: 'The best gaming platform I\'ve ever used. The community is amazing and the tournaments are world-class!',
  },
  {
    name: 'Sarah Williams',
    role: 'Streamer',
    avatar: 'https://i.pravatar.cc/150?img=45',
    rating: 5,
    comment: 'Incredible selection of games and the interface is super smooth. My viewers love it when I play here!',
  },
  {
    name: 'Alex Rodriguez',
    role: 'Esports Coach',
    avatar: 'https://i.pravatar.cc/150?img=33',
    rating: 5,
    comment: 'Perfect for competitive gaming. The ranking system is fair and the matchmaking is spot on.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#0a1628] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#e31e24]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-8 md:px-24 lg:px-32 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#e31e24] font-bold tracking-[3px] text-xs uppercase mb-3 block">
            What Players Say
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-wide uppercase">
            Player <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e31e24] to-[#c71a1f]">Reviews</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-reveal="scale"
              style={{ animationDelay: `${index * 0.2}s` }}
              className="group relative bg-gradient-to-br from-[#1a2940] to-[#0f1929] border border-white/5 rounded-2xl p-8 hover:border-[#e31e24]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-[#e31e24]/20 text-4xl">
                <FontAwesomeIcon icon={faQuoteLeft} />
              </div>

              {/* Avatar */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#e31e24] group-hover:scale-110 transition-transform">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-[#8a9ab0] text-sm">{testimonial.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className="text-yellow-400 text-sm"
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-[#b8c5d6] text-sm leading-relaxed italic">
                "{testimonial.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
