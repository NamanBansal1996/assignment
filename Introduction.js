import React from "react";
import image from "./images/ngo1.jpg";
export default function Introduction() {
  return (
    <div className="container mt-4 " style={{height:"600px"}}>
      <div className="row">
        <div className="col-6 text-capitalize  mt-8 pr-2">
          <h1 className="fw-bold ">empowering youth for a brighter future</h1>
          <p className="text-body-secondary fs-6">
            United Youth Network(UYN) is a dynamic and impactful international
            <br />
            society committed to nurturing the talents and potential of young
            individuals across colleges and universities of different countries.
            <br />
            Join us today to be a part of our mission to create Brighter and
            more promising future.
          </p>
          <button
            className="btn btn-outline-success  rounded-pill bt-dark bg-primary"
            type="button">
            Join US
          </button>
          <a href="wikipedia.com" className="text-decoration-none px-2">
            Learn more>{" "}
          </a>
        </div>
        <div className="col-6">
          <img
            src={image}
            alt="logo"
            style={{ width: "100%", height: "150%" }}
          />
          <div className="text-capitalize bg-light">
            <h3>Empower the Youth today</h3>
            <p className="text-body-secondary fs-6">
              Unlock your potential and make a difference
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
