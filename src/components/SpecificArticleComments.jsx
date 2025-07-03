import React, { useEffect, useState } from "react";
import { fetchSpecificArticleComments } from "../API";
import { useParams } from "react-router-dom";

function SpecificArticleComments() {
  const parameter = useParams();

  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("below useEffect");

    fetchSpecificArticleComments(parameter.article_id)
      .then((articleComments) => {
        setComments(articleComments);
        setIsLoading(false);
      })
      .catch(console.log);
  }, []);

  return (
    <div>
      Comments for this article{" "}
      {comments.map((comment) => {
        return (
          <p key={comment.comment_id}>
            {" "}
            {comment.author}: {comment.body}{" "}
          </p>
        );
      })}
    </div>
  );
}

export default SpecificArticleComments;
