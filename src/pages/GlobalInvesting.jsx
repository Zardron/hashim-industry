import React from "react";
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

const globalInvestingData = [
  {
    id: 1,
    title: "ARABIAN GULF MANUFACTURERS",
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

const GlobalInvesting = () => {
  return (
    <div className="dark:bg-dark">
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-primary font-bold text-2xl uppercase border-b-offGray border-b pb-1">
          Achievements
        </h1>

        <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-1">
          We have built our business model from the ground up to ensure that we
          have the capabilities required to successfully deliver our services to
          our growing client base.
        </p>

        <Accordion className="border-primary border mt-6">
          {globalInvestingData.map((data, index) => (
            <AccordionPanel>
              <AccordionTitle
                className={`bg-primary p-4 ${
                  data.id === 1
                    ? "rounded-t-md"
                    : data.id === 5
                    ? "rounded-b-md"
                    : ""
                } text-white ${data.id === 5 ? "" : "border-b-white border-b"}`}
              >
                {data.title}
              </AccordionTitle>
              <AccordionContent className="p-4 transition-all ease-in-out duration-200">
                {" "}
                <div className="flex flex-row justify-around gap-10">
                  <div className="w-1/3 flex flex-col items-center justify-center">
                    <h1 className="text-primary font-bold text-xl mb-4">
                      Company Logo
                    </h1>
                  </div>
                  <div className="w-full">
                    <h1 className="text-primary font-bold text-xl mb-4">
                      Company Profile
                    </h1>
                  </div>
                  <div className="w-1/2">
                    <h1 className="text-primary font-bold text-xl mb-4">
                      Products & Solutions
                    </h1>
                  </div>
                  <div className="w-1/3 flex items-center">
                    <h1 className="text-primary font-bold text-xl mb-4">
                      Product Gallery
                    </h1>
                  </div>
                </div>
                <div className="flex flex-row justify-around gap-10 mb-4">
                  <div className="w-1/3 flex flex-col items-center justify-center">
                    <img src={data.imgSrc} alt="" />
                  </div>
                  <div className="w-full">
                    <p className="mb-6 text-gray-500 dark:text-gray-400 text-justify">
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
                  <div className="w-1/2">
                    <ul>
                      {data?.product?.map((productItem) => (
                        <li className="flex flow-row items-center gap-2">
                          <CgRadioChecked size={12} />
                          {productItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-1/3 flex items-center justify-center">
                    <img src={data.gallery} alt="" />
                  </div>
                </div>
              </AccordionContent>
            </AccordionPanel>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default GlobalInvesting;
