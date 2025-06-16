import React, { useEffect, useState } from 'react'
import fetchAllArticles from '../API'

function AllArticles() {
const [articles, setArticles] = useState([])
const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
    fetchAllArticles()
    .then((allArticlesFromApi) => {
        
        setArticles(allArticlesFromApi)
        setIsLoading(false)
    })
    .catch(console.log)
}, [])

if (isLoading) {
  return <p>Loading...</p>
}

  return (


    <div>A List of all our articles: {articles.map((article) => {

      const link = "/articles/" + article.article_id
        
        return <p key={article.article_id}> {article.title} <a href={link}>
        <button>Go to article</button>
      </a>    </p>
        
    })}</div>
  )
}

export default AllArticles