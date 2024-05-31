import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
        <div className='fixed -z-10'>
            <img
            className=''
            src={BG_URL}
            alt="background"
            />
        </div>
      {/* GPT search Bar
      GPT movie suggestions */}
      <GptSearchBar />
      <GptMovieSuggestions />

    </div>
  )
}

export default GptSearch
