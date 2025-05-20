import axios from "axios"

function fetchAllArticles() {
return axios.get("https://news-api-h2gt.onrender.com/api/articles")
.then((response) => {

    return response.data
})
}

export default fetchAllArticles