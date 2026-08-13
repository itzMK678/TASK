import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Objcard from './Components/Objcard'
import ProductsPage from './Pages/ProductsPage'
import Cart from './Components/Cart'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <ProductsPage />
      <Cart />
      <Footer />
    </>
  )
}

export default App
