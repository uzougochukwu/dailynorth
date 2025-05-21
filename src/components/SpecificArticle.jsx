import React, { useEffect, useState } from 'react'
import {fetchSpecificArticle} from '../API'
import { useParams } from 'react-router-dom'


function SpecificArticle() {
const parameter = useParams()


const [particularArticle, setParticularArticle] = useState([])
const [isLoading, setIsLoading] = useState(true)


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
      <p>Title: {particularArticle.title}</p>
      <p>Author: {particularArticle.author}</p>
      <p>Topic: {particularArticle.topic}</p>
      <p>Number of comments: {particularArticle.count}</p>
      <img src={particularArticle.article_img_url}></img>
        <p>{particularArticle.body}</p>
        </div>
  )
}

export default SpecificArticle