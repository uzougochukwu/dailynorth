import { React } from 'react'
import { NavLink } from "react-router"
import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar'
import './App.css'
import AllArticles from './components/AllArticles'

function App() {

  return (
    <div>
    <>
    <AllArticles/>
    </>
    </div>
  )

}

export default App
