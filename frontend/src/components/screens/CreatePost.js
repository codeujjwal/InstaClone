import React from "react";

const CreatePost = () => {
  return (
    <div className="main_container">
      <div className="card post-card">
        <h3>Add Post</h3>
        <input className="Input" type="text" placeholder="Title" />
        <input className="Input" type="text" placeholder="Body" />
        <div className="file-field input-field">
          <div className="btn">
            <span>Upload Image</span>
            <input type="file" />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>
        <button className="btn btn-s waves-effect waves-light #64b5f6 blue darken-1">
          Add Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
