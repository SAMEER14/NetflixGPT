import  { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies } from '../utils/moviesSlice';

//custom hook
const usePopularMovies = () => {

    //Fetch dat from TMDB API and update store
    const dispatch = useDispatch();

    //using memoization
    const popularMovies = useSelector(store => store.movies.popularMovies);

    const getPopularMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular", API_OPTIONS);
    const json = await data.json();
    console.log(json.results);

    //add this json data to movies slice store -> dispatch an action
    dispatch(addPopularMovies(json.results));
    };

    useEffect(() => {
    !popularMovies && getPopularMovies();
    }, [])

}


export default usePopularMovies;
