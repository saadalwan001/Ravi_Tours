import React from 'react'
import {Routes, Route} from "react-router-dom";

//Importing Pages
import Homepage from './Homepage';



export default function routes() {
  return (
    <>
    <Routes>
        {/* Open Pages */}

        <Route path='/' element={<Homepage/>}/>

    </Routes>
    
    </>
  )
}
