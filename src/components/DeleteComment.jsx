import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function DeleteComment() {
  const parameter = useParams();

  const removeComment = (props) => {
    console.log("in remove comment");
    console.log(props);
    

    axios
      .delete(
        `https://news-api-h2gt.onrender.com/api/comments/${props.commentID}`
      )
      .then((response) => {
        return response.data;
      });
  };

  return (
    <div>
      <button onClick={removeComment}>Delete Comment</button>
    </div>
  );
}

export default DeleteComment;
