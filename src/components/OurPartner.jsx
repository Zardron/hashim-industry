import React from "react";
import Partner1 from "../assets/img/Partners-logo1.jpg";
import Partner2 from "../assets/img/Partners-logo2.jpg";
import Partner3 from "../assets/img/Partners-logo3.jpg";
import Partner4 from "../assets/img/Partners-logo4.jpg";
import Partner5 from "../assets/img/Partners-logo5.jpg";
import { Link } from "react-router-dom";

const OurPartner = () => {
  return (
    <div
      className="flex-container dark:bg-dark"
      data-aos="zoom-in"
      data-aos-delay="100"
      data-aos-duration="1000"
    >
      <div className="slider-container pb-2">
        <ul className="slider">
          <Link to="/about-us" state={{ props: "partners" }}>
            <li className="slider__slide border-r-[15px] border-r-white dark:border-r-dark">
              <div className="slide__content">
                <img src={Partner1} alt="" className="rounded-lg shadow-md" />
              </div>
            </li>
          </Link>

          <Link to="/about-us" state={{ props: "partners" }}>
            <li className="slider__slide border-r-[15px] border-r-white dark:border-r-dark">
              <div className="slide__content">
                <img src={Partner2} alt="" className="rounded-lg shadow-md" />
              </div>
            </li>
          </Link>

          <Link to="/about-us" state={{ props: "partners" }}>
            <li className="slider__slide border-r-[15px] border-r-white dark:border-r-dark">
              <div className="slide__content">
                <img src={Partner3} alt="" className="rounded-lg shadow-md" />
              </div>
            </li>
          </Link>

          <Link to="/about-us" state={{ props: "partners" }}>
            <li className="slider__slide border-r-[15px] border-r-white dark:border-r-dark">
              <div className="slide__content">
                <img src={Partner4} alt="" className="rounded-lg shadow-md" />
              </div>
            </li>
          </Link>

          <Link to="/about-us" state={{ props: "partners" }}>
            <li className="slider__slide border-r-[15px] border-r-white dark:border-r-dark">
              <div className="slide__content">
                <img src={Partner5} alt="" className="rounded-lg shadow-md" />
              </div>
            </li>
          </Link>

          <Link to="/about-us" state={{ props: "partners" }}>
            <li className="slider__slide border-r-[15px] border-r-white dark:border-r-dark">
              <div className="slide__content">
                <img src={Partner1} alt="" className="rounded-lg shadow-md" />
              </div>
            </li>
          </Link>

          <Link to="/about-us" state={{ props: "partners" }}>
            <li className="slider__slide border-r-[15px] border-r-white dark:border-r-dark">
              <div className="slide__content">
                <img src={Partner2} alt="" className="rounded-lg shadow-md" />
              </div>
            </li>
          </Link>

          <Link to="/about-us" state={{ props: "partners" }}>
            <li className="slider__slide border-r-[15px] border-r-white dark:border-r-dark">
              <div className="slide__content">
                <img src={Partner3} alt="" className="rounded-lg shadow-md" />
              </div>
            </li>
          </Link>

          <Link to="/about-us" state={{ props: "partners" }}>
            <li className="slider__slide border-r-[15px] border-r-white dark:border-r-dark">
              <div className="slide__content">
                <img src={Partner4} alt="" className="rounded-lg shadow-md" />
              </div>
            </li>
          </Link>

          <Link to="/about-us" state={{ props: "partners" }}>
            <li className="slider__slide border-r-[15px] border-r-white dark:border-r-dark">
              <div className="slide__content">
                <img src={Partner5} alt="" className="rounded-lg shadow-md" />
              </div>
            </li>
          </Link>

          <Link to="/about-us" state={{ props: "partners" }}>
            <li className="slider__slide border-r-[15px] border-r-white dark:border-r-dark">
              <div className="slide__content">
                <img src={Partner1} alt="" className="rounded-lg shadow-md" />
              </div>
            </li>
          </Link>

          <Link to="/about-us" state={{ props: "partners" }}>
            <li className="slider__slide border-r-[15px] border-r-white dark:border-r-dark">
              <div className="slide__content">
                <img src={Partner2} alt="" className="rounded-lg shadow-md" />
              </div>
            </li>
          </Link>

          <Link to="/about-us" state={{ props: "partners" }}>
            <li className="slider__slide border-r-[15px] border-r-white dark:border-r-dark">
              <div className="slide__content">
                <img src={Partner3} alt="" className="rounded-lg shadow-md" />
              </div>
            </li>
          </Link>

          <Link to="/about-us" state={{ props: "partners" }}>
            <li className="slider__slide border-r-[15px] border-r-white dark:border-r-dark">
              <div className="slide__content">
                <img src={Partner4} alt="" className="rounded-lg shadow-md" />
              </div>
            </li>
          </Link>

          <Link to="/about-us" state={{ props: "partners" }}>
            <li className="slider__slide border-r-[15px] border-r-white dark:border-r-dark">
              <div className="slide__content">
                <img src={Partner5} alt="" className="rounded-lg shadow-md" />
              </div>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default OurPartner;
