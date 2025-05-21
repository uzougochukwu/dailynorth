import axios from "axios"

export default function fetchAllArticles() {
return axios.get("https://news-api-h2gt.onrender.com/api/articles")
.then((response) => {

    return response.data
})
}

function fetchSpecificArticle(articleID) {
    return axios.get(`https://news-api-h2gt.onrender.com/api/articles/${articleID}`)
.then((response) => {


    return response.data.article
})

}

function fetchSpecificArticleComments(articleID) {
    return axios.get(`https://news-api-h2gt.onrender.com/api/articles/${articleID}/comments`)
    .then((response) => {
        console.log(response.data.comment.rows)
        return response.data.comment.rows
    })
}

export {fetchSpecificArticle, fetchSpecificArticleComments}

