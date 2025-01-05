import axios from "axios";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/slice/movieSlice";
import { TMDB_API_HEADER } from "../utils/constant";

const useUpcomingMovies = () => {

    const dispatch = useDispatch();
    
    const getUpcomingMovies = useCallback(async () => {
        const response = await axios.get("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",TMDB_API_HEADER);
        dispatch(addUpcomingMovies(response.data.results));
    },[dispatch]);

    useEffect(() => {
      getUpcomingMovies();
    },[getUpcomingMovies]);

}

export default useUpcomingMovies;