import React from 'react';
import { Play, Pause, Clock3 } from 'lucide-react';
import { usePlayer } from '../context/PlayerContext';

const recentlyPlayed = [
  {
    title: "Midnight City",
    artist: "Synthwave Dreams",
    duration: "4:32",
    cover: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3"
  },
  {
    title: "Neon Lights",
    artist: "Retro Wave",
    duration: "3:45",
    cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-hip-hop-02-738.mp3"
  },
  {
    title: "Digital Love",
    artist: "Electronic Heart",
    duration: "5:01",
    cover: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-deep-urban-623.mp3"
  },
  {
    title: "Future Funk",
    artist: "Cyber Groove",
    duration: "4:15",
    cover: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-serene-view-443.mp3"
  }
];

export default function MainContent() {
  const { currentTrack, isPlaying, playTrack } = usePlayer();

  const handlePlayClick = (track: typeof recentlyPlayed[0]) => {
    playTrack(track);
  };

  return (
    <div className="flex-1 overflow-auto bg-gradient-to-b from-blue-900 to-black p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">Good evening</h2>
        <div className="grid grid-cols-3 gap-4">
          {recentlyPlayed.slice(0, 6).map((item, index) => (
            <div
              key={index}
              className="bg-white/10 rounded-lg flex items-center overflow-hidden hover:bg-white/20 transition group cursor-pointer"
            >
              <img src={item.cover} alt={item.title} className="w-16 h-16 object-cover" />
              <span className="text-white font-medium px-4">{item.title}</span>
              <button 
                className="ml-auto mr-4 bg-green-500 rounded-full p-3 opacity-0 group-hover:opacity-100 transition"
                onClick={() => handlePlayClick(item)}
              >
                {currentTrack?.title === item.title && isPlaying ? (
                  <Pause size={20} fill="white" />
                ) : (
                  <Play size={20} fill="white" />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Recently played</h2>
        <div className="bg-white/5 rounded-lg">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 px-4 text-gray-400 font-medium">#</th>
                <th className="py-4 px-4 text-gray-400 font-medium">Title</th>
                <th className="py-4 px-4 text-gray-400 font-medium">Artist</th>
                <th className="py-4 px-4 text-gray-400 font-medium">
                  <Clock3 size={16} />
                </th>
              </tr>
            </thead>
            <tbody>
              {recentlyPlayed.map((track, index) => (
                <tr
                  key={index}
                  className="hover:bg-white/10 group transition cursor-pointer"
                  onClick={() => handlePlayClick(track)}
                >
                  <td className="py-3 px-4 text-gray-400">
                    {currentTrack?.title === track.title && isPlaying ? (
                      <Pause size={16} className="text-green-500" />
                    ) : (
                      index + 1
                    )}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <img
                        src={track.cover}
                        alt={track.title}
                        className="w-10 h-10 rounded mr-3"
                      />
                      <span className="text-white">{track.title}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-400">{track.artist}</td>
                  <td className="py-3 px-4 text-gray-400">{track.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}