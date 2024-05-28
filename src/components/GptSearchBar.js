import React from 'react';
import lang from '../utils/languageConstant';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {

    //we will get lang from useSelector store
    const langKey = useSelector(store => store.config.lang);

  return (
    <div className='pt-[35%] md:pt-[10%] flex justify-center'>
      <form className='w-full md:w-1/2 bg-black grid grid-cols-12'>
        <input type="text" 
        className='p-4 m-4 col-span-9'
        // placeholder='What you want to watch today?' 
        // placeholder= {lang.langKey.gptSearchPlaceholder} 
        //passing dynamic langKey
        placeholder= {lang[langKey].gptSearchPlaceholder}
        />
        <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'>
            {/* Search */}
            {lang[langKey].search}
        </button>
      </form>
    </div> 
  )
}

export default GptSearchBar;
