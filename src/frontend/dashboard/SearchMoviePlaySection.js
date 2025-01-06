import React from 'react'
import { useSelector } from 'react-redux';
import SearchVideo from './SearchVideo';

const SearchMoviePlaySection = () => {


  const nowPlayingMovies = useSelector((state) => state.movies?.nowPlayingMovies);
  if(!nowPlayingMovies) return null;
  const nowPlayingFirstMovie = nowPlayingMovies[0];
  return (
    <div className="grid grid-cols-[2fr,1fr] h-screen">
        {/* Left Column - Video */}
        <div className="relative">
            <SearchVideo nowPlayingMovies = {nowPlayingFirstMovie} />
        </div>

        {/* Right Column - Playlist */}
        <div className="bg-gray-900 overflow-y-auto scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-gray-600">
                {/* Add your playlist content here */}
        </div>
    </div>
  );
}

export default SearchMoviePlaySection
