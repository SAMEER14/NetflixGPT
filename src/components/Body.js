import React from 'react'
import {createBrowserRouter, } from "react-router-dom";
import Login from './Login';
import Browse from './Browse';
import { RouterProvider } from 'react-router-dom';
// import { useEffect } from 'react';
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../utils/firebase";
// import { useDispatch } from 'react-redux';
// import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {

 

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



  return (
    <div>
      {/* <Login />
      <Browse /> */}
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
