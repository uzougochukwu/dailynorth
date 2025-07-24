import axios from "axios";

export default function fetchAllArticles() {
  return axios
    .get(`https://news-api-h2gt.onrender.com/api/articles`)
    .then((response) => {
      
      return response.data;
    });
}

function fetchSpecificArticle(articleID) {
  return axios
    .get(`https://news-api-h2gt.onrender.com/api/articles/${articleID}`)
    .then((response) => {
      return response.data.article;
    });
}

function fetchSpecificArticleComments(articleID) {
  return axios
    .get(
      `https://news-api-h2gt.onrender.com/api/articles/${articleID}/comments`
    )
    .then((response) => {
      //console.log(response);

      return response.data.comment;
    });
}

function voteForArticle(articleID) {
  return axios
    .patch(`https://news-api-h2gt.onrender.com/api/articles/${articleID}`, {
      inc_votes: 1,
    })
    .then((response) => {
      return response.data.article.votes;
    });
}

function commentOnArticle(articleID) {
  return axios
    .post(`https://news-api-h2gt.onrender.com/api/articles/${articleID}`, {
      username: commentUsername,
      body: commentBody,
    })
    .then((response) => {
      return response.data;
    });
}

function fetchAllTopics() {
  return axios
    .get("https://news-api-h2gt.onrender.com/api/topics")
    .then((response) => {
      //console.log(response);

      return response.data.topicsData;
    });
}

function fetchAllArticlesOfTopic(slug) {
  return axios
    .get(`https://news-api-h2gt.onrender.com/api/articles?topic=${slug}`)
    .then((response) => {
      
      return response.data;
    });
}

export {
  fetchSpecificArticle,
  fetchSpecificArticleComments,
  voteForArticle,
  commentOnArticle,
  fetchAllTopics,
  fetchAllArticlesOfTopic
};
