import React from 'react';
import { Home, Search, Library, PlusSquare, Heart } from 'lucide-react';

const playlists = [
  'Chill Vibes',
  'Workout Mix',
  'Study Session',
  'Road Trip',
  'Party Hits'
];

export default function Sidebar() {
  return (
    <div className="bg-black w-64 p-6 flex flex-col h-full">
      <div className="text-white mb-8">
        <h1 className="text-2xl font-bold mb-8">Spotifake</h1>
        <nav className="space-y-4">
          <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white transition">
            <Home size={24} />
            <span>Home</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white transition">
            <Search size={24} />
            <span>Search</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white transition">
            <Library size={24} />
            <span>Your Library</span>
          </a>
        </nav>
      </div>
      
      <div className="mt-8">
        <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition cursor-pointer mb-4">
          <PlusSquare size={24} />
          <span>Create Playlist</span>
        </div>
        <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition cursor-pointer">
          <Heart size={24} className="text-gradient-purple" />
          <span>Liked Songs</span>
        </div>
      </div>
      
      <div className="mt-6 border-t border-gray-800 pt-6">
        <div className="space-y-3">
          {playlists.map((playlist) => (
            <div key={playlist} className="text-gray-300 hover:text-white transition cursor-pointer">
              {playlist}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}