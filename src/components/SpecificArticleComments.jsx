import React, { useEffect, useState } from "react";
import { fetchSpecificArticleComments } from "../API";
import { useParams } from "react-router-dom";
import DeleteComment from "./DeleteComment";
import axios from "axios";

function SpecificArticleComments() {
  const parameter = useParams();

  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchSpecificArticleComments(parameter.article_id)
      .then((articleComments) => {
        setComments(articleComments);
        setIsLoading(false);
      })
      .catch(console.log);
  }, []);

  const removeComment2 = (comment_id) => {
 
    axios
      .delete(`https://news-api-h2gt.onrender.com/api/comments/${comment_id}`)
      .then((response) => {
        return response.data;
      });
  };

  return (
    <div>
      Comments for this article{" "}
      {comments.map((comment) => {
        const link =
          "https://news-api-h2gt.onrender.com/api/comments/" +
          comment.comment_id;

        return (
          <p key={comment.comment_id}>
            {" "}
            {comment.author}: {comment.body} 
            <button value ={comment.comment_id} onClick={() => removeComment2(comment.comment_id)}>
              Delete comment
            </button>
          </p>
        );
      })}
    </div>
  );
}

export default SpecificArticleComments;
