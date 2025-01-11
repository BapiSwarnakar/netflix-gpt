import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PlaylistSection = (props) => {
    
    const playlistMovies = useSelector(
    (state) => state.movies?.searchMovies
    );
    if (!playlistMovies) return null;

    const scrollToClick = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
    
  return (
    <div className="w-full lg:w-[35%] xl:w-[30%] bg-gray-950 p-1">
      <div className="sticky top-4">
        <h2 className="text-lg font-semibold text-white mb-4">Up Next</h2>
        <div className="space-y-3 max-h-[calc(100vh-2rem)] overflow-y-auto scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-gray-600">
          {playlistMovies?.map((movie) => (
            <Link key={movie.id} to={`/search/${movie.id}?title=${movie.title}`} onClick={scrollToClick}>
            <div
              className="flex gap-3 p-2 hover:bg-gray-800/50 rounded-lg cursor-pointer group"
            >
              
              {/* Thumbnail with overlay on hover */}
              <div className="relative flex-shrink-0">
                <img
                  src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                  alt={movie.title}
                  className="w-40 h-24 object-cover rounded-lg sm:w-32 sm:h-20"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              </div>

              {/* Video Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-medium line-clamp-2">
                  {movie.title}
                </h3>
                <p className="text-gray-400 text-sm mt-1 line-clamp-1">
                  {movie.overview}
                </p>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaylistSection;
