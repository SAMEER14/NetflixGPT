import React from 'react'
import {createBrowserRouter, useNavigate } from "react-router-dom";
import Login from './Login';
import Browse from './Browse';
import { RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {

    //dispatch hook
    const dispatch = useDispatch();
    //navigate hook
    // const navigate = useNavigate();

    const appRouter = createBrowserRouter([
        
        // {
        //     path: "/",
        //     element: <Body/>
        // },
        {
            path: "/browse",
            element: <Browse/>
        },
        {
            path: "/",
            element: <Login/>
        }

    ]);

    //onAuthStateChange Api call (we can call this in body or app doesnt matter)
    useEffect(() => {
      // const auth = getAuth();
      onAuthStateChanged(auth, (user) => {

        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          // const uid = user.uid;
          // ...
          //WE CAN GET MANY THINGS FROM USER OBJECT
          const { 
            uid,
            email, 
            displayName,
            photoURL } = user;
          // dispatch an action
          dispatch(
            addUser({ 
            uid: uid, 
            email: email, 
            displayName: displayName, 
            photoURL: photoURL 
          }));
        
          //when signin/signup how to navigate to browse page
          //use Navigate hook
          // navigate("/browse");
        } 
        
        else {
          // User is signed out
          // ...
          dispatch(removeUser());

          // navigate("/");
        }

      });

    },[])

  return (
    <div>
      {/* <Login />
      <Browse /> */}
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
