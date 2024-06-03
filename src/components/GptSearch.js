import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
    <div className="relative">
      <div className="fixed -z-10 inset-0">
        {/* <img className="h-screen object-cover" src={BG_URL} alt="logo" /> */}
        <img className="w-full h-full object-cover" src={BG_URL} alt="logo" />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
      {/* GPT search Bar
      GPT movie suggestions */}

    </div>
    </>
  )
}

export default GptSearch
