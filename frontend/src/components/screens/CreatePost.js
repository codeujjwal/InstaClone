/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const CreatePost = ({ history }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  useEffect(() => {
    if (url) {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("jwt"),
          },
        };
        axios.post("/api/post", { title, body, image: url }, config);
        alert("Posted succesfully");
        history.push("/");
      } catch (error) {
        console.error(error);
        if (error.response.data) {
          console.log(error.response.data.msg);
        }
        if (error.response.data.errors) {
          console.log(error.response.data.errors[0].msg);
        }
      }
    }
  }, [url]);

  const postdetails = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "codeujjwal");
    data.append("cloud_name", "codeujjwal");
    fetch("https://api.cloudinary.com/v1_1/codeujjwal/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => setUrl(data.url))
      .catch((err) => console.error(err));
  };
  return (
    <div className="main_container">
      {localStorage.getItem("jwt") ? (
        <div className="card post-card">
          <h3>Add Post</h3>
          <input
            className="Input"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="Input"
            type="text"
            placeholder="Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <div className="file-field input-field">
            <div className="btn">
              <span>Upload Image</span>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text" />
            </div>
          </div>
          <button
            className="btn btn-s waves-effect waves-light #64b5f6 blue darken-1"
            onClick={() => postdetails()}
          >
            Add Post
          </button>
        </div>
      ) : (
        <Redirect to="/signin" />
      )}
    </div>
  );
};

export default CreatePost;
