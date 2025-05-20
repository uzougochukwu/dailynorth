import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <nav>
        <Link to="/api/articles">Articles</Link>
        
    </nav>
  )
}

export default Navbar