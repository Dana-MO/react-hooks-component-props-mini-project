import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name="Overreacted"/>
      <About image="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg" about="A blog about learning React"/>
      <ArticleList />
    </div>
  );
}

export default App;
