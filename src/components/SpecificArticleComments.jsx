import React, { useEffect, useState } from "react";
import { fetchSpecificArticleComments } from "../API";
import { useParams } from "react-router-dom";
import DeleteComment from "./DeleteComment";

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

  return (
    <div>
      Comments for this article{" "}
      {comments.map((comment) => {
        return (
          <p key={comment.comment_id}>
            {" "}
            {comment.author}: {comment.body}{" "}
            {<DeleteComment commentID={comment.comment_id} />}
          </p>
        );
      })}
    </div>
  );
}

export default SpecificArticleComments;
