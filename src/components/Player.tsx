import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Repeat, Shuffle } from 'lucide-react';
import { usePlayer } from '../context/PlayerContext';

export default function Player() {
  const { currentTrack, isPlaying, togglePlay, setVolume } = usePlayer();
  const [volumeLevel, setVolumeLevel] = useState(0.7);

  useEffect(() => {
    setVolume(volumeLevel);
  }, [volumeLevel, setVolume]);

  if (!currentTrack) return null;

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolumeLevel(newVolume);
    setVolume(newVolume);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-gray-900 to-black p-4">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <div className="flex items-center w-1/3">
          <img
            src={currentTrack.cover}
            alt={currentTrack.title}
            className="w-14 h-14 rounded-md mr-4"
          />
          <div>
            <h4 className="text-white text-sm font-medium">{currentTrack.title}</h4>
            <p className="text-gray-400 text-xs">{currentTrack.artist}</p>
          </div>
        </div>
        
        <div className="flex flex-col items-center w-1/3">
          <div className="flex items-center space-x-6">
            <button className="text-gray-400 hover:text-white transition">
              <Shuffle size={20} />
            </button>
            <button className="text-gray-400 hover:text-white transition">
              <SkipBack size={20} />
            </button>
            <button 
              className="bg-white rounded-full p-2 hover:scale-105 transition"
              onClick={togglePlay}
            >
              {isPlaying ? (
                <Pause size={24} fill="black" />
              ) : (
                <Play size={24} fill="black" />
              )}
            </button>
            <button className="text-gray-400 hover:text-white transition">
              <SkipForward size={20} />
            </button>
            <button className="text-gray-400 hover:text-white transition">
              <Repeat size={20} />
            </button>
          </div>
          <div className="w-full mt-2 flex items-center space-x-2">
            <span className="text-xs text-gray-400">0:00</span>
            <div className="h-1 rounded-full bg-gray-600 relative flex-1">
              <div className="absolute h-full w-0 bg-white rounded-full"></div>
            </div>
            <span className="text-xs text-gray-400">{currentTrack.duration}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-end w-1/3 space-x-4">
          <Volume2 size={20} className="text-gray-400" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volumeLevel}
            onChange={handleVolumeChange}
            className="w-24 accent-white"
          />
        </div>
      </div>
    </div>
  );
}