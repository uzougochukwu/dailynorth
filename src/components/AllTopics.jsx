import React, { useEffect, useState } from "react";
import { fetchAllTopics } from "../API";

function AllTopics() {
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
