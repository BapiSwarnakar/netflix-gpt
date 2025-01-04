import axios from "axios";
import { useCallback, useEffect } from "react";
import { addTrailerVideo } from "../utils/slice/movieSlice";
import { useDispatch } from "react-redux";
import { TMDB_API_HEADER } from "../utils/constant";

const useVideoBackground = (nowPlayingMovies) => {

    const dispatch = useDispatch();

    const getMovieTrailer = useCallback(async (movie) => {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US`, TMDB_API_HEADER);
        const firstTrailer = response.data.results[0];
        const filterTrailer = response.data.results.filter((video) => video.type === "Trailer");
        const trailer = filterTrailer.length > 0 ? filterTrailer[0] : firstTrailer;
        dispatch(addTrailerVideo(trailer));
    },[dispatch]);

    useEffect(() => {  
        getMovieTrailer(nowPlayingMovies);
    }, [getMovieTrailer, nowPlayingMovies]);
}

export default useVideoBackground;