import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "../assets/Icons";
import Career from "../components/careers/Career";
import RecentJobs from "../components/careers/RecentJobs";
import HowToApply from "../components/careers/HowToApply";

const menu = [
  {
    id: 0,
    title: "careers",
  },
  {
    id: 1,
    title: "recent jobs",
  },
  {
    id: 2,
    title: "how to apply",
  },
];

const Careers = ({ setTitle, setSubtitle }) => {
  const [renderComponent, setRenderComponent] = useState("careers");

  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".menu-section");
    const scrollTop = window.scrollY;
    scrollTop >= 450
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  const render = (component) => {
    switch (component) {
      case "careers":
        return <Career setRenderComponent={setRenderComponent} />;
      case "recent jobs":
        return <RecentJobs />;
      case "how to apply":
        return <HowToApply />;
      default:
        return <Careers />;
    }
  };

  useEffect(() => {
    setSubtitle(renderComponent);
    setTitle("Careers");
  });

  const handleRender = (title) => {
    setRenderComponent(title);
    setTitle("Careers");
    setSubtitle(title);
  };

  return (
    <div className="dark:bg-dark px-8 lg:px-0">
      <div className="container mx-auto px-2 flex flex-col lg:flex-row py-10 gap-6">
        <div className="w-full lg:w-[15%]">
          <div className="lg:menu-section border-primary border rounded-md p-4">
            <h1 className="text-primary font-bold text-2xl uppercase pl-1">
              Menu
            </h1>

            <ul className="mt-4">
              {menu.map((data, key) => (
                <li className="mb-4 flex items-center" key={key}>
                  <RiArrowRightSLine className="text-primary" />
                  <div
                    onClick={() => handleRender(data.title)}
                    className={`${
                      renderComponent === data.title ? "active" : ""
                    } cursor-pointer text-[15px] hover:text-primary capitalize hover:underline hover:underline-offset-4 dark:text-white dark:hover:text-primary`}
                  >
                    {data.title}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[85%]">
          <div className="border-primary border rounded-md p-4">
            <h1 className="text-primary font-bold text-2xl uppercase">
              {render(renderComponent)}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
