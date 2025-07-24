import React, { useEffect, useState } from 'react'
import fetchAllArticlesOfTopic from '../API'

function AllArticlesTopic() {
const [articles, setArticles] = useState([])
const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
    fetchAllArticlesOfTopic()
    .then((allArticlesOfTopicFromApi) => {
        
        setArticles(allArticlesOfTopicFromApi)
        setIsLoading(false)
    })
    .catch(console.log)
}, [])

if (isLoading) {
  return <p>Loading...</p>
}

  return (
    

    <div>
       
      A List of all our articles: {articles.map((article) => {

      const link = "/articles/" + article.article_id
      const link2 = "/topics"
        
        return <p key={article.article_id}> {article.title} <a href={link}>
        <button>Go to article</button>
      </a> <a href={link2}><button> Go to all topics</button></a>   </p> 
        
    })}</div>
  )
}

export default AllArticlesTopic