import React from "react";
import MovieSlider from "./MovieSlider";
import { useSelector } from "react-redux";
import MovieSectionShimmer from "../shimmer/MovieSectionShimmer";

const MovieSection = () => {
  
	const movies = useSelector((state) => state.movies);
  
  const nowPlayingMovies = movies?.nowPlayingMovies;
  
  const popularMovies = movies?.popularMovies;

  const topRatedMovies = movies?.topRatedMovies;

  const upcomingMovies = movies?.upcomingMovies;

  return (
    <>
    
      <div className="relative md:p-2 -mt-36">
      {!nowPlayingMovies ? (
        <MovieSectionShimmer />
      ) : (
        <MovieSlider title="Now Playing Movies" movies={nowPlayingMovies} />
      )}
      </div>
      {!popularMovies ? (
        <MovieSectionShimmer />
      ) : (
        <MovieSlider title="Popular Movies" movies={popularMovies} />
      )}
      {!topRatedMovies ? (
        <MovieSectionShimmer />
      ) : (
        <MovieSlider title="Top Rated Movies" movies={topRatedMovies} />
      )}
      {!upcomingMovies ? (
        <MovieSectionShimmer />
      ) : (
        <MovieSlider title="Upcoming Movies" movies={upcomingMovies} />
      )}
      

    </>
  );
};

export default MovieSection;
