import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./PostDetails.css";

const PostDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4001/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      fetch(`http://localhost:4001/posts/${id}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (res.ok) {
            navigate("/"); 
          } else {
            throw new Error("Failed to delete post");
          }
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="post-details">
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <p>Author: {post.author || "Anonymous"}</p>
          <p>Date: {new Date(post.date).toLocaleString()}</p>
          <div className="buttons">
            <Link to={`/posts/${id}/edit`}>
              <button className="edit">Edit Post</button>
            </Link>
            <button className="delete" onClick={handleDelete}>
              Delete Post
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PostDetails;
