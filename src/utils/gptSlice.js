import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        // gptMovies:null
        movieNames: null,
        movieResults: null,
    },
    reducers: {
        toggleGptSearchView: (state, action) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult: (state, action) => {
            // state.gptMovies = action.payload;
            //adding movie no of movies which came as recommendation-> adding in same reducer
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
            //here we are setting to the state
        }
    }
});


export const { toggleGptSearchView,addGptMovieResult } = gptSlice.actions;

export default gptSlice.reducer