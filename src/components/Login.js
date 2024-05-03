import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)

    const toggleSignInForm = () =>{
        //on click we will change state 
        setIsSignInForm(!isSignInForm);
    }


  return (
    <div>
      <Header />
        <div>
            <img
            className='absolute'
            src="
            https://assets.nflxext.com/ffe/siteui/vlv3/d253acf4-a1e2-4462-a416-f78802dc2d85/f04bf88c-f71c-4d02-82ed-adb870b8f8db/IN-en-20240429-POP_SIGNUP_TWO_WEEKS-perspective_WEB_658a042e-62cf-473d-8da0-7b875f23e2ef_medium.jpg"
            alt="background"
            />
        </div>

    {/* Login form */}
    <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className='font-bold text-3xl py-4'>
            {/* make it on toggle on click on sign up */}
            {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>

        {/* adding name feature for sign up form */}
        {
            !isSignInForm && (
                <input 
                type="text" 
                placeholder='Full Name' 
                className='p-4 my-4 w-full bg-gray-800'/>
            )
        }

        <input 
        type="text" 
        placeholder='Email Address' 
        className='p-4 my-4 w-full bg-gray-800'/>

        <input 
        type="password" 
        placeholder='Password' 
        className='p-4 my-4 w-full bg-gray-800'/>

        <button 
        className='p-4 my-6 bg-red-700 w-full rounded-lg'>
            {/* same for button toggle feature */}
            {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {/* <p className='py-4'> {isSignInForm ? "New to Netflix?": "Already registered Sign In Now.." } <span className='cursor: pointer' onClick={toggleSignInForm}>Sign up now.</span></p> */}
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}> 
        {isSignInForm ? 
        "New to Netflix? Sign Up Now.." : 
        "Already registered? Sign In Now.." }
        </p>

    </form>
    </div>
  )
}

export default Login
