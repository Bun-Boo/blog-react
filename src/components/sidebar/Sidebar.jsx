import React from "react";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://icdn.dantri.com.vn/thumb_w/640/2017/1-1510967806416.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quod
          natus suscipit amet minus nam.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="slidebarSocial">
          <i className="slidebarIcon fa-brands fa-facebook-square"></i>
          <i className="slidebarIcon fa-brands fa-twitter-square"></i>
          <i className="slidebarIcon fa-brands fa-pinterest-square"></i>
          <i className="slidebarIcon fa-brands fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
