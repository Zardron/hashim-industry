import { useEffect, useState } from "react";
import {
  TiHomeOutline,
  PiInfo,
  AiOutlineGlobal,
  VscGear,
  TbUserSearch,
  FaRegNewspaper,
  TiContacts,
  BsTelephone,
} from "../assets/Icons";
import ReactToolTip from "./ReactToolTip";
import { Link, useLocation } from "react-router-dom";

const FloatingMenu = () => {
  const [content, setContent] = useState("");
  const [isScroll, setIsScroll] = useState(false);
  const location = useLocation().pathname;

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const scrollTop = window.scrollY;
    scrollTop >= 100 ? setIsScroll(true) : setIsScroll(false);
  };

  const menu = [
    {
      id: 1,
      link: "/v7/",
      icon: (
        <TiHomeOutline
          size={32}
          className={`${
            location === "/v7/" ? "text-primary" : "text-dark dark:text-white"
          } hover:text-primary dark:hover:text-primary cursor-pointer outline-none`}
        />
      ),
      title: "Home",
    },
    {
      id: 2,
      link: "/about-us",
      icon: (
        <PiInfo
          size={32}
          className={`${
            location === "/about-us"
              ? "text-primary"
              : "text-dark dark:text-white"
          } hover:text-primary dark:hover:text-primary cursor-pointer outline-none`}
        />
      ),
      title: "About The Group",
    },
    {
      id: 3,
      link: "/global-investing",
      icon: (
        <AiOutlineGlobal
          size={32}
          className={`${
            location === "/global-investing"
              ? "text-primary"
              : "text-dark dark:text-white"
          } hover:text-primary dark:hover:text-primary cursor-pointer outline-none`}
        />
      ),
      title: "Global Investing",
    },
    {
      id: 4,
      link: "/operations",
      icon: (
        <VscGear
          size={32}
          className={`${
            location === "/operations"
              ? "text-primary"
              : "text-dark dark:text-white"
          } hover:text-primary dark:hover:text-primary cursor-pointer outline-none`}
        />
      ),
      title: "Operations",
    },
    {
      id: 5,
      link: "/careers",
      icon: (
        <TbUserSearch
          size={32}
          className={`${
            location === "/careers"
              ? "text-primary"
              : "text-dark dark:text-white"
          } hover:text-primary dark:hover:text-primary cursor-pointer outline-none`}
        />
      ),
      title: "Careers",
    },
    {
      id: 6,
      link: "/news-and-events",
      icon: (
        <FaRegNewspaper
          size={32}
          className={`${
            location === "/news-and-events"
              ? "text-primary"
              : "text-dark dark:text-white"
          } hover:text-primary dark:hover:text-primary cursor-pointer outline-none`}
        />
      ),
      title: "News & Events",
    },
    {
      id: 7,
      link: "/group-directory",
      icon: (
        <TiContacts
          size={32}
          className={`${
            location === "/group-directory"
              ? "text-primary"
              : "text-dark dark:text-white"
          } hover:text-primary dark:hover:text-primary cursor-pointer outline-none`}
        />
      ),
      title: "Group Directory",
    },
    {
      id: 8,
      link: "/contact-us",
      icon: (
        <BsTelephone
          size={32}
          className={`${
            location === "/contact-us"
              ? "text-primary"
              : "text-dark dark:text-white"
          } hover:text-primary dark:hover:text-primary cursor-pointer outline-none`}
        />
      ),
      title: "Contact Us",
    },
  ];

  return (
    <>
      {/* DESKTOP FLOATING MENU */}
      <div
        className={`hidden lg:block group fixed top-1/4 right-5 rounded-lg bg-white dark:bg-dark border-primary border-2 animate__animated ${
          isScroll ? "animate__fadeIn" : "animate__fadeOut animate__faster"
        } `}
      >
        {menu.map((data, key) => (
          <div key={key}>
            <div className={`p-2`}>
              <Link
                to={data.link}
                onMouseEnter={() => setContent(data.title)}
                data-tooltip-id="my-tooltip-1"
              >
                {data.icon}
              </Link>
            </div>
            {data.id === 8 ? (
              ""
            ) : (
              <hr className="mx-2 border border-dark dark:border-white dark:border" />
            )}
          </div>
        ))}

        <ReactToolTip content={content} />
      </div>
      {/* END */}

      {/* MOBILE BOTTOM STICKY MENU */}
      {/* <div
        className={`lg:hidden px-4 pt-2 flex flex-row justify-around group fixed bottom-0 right-0 left-0 mx-auto bg-white dark:bg-dark border-primary border-t-2 animate__animated animate__flipIn
        `}
        style={{ paddingBottom: "10px !important" }}
      >
        {menu.map((data, key) => (
          <div key={key}>
            <div className={`p-2 mb-4`}>
              <Link
                to={data.link}
                onMouseEnter={() => setContent(data.title)}
                data-tooltip-id="my-tooltip-1"
                data-tooltip-place="bottom"
              >
                {data.icon}
              </Link>
            </div>
          </div>
        ))}

        <ReactToolTip content={content} />
      </div> */}
      {/* END */}
    </>
  );
};

export default FloatingMenu;
