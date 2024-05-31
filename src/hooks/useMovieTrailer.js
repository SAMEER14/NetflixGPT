import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();


    //memoization
    const trailerVideo = useSelector(store => store.movies.trailerVideo);
  
    //state variable for YT key from json data trailer
    // const [trailerId, setTrailerId ] =useState(null);

    console.log(movieId);

    const getMovieVideos = async () => {
        // const data = await fetch('https://api.themoviedb.org/3/movie/823464/videos', API_OPTIONS);
      
        //using dynamic
        // const data = await fetch("https://api.themoviedb.org/3/movie/"+{movieId}+"/videos",API_OPTIONS);
        const data = await fetch("https://api.themoviedb.org/3/movie/"+ movieId +"/videos",API_OPTIONS);

        // const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS);

        //we will import this options , not writing again and again , good practice and also if writing in all places then you need to change in every place if token changes
        const json = await data.json();
        console.log(json);
        //this json gives clip, trailers, teaser any many more videos 
        //we will fetch the trailer to display in videobackground
    
        //trailer -> filter the results
        const filterData = json.results.filter(video => video.type === "Trailer");
        console.log(filterData);
        //if filterData is empty then also show result accordingly
        const trailer = filterData.length ? filterData[0] : json.results[0];
        //checks filterlength is there show first video from trailer type and if not there then just play the first video in json result
        console.log(trailer);
        //this data will have a key and this key is from youtube , so will play from there and play on our page
    
    
        // setTrailerId(trailer.key);
    
        //by redux store
        dispatch(addTrailerVideo(trailer));
    
    
      }
    
      //call this is useEffect
      useEffect(() => {
        !trailerVideo && getMovieVideos();
      },[])

}

export default useMovieTrailer;