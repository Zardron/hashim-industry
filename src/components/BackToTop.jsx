import { useEffect, useState } from "react";
import { PiArrowFatLinesUpLight } from "react-icons/pi";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", isScroll);
    return () => {
      window.removeEventListener("scroll", isScroll);
    };
  });

  const isScroll = () => {
    const top = window.scrollY;

    top >= 100 ? setShow(true) : setShow(false);
  };

  const scrollToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <div
        className={`animate__animated ${
          show ? "animate__backInUp" : "animate__backOutDown"
        } group fixed bottom-28 lg:bottom-20 right-5 p-2 rounded-lg bg-white border-2 border-primary dark:bg-dark dark:border-primary dark:border-2 z-50 hover:bg-dark group`}
      >
        <PiArrowFatLinesUpLight
          className=" text-dark cursor-pointer group-hover:text-white dark:text-white animate-bounce group-hover:animate-none"
          size={30}
          onClick={scrollToTop}
        />
      </div>
    </>
  );
};

export default BackToTop;
