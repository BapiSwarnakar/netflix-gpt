import { useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { addSearchMovies } from '../utils/slice/movieSlice';
import axios from 'axios';
import { TMDB_API_HEADER } from '../utils/constant';

const useSearchMovie = () => {
    
    const dispatch = useDispatch();

    const getSearchMovie = useCallback(async (searchValue) =>{
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=1`, TMDB_API_HEADER);
            dispatch(addSearchMovies(response?.data?.results));
        } catch (error) {
            console.error(error);
        }
        
    },[dispatch]) 

    return getSearchMovie;
    
}

export default useSearchMovie
