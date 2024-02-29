import React, { useEffect, useState } from "react";
import { RiArrowRightSLine } from "../assets/Icons";
import History from "../components/about/History";
import Keyfacts from "../components/about/Keyfacts";
import Milestone from "../components/about/Milestone";
import Achievements from "../components/about/Achievements";
import Message from "../components/about/Message";
import Management from "../components/about/Management";
import Partners from "../components/about/Partners";
import useScreenSize from "../components/GetScreenSize";
import isSticky from "../components/IsSticky";

const menu = [
  {
    id: 0,
    title: "history",
  },
  {
    id: 1,
    title: "keyfacts",
  },
  {
    id: 2,
    title: "milestone",
  },
  {
    id: 3,
    title: "achievements",
  },
  {
    id: 4,
    title: "message",
  },
  {
    id: 5,
    title: "management",
  },
  {
    id: 6,
    title: "partners",
  },
];

const About = ({ setTitle, setSubtitle }) => {
  const [renderComponent, setRenderComponent] = useState("history");

  const render = (component) => {
    switch (component) {
      case "history":
        return <History />;
      case "keyfacts":
        return <Keyfacts />;
      case "milestone":
        return <Milestone />;
      case "achievements":
        return <Achievements />;
      case "message":
        return <Message />;
      case "management":
        return <Management />;
      case "partners":
        return <Partners />;
      default:
        return <History />;
    }
  };

  useEffect(() => {
    setSubtitle(renderComponent);
    setTitle("About The Group");
  });

  const handleRender = (title) => {
    setRenderComponent(title);
    setTitle("About The Group");
    setSubtitle(title);
  };

  const screenSize = useScreenSize();

  isSticky();

  return (
    <div className="dark:bg-dark px-8">
      <div className="container mx-auto px-2 flex flex-col lg:flex-row py-10 gap-6">
        <div className="w-full lg:w-[15%]">
          <div
            className={`${
              screenSize.width <= 768 ? "" : "menu-section"
            } border-primary border rounded-md p-4`}
          >
            <h1 className="text-primary font-bold text-2xl uppercase pl-1"></h1>
            Menu
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

export default About;
