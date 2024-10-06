import React from "react";
import friendImage_1 from './img/friend1.png';
import friendImage_2 from './img/friend2.png';
import friendImage_3 from './img/friend3.png';

const Carasol = () => {
  return (
    <>
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="2"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={friendImage_1}
              alt="Los Angeles"
              className="d-block"
            />
          </div>
          <div className="carousel-item">
            <img
              src={friendImage_2}
              alt="Chicago"
              className="d-block"
            />
          </div>
          <div className="carousel-item">
            <img
              src={friendImage_3}
              alt="New York"
              className="d-block"
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </>
  );
};

export default Carasol;
