import React, { useEffect, useState } from "react";
import { fetchSpecificArticle } from "../API";
import { useParams } from "react-router-dom";
import SpecificArticleComments from "./SpecificArticleComments";
import AddOneVote from "./AddOneVote";
import AddComment from "./AddComment";
import DeleteComment from "./DeleteComment";

function SpecificArticle() {
  const parameter = useParams();

  const [particularArticle, setParticularArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchSpecificArticle(parameter.article_id)
      .then((individualArticle) => {
        setParticularArticle(individualArticle);
        setIsLoading(false);
      })
      .catch(console.log("here"));
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (particularArticle != undefined) {
    return (
      <div>
        <a href="/">
          <button>Back to Homepage</button>
        </a>
        <p>Title: {particularArticle.title}</p>
        <p>Author: {particularArticle.author}</p>
        <p>Topic: {particularArticle.topic}</p>
        <p>Number of comments: {particularArticle.count}</p>
        <img src={particularArticle.article_img_url}></img>
        <p>{particularArticle.body}</p>
        {<AddOneVote />}
        {<SpecificArticleComments />}
        {<AddComment />}
      </div>
    );
  } else {
    return <div>This article does not exist</div>;
  }
}

export default SpecificArticle;
