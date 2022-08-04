import React from "react";
import { Link } from "react-router-dom";
import "./post.css";
const Post = ({ post }) => {
  return (
    <div className="post">
      {post.imageUrl && (
        <img src={post.imageUrl} alt="" className="postImage" />
      )}

      <div className="postInfo">
        <div className="postCats">
          {post.postcats.map((cat, index) => (
            <span className="postCat" key={index}>
              {cat}
            </span>
          ))}
        </div>
        <Link to={`/post/${post.id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">{new Date(post.date).toDateString()}</span>
      </div>

      <p className="postDesc">{post.description}</p>
    </div>
  );
};

export default Post;
