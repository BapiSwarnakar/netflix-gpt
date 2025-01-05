import React from 'react';
import useNowPlayingMovies from '../../hooks/useNowPlayingMovies';
import HeroSection from './HeroSection';
import MovieSection from './MovieSection';
import usePopularMovies from '../../hooks/usePopularMovies';
import useTopRatedMovies from '../../hooks/useTopRatedMovies';
import useUpcomingMovies from '../../hooks/useUpcomingMovies';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <>
      <HeroSection />
      <MovieSection />
    </>
  )
}

export default Browse
