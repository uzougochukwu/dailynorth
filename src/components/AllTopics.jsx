import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAllTopics } from "../API";
import axios from "axios";

function AllTopics() {
  const parameter = useParams();
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAllTopics()
      .then((allTopicsFromApi) => {
        setTopics(allTopicsFromApi);
        setIsLoading(false);
      })
      .catch(console.log);
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const getSpecificTopic = () => {
    axios
      .get(`https://news-api-h2gt.onrender.com/api/articles?topic=`)
      .then((response) => {
        console.log(response);

        return response.data;
      });
  };

  return (
    <div>
      {" "}
      <a href="/">
        <button>Back to Homepage</button>
      </a>
      <br></br>A List of all our topics:{" "}
      {topics.map((topic) => {
        const link = "/articles?topic=" + topic.slug;
        //console.log(link);
        const specificTopic = topic.slug;

        return (
          <p key={topic.description}>
            {" "}
            {topic.slug}{" "}

             <a href={link}>
              <button>Go to this topic</button>
            </a>{" "}
          </p>
        );
      })}
    </div>
  );
}

export default AllTopics;
