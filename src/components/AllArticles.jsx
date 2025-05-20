import React, { useEffect, useState } from 'react'
import fetchAllArticles from '../GetAllArticlesApi'

function AllArticles() {
const [articles, setArticles] = useState([])

useEffect(() => {
    fetchAllArticles()
    .then((allArticlesFromApi) => {
        console.log(allArticlesFromApi)
        setArticles(allArticlesFromApi)
    })
    .catch(console.log)
}, [])

  return (
    <div>A List of all our articles: {articles.map((article) => {

        
        return <p key={article.article_id}> {article.title} </p>
    })}</div>
  )
}

export default AllArticles