import Slider from "react-slick";
import GM from "../assets/img/gulfmaid.jpg";
import PPIPE from "../assets/img/3p.jpg";
import GM2 from "../assets/img/gm.jpg";
import RAWASY from "../assets/img/rawasy.jpg";
import RAKTHERM from "../assets/img/rakherm.jpg";
import { Link, useNavigate } from "react-router-dom";
import IsSticky from "./IsSticky";
import NavSticky from "./NavSticky";
import useScreenSize from "../components/GetScreenSize";
import LOGO_B from "../assets/img/logo-b.png";
import LOGO_W from "../assets/img/logo-w.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";
import { useState } from "react";

const navLink = [
  {
    id: 1,
    title: "Home",
    link: "/v7/",
  },
  {
    id: 2,
    title: "about the group",
    link: "/about-us",
  },
  {
    id: 3,
    title: "global investing",
    link: "/global-investing",
  },
  {
    id: 4,
    title: "operations",
    link: "/operations",
  },
  {
    id: 5,
    title: "careers",
    link: "/careers",
  },
  {
    id: 6,
    title: "news & events",
    link: "/news-and-events",
  },
  {
    id: 7,
    title: "group directory",
    link: "/group-directory",
  },
  {
    id: 8,
    title: "contact us",
    link: "/contact-us",
  },
];

const bannerDetails = [
  {
    src: GM,
    title: "AGM-Gulfmaid",
    details:
      "Founded in 1963, AGM has grown to more than 90,000 square meters of facilities using state-of-the-art...",
  },
  {
    src: PPIPE,
    title: "3P Pipe",
    details:
      "3P Gulf Group is one of the leading manufacturers for packaging and piping solutions in Jeddah,...",
  },
  {
    src: GM2,
    title: "Gulf Manufacturers",
    details:
      "Gulf Manufacturers ‘‘GM ‘‘, was established in 2000 in the 6 of October City, Arab Republic of Egypt...",
  },
  {
    src: RAWASY,
    title: "Rawasy Al Khaleej",
    details:
      "We are actively serving Food and Beverage Industries in the Middle East and North African region...",
  },
  {
    src: RAKTHERM,
    title: "RAKtherm",
    details:
      "With over 60 years experience in plastic pipe and fitting manufacturing in Saudi Arabia, Egypt and...",
  },
];

const Banner = ({ darkMode }) => {
  const settings = {
    arrows: false,
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: false,
  };

  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
  const screenSize = useScreenSize();
  screenSize.width >= 1028 ? "" : NavSticky();

  const handleNavigate = (link) => {
    navigate(link);
    setOpenMenu(false);
  };

  return (
    <>
      <div
        className={`${
          screenSize.width >= 1028 ? "" : "mob-section"
        } lg:hidden dark:bg-dark`}
      >
        <div className="flex items-center justify-between px-2">
          <img src={darkMode === "light" ? LOGO_B : LOGO_W} className="h-20" />

          <div
            className="cursor-pointer"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? (
              <LiaTimesSolid size={36} className="dark:text-white" />
            ) : (
              <RxHamburgerMenu size={36} className="dark:text-white" />
            )}
          </div>
        </div>
        {openMenu && <hr className=" text-primary border" />}
        <div
          className={`ease-linear duration-300 overflow-hidden ${
            openMenu ? "max-h-[300px]" : "max-h-0"
          }`}
        >
          {navLink.map((data) => (
            <div
              className="p-2 text-sm cursor-pointer hover:bg-offGray/30 capitalize"
              onClick={() => handleNavigate(data.link)}
              key={data.title}
            >
              {data.title}
            </div>
          ))}
        </div>
      </div>

      <Slider {...settings}>
        {bannerDetails.map((data, key) => (
          <div key={key} className="animate__animated animate__slideInDown">
            <div
              className={` h-[50vh] lg:h-screen bg-cover bg-no-repeat`}
              style={{ backgroundImage: `url(${data.src})` }}
            >
              <div className="absolute flex items-center justify-center opacity-65 w-full h-full bg-gray"></div>
              <div className="w-full h-full flex items-center justify-center">
                <div className="inner_wrap w-full mx-10 lg:w-1/3 lg:mx-0">
                  <h1 className="text-xl lg:text-[40px] font-bold uppercase leading-8 lg:leading-[60px] mt-4 mb-2">
                    {data.title}
                  </h1>
                  <p className="text-xs text-justify font-normal lg:text-[16px] lg:text-justify leading-5">
                    {data.details}
                  </p>

                  <div className="py-4 mb-2">
                    <Link
                      to="/global-investing"
                      className="border border-primary px-4 py-2 my-2 lg:my-4 rounded-md cursor-pointer shadow-sm shadow-primary"
                    >
                      Read More
                    </Link>
                  </div>
                  <span className="border_btm"></span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Banner;
