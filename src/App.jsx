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
import Contact from './Components/Contact'

function App() {
    const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <Navbar open={open} setOpen={setOpen} />
      <ProductsPage />
      <Cart />
     <div className="absolute z-20 top-1 left-1  "> <Contact/></div>
      <Footer />
    </div>
  )
}

export default App
