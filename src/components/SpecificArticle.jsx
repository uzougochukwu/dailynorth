import React, { useEffect, useState } from 'react'
import fetchSpecificArticle from '../GetSpecificArticleApi'
import { useParams } from 'react-router-dom'


function SpecificArticle() {
const parameter = useParams()


const [particularArticle, setParticularArticle] = useState([])
const [isLoading, setIsLoading] = useState(true)

console.log(particularArticle);

useEffect(() => {
    fetchSpecificArticle(parameter.article_id)
    .then((individualArticle) => {
        setParticularArticle(individualArticle)
        setIsLoading(false)
    })
    .catch(console.log)
}, [])


if (isLoading) {
  return <p>Loading...</p>
}

  return (
    <div>
        <p>Body of article ID {particularArticle.article_id}: {particularArticle.body}</p></div>
  )
}

export default SpecificArticle