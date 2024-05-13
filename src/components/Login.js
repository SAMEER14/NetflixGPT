import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase.js";

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)

    const [errorMessage, setErrorMessage] = useState(null);

    const toggleSignInForm = () =>{
        //on click we will change state 
        setIsSignInForm(!isSignInForm);
    }

    //using useRef Hook to get email and password
    const email = useRef(null); //null is initial value
    const password = useRef(null);
    const name = useRef(null);
    //now give reference to input boxes

    const handleButtonClick = () => {

        //we can login and sign up user by this button 
        //Validate the form data -(creating seperate file for validation data)
        
        // console.log(checkValidData());
        // console.log(email.current.value);
        const message = checkValidData(email.current.value, password.current.value);
        console.log(message);
        setErrorMessage(message);

        // if(message == null)
        // {    
                //no message return that means 
        //     //create new user (sign in /sign up here)
        // }
        //now after this validation , signIn , sign up works
        if(message) return; //or (!message then wrtie signup sign in logic )

        //else signIn / signUp user
        //First check it is signup form or signIn form

        //we can do auth once and use it 
        if(!isSignInForm) {
            //Sign Up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode +"-"+ errorMessage);
                // ..
            });

        }
        else {
            //Sign In logic
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode +"-"+ errorMessage);
            });
        }

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
    <form 
        onSubmit= {(e) => e.preventDefault() } 
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className='font-bold text-3xl py-4'>
            {/* make it on toggle on click on sign up */}
            {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>

        {/* adding name feature for sign up form */}
        {
            !isSignInForm && (
                <input
                ref={name} 
                type="text" 
                placeholder='Full Name' 
                className='p-4 my-4 w-full bg-gray-800'/>
            )
        }

        <input
        ref={email} 
        type="text" 
        placeholder='Email Address' 
        className='p-4 my-4 w-full bg-gray-800'/>

        <input
        ref={password} 
        type="password" 
        placeholder='Password' 
        className='p-4 my-4 w-full bg-gray-800'/>
        
        {/* error message for validation */}
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>

        <button 
        className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>
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
