import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { commentOnArticle } from "../API";
import axios from "axios";

function AddComment() {
  const parameter = useParams();

  const [commentUsername, setUsername] = useState("");

  const [commentBody, setBody] = useState("");

  const [error, setError] = useState(null);

  const sendComment = () => {
    axios
      .post(
        `https://news-api-h2gt.onrender.com/api/articles/${parameter.article_id}/comments`,
        {
          username: commentUsername,
          body: commentBody,
        }
      )
      .then((response) => {
        return response.data;
      })
      .catch(setError(true),
      console.log("no comment added"));
  };

  if (error){
    return (<div> Cannot add a comment</div>)
  } else{

  return (
    <div>
      <button onClick={sendComment}>Add Comment</button>
      <p>
        Username
        <input
          type="text"
          value={commentUsername}
          onChange={(e) => setUsername(e.target.value)}
        />
      </p>
      <p>
        Comment Body
        <input
          type="text"
          value={commentBody}
          onChange={(e) => setBody(e.target.value)}
        />
      </p>
    </div>
  );
}
}

export default AddComment;
