import React, { useState } from 'react'
import './App.css'
import AllArticles from './components/AllArticles'
import SpecificArticle from './components/SpecificArticle'
import { Routes, Route } from "react-router-dom"
import SpecificArticleComments from './components/SpecificArticleComments'

function App() {

  return (
    <div>
      <h1>dailynorth</h1>
<Routes>
<Route path="/" element ={<AllArticles/>}/>
<Route path="/articles/:article_id" element={<SpecificArticle/>}/>
<Route path="/articles/:article_id/comments" element={<SpecificArticleComments/>}/>
</Routes>
  </div>
  )
}

export default App
