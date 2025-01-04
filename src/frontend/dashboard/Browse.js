import React from 'react';
import useNowPlayingMovies from '../../hooks/useNowPlayingMovies';
import HeroSection from './HeroSection';
import { useSelector } from 'react-redux';
import MovieSlider from './MovieSlider';

const Browse = () => {
  useNowPlayingMovies();
  const nowPlayingMovies = useSelector((state) => state.movies?.nowPlayingMovies);
  if(!nowPlayingMovies) return null;
  return (
    <div className="relative w-full h-screen">
      <HeroSection />
      <MovieSlider title = "Now Playing Movies" movies = {nowPlayingMovies}/>
    </div>
  )
}

export default Browse
