import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import "./Home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4001/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>All Posts</h1>
      {posts.map((post) => (
        <div key={post._id}>
          <h2>
            <Link to={`/posts/${post._id}`}>{post.title}</Link>
          </h2>
          <p>{post.content.substring(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
