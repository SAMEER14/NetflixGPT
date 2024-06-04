import  { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';

//custom hook
const useNowPlayingMovies = () => {

    //Fetch dat from TMDB API and update store
    const dispatch = useDispatch();

    /*
    -> memoization(used to over come evrytime page call api call it we visit the page again that is if our store already have the data dont call api again , so check it in store)
    */
    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);

    const getNowPlayingMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", API_OPTIONS);
    const json = await data.json();
    // console.log(json.results);

    //add this json data to movies slice store -> dispatch an action
    dispatch(addNowPlayingMovies(json.results));
    };

    useEffect(() => {
        if(!nowPlayingMovies) getNowPlayingMovies(); //checking if nowPlayingMovies not there then only call getNowPlayingMovies
        // OR CALL like this ->" !nowPlayingMovies && getNowPlayingMovies();"
    // getNowPlayingMovies();
    }, [])

}


export default useNowPlayingMovies;
