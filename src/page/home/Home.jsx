import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://62e229233891dd9ba8e11ef2.mockapi.io/blog"
      );
      setPosts(res.data);
      window.scroll(0, 0);
      setLoading(false);
    };
    fetchPosts();
  }, []);
  return (
    <>
      <Header />
      <div className="home">
        {loading ? (
          <div className="loader">
            <div className="loading"></div>
          </div>
        ) : (
          <Posts posts={posts} />
        )}
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
