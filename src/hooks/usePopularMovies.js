import axios from "axios";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/slice/movieSlice";
import { TMDB_API_HEADER } from "../utils/constant";

const usePopularMovies = () => {

    const dispatch = useDispatch();
    
    const getPopularMovies = useCallback(async () => {
        const response = await axios.get("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",TMDB_API_HEADER);
        dispatch(addPopularMovies(response.data.results));
    },[dispatch]);

    useEffect(() => {
      getPopularMovies();
    },[getPopularMovies]);

}

export default usePopularMovies;