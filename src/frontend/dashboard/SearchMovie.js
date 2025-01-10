import React from 'react'
import SearchMoviePlaySection from './SearchMoviePlaySection'
import MovieSection from './MovieSection'
import { useLocation, useParams } from 'react-router-dom'
import usePlaylistMovies from '../../hooks/usePlaylistMovies'
import useNowPlayingMovies from '../../hooks/useNowPlayingMovies'
import usePopularMovies from '../../hooks/usePopularMovies'
import useTopRatedMovies from '../../hooks/useTopRatedMovies'
import useUpcomingMovies from '../../hooks/useUpcomingMovies'
import useSearchMovie from '../../hooks/useSearchMovie'

const SearchMovie = () => {
  const {movieId} = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const title = queryParams.get('title');
  const getSearchMovie = useSearchMovie();
  
  getSearchMovie(title);
  usePlaylistMovies(movieId);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <>
      <SearchMoviePlaySection/>
      <div className="mt-32">
        <MovieSection />
      </div>
    </>
  )
}

export default SearchMovie
