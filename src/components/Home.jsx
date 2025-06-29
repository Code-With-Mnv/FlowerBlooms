import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="hero-custom text-center text-white px-4 py-5">
      <div className="py-5 lessgoo">
        <h1 className="display-5 fw-bold">Welcome to FlowerBlooms</h1>
        <div className="col-lg-6 mx-auto">
          <p className="fs-7 mb-3 mx-1">
            Discover vibrant blooms and elegant floral creations. Designed with
            love using modern UI, beautiful gradients, and a touch of nature.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link
              to="/gallery"
              className="btn btn-custom-primary btn-lg px-4 me-sm-3 fw-bold"
            >
              Explore Gallery
            </Link>
            <Link to="/about" className="btn btn-custom-secondary btn-lg px-4">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
