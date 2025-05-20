import React, { useEffect, useState } from 'react'
import fetchSpecificArticle from '../GetSpecificArticleApi'


function SpecificArticle() {

const [particularArticle, setParticularArticle] = useState([])

useEffect(() => {
    fetchSpecificArticle(3)
    .then((individualArticle) => {
        // console.log(individualArticle.article.title);
        setParticularArticle(individualArticle)
    })
    .catch(console.log)
}, [])

  return (
    <div>
        <p>Body of article ID 3: {particularArticle}</p></div>
  )
}

export default SpecificArticle