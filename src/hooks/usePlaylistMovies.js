import axios from 'axios';
import { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addSearchPlaylistMovies } from '../utils/slice/movieSlice';
import { TMDB_API_HEADER } from '../utils/constant';

const usePlaylistMovies = (movieId) => {
    const dispatch = useDispatch();
    const getPlaylistMovies = useCallback(async (movie) => {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, TMDB_API_HEADER);
        const playlist = response.data.results
        // const filterTrailer = response.data.results.filter((video) => video.type === "Trailer");
        dispatch(addSearchPlaylistMovies(playlist));
    },[dispatch, movieId]);

    useEffect(() => {  
        getPlaylistMovies(movieId);
    }, [getPlaylistMovies, movieId]);
}

export default usePlaylistMovies
