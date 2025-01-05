import axios from "axios";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/slice/movieSlice";
import { TMDB_API_HEADER } from "../utils/constant";

const useNowPlayingMovies = () => {

    const dispatch = useDispatch();
    
    const getNowPlaying = useCallback(async () => {
        const response = await axios.get("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",TMDB_API_HEADER);
        dispatch(addNowPlayingMovies(response.data.results));
    },[dispatch]);

    useEffect(() => {
      getNowPlaying();
    },[getNowPlaying]);

}

export default useNowPlayingMovies;