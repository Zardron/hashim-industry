import React, { useEffect } from "react";
import LOGO_B from "../assets/img/logo-b.png";
import LOGO_W from "../assets/img/logo-w.png";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaLinkedin,
  FaLocationDot,
  BsFillTelephoneFill,
  MdEmail,
  TbArrowBadgeRightFilled,
} from "../assets/Icons";
import { Link } from "react-router-dom";
import FOOTER from "../assets/img/footer.jpg";

const Footer = ({ darkMode }) => {
  return (
    <>
      <footer
        className="bg-footerLight dark:bg-footerDark bg-cover lg:bg-contain z-0 w-full shadow dark:bg-gray border-t-primary border-t-2"
        style={{
          backgroundImage: `${
            darkMode === "dark"
              ? `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${FOOTER})`
              : `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${FOOTER})`
          }`,
        }}
      >
        <div className="container w-full mx-auto p-2">
          <div className="flex items-center justify-between gap-6">
            <Link
              href="https://flowbite.com/"
              className="flex items-center sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={LOGO_W} className="h-18" alt="Company Logo" />
            </Link>
            <div className="flex flex-row items-center gap-1">
              <FaFacebookSquare
                size={30}
                className="text-light dark:text-white"
              />
              <FaInstagramSquare
                size={30}
                className="text-light dark:text-white"
              />
              <FaTwitterSquare
                size={30}
                className="text-light dark:text-white"
              />
              <FaYoutubeSquare
                size={30}
                className="text-light dark:text-white"
              />
              <FaLinkedin size={30} className="text-light dark:text-white" />
            </div>
          </div>
          <hr className="my-2 border-dark sm:mx-auto dark:border-white lg:my-2" />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 py-4">
            <div>
              <h1 className="text-light dark:text-white text-3xl font-bold pl-1 mb-3">
                About Us
              </h1>

              <p className="text-[15px] sm:mb-0 font-normal text-light dark:text-white text-justify pl-1 py-1">
                Hashim Industry is proudly marching towards its golden jubilee
                after successfully making its mark all over the globe. Today,
                Hashim Industry has is at the peak of its glory with its entire
                sister concerns performing to the best of their ability.
              </p>
            </div>
            <div>
              <h1 className="text-light dark:text-white text-3xl font-bold pl-1 mb-3">
                Address
              </h1>
              <ul className="flex flex-col  text-sm font-medium sm:mb-0 dark:text-white gap-2 pl-1">
                <li className="flex flex-row items-center gap-3 text-light dark:text-white">
                  <FaLocationDot />
                  <a href="" className="hover:underline me-4 md:me-6">
                    Jeddah, Saudi Arabia
                  </a>
                </li>
                <li className="flex flex-row items-center gap-3 text-light dark:text-white">
                  <BsFillTelephoneFill />
                  <a href="" className="hover:underline me-4 md:me-6">
                    +012 345 67890
                  </a>
                </li>
                <li className="flex flex-row items-center gap-3 text-light dark:text-white">
                  <MdEmail />
                  <a href="" className="hover:underline me-4 md:me-6">
                    info@hashimindustry.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-light dark:text-white text-3xl font-bold pl-1 mb-3">
                Quick Links
              </h1>
              <ul className="flex flex-col  text-sm font-medium sm:mb-0 dark:text-white gap-2 pl-1">
                <li className="flex items-center text-light dark:text-white capitalize gap-3">
                  <TbArrowBadgeRightFilled className="text-light dark:text-white font-bold" />
                  <Link to="/v7/" className="hover:underline me-4 md:me-6">
                    Home
                  </Link>
                </li>
                <li className="flex items-center text-light dark:text-white capitalize gap-3">
                  <TbArrowBadgeRightFilled className="text-light dark:text-white font-bold" />
                  <Link to="/about-us" className="hover:underline me-4 md:me-6">
                    About The Group
                  </Link>
                </li>
                <li className="flex items-center text-light dark:text-white capitalize gap-3">
                  <TbArrowBadgeRightFilled className="text-light dark:text-white font-bold" />
                  <Link
                    to="/global-investing"
                    className="hover:underline me-4 md:me-6"
                  >
                    Global Investing
                  </Link>
                </li>
                <li className="flex items-center text-light dark:text-white capitalize gap-3">
                  <TbArrowBadgeRightFilled className="text-light dark:text-white font-bold" />
                  <Link
                    to="/operations"
                    className="hover:underline me-4 md:me-6"
                  >
                    Operations
                  </Link>
                </li>
                <li className="flex items-center text-light dark:text-white capitalize gap-3">
                  <TbArrowBadgeRightFilled className="text-light dark:text-white font-bold" />
                  <Link to="/careers" className="hover:underline me-4 md:me-6">
                    Careers
                  </Link>
                </li>
                <li className="flex items-center text-light dark:text-white capitalize gap-3">
                  <TbArrowBadgeRightFilled className="text-light dark:text-white font-bold" />
                  <Link
                    to="/news-and-events"
                    className="hover:underline me-4 md:me-6"
                  >
                    News & Events
                  </Link>
                </li>
                <li className="flex items-center text-light dark:text-white capitalize gap-3">
                  <TbArrowBadgeRightFilled className="text-light dark:text-white font-bold" />
                  <Link
                    to="/group-directory"
                    className="hover:underline me-4 md:me-6"
                  >
                    Group Directory
                  </Link>
                </li>
                <li className="flex items-center text-light dark:text-white capitalize gap-3">
                  <TbArrowBadgeRightFilled className="text-light dark:text-white font-bold" />
                  <Link
                    to="contact-us"
                    className="hover:underline me-4 md:me-6"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-light dark:text-white text-3xl font-bold pl-1 mb-3">
                Newsletter
              </h1>
              <ul className="flex flex-col  text-sm font-medium sm:mb-0 dark:text-white gap-2 pl-1">
                <p className="text-light dark:text-white">
                  Sign up for Our Newsletter. Subscribe us to receive news in
                  your inbox.
                </p>
                <div className="bg-white p-2 flex items-center justify-between gap-2">
                  <input
                    className="w-full outline-none px-2"
                    type="text"
                    name="newsletter"
                    id=""
                    placeholder="Your Email..."
                  />
                  <button className="bg-primary w-1/2 py-2 px-4 text-white border-2 border-white hover:border-primary hover:border-2 hover:bg-white hover:text-primary">
                    Sign Up
                  </button>
                </div>
              </ul>
            </div>
          </div>
          <hr className="my-2 border-dark sm:mx-auto dark:border-white lg:my-2" />
          <span className="text-light dark:text-white block text-sm text-center lg:text-left pb-20 lg:pb-0">
            © 2024{" "}
            <Link
              href="https://hashimindustry.com/"
              className="hover:underline"
            >
              Hashim Industry™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
