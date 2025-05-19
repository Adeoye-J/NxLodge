import React from 'react'
import "./App.css"
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Properties from './pages/Properties'
import NavBar from './components/HomeComponents/NavBar'
import Footer from './components/GeneralComponents/Footer'

const App = () => {
  return (
    <div className='max-w-[1440px] m-auto'>
        <NavBar />
        <Routes>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/properties' element={<Properties />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App