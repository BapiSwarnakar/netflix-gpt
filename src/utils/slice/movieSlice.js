import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        nowPlayingMovies: null,
        trailerVideo : null,
        popularMovies : null,
        topRatedMovies : null,
        upcomingMovies : null,
        searchMovies : null,
        searchPlaylistMovies : null,
        
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addSearchMovies: (state, action) => {
            state.searchMovies = action.payload;
        },
        addSearchPlaylistMovies: (state, action) => {
            state.searchPlaylistMovies = action.payload;
        }
    },
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addSearchMovies, addSearchPlaylistMovies } = movieSlice.actions;
export default movieSlice.reducer;

