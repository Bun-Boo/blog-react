import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="headerTitle">
        <span className="headerTitleSm">Tell me about your story!</span>
        <span className="headerTitleLg">Blog</span>
      </div>

      <img
        className="headerImage"
        src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
        alt=""
      />
    </div>
  );
};

export default Header;
