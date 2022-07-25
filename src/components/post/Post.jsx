import React from "react";
import "./post.css";
const Post = () => {
  return (
    <div className="post">
      <img
        src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/5/26/913299/Ngan-Ha25.jpg"
        alt=""
        className="postImage"
      />

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit</span>
        <hr />
        <span className="postDate">2 hour ago</span>
      </div>

      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        veritatis voluptatibus iste quas, quibusdam accusamus facilis itaque
        ipsa sint suscipit, sapiente tempore a consectetur molestias consequatur
        eius dignissimos! Dignissimos, molestias! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Repellendus veritatis voluptatibus iste
        quas, quibusdam accusamus facilis itaque ipsa sint suscipit, sapiente
        tempore a consectetur molestias consequatur eius dignissimos!
        Dignissimos, molestias!
      </p>
    </div>
  );
};

export default Post;
