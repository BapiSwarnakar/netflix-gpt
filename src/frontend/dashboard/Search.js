import React, { useState } from 'react';
import {  useSelector } from 'react-redux';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import useSearchMovie from '../../hooks/useSearchMovie';

const Search = () => {
  const [searchMovie, setSearchMovie] = useState('');
  const [showResults, setShowResults] = useState(false);
  const getSearchMovies = useSelector((state)=> state.movies.searchMovies);
  const getSearchMovie = useSearchMovie();
  
  const handleSearch = async (e) => {
    setSearchMovie(e.target.value);
    if(!e.target.value.length){
        setShowResults(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchMovie.length > 0) {
      try {
        getSearchMovie(searchMovie);
        setShowResults(true);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setShowResults(false);
      }
    }
  };


 
  const handleSearchPopup = () => {
    setShowResults(false);
    setSearchMovie('');
  }

  return (
    <div className="relative">
      <form onSubmit={handleSubmit}  method="POST" className="space-y-6">
      <div className="flex">
        <input
          type="text"
          required
          value={searchMovie}
          onChange={handleSearch}
          placeholder="Search..."
          className="flex-grow w-1/2 rounded-l-md border border-red-300 py-2 pl-3 focus:border-red-500 focus:ring-red-500 sm:text-sm"
        />
        <button
          type="submit"
          className="bg-red-500 text-white px-4 py-2 rounded-r-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <MagnifyingGlassIcon className="h-5 w-5 text-white-400" aria-hidden="true" />
        </button>
      </div>
      </form>
      {showResults && (
       <div className="absolute opacity-95 z-20 w-full mt-1 bg-gray-950 border border-gray-950 rounded-md shadow-lg max-h-[80vh] overflow-y-auto">
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4"> */}
        {getSearchMovies?.map((movie) => (
          <div class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-600">
          <div class="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.title}
              className="w-20 h-auto rounded-lg object-cover"
            />
          </div>
          <div>
            <Link to={`/search/${movie.id}?title=${movie.title}`} onClick={handleSearchPopup} class="font-semibold text-white">
              {movie.title}
              <span class="absolute inset-0"></span>
            </Link>
            {/* <p class="mt-1 text-white">{movie.overview}</p> */}
          </div>
        </div>
        ))}
      {/* </div> */}
    </div>
      )}
    </div>
  );
};

export default Search;
