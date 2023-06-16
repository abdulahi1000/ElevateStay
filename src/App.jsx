import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing_page from './pages/website/Landing_page'
import { Routes, Route, HashRouter } from 'react-router-dom'
import ApartmentDetailPage from './pages/website/ApartmentDetailPage'
import Rent from './pages/website/Rent'
import CartPage from './pages/website/CartPage'
import AboutPage from './pages/website/AboutPage'
import FaqPage from './pages/website/FaqPage'

function App() {

  return (   
    <HashRouter>
    <Routes>
      <Route exact path='/' element={<Landing_page/>}/>
      <Route path='/apartment/:id/' element={<ApartmentDetailPage/>}/>
      <Route exact path='/rent' element={<Rent/>}/>
      <Route exact path='/cart' element={<CartPage/>}/>
      <Route exact path='/about' element={<AboutPage/>}/>
      <Route exact path='/faq' element={<FaqPage/>}/>

    </Routes>
    </HashRouter>
   
  )
}

export default App
