'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTimes, 
  faStar, 
  faDownload, 
  faUsers, 
  faGamepad, 
  faClock, 
  faTrophy,
  faHeart,
  faShareAlt,
  faChartLine,
  faTag,
  faCalendar,
  faCircle
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface GameModalProps {
  isOpen: boolean;
  onClose: () => void;
  game: {
    title: string;
    description: string;
    image: string;
    rating: number;
    category: string;
    players?: string;
    playTime?: string;
    downloads?: string;
    fullDescription?: string;
    screenshots?: string[];
  };
}

export default function GameModal({ isOpen, onClose, game }: GameModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'requirements' | 'reviews'>('overview');
  const [isFavorite, setIsFavorite] = useState(false);

  const features = [
    { icon: faTrophy, title: 'Competitive Ranked', description: 'Climb the leaderboards' },
    { icon: faUsers, title: 'Multiplayer', description: 'Play with friends' },
    { icon: faGamepad, title: 'Cross-Platform', description: 'Play anywhere' },
    { icon: faClock, title: 'Live Events', description: 'Weekly tournaments' },
    { icon: faChartLine, title: 'Progression', description: 'Unlock rewards' },
    { icon: faStar, title: 'Premium Content', description: 'Exclusive items' }
  ];

  const systemRequirements = {
    minimum: {
      os: 'Windows 10 64-bit',
      processor: 'Intel Core i5-6600K',
      memory: '8 GB RAM',
      graphics: 'NVIDIA GTX 1060 6GB',
      storage: '50 GB available space'
    },
    recommended: {
      os: 'Windows 11 64-bit',
      processor: 'Intel Core i7-9700K',
      memory: '16 GB RAM',
      graphics: 'NVIDIA RTX 3070',
      storage: '50 GB SSD'
    }
  };

  const reviews = [
    {
      name: 'Alex Johnson',
      avatar: 'https://i.pravatar.cc/150?img=12',
      rating: 5,
      comment: 'Amazing gameplay and stunning graphics! Best game of 2024.',
      date: '2 weeks ago'
    },
    {
      name: 'Sarah Williams',
      avatar: 'https://i.pravatar.cc/150?img=47',
      rating: 4,
      comment: 'Great game but needs better optimization. Still worth playing!',
      date: '1 month ago'
    },
    {
      name: 'Mike Chen',
      avatar: 'https://i.pravatar.cc/150?img=33',
      rating: 5,
      comment: 'Incredible experience! The multiplayer is so much fun.',
      date: '3 weeks ago'
    }
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-md p-4 animate-fadeIn z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div 
        className="relative bg-gradient-to-br from-[#0f1929] to-[#0a1628] rounded-3xl max-w-5xl w-full max-h-[95vh] overflow-y-auto border border-white/10 shadow-2xl transform scale-95 animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-black/70 backdrop-blur-sm text-white hover:bg-[#e31e24] hover:rotate-90 transition-all duration-300 shadow-lg"
        >
          <FontAwesomeIcon icon={faTimes} className="text-lg" />
        </button>

        {/* Header Image with Parallax Effect */}
        <div className="relative h-96 overflow-hidden rounded-t-3xl">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent z-10"></div>
          <Image
            src={game.image}
            alt={game.title}
            fill
            className="object-cover transform hover:scale-110 transition-transform duration-700"
          />
          
          {/* Action Buttons */}
          <div className="absolute top-6 left-6 z-20 flex gap-3">
            <button 
              onClick={() => setIsFavorite(!isFavorite)}
              className={`w-12 h-12 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-300 ${
                isFavorite ? 'bg-[#e31e24] text-white' : 'bg-black/50 text-white/70 hover:bg-black/70'
              }`}
            >
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <button className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md text-white/70 hover:bg-black/70 flex items-center justify-center transition-all duration-300">
              <FontAwesomeIcon icon={faShareAlt} />
            </button>
          </div>

          {/* Title & Category Overlay */}
          <div className="absolute bottom-8 left-8 right-8 z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#e31e24] text-white px-4 py-2 text-xs font-bold tracking-wider rounded-full uppercase shadow-lg">
                {game.category}
              </div>
              <div className="bg-black/60 backdrop-blur-md text-white px-4 py-2 text-xs font-bold rounded-full flex items-center gap-2">
                <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                {game.rating} / 5.0
              </div>
              <div className="bg-black/60 backdrop-blur-md text-white px-4 py-2 text-xs font-bold rounded-full flex items-center gap-2">
                <FontAwesomeIcon icon={faCalendar} />
                2024
              </div>
            </div>
            <h2 className="text-5xl font-black text-white tracking-wide uppercase drop-shadow-2xl">{game.title}</h2>
            <p className="text-[#b8c5d6] mt-2 text-lg font-medium">{game.description}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-br from-red-500/20 to-transparent p-6 rounded-2xl border border-red-500/30 hover:border-red-500/60 transition-all group">
              <FontAwesomeIcon icon={faStar} className="text-3xl text-red-500 mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="text-3xl font-black text-white mb-1">{game.rating}</h4>
              <p className="text-xs text-[#8a9ab0] uppercase tracking-wider font-bold">Rating</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-transparent p-6 rounded-2xl border border-blue-500/30 hover:border-blue-500/60 transition-all group">
              <FontAwesomeIcon icon={faUsers} className="text-3xl text-blue-500 mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="text-3xl font-black text-white mb-1">{game.players || '2.5M'}</h4>
              <p className="text-xs text-[#8a9ab0] uppercase tracking-wider font-bold">Players</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-transparent p-6 rounded-2xl border border-purple-500/30 hover:border-purple-500/60 transition-all group">
              <FontAwesomeIcon icon={faClock} className="text-3xl text-purple-500 mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="text-3xl font-black text-white mb-1">{game.playTime || '45h'}</h4>
              <p className="text-xs text-[#8a9ab0] uppercase tracking-wider font-bold">Playtime</p>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-transparent p-6 rounded-2xl border border-green-500/30 hover:border-green-500/60 transition-all group">
              <FontAwesomeIcon icon={faDownload} className="text-3xl text-green-500 mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="text-3xl font-black text-white mb-1">{game.downloads || '5M'}</h4>
              <p className="text-xs text-[#8a9ab0] uppercase tracking-wider font-bold">Downloads</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-8 border-b border-white/10 pb-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 font-bold tracking-wider uppercase text-sm transition-all ${
                activeTab === 'overview'
                  ? 'text-[#e31e24] border-b-2 border-[#e31e24]'
                  : 'text-[#8a9ab0] hover:text-white'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('requirements')}
              className={`px-6 py-3 font-bold tracking-wider uppercase text-sm transition-all ${
                activeTab === 'requirements'
                  ? 'text-[#e31e24] border-b-2 border-[#e31e24]'
                  : 'text-[#8a9ab0] hover:text-white'
              }`}
            >
              Requirements
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-6 py-3 font-bold tracking-wider uppercase text-sm transition-all ${
                activeTab === 'reviews'
                  ? 'text-[#e31e24] border-b-2 border-[#e31e24]'
                  : 'text-[#8a9ab0] hover:text-white'
              }`}
            >
              Reviews
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-fadeIn">
              {/* Description */}
              <div>
                <h3 className="text-2xl font-black text-white mb-4 tracking-wide uppercase">About This Game</h3>
                <p className="text-[#b8c5d6] leading-relaxed text-lg">
                  {game.fullDescription || 
                    `Experience the ultimate gaming adventure with ${game.title}. Immerse yourself in stunning visuals, engaging gameplay, and endless entertainment. Join millions of players worldwide in this incredible journey.`
                  }
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-2xl font-black text-white mb-6 tracking-wide uppercase">Key Features</h3>
                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-[#e31e24]/50 transition-all group hover:-translate-y-1">
                      <FontAwesomeIcon icon={feature.icon} className="text-2xl text-[#e31e24] mb-3 group-hover:scale-110 transition-transform" />
                      <h4 className="text-white font-bold text-lg mb-2">{feature.title}</h4>
                      <p className="text-[#8a9ab0] text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Screenshots */}
              {game.screenshots && game.screenshots.length > 0 && (
                <div>
                  <h3 className="text-2xl font-black text-white mb-6 tracking-wide uppercase">Screenshots</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {game.screenshots.map((screenshot, index) => (
                      <div key={index} className="relative h-48 rounded-xl overflow-hidden group cursor-pointer">
                        <Image
                          src={screenshot}
                          alt={`Screenshot ${index + 1}`}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <FontAwesomeIcon icon={faCircle} className="text-white text-2xl" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'requirements' && (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="text-2xl font-black text-white mb-6 tracking-wide uppercase">System Requirements</h3>
              <div className="grid grid-cols-2 gap-6">
                {/* Minimum */}
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h4 className="text-xl font-bold text-[#e31e24] mb-6 uppercase tracking-wider">Minimum</h4>
                  <div className="space-y-4">
                    {Object.entries(systemRequirements.minimum).map(([key, value]) => (
                      <div key={key}>
                        <p className="text-[#8a9ab0] text-xs uppercase tracking-wider font-bold mb-1">{key}</p>
                        <p className="text-white font-semibold">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommended */}
                <div className="bg-gradient-to-br from-[#e31e24]/10 to-transparent p-6 rounded-2xl border border-[#e31e24]/30">
                  <h4 className="text-xl font-bold text-[#e31e24] mb-6 uppercase tracking-wider">Recommended</h4>
                  <div className="space-y-4">
                    {Object.entries(systemRequirements.recommended).map(([key, value]) => (
                      <div key={key}>
                        <p className="text-[#8a9ab0] text-xs uppercase tracking-wider font-bold mb-1">{key}</p>
                        <p className="text-white font-semibold">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="text-2xl font-black text-white mb-6 tracking-wide uppercase">Player Reviews</h3>
              {reviews.map((review, index) => (
                <div key={index} className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-white font-bold text-lg">{review.name}</h4>
                        <span className="text-[#8a9ab0] text-sm">{review.date}</span>
                      </div>
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <FontAwesomeIcon
                            key={i}
                            icon={faStar}
                            className={`text-sm ${i < review.rating ? 'text-yellow-400' : 'text-white/20'}`}
                          />
                        ))}
                      </div>
                      <p className="text-[#b8c5d6] leading-relaxed">{review.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="flex-1 py-5 bg-gradient-to-r from-[#e31e24] to-[#c71a1f] text-white font-bold tracking-wider rounded-xl hover:shadow-[0_0_40px_rgba(227,30,36,0.6)] transition-all hover:scale-105 flex items-center justify-center gap-3 group">
              <FontAwesomeIcon icon={faGamepad} className="group-hover:scale-110 transition-transform" />
              PLAY NOW
            </button>
            <button className="flex-1 py-5 bg-white/5 text-white font-bold tracking-wider rounded-xl border-2 border-white/10 hover:border-[#e31e24] transition-all hover:scale-105 flex items-center justify-center gap-3 group">
              <FontAwesomeIcon icon={faDownload} className="group-hover:scale-110 transition-transform" />
              DOWNLOAD
            </button>
            <button className="py-5 px-8 bg-white/5 text-white font-bold tracking-wider rounded-xl border-2 border-white/10 hover:border-[#e31e24] transition-all hover:scale-105">
              <FontAwesomeIcon icon={faTag} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
