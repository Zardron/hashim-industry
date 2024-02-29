import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "../assets/Icons";
import PressRelease from "../components/news/PressRelease";
import VideoGallery from "../components/news/VideoGallery";
import PhotoGallery from "../components/news/PhotoGallery";

const menu = [
  {
    id: 0,
    title: "press release",
  },
  {
    id: 1,
    title: "video gallery",
  },
  {
    id: 2,
    title: "photo gallery",
  },
];

const NewsAndEvents = ({ setTitle, setSubtitle }) => {
  const [renderComponent, setRenderComponent] = useState("press release");

  const render = (component) => {
    switch (component) {
      case "press release":
        return <PressRelease />;
      case "video gallery":
        return <VideoGallery />;
      case "photo gallery":
        return <PhotoGallery />;
      default:
        return <PressRelease />;
    }
  };

  useEffect(() => {
    setSubtitle(renderComponent);
    setTitle("News & Events");
  });

  const handleRender = (title) => {
    setRenderComponent(title);
    setTitle("News & Events");
    setSubtitle(title);
  };

  return (
    <div className="dark:bg-dark px-8 lg:px-0">
      <div className="container mx-auto px-2 flex flex-col lg:flex-row py-10 gap-6">
        <div className="w-full lg:w-[15%]">
          <div className="border-primary border rounded-md p-4">
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

export default NewsAndEvents;
