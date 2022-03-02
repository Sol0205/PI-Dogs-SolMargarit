import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from '../components/LandingPage'
import Home from '../components/Home'
import DogCreate from '../components/DogCreate'
import DetailCard from '../components/DetailCard'

function Rutas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage/>} />
                <Route path='/home' element={<Home/>}/>
                <Route path='/home/dogCreate' element={<DogCreate/>} />
                <Route path='/home/:id' element={<DetailCard/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas