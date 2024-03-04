import React from "react";
import LOGO1 from "../assets/img/logo1.png";
import LOGO2 from "../assets/img/logo2-1.png";
import LOGO3 from "../assets/img/logo3.png";
import LOGO4 from "../assets/img/logo3.png";
import LOGO5 from "../assets/img/logo5.png";

const ourGroupData = [
  {
    id: "200",
    imgSrc: LOGO1,
    title: "AGM GULFMAID",
    desc: " Founded in 1963, AGM has grown to more than 90,000 square meters of facilities using state-of-the-art equipment...",
    link: "",
  },
  {
    id: "400",
    imgSrc: LOGO2,
    title: "3P PIPE",
    desc: "3PPIPE ‘‘3P ‘‘, was established in 1992 in the industrial city phase 5, in Saudi Arabia Jeddah. 3P's covers an area of 35,000 M²...",
    link: "",
  },
  {
    id: "600",
    imgSrc: LOGO3,
    title: "GULF MANUFACTURES",
    desc: "Gulf Manufacturers ‘‘GM ‘‘, was established in 2000 in the 6 of October City, Arab Republic of Egypt. GM's covers...",
    link: "",
  },
  {
    id: "800",
    imgSrc: LOGO4,
    title: "RAWASY AL KHALEEJ",
    desc: "We are actively serving Food and Beverage Industries in the Middle East and North African region with a turnover...",
    link: "",
  },
  {
    id: "1000",
    imgSrc: LOGO5,
    title: "RAKTHERM",
    desc: "With over 60 years experience in plastic pipe and fitting manufacturing in Saudi Arabia, Egypt and United Arab Emirates, RAKtherm has launched...",
    link: "",
  },
];

const OurGroup = () => {
  return (
    <div className="container mx-auto px-8 lg:px:0">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 p-4 lg:p-0">
        {ourGroupData.map((data, key) => (
          <div className="rounded-lg hover:scale-105 transition-all ease-linear duration-200 ">
            <div
              className="bg-white dark:bg-dark border-primary border-2 rounded-lg shadow-3d dark:shadow-3d-dark transition-all ease-in-out duration-300"
              key={key}
              data-aos="flip-right"
              data-aos-delay={data.id}
              data-aos-duration="1000"
            >
              <div className="flex items-center justify-center bg-white rounded-t-lg border-b-secondary border-b py-4">
                <img src={data.imgSrc} alt="" className="h-14" />
              </div>
              <div className="m-4 bg-white dark:bg-dark rounded-b-lg">
                <h1 className="text-center text-primary font-bold mb-4">
                  {data.title}
                </h1>
                <p className="text-justify tracking-tighter dark:text-white text-sm">
                  {data.desc}
                </p>
              </div>
              <div className="flex items-center justify-center mt-4 mb-4">
                <a
                  href=""
                  className="bg-primary text-white px-4 py-2 rounded-md border-2 border-light hover:bg-white hover:text-primary hover:border-primary"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurGroup;
