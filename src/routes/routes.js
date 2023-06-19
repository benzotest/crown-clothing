import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import App from '../App.js';
import Homepage from '../pages/Homepage/Homepage.js';
import Shop from '../pages/Shop/Shop.js';
import SignInSignUp from '../pages/SignInSignUp/SignInSignUp.js';
import Header from '../components/Header/Header.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header/>,
    errorElement: <h1> ERROR1 </h1>,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: "/hats",
        element: <h1>HATS</h1>
      },
      {
        path: "/hats",
        element: <h1>HATS</h1>
      },
      {
        path: "/sneakers",
        element: <h1>SNEAKERS</h1>
      },
      {
        path: "/jackets",
        element: <h1>JACKETS</h1>
      },
      {
        path: "/women",
        element: <h1>WOMEN</h1>
      },
      {
        path: "/men",
        element: <h1>MEN</h1>
      },
      {
        path: "/shop",
        element: <Shop/>
      },
      {
        path: "/signin",
        element: <SignInSignUp/>
      }
    ]
  }
]);

export default router;