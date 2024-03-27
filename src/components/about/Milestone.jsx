import React, { useEffect } from "react";
import RAK from "../../assets/banner/rak-logo.png";
import GULFMAID from "../../assets/img/logo1.png";
import PIPE from "../../assets/img/logo2-1.png";
import GM from "../../assets/img/logo3.png";

const Milestone = () => {
  return (
    <div className="bg-white dark:bg-dark">
      <h1 className="text-primary font-bold text-2xl uppercase border-b-offGray border-b pb-1">
        Milestone
      </h1>
      <div>
        <p className="text-lg dark:text-primary mt-4 normal-case">
          Significant Milestones - Hallmarks of Achievement
        </p>
      </div>
      <div className="bg-white dark:bg-dark dark:text-white mt-2 pt-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0">
          <div
            className="relative flex flex-row items-center shadow-3d m-1"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            <div className=" bg-white dark:bg-dark border-primary border-4 p-2 w-full lg:rounded-tl-lg">
              <div className="flex flex-col items-center justify-center">
                <div className="w-full bg-white flex items-center justify-center p-2">
                  <img src={GULFMAID} alt="" className="w-[156px]" />
                </div>
                <p className="mt-2 text-base lg:text-2xl">AGM- GULFMAID</p>
                <p className="text-[10px] leading-snug lg:text-sm text-dark font-normal normal-case text-justify pt-2 dark:text-white">
                  In 1963, Arabian Gulf Manufacturers Ltd (AGM) was established,
                  utilizing 90,000 square meters of cutting-edge facilities
                  equipped with state-of-the-art machinery to pioneer the
                  production of plastic products in the highly sophisticated
                  industry.
                </p>
              </div>
            </div>
            <div className="h-full flex items-center text-base lg:text-2xl text-white bg-primary px-4">
              1963
            </div>
          </div>
          <div className="hidden lg:block"></div>

          <div className="hidden lg:block"></div>
          <div
            className="relative flex flex-row items-center shadow-3ds m-1"
            data-aos="fade-left"
            data-aos-delay="600"
            data-aos-duration="1000"
          >
            <div className="h-full flex items-center text-base lg:text-2xl text-white bg-primary px-4">
              1992
            </div>
            <div className=" bg-white dark:bg-dark border-primary border-4 p-2 w-full lg:rounded-tr-lg">
              <div className="flex flex-col items-center justify-center">
                <div className="w-full bg-white flex items-center justify-center p-2">
                  <img src={PIPE} alt="" className="w-[156px]" />
                </div>
                <p className="mt-2 text-base lg:text-2xl">3P PIPE</p>
                <p className="text-[10px] leading-snug lg:text-sm text-dark font-normal normal-case text-justify pt-2 dark:text-white">
                  Prime Plastic Products, also known as 3P Gulf Group, commenced
                  operations, boasting a substantial 10,000 square meters of
                  manufacturing space in Jeddah, the second largest city in
                  Saudi Arabia.
                </p>
              </div>
            </div>
          </div>

          <div
            className="relative flex flex-row items-center shadow-3d m-1"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            <div className=" bg-white dark:bg-dark border-primary border-4 p-2 w-full lg:rounded-tl-lg">
              <div className="flex flex-col items-center justify-center">
                <div className="w-full bg-white flex items-center justify-center p-2">
                  <img src={GM} alt="" className="w-[156px]" />
                </div>
                <p className="mt-2 text-base lg:text-2xl">RAWASY AL KHALEEJ</p>
                <p className="text-[10px] leading-snug lg:text-sm text-dark font-normal normal-case text-justify pt-2 dark:text-white">
                  Hashim Group expanded its portfolio with the establishment of
                  Rawasy Al Khaleej, an integrated packaging industry, further
                  enhancing its capabilities.
                </p>
                <p className="text-sm text-dark font-normal normal-case text-justify">
                  &nbsp;
                </p>
              </div>
            </div>
            <div className="h-full flex items-center text-base lg:text-2xl text-white bg-primary px-4">
              1994
            </div>
          </div>
          <div className="hidden lg:block"></div>

          <div className="hidden lg:block"></div>
          <div
            className="relative flex flex-row items-center shadow-3ds m-1"
            data-aos="fade-left"
            data-aos-delay="450"
            data-aos-duration="1000"
          >
            <div className="h-full flex items-center text-base lg:text-2xl text-white bg-primary px-4">
              2000
            </div>
            <div className=" bg-white dark:bg-dark border-primary border-4 p-2 w-full lg:rounded-tr-lg">
              <div className="flex flex-col items-center justify-center">
                <div className="w-full bg-white flex items-center justify-center p-2">
                  <img src={GM} alt="" className="w-[156px]" />
                </div>
                <p className="mt-2 text-base lg:text-2xl">GULF MANUFACTURER</p>
                <p className="text-[10px] leading-snug lg:text-sm text-dark font-normal normal-case text-justify pt-2 dark:text-white">
                  GM ventured into the PVC and PE fittings market, utilizing
                  over 40,000 square meters of land in Egypt. Leveraging
                  advanced machinery and equipment, the company solidified its
                  presence in the industry.
                </p>
              </div>
            </div>
          </div>

          <div
            className="relative flex flex-row items-center shadow-3d m-1"
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-duration="1000"
          >
            <div className=" bg-white dark:bg-dark border-primary border-4 p-2 w-full lg:rounded-tl-lg">
              <div className="flex flex-col items-center justify-center">
                <div className="w-full bg-white flex items-center justify-center p-2">
                  <img src={RAK} alt="" className="w-[156px]" />
                </div>
                <p className="mt-2 text-base lg:text-2xl">RAKTHERM</p>
                <p className="text-[10px] leading-snug lg:text-sm text-dark font-normal normal-case text-justify pt-2 dark:text-white">
                  PP-R and PEX pipes & fitting systems were introduced,
                  significantly boosting the group's pipe production capacity.
                  This expansion also signaled the group's entry into the
                  construction industry. Additionally, the company diversified
                  its offerings to include UPVC, RAK Duct electrical and conduit
                  wiring systems, fire and gas piping systems, concealed
                  cisterns, silicone sealants, and plumbing accessories.
                </p>
              </div>
            </div>
            <div className="h-full flex items-center text-base lg:text-2xl text-white bg-primary px-4">
              2005
            </div>
          </div>
          <div className="hidden lg:block"></div>
        </div>
        <p className="text-[10px] leading-snug lg:text-sm text-dark font-normal normal-case text-justify pt-10 pb-6 dark:text-white">
          The company ventured into providing petrochemical solutions for the
          plastics, packaging, and building materials sectors. With a focus on
          delivering high-performance petrochemical products, the aim was to
          meet the needs of clients in the United Arab Emirates seeking
          top-quality solutions.
        </p>
      </div>
    </div>
  );
};

export default Milestone;
