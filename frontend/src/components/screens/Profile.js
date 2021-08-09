import React from "react";

const Profile = () => {
  return (
    <div
      style={{
        width: "80%",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: "1",
          margin: "18px 0px",
          borderBottom: "1px solid gray",
        }}
      >
        <div
          style={{
            flex: "1",
            textAlign: "center",
          }}
        >
          <img
            style={{ width: "160px", height: "160px", borderRadius: "250px" }}
            src="https://www.w3schools.com/w3css/img_avatar3.png"
            alt="profile"
          />
        </div>
        <div
          style={{
            flex: "1",
          }}
        >
          <h3>Ujjwal sharma</h3>
          <div
            style={{
              display: "flex",
              width: "50%",
              justifyContent: "space-between",
            }}
          >
            <h6>40 Posts</h6>
            <h6>40 Posts</h6>
            <h6>40 Posts</h6>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          width: "80vw",
          alignSelf: "center",
        }}
      >
        <img
          style={{ width: "250px", height: "250px", marginBottom: "20px" }}
          src="https://www.w3schools.com/w3css/img_avatar3.png"
          alt="profile"
        />
        <img
          style={{ width: "250px", height: "250px" }}
          src="https://www.w3schools.com/w3css/img_avatar3.png"
          alt="profile"
        />
        <img
          style={{ width: "250px", height: "250px" }}
          src="https://www.w3schools.com/w3css/img_avatar3.png"
          alt="profile"
        />
        <img
          style={{ width: "250px", height: "250px" }}
          src="https://www.w3schools.com/w3css/img_avatar3.png"
          alt="profile"
        />
        <img
          style={{ width: "250px", height: "250px" }}
          src="https://www.w3schools.com/w3css/img_avatar3.png"
          alt="profile"
        />
        <img
          style={{ width: "250px", height: "250px" }}
          src="https://www.w3schools.com/w3css/img_avatar3.png"
          alt="profile"
        />
      </div>
    </div>
  );
};

export default Profile;
