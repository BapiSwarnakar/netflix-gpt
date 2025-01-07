import React from 'react'
import SearchMoviePlaySection from './SearchMoviePlaySection'
import MovieSection from './MovieSection'
import useNowPlayingMovies from '../../hooks/useNowPlayingMovies'

const SearchMovie = () => {
  useNowPlayingMovies();
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
