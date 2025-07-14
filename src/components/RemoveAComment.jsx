import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function RemoveAComment() {
  const parameter = useParams();

  const removeComment = () => {
    console.log("in remove comment");
    console.log(props);

    axios
      .delete(
        `https://news-api-h2gt.onrender.com/api/comments/${parameter.comment_id}`
      )
      .then((response) => {
        return response.data;
      });
  };

  return <button onClick={removeComment}>Delete Comment</button>;
}

export default RemoveAComment;
