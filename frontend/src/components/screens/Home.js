import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("jwt");
  useEffect(() => {
    const fetch = async () => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
            token: token,
          },
        };
        const res = await axios.get("/api/post", config);
        setData(res.data);
      } catch (error) {
        console.error(error);
        if (error.response.data) {
          console.log(error.response.data.msg);
        }
        if (error.response.data.errors) {
          console.log(error.response.data.errors[0].msg);
        }
      }
    };
    fetch();
  }, [token]);
  return (
    <div className="home">
      {token ? (
        data.map((item) => (
          <div className="card home-card" key={item._id}>
            <h5>{item.postedBy.name}</h5>
            <div className="card-image">
              <img style={{ width: "100%" }} src={item.image} alt="profile" />
            </div>
            <div className="card-content">
              <i className="material-icons" style={{ color: "red" }}>
                favorite
              </i>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
              <input type="text" placeholder="Add a comment" />
            </div>
          </div>
        ))
      ) : (
        <Redirect to="/signin" />
      )}
    </div>
  );
};

export default Home;
