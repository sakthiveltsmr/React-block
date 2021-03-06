import React from "react";
import "./homeIntro.css";
import { BsFillBootstrapFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiReactrouter } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import CodeImg from "../../assets/code.jpg";

export const HomeIntro = () => {
  return (
    <div className="container-fluid mt-5 ">
      <div className="row">
        <div className=" col-sm-12 col-md-6 col-lg-6 nonImgDiv">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <h1 className="intro-heading text-start text-muted">
                  Learning React Library
                </h1>
              </div>
              <div className="text-success">
                <h2>React learning</h2>
                <h3 className="text-start text-info">
                  App is built in React using :
                </h3>
              </div>

              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-5 col-lg-4 m-2">
                    <div className="card">
                      <div className="tech-intro ">
                        <BsFillBootstrapFill className="tech-logo-boot" />
                        <div className="tech-info align-middle">Bootstrap</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-sm-12 col-md-5 col-lg-4 m-2">
                    <div className="card">
                      <div className="tech-intro ">
                        <FaReact className="tech-logo-react" />
                        <div className="tech-info align-middle"> React </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-sm-12 col-md-12 col-lg-4 m-2">
                    <div className="card router-card">
                      <div className="tech-intro ">
                        <SiReactrouter className="tech-logo-dom" />
                        <div className="tech-info align-middle">
                          react-router-dom
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-sm-12 col-md-12 col-lg-4 m-2">
                    <div className="card icon-card">
                      <div className="tech-intro ">
                        <RiReactjsLine className="tech-logo-icons react-icons-logo" />
                        <div className="tech-info align-middle">
                          react-icons
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-6 col-sm-12 col-md-6 col-lg-6 codeimg">
          <img src={CodeImg} alt="coding" className="code" />
        </div>
      </div>
    </div>
  );
};
