import axios from "axios";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/slice/movieSlice";
import { TMDB_API_HEADER } from "../utils/constant";

const useTopRatedMovies = () => {

    const dispatch = useDispatch();
    
    const getTopRatedMovies = useCallback(async () => {
        const response = await axios.get("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",TMDB_API_HEADER);
        dispatch(addTopRatedMovies(response.data.results));
    },[dispatch]);

    useEffect(() => {
      getTopRatedMovies();
    },[getTopRatedMovies]);

}

export default useTopRatedMovies;