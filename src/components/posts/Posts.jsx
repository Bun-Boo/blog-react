import React, { useEffect, useState } from "react";
import Post from "../post/Post";
import "./posts.css";
const Posts = ({ posts }) => {
  const handleClick = () => {
    window.scroll(0, 0);
  };

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
      {/* {console.log(posts)} */}
      <div className="postsIcon">
        <i
          className="iconTop fa-solid fa-circle-arrow-up"
          onClick={handleClick}
        ></i>
      </div>
      {/* <Post />
      <Post />
      <Post />
      <Post /> */}
    </div>
  );
};

export default Posts;
