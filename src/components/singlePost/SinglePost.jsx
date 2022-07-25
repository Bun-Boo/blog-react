import React from "react";
import "./singlePost.css";
const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrap">
        <img
          src="http://webnhiepanh.com/wp-content/uploads/2017/09/ong_kinh_goc_rong.jpg"
          alt=""
          className="singlePostImage"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Thanh Hai</b>
          </span>
          <span className="singlePostDate">3 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          voluptas consequuntur ab voluptate? Vitae veniam ratione saepe vel,
          explicabo sint, beatae tenetur labore illo quas reiciendis suscipit
          fugit ut architecto. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Placeat voluptas consequuntur ab voluptate? Vitae
          veniam ratione saepe vel, explicabo sint, beatae tenetur labore illo
          quas reiciendis suscipit fugit ut architecto. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Placeat voluptas consequuntur ab
          voluptate? Vitae veniam ratione saepe vel, explicabo sint, beatae
          tenetur labore illo quas reiciendis suscipit fugit ut architecto.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          voluptas consequuntur ab voluptate? Vitae veniam ratione saepe vel,
          explicabo sint, beatae tenetur labore illo quas reiciendis suscipit
          fugit ut architecto.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
