import React, { useState } from "react";
import "./App.css";
import AllArticles from "./components/AllArticles";
import SpecificArticle from "./components/SpecificArticle";
import { Routes, Route } from "react-router-dom";
import DeleteComment from "./components/DeleteComment";
import AllTopics from "./components/AllTopics";
import AllArticlesTopic from "./components/AllArticlesTopic";

function App() {
  return (
    <div>
      <h1>dailynorth</h1>
      <Routes>
        <Route path="/" element={<AllArticles />} />
        <Route path="/articles" element={<AllArticles />} />
        <Route path ="/topics" element={<AllTopics/>} />
        <Route path="/articles?topic=" element={<AllArticlesTopic/>} />
        <Route path="/articles/:article_id" element={<SpecificArticle />} />
        <Route path="/comments/:comment_id" element={<DeleteComment/>} />
      </Routes>
    </div>
  );
}

export default App;
