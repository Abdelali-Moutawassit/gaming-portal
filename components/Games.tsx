'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStar, faGamepad } from '@fortawesome/free-solid-svg-icons';

const games = [
  {
    title: 'SPACE WARS',
    description: 'Engage in intergalactic battles, explore unknown galaxies, and command your fleet.',
    image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=600&h=800&fit=crop&q=80',
    rating: 4.8,
    category: 'Sci-Fi'
  },
  {
    title: 'RETURN OF THE CARS',
    description: 'Rev up your engines and race through thrilling tracks, customize your ride.',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=800&fit=crop&q=80',
    rating: 4.5,
    category: 'Racing'
  },
  {
    title: 'PLANES OF GLORIA',
    description: 'Soar through the skies, engage in epic dogfights, and master aerial combat.',
    image: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?w=600&h=800&fit=crop&q=80',
    rating: 4.7,
    category: 'Simulation'
  },
  {
    title: 'EARTH WARS',
    description: 'Rewrite history in intense global battles, lead factions, command armies.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=800&fit=crop&q=80',
    rating: 4.9,
    category: 'Strategy'
  },
  {
    title: 'THE WARRIOR 3',
    description: 'Enter a world of action and honor, master deadly combat, unlock powerful skills.',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&h=800&fit=crop&q=80',
    rating: 4.6,
    category: 'RPG'
  },
  {
    title: 'LIFE AND STRUGGLE',
    description: 'Survive in a post-apocalyptic world, scavenge for resources, and build your base.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=800&fit=crop&q=80',
    rating: 4.4,
    category: 'Survival'
  },
  {
    title: 'GLORIA SOCCER',
    description: 'Lead your team to victory with skillful tactics and precision, experience realistic matches.',
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&h=800&fit=crop&q=80',
    rating: 4.8,
    category: 'Sports'
  },
  {
    title: 'EGYPT AND WORLD',
    description: 'Uncover ancient mysteries, build mighty empires, and shape history.',
    image: 'https://images.unsplash.com/photo-1503455637927-730bce8583c0?w=600&h=800&fit=crop&q=80',
    rating: 4.7,
    category: 'Adventure'
  },
];

export default function Games() {
  return (
    <section className="py-24 bg-[#0a1628] relative">
      <div className="container mx-auto px-5">
        <div className="text-center mb-16">
          <span className="text-[#e31e24] font-bold tracking-[3px] text-xs uppercase mb-3 block">Choose Your Path</span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-wide uppercase">
            Top <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e31e24] to-[#c71a1f]">Games</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {games.map((game, index) => (
            <div
              key={index}
              className="group relative bg-[#0f1929] rounded-xl overflow-hidden border border-white/5 hover:border-[#e31e24] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(227,30,36,0.15)]"
            >
              {/* Image Container */}
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1929] via-transparent to-transparent opacity-90"></div>
                
                {/* Overlay Content */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400 text-[10px]" />
                  {game.rating}
                </div>

                <div className="absolute top-4 left-4 bg-[#e31e24] text-white px-3 py-1 text-[10px] font-bold tracking-wider rounded uppercase">
                  {game.category}
                </div>

                {/* Hover Action */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                  <button className="w-16 h-16 rounded-full bg-[#e31e24] text-white flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 hover:bg-[#c71a1f]">
                    <FontAwesomeIcon icon={faPlay} className="text-xl ml-1" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold text-white mb-2 tracking-wider uppercase drop-shadow-md">{game.title}</h3>
                <p className="text-xs text-[#b8c5d6] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2 mb-4">
                  {game.description}
                </p>
                <div className="flex items-center gap-2 text-[10px] font-bold text-[#e31e24] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  <FontAwesomeIcon icon={faGamepad} />
                  Play Now
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="relative px-12 py-4 bg-transparent border border-white/10 text-white text-sm font-bold tracking-[2px] rounded-full overflow-hidden hover:border-[#e31e24] transition-all duration-300 group">
            <span className="relative z-10 group-hover:text-[#e31e24] transition-colors">VIEW ALL GAMES</span>
            <div className="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
