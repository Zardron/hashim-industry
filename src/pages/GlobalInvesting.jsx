import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";
import LOGO1 from "../assets/img/logo1.png";
import LOGO2 from "../assets/img/logo2-1.png";
import LOGO3 from "../assets/img/logo3.png";
import LOGO5 from "../assets/img/logo5.png";

import PRODUCT1 from "../assets/img/logo1p.png";
import PRODUCT2 from "../assets/img/logo2p.png";
import PRODUCT3 from "../assets/img/logo3p.png";
import PRODUCT4 from "../assets/img/logo4p.png";
import PRODUCT5 from "../assets/img/logo5p.png";

import { CgRadioChecked } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";

const GlobalInvesting = () => {
  const [open, setOpen] = useState({
    gm: true,
    pipe: false,
    gm2: false,
    rawasy: false,
    rak: false,
  });

  const { gm, pipe, gm2, rawasy, rak } = open;

  const globalInvestingData = [
    {
      id: 1,
      title: "ARABIAN GULF MANUFACTURERS",
      trigger: gm,
      imgSrc: LOGO1,
      profile:
        "Founded in 1963, AGM has grown to more than 90,000 square meters of facilities using state-of-the-art equipment. With 45 years of combined experience in plastic manufacturing industry, people of AGM have the unique knowledge.",
      url: "https://www.gulfmaid.com/",
      product: [
        "Gulfmaid",
        "AGM",
        "Lexogulf",
        "AGM Sheets",
        "Gulfwrap",
        "Gulfcolor",
      ],
      gallery: PRODUCT1,
    },
    {
      id: 2,
      title: "3P PIPE",
      trigger: pipe,
      imgSrc: LOGO2,
      profile:
        "3PPIPE ‘‘3P ‘‘, was established in 1992 in the industrial city phase 5, in Saudi Arabia Jeddah. 3P's covers an area of 35,000 M² and an annual production capacity of 50,000 MT., We could achieve this capacity in a short span of time due to the previous experience.",
      url: "https://www.3ppipe.com/",
      product: ["3P Pipe", "3P Stretch", "3P Shrink", "3P Cup", "3P Label"],
      gallery: PRODUCT2,
    },
    {
      id: 3,
      title: "GULF MANUFACTURERS",
      trigger: gm2,
      imgSrc: LOGO3,
      profile:
        "Gulf Manufacturers ‘‘GM ‘‘, was established in 2000 in the 6 of October City, Arab Republic of Egypt. GM's covers an area of 150,000 M² and an annual production capacity of 72,000 MT., We could achieve this capacity in a short span of time due to the previous experience.",
      url: "https://www.gmpipe.com/",
      product: ["P.V.C", "P.E", "Solvent Cement"],
      gallery: PRODUCT3,
    },
    {
      id: 4,
      title: "RAWASY AL KHALEEJ",
      trigger: rawasy,
      imgSrc: LOGO3,
      profile:
        "Founded in 1963, AGM has grown to more than 90,000 square meters of facilities using state-of-the-art equipment. With 45 years of combined experience in plastic manufacturing industry, people of AGM have the unique knowledge.",
      url: "https://www.rawasyplastic.com/",
      product: [
        "PET Preform",
        "Closure",
        "Stretch Film",
        "Shrink Film",
        "5gal PC Bottle",
        "Lexogulf",
        "Disposables",
      ],
      gallery: PRODUCT4,
    },
    {
      id: 5,
      title: "RAKTHERM",
      trigger: rak,
      imgSrc: LOGO5,
      profile:
        "With over 60 years experience in plastic pipe and fitting manufacturing in Saudi Arabia, Egypt and United Arab Emirates, RAKtherm has launched its first integrated PP-R and PEX pipes & fittings system for servicing a booming construction sector worldwide and in Middle East, in particular, under the same trade name.",
      url: "https://www.raktherm.com/",
      product: [
        "PPR & PEX Piping System",
        "UPVC Piping System",
        "RAKduct Piping System",
        "Fire-Resistant Piping System",
        "Gas Piping System",
        "HDPE Piping System",
      ],
      gallery: PRODUCT5,
    },
  ];

  const handleOpen = (trigger) => {
    switch (trigger) {
      case "ARABIAN GULF MANUFACTURERS":
        setOpen({
          ...open,
          gm: !gm,
          pipe: false,
          gm2: false,
          rawasy: false,
          rak: false,
        });
        break;
      case "3P PIPE":
        setOpen({
          pipe: !pipe,
          gm: false,
          gm2: false,
          rawasy: false,
          rak: false,
        });
        break;
      case "GULF MANUFACTURERS":
        setOpen({
          gm2: !gm2,
          gm: false,
          pipe: false,
          rawasy: false,
          rak: false,
        });
        break;
      case "RAWASY AL KHALEEJ":
        setOpen({
          rawasy: !rawasy,
          gm: false,
          pipe: false,
          gm2: false,
          rak: false,
        });
        break;
      case "RAKTHERM":
        setOpen({
          rak: !rak,
          gm: false,
          pipe: false,
          gm2: false,
          rawasy: false,
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="dark:bg-dark">
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-primary font-bold text-2xl uppercase border-b-offGray border-b pb-1">
          Global Investing
        </h1>

        <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-1">
          We have built our business model from the ground up to ensure that we
          have the capabilities required to successfully deliver our services to
          our growing client base.
        </p>

        <div className="w-full rounded-lg border bg-primary border-primary mt-4">
          {globalInvestingData.map((data, index) => (
            <div className="bg-primary rounded-lg">
              <div
                className={`flex justify-between items-center p-4 cursor-pointer ${
                  data.id === 5 ? "border-b-none" : "border-b border-b-white"
                }`}
                onClick={() => handleOpen(data.title)}
              >
                <p className="text-white text-md font-semibold">{data.title}</p>
                <IoIosArrowDown
                  className={`text-white ${
                    data.trigger
                      ? "rotate-180 transition-all duration-300"
                      : "rotate-0 transition-all duration-300"
                  }`}
                />
              </div>
              <div
                className={`bg-white dark:bg-dark ${
                  data.trigger ? "max-h-[1000px] lg:max-h-60" : "max-h-0"
                } overflow-hidden transition-[max-height] ease-linear duration-300 rounded-b-lg`}
              >
                <div className="flex flex-col lg:flex-row justify-around gap-10 mb-4 overflow-hidden transition-all ease duration-500 p-4">
                  <div className="w-full lg:w-1/3 flex flex-col lg:items-center">
                    <h1 className="text-primary font-bold text-xl mb-4">
                      Company Logo
                    </h1>
                    <img
                      src={data.imgSrc}
                      alt=""
                      className=" w-1/3 lg:w-full p-2 bg-white rounded-md"
                    />
                  </div>
                  <div className="w-full">
                    <h1 className="text-primary font-bold text-xl mb-4">
                      Company Profile
                    </h1>
                    <p className="mb-6 dark:text-white text-justify">
                      {data.profile}
                    </p>
                    <a
                      href={data.url}
                      target="_blank"
                      className="text-primary hover:underline rounded-md"
                    >
                      More Info
                    </a>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <h1 className="text-primary font-bold text-xl mb-4">
                      Products & Solutions
                    </h1>
                    <ul>
                      {data?.product?.map((productItem) => (
                        <li className="flex flow-row items-center gap-2 dark:text-white">
                          <CgRadioChecked size={12} />
                          {productItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full lg:w-1/3 flex flex-col items-start lg:items-center">
                    <h1 className="text-primary font-bold text-xl mb-4">
                      Product Gallery
                    </h1>
                    <img src={data.gallery} alt="" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobalInvesting;
