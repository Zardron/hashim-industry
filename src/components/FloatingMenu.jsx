import { useEffect, useState } from "react";
import {
  TiHomeOutline,
  PiInfo,
  AiOutlineGlobal,
  VscGear,
  TbUserSearch,
  FaRegNewspaper,
} from "../assets/Icons";
import ReactToolTip from "./ReactToolTip";
import { Link } from "react-router-dom";

const FloatingMenu = () => {
  const [content, setContent] = useState("");
  const [isScroll, setIsScroll] = useState(false);
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const scrollTop = window.scrollY;
    scrollTop >= 100 ? setIsScroll(true) : setIsScroll(false);
  };

  return (
    <div
      className={`group fixed top-1/3 right-5 rounded-lg bg-white dark:bg-dark border-primary border-2 animate__animated ${
        isScroll ? "animate__flipInX" : "animate__flipOutX"
      } `}
    >
      <div className="p-2">
        <Link to={"/"}>
          <TiHomeOutline
            size={32}
            data-tooltip-id="my-tooltip-1"
            onMouseEnter={() => setContent("Home")}
            className="text-dark dark:text-white hover:text-primary dark:hover:text-primary cursor-pointer outline-none"
          />
        </Link>
      </div>
      <hr className="mx-2 border border-dark dark:border-white dark:border" />
      <div className="p-2">
        <Link to={"/about-us"}>
          <PiInfo
            size={32}
            data-tooltip-id="my-tooltip-1"
            onMouseEnter={() => setContent("About The Group")}
            className="text-dark dark:text-white hover:text-primary dark:hover:text-primary cursor-pointer outline-none"
          />
        </Link>
      </div>
      <hr className="mx-2 border border-dark dark:border-white dark:border" />
      <div className="p-2">
        <AiOutlineGlobal
          size={32}
          data-tooltip-id="my-tooltip-1"
          onMouseEnter={() => setContent("Global Investing")}
          className="text-dark dark:text-white hover:text-primary dark:hover:text-primary cursor-pointer outline-none"
        />
      </div>
      <hr className="mx-2 border border-dark dark:border-white dark:border" />
      <div className="p-2">
        <VscGear
          size={32}
          data-tooltip-id="my-tooltip-1"
          onMouseEnter={() => setContent("Operations")}
          className="text-dark dark:text-white hover:text-primary dark:hover:text-primary cursor-pointer outline-none"
        />
      </div>
      <hr className="mx-2 border border-dark dark:border-white dark:border" />
      <div className="p-2">
        <TbUserSearch
          size={32}
          data-tooltip-id="my-tooltip-1"
          onMouseEnter={() => setContent("Careers")}
          className="text-dark dark:text-white hover:text-primary dark:hover:text-primary cursor-pointer outline-none"
        />
      </div>
      <hr className="mx-2 border border-dark dark:border-white dark:border" />
      <div className="p-2">
        <FaRegNewspaper
          size={32}
          data-tooltip-id="my-tooltip-1"
          onMouseEnter={() => setContent("News & Events")}
          className="text-dark dark:text-white hover:text-primary dark:hover:text-primary cursor-pointer outline-none"
        />
      </div>

      <ReactToolTip content={content} />
    </div>
  );
};

export default FloatingMenu;
