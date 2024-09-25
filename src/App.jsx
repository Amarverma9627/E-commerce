import { useState } from 'react'
import './App.css'
import Navbar from "./Navbar"
import Product from "./Product"
import Popup from "./Popup.jsx";
function App() {

  return (
    <div>
      <Navbar />
      <Product />
      <Popup />
    </div>
  )
}

export default App;
