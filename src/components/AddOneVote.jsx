import React, { useEffect, useState } from 'react'
import { voteForArticle } from '../API'
import { useParams } from 'react-router-dom'


function AddOneVote() {

const parameter = useParams()

const [voteCount, setVoteCount] = useState(0)

const [error, setError] = useState(null)

useEffect(() => {
    voteForArticle(parameter.article_id)
    .then((voteCount) => {
        setVoteCount(voteCount)   
        setError(null)     
    })
    .catch(() => {
      setVoteCount((currentVoteCount) => 
        currentVoteCount - 1)     
      setError({ message: "Sorry, your vote did not go through "})
    })
}, [])

const handleVote = () => {
    setVoteCount((currentVoteCount) => 
        currentVoteCount + 1)     
    }



  return (
    <div>AddOneVote
    <button onClick={handleVote}>Vote</button>
    {error ? <p>{error}</p> : null}
    <p>{voteCount}</p>
    </div>    
  )
}

export default AddOneVote