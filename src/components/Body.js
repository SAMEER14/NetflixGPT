import React from 'react'
import {createBrowserRouter} from "react-router-dom";
import Login from './Login';
import Browse from './Browse';
import { RouterProvider } from 'react-router-dom';

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
