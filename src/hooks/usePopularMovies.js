import  { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/moviesSlice';

//custom hook
const usePopularMovies = () => {

    //Fetch dat from TMDB API and update store
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular", API_OPTIONS);
    const json = await data.json();
    console.log(json.results);

    //add this json data to movies slice store -> dispatch an action
    dispatch(addPopularMovies(json.results));
    };

    useEffect(() => {
    getPopularMovies();
    }, [])

}


export default usePopularMovies;
