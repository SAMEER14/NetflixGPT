import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'>
      {/* <h1>Movie Card</h1> */}
      <img alt="Movie poster"
      src ={IMG_CDN_URL+ posterPath } />
    </div>
  )
}

export default MovieCard;
