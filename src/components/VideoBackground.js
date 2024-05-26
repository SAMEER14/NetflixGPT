// import React, { useEffect, useState } from 'react';
// import { API_OPTIONS } from '../utils/constants';
// import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';
// import { addTrailerVideo } from '../utils/moviesSlice';

const VideoBackground = ({movieId}) => {

  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  //dispatch action


  //fetch trailer video && updating the store with trailer video data
  useMovieTrailer(movieId);
  console.log(movieId);

  return (
    <div>
      {/* <h1>VideoBackground</h1> */}
      {/* to use dynamic key here -> 
      1 way =>can use state variable
      2 way => other way is to user redux store then we dont need to create state variable 
      add action , dispatch and fetch from store to use it  */}
     
      {/* <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + trailerId}  */}
      <iframe className="w-screen aspect-video" src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?autoplay=1&mute=1" } 

      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  )
}

export default VideoBackground


//fetch trailer video
// -> to fetch we need movie id
//-> movie id from movies id 