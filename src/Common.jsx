import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/img2.svg";

const Common = (prop) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row mt-lg-4">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 className="text-lg-start">
                    {prop.name}
                    <strong className="text-primary ">
                      Cyber Techical Limited
                    </strong>
                  </h1>
                  <h3 className="my-3 text-lg-start">
                    We are The team of Talented Developers making Websites
                  </h3>
                  <div className="mt-3 text-lg-start">
                    <NavLink
                      to={prop.visit}
                      exact="true"
                      className="btn-get-started"
                    >
                      {prop.btname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={prop.imgsrc}
                    className="img-fluid animated"
                    alt="home img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
