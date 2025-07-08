import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { commentOnArticle } from "../API";
import axios from "axios"

function AddComment() {
  const parameter = useParams();

  const [commentUsername, setUsername] = useState("");

  const [commentBody, setBody] = useState("");

  const [error, setError] = useState(null);

  const sendComment = () => {
console.log("it sent");

    axios
    .post(`https://news-api-h2gt.onrender.com/api/articles/${parameter.article_id}/comments`, {
      username: "grumpy19",
      body: "hello",
    })
    .then((response) => {
        console.log(response.data);
        
      return response.data;
    }); };

//   const onChangeHandlerUsername = (e) => {
//     setUsername(e.target.value);
//     console.log(commentUsername);
    
//   };

  return (
    <div>
      <button onClick={sendComment}>Send Comment</button>
     
    </div>
  );
}

export default AddComment;
