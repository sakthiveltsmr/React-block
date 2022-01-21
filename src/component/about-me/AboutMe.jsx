import React from "react";
import "./about.css";

import Rename from "./Rename.jpg";
// console.log(Rename);
export const AboutMe = () => {
  return (
    <div className="container-fluid wrapper">
      <div className="row">
        <div className="col-6 col-sm-6 col-md-6 col-lg-12 text-center">
          <h1 className="text-start">
            <span>
              <img className="profo" src={Rename} alt="profile" />
            </span>
          </h1>
        </div>
        {/* </div> */}
        <div className="row details">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 text-start p-4 mt-2">
            <h3 className="text-start text-mute">
              Name:
              <span className="text-info text-light">Sakthivel</span>
            </h3>
            <h3 className="text-start text-mute">
              Education: <span className="text-info text-light">BE CSE</span>
            </h3>
            <h3 className="text-start text-mute ">
              Current:
              <span className="text-info text-light">Web developer !</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
