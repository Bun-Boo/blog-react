import React from "react";
import "./write.css";
const Write = () => {
  return (
    <div className="write">
      <img
        className="writeImage"
        src="https://sharingfunvn.com/wp-content/uploads/elementor/thumbs/top-anime-hay-nhat-phan-hinh-anh-ngoan-muc-scaled-pog5endfqdqol65xhm6horrzt8ovt5ydiz937jcyh4.jpg"
        alt=""
      />
      <form className="WriteForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell me about your story..."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
};

export default Write;
