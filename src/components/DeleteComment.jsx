import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function DeleteComment() {
  const parameter = useParams();

  const removeComment = () => {

    console.log("in remove comment");
    console.log(props);

    axios
      .delete(`https://news-api-h2gt.onrender.com/api/comments/${parameter.comment_id}`)
      .then((response) => {
        return response.data;
      });
  };

  return (
    <div>
      <button onClick={removeComment}>Delete Comment</button>
      <p>
        Comment ID
        <input
          type="text"
          value={commentID}
          onChange={(e) => setUsername(e.target.value)}
        />
      </p>
    </div>
  );
}

export default DeleteComment;
