import "./profile.css";
import React, { useState } from "react";
import camera from "../assets/icon/camera-outline.svg"
import { Link } from "react-router-dom";

import picture from "../assets/profile.png";
import useFetch from "../hooks/fetch.hook";

export default function Profilepage() {
  const [file, setFile] = useState();
  const [{ apiData }] = useFetch();
  return (
    <>
    <div className="profilepage">

     <div className="banner">
     
    <Link to="/Profile"><img
        src={apiData?.banner || camera }
        alt="Banner"
        style={{ width: "100%", maxHeight: "130px" }}
        className="cover-pic"
      />
      
      <h2>upload your banner here</h2>
        </Link> 
     </div>

     

      
  
      <div className="banner-container">
        <div className="pro-pics">
          <img
            src={apiData?.profile || picture}
            alt="Profile"
            className="profile-pic"
          />
        </div>

        <div className="profile-card">
          <h1> @{apiData?.username || "username"}</h1>
          <p>Upcoming Artist</p>

          <hr />

          <div className="profile-details">
            <div>
              <h4>0</h4>
              <h2>Following</h2>
            </div>
            <div>
              <h4>0</h4>
              <h2>Followers</h2>
            </div>
            <div>
              <h4>0</h4>
              <h2> Plays</h2>
            </div>
            <div>
              <h4>0</h4>
              <h2>Posts</h2>
            </div>
          </div>
          <hr />

          <div>
            <h2>Member since : </h2>
          </div>

          <hr  />
        </div>
      </div>
    </div>
     
    </>
  );
}
