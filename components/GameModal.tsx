'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faStar, faDownload, faUsers, faGamepad, faClock } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { useEffect } from 'react';

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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div 
        className="relative bg-[#0f1929] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-[#e31e24] transition-all"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        {/* Header Image */}
        <div className="relative h-80 overflow-hidden rounded-t-2xl">
          <Image
            src={game.image}
            alt={game.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1929] to-transparent"></div>
          
          {/* Title Overlay */}
          <div className="absolute bottom-6 left-6">
            <div className="inline-block bg-[#e31e24] text-white px-3 py-1 text-xs font-bold tracking-wider rounded uppercase mb-3">
              {game.category}
            </div>
            <h2 className="text-4xl font-black text-white tracking-wide uppercase">{game.title}</h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/5 rounded-xl p-4 border border-white/5">
              <div className="flex items-center gap-2 text-[#e31e24] mb-2">
                <FontAwesomeIcon icon={faStar} />
                <span className="text-xs font-bold uppercase">Rating</span>
              </div>
              <p className="text-2xl font-bold text-white">{game.rating}/5.0</p>
            </div>

            <div className="bg-white/5 rounded-xl p-4 border border-white/5">
              <div className="flex items-center gap-2 text-[#e31e24] mb-2">
                <FontAwesomeIcon icon={faUsers} />
                <span className="text-xs font-bold uppercase">Players</span>
              </div>
              <p className="text-2xl font-bold text-white">{game.players || '2M+'}</p>
            </div>

            <div className="bg-white/5 rounded-xl p-4 border border-white/5">
              <div className="flex items-center gap-2 text-[#e31e24] mb-2">
                <FontAwesomeIcon icon={faClock} />
                <span className="text-xs font-bold uppercase">Playtime</span>
              </div>
              <p className="text-2xl font-bold text-white">{game.playTime || '50h+'}</p>
            </div>

            <div className="bg-white/5 rounded-xl p-4 border border-white/5">
              <div className="flex items-center gap-2 text-[#e31e24] mb-2">
                <FontAwesomeIcon icon={faDownload} />
                <span className="text-xs font-bold uppercase">Downloads</span>
              </div>
              <p className="text-2xl font-bold text-white">{game.downloads || '10M+'}</p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">About This Game</h3>
            <p className="text-[#b8c5d6] leading-relaxed">
              {game.fullDescription || game.description + ' Experience intense gameplay with stunning graphics and immersive sound design. Join millions of players worldwide in this epic adventure. Regular updates bring new content, features, and improvements to keep the experience fresh and exciting.'}
            </p>
          </div>

          {/* Screenshots */}
          {game.screenshots && (
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Screenshots</h3>
              <div className="grid grid-cols-3 gap-4">
                {game.screenshots.map((screenshot, index) => (
                  <div key={index} className="relative h-32 rounded-lg overflow-hidden border border-white/10 hover:border-[#e31e24] transition-all">
                    <Image
                      src={screenshot}
                      alt={`Screenshot ${index + 1}`}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 py-4 bg-[#e31e24] text-white font-bold tracking-wider rounded-lg hover:bg-[#c71a1f] transition-all hover:shadow-[0_0_30px_rgba(227,30,36,0.5)]">
              <FontAwesomeIcon icon={faGamepad} className="mr-2" />
              PLAY NOW
            </button>
            <button className="flex-1 py-4 bg-white/5 text-white font-bold tracking-wider rounded-lg border border-white/10 hover:border-[#e31e24] transition-all">
              <FontAwesomeIcon icon={faDownload} className="mr-2" />
              DOWNLOAD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
