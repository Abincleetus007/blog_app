import React from "react";
import { useNavigate } from "react-router-dom";
import { deletePost } from "../api";

const PostCard = ({ post }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      deletePost(post._id)
        .then(() => alert("Post deleted!"))
        .catch((error) => console.error(error));
    }
  };

  return (
    <div>
      <h2 onClick={() => navigate(`/posts/${post._id}`)}>{post.title}</h2>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default PostCard;
