import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./CreatePost.css";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState(""); // Optional field
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the post data
    const newPost = {
      title,
      content,
      author: author || "Anonymous", // Default to "Anonymous" if not provided
    };

    fetch("http://localhost:4001/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((res) => {
        if (res.ok) {
          navigate("/"); // Redirect to the homepage after successful creation
        } else {
          throw new Error("Failed to create post");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Anonymous"
          />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
