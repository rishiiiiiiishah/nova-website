import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import EventGallery from './components/EventGallery/EventGallery';
import Magazines from './components/Magazine/Magazines';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/EventGallery",
    element: <EventGallery/>,
  },
  {
    path: "/magazine",
    element: <Magazines/>,
  },
 
  // {
  //   path: "signup",
  //   element: <SignUp/>,
  // },
  // {
  //   path: "signin",
  //   element: <SignIn/>,
  // },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
