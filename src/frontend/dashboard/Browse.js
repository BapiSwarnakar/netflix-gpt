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
    <>
      <HeroSection />
      <MovieSlider title = "Now Playing Movies" movies = {nowPlayingMovies}/>
      <MovieSlider title = "Top Movies" movies = {nowPlayingMovies}/>
      <MovieSlider title = "Trending Movies" movies = {nowPlayingMovies}/>
      <MovieSlider title = "Horror Movies" movies = {nowPlayingMovies}/>

    </>
  )
}

export default Browse
