import React, { useEffect, useState } from "react";
import { getAllPosts } from "../api";
import PostCard from "./PostCard";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts()
      .then((response) => setPosts(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>All Posts</h1>
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
};

export default HomePage;
