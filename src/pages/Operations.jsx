import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "../assets/Icons";
import Concept from "../components/operations/Concept";
import Strategies from "../components/operations/Strategies";
import GetScreenSize from "../components/GetScreenSize";
import IsSticky from "../components/IsSticky";

const menu = [
  {
    id: 0,
    title: "concept",
  },
  {
    id: 1,
    title: "strategies",
  },
];

const Operations = ({ setTitle, setSubtitle }) => {
  const [renderComponent, setRenderComponent] = useState("concept");

  const render = (component) => {
    switch (component) {
      case "concept":
        return <Concept />;
      case "strategies":
        return <Strategies />;
      default:
        return <Concept />;
    }
  };

  useEffect(() => {
    setSubtitle(renderComponent);
    setTitle("Operations");
  });

  const handleRender = (title) => {
    setRenderComponent(title);
    setTitle("Operations");
    setSubtitle(title);
  };

  const screenSize = GetScreenSize();
  IsSticky();

  return (
    <div className="dark:bg-dark px-8 lg:px-0">
      <div className="container mx-auto px-2 flex flex-col lg:flex-row py-10 gap-6">
        <div className="w-full lg:w-[15%]">
          <div
            className={`${
              screenSize.width <= 1028 ? "" : "menu-section dark:bg-dark"
            } border-primary border rounded-md p-4 shadow-3d`}
          >
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
          <div className="border-primary border rounded-md p-4 shadow-3d">
            <h1 className="text-primary font-bold text-2xl uppercase">
              {render(renderComponent)}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Operations;
