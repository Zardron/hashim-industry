import { MdOutlineDoubleArrow } from "../assets/Icons";
import NavSticky from "./NavSticky";
import useScreenSize from "../components/GetScreenSize";
import LOGO_B from "../assets/img/logo-b.png";
import LOGO_W from "../assets/img/logo-w.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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

const PageBanner = ({ LOGO, title, subTitle, darkMode }) => {
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
      <div className="relative -z-50">
        <div
          className={`h-[40vh] w-full bg-cover bg-no-repeat`}
          style={{ backgroundImage: `url(${LOGO})` }}
        >
          <div className="absolute flex items-center justify-center opacity-65 dark:opacity-85 w-full h-full bg-gray"></div>
          <div
            className="absolute top-1/2 w-full p-10 lg:left-16 2xl:left-52 lg:p-0 md:w-full lg:w-1/3 2xl:w-1/3"
            style={{ transform: "translateY(-50%)" }}
          >
            <div className="page_wrapper p-10">
              <h1 className="text-md md:text-[30px] 2xl:text-[40px] font-bold uppercase mb-4">
                {title}
              </h1>
              <div className="flex flex-row items-center">
                <MdOutlineDoubleArrow className="mr-1 text-primary" />
                <p className="text-sm text-justify capitalize font-normal lg:text-justify m-0">
                  {subTitle}
                </p>
              </div>
              <span className="border_btm"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
