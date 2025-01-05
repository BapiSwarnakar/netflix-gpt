import axios from 'axios';
import React, { useState } from 'react';
import { TMDB_API_HEADER } from '../../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addSearchMovies } from '../../utils/slice/movieSlice';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchMovie = () => {
  const dispatch = useDispatch();
  const [searchMovie, setSearchMovie] = useState('');
  const [showResults, setShowResults] = useState(false);
  const getSearchMovies = useSelector((state)=> state.movies.searchMovies);

  const handleSearch = async (e) => {
    setSearchMovie(e.target.value);
    if(!e.target.value.length){
        setShowResults(false);
    }
  };

  const handleButtonClick = async () => {
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


  const getSearchMovie = async (searchValue) =>{
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=1`, TMDB_API_HEADER);
    dispatch(addSearchMovies(response?.data?.results));
  } 

  return (
    <div className="relative">
      <div className="flex">
        <input
          type="text"
          value={searchMovie}
          onChange={handleSearch}
          placeholder="Search..."
          className="flex-grow w-1/2 rounded-l-md border border-red-300 py-2 pl-3 focus:border-red-500 focus:ring-red-500 sm:text-sm"
        />
        <button
          onClick={handleButtonClick}
          className="bg-red-500 text-white px-4 py-2 rounded-r-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <MagnifyingGlassIcon className="h-5 w-5 text-white-400" aria-hidden="true" />
        </button>
      </div>
      {showResults && (
        <div className="absolute opacity-95 z-20 w-full mt-1 bg-gray-950 border border-gray-950 rounded-md shadow-lg">
          <ul>
            {getSearchMovies && getSearchMovies.map((result, index) => (
              <li
                key={result.original_title}
                className="px-4 py-2 text-white hover:bg-gray-600 cursor-pointer"
                onClick={() => setSearchMovie(result.original_title)}
              >
                {result.original_title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchMovie;
