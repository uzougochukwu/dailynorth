import React from 'react'
import { useParams } from 'react-router-dom'
import { commentOnArticle } from '../API'

function AddComment() {

const parameter = useParams()

const [commentUsername, setUsername] = useState("")

const [commentBody, setBody] = useState("")

function onSubmit() {

    commentOnArticle(parameter.article_id, commentUsername, commentBody)
    setUsername("")
    setBody("")
}



return (
    <form onSubmit={onSubmit}>
        <h3>Add a comment</h3>
        <label>Username</label>
        <input
        type="text"
        onChange={(e) => {
            setUsername(e.target.value)
        }}
        commentUsername={input}
        />
        <label>Comment Body</label>
        <input
        type="text"
        onChange={(e) => {
            setBody(e.target.value)
        }}
        commentBody={input}
        />

    </form>
  )
}

export default AddComment