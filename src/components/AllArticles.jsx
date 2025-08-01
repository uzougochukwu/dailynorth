import React, { useEffect, useState } from 'react'
import fetchAllArticles from '../API'
import { useSearchParams } from 'react-router-dom'

function AllArticles() {
  const [searchParams, setSearchParams] = useSearchParams();
  const topic = searchParams.get("topic");
  const sort = searchParams.get("sort_by") || "created_at";
  //const sort = searchParams.get("sort") 


const [articles, setArticles] = useState([])
const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
    fetchAllArticles({topic, sort})
    .then((allArticlesFromApi) => {
        
        setArticles(allArticlesFromApi)
        setIsLoading(false)
    })
    .catch(console.log)
}, [searchParams])

if (isLoading) {
  return <p>Loading...</p>
}

  return (
    

    <div>
       
      A List of all our articles: {articles.map((article) => {

      const link = "/articles/" + article.article_id
      const link2 = "/topics"
      const link3 = "/sort"
        
        return <p key={article.article_id}> {article.title} <a href={link}>
        <button>Go to article</button>
      </a> <a href={link2}><button> Go to all topics</button></a>
      <a href={link3}><button> Go to all sort options</button></a>   </p> 
        
    })}</div>
  )
}

export default AllArticles