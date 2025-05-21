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

    console.log(response.data.article.title)

    return response.data.article
})

}

export {fetchSpecificArticle}

// module.exports(fetchAllArticles, fetchSpecificArticle)
