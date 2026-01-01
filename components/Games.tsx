'use client';

import Image from 'next/image';

const games = [
  {
    title: 'SPACE WARS',
    description: 'engage in intergalactic battles, explore unknown galaxies, and command',
    image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=600&h=800&fit=crop&q=80',
  },
  {
    title: 'RETURN OF THE CARS',
    description: 'rev up your engines and race through thrilling tracks, customize your ride',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=800&fit=crop&q=80',
  },
  {
    title: 'PLANES OF GLORIA',
    description: 'soar through the skies, engage in epic dogfights, and master aerial combat',
    image: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?w=600&h=800&fit=crop&q=80',
  },
  {
    title: 'EARTH WARS',
    description: 'rewrite history in intense global battles, lead factions, command armies',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=800&fit=crop&q=80',
  },
  {
    title: 'THE WARRIOR 3',
    description: 'enter a world of action and honor, master deadly combat, unlock powerful',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&h=800&fit=crop&q=80',
  },
  {
    title: 'LIFE AND STRUGGLE',
    description: 'enter a world of action and honor, master deadly combat, unlock powerful',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=800&fit=crop&q=80',
  },
  {
    title: 'GLORIA SOCCER',
    description: 'lead your team to victory with skillful tactics and precision, experience realistic',
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&h=800&fit=crop&q=80',
  },
  {
    title: 'EGYPT AND WORLD',
    description: 'uncover ancient mysteries, build mighty empires, and shape history, explore',
    image: 'https://images.unsplash.com/photo-1503455637927-730bce8583c0?w=600&h=800&fit=crop&q=80',
  },
];

export default function Games() {
  return (
    <section className="py-20 bg-[#0a1628]">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {games.map((game, index) => (
            <div
              key={index}
              className="group bg-[#0f1929] rounded-lg overflow-hidden border border-white/5 hover:-translate-y-2.5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)] hover:border-[#e31e24] transition-all duration-300 cursor-pointer animate-fadeInUp"
              style={{ animationDelay: `${(index + 1) * 0.1}s`, opacity: 0 }}
            >
              <div className="relative h-[350px] overflow-hidden">
                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute bottom-4 left-4 bg-[#e31e24] text-white px-4 py-1.5 text-xs font-bold tracking-wider rounded z-10">
                  FREE
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-base font-bold mb-3 tracking-wider uppercase">{game.title}</h3>
                <p className="text-xs text-[#8a9ab0] leading-relaxed">{game.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="relative px-16 py-4 bg-transparent border-2 border-[#e31e24] text-[#e31e24] text-sm font-bold tracking-[2px] rounded-md overflow-hidden hover:text-white transition-all duration-300 before:absolute before:inset-0 before:bg-[#e31e24] before:-translate-x-full hover:before:translate-x-0 before:transition-transform before:duration-300 before:-z-10 z-0">
            <span className="relative z-10">ALL GAMES</span>
          </button>
        </div>
      </div>
    </section>
  );
}
