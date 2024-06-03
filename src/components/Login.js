import React, { useRef, useState, } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase.js";
// import { useNavigate } from 'react-router-dom';
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice.js';
import { BG_URL, USER_AVATAR } from '../utils/constants.js';

const Login = () => {

    const dispatch = useDispatch();
    // const navigate = useNavigate();
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

                    //once user is created ,then update user profile
                    // updateProfile(auth.user, {
                    updateProfile(user, {
                        displayName: name.current.value, 
                        photoURL: USER_AVATAR 
                    })
                    .then(() => {
                    // Profile updated!
                    // ...
                    // updating store once again as earlier in onAuthstatechange, updating store in body we were not getting name and photoURL in starting so disapatching here itself
                    
                    const { 
                        uid,
                        email, 
                        displayName,
                        photoURL } = auth.currentUser;
                        // now it will be auth instead of user , because its new auth information value
                        dispatch(
                            addUser({ 
                            uid: uid, 
                            email: email, 
                            displayName: displayName, 
                            photoURL: photoURL 
                      }));
                    // navigate("/browse");

                }).catch((error) => {
                // An error occurred
                // ...
                setErrorMessage(error.message);
                });

                console.log(user);
                // ...
                // navigate("/browse");
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
                // console.log(user);
                // ...
                // navigate("/browse");
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
        <div className="absolute inset-0">
            <img
            // className='h-screen object-cover'
            className='w-full h-full object-cover fixed'
            src={BG_URL}
            alt="background"
            />
        </div>

    {/* Login form */}
    <form 
        onSubmit= {(e) => e.preventDefault() } 
        className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
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
                className='p-4 my-4 w-full bg-gray-700'/>
            )
        }

        <input
        ref={email} 
        type="text" 
        placeholder='Email Address' 
        className='p-4 my-4 w-full bg-gray-700'/>

        <input
        ref={password} 
        type="password" 
        placeholder='Password' 
        className='p-4 my-4 w-full bg-gray-700'/>
        
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
