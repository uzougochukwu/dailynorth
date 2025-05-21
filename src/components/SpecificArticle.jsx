import React, { useEffect, useState } from 'react'
import fetchSpecificArticle from '../GetSpecificArticleApi'
import { useParams } from 'react-router-dom'


function SpecificArticle() {
const parameter = useParams()


const [particularArticle, setParticularArticle] = useState([])
console.log(particularArticle);
useEffect(() => {
    fetchSpecificArticle(parameter.article_id)
    .then((individualArticle) => {
      
        // console.log(individualArticle.article.title);
        setParticularArticle(individualArticle)
    })
    .catch(console.log)
}, [])

  return (
    <div>
        <p>Body of article ID {particularArticle.article_id}: {particularArticle.body}</p></div>
  )
}

export default SpecificArticle