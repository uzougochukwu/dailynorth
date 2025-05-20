import axios from "axios"

function fetchSpecificArticle(articleID) {
    return axios.get(`https://news-api-h2gt.onrender.com/api/articles/${articleID}`)
.then((response) => {

    console.log(response.data.article.title)

    return response.data.article.body
})

}

export default fetchSpecificArticle