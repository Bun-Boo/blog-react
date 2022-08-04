import React, { useEffect, useState } from "react";
import "./singlePost.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
const SinglePost = () => {
  const user = false;
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://62e229233891dd9ba8e11ef2.mockapi.io/blog/` + path
      );
      setPost(res.data);
      // console.log(res.data);
      window.scrollTo(0, 0);
      setLoading(false);
    };
    getPosts();
  }, [path]);
  return (
    <div className="singlePost" key={post.id}>
      {loading ? (
        <div className="dots-loading">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <div className="singlePostWrap">
          {post.imageUrl && (
            <img src={post.imageUrl} alt="" className="singlePostImage" />
          )}
          <h1 className="singlePostTitle">
            {post.title}
            {user && (
              <div className="singlePostEdit">
                <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash-can"></i>
              </div>
            )}
          </h1>
          <div className="singlePostInfo">
            <span className="singlePostAuthor">
              Author: <b>{post.author}</b>
            </span>
            <span className="singlePostDate">
              {new Date(post.date).toDateString()}
            </span>
          </div>
          <p className="singlePostDesc">{post.description}</p>
          <p className="singlePostContent">{post.content}</p>
        </div>
      )}
    </div>
  );
};

export default SinglePost;
