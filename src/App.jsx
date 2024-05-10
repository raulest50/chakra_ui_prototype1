import { useState } from 'react';
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css';

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from 'react-router-dom'

import RootLayout from "./comps_ccourse/RootLayout.jsx";
import Dashboard from "./comps_ccourse/Dashboard.jsx";
import Create from "./comps_ccourse/Create.jsx";
import Profile from "./comps_ccourse/Profile.jsx";

//import RoutesTutorial1 from "./Componentes/RoutesTutorial1.jsx";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>
            <Route index element={<Dashboard/>} />
            <Route path="create" element={<Create/>} />
            <Route path="profile" element={<Profile/>} />
        </Route>
    )
)

function App() {
  return (
      <>
        <RouterProvider router={router} />
      </>
  )
}

export default App;
