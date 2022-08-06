import React, { useState } from "react";
import "./write.css";
import axios from "axios";
const Write = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title,
      description,
      content,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.imageUrl = filename;
      try {
        await axios.post(
          "https://62e229233891dd9ba8e11ef2.mockapi.io/blog",
          data
        );
      } catch (error) {}
    }
    try {
      const res = await axios.post(
        "https://62e229233891dd9ba8e11ef2.mockapi.io/blog",
        newPost
      );
      console.log(res);
      window.location.replace("/post/" + res.data.id);
    } catch (error) {}
  };
  return (
    <div className="write">
      {file && (
        <img className="writeImage" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="WriteForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Description for your story!"
            type="text"
            className="writeInput writeText"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="writeFormGroup">
          <textarea
            placeholder="Tell me about your story..."
            type="text"
            className="writeInput writeText"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
