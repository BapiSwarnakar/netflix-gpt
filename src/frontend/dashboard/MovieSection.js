import React from "react";
import MovieSlider from "./MovieSlider";
import { useSelector } from "react-redux";

const MovieSection = () => {
  
	const movies = useSelector((state) => state.movies);
  
  const nowPlayingMovies = movies?.nowPlayingMovies;
  if (!nowPlayingMovies) return null;
  
  const popularMovies = movies?.popularMovies;
  if (!popularMovies) return null;

  const topRatedMovies = movies?.topRatedMovies;
  if (!topRatedMovies) return null;

  const upcomingMovies = movies?.upcomingMovies;
  if (!upcomingMovies) return null;

  return (
    <>
      <div className="relative md:p-2 -mt-36">
        <MovieSlider title="Now Playing Movies" movies={nowPlayingMovies} />
      </div>
      <MovieSlider title="Popular Movies" movies={popularMovies} />
      <MovieSlider title="Top Rated Movies" movies={topRatedMovies} />
      <MovieSlider title="Upcoming Movies" movies={upcomingMovies} />
    </>
  );
};

export default MovieSection;
