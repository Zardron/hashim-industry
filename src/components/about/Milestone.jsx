import React, { useEffect } from "react";

const Milestone = () => {
  useEffect(() => {
    window.scroll({ top: 500, left: 0, behavior: "smooth" });
  });

  return (
    <div className="bg-white dark:bg-dark">
      <h1 className="text-primary font-bold text-2xl uppercase border-b-offGray border-b pb-1">
        Milestone
      </h1>
      <div>
        <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-2">
          A long line of landmark achievements and product milestones have made
          hashim industry. A leading company for supplying of plastics,
          industrial materials, and food packaging products.
        </p>
      </div>
      <div className="bg-white dark:bg-dark dark:text-white mt-2 pt-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0">
          <div
            className="relative flex flex-row items-center"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            <div className=" bg-white dark:bg-dark border-primary border-4 p-2 w-full lg:rounded-tl-lg lg:rounded-bl-lg">
              <div className="flex flex-col items-center justify-center">
                <div className="w-full bg-white flex items-center justify-center p-2">
                  <img src="https://hashimindustry.com/images/gm.jpg" alt="" />
                </div>
                <p className="mt-2">AGM- GULFMAID</p>
                <p className="text-sm text-dark font-normal normal-case text-justify pt-2 dark:text-white">
                  Arabian Gulf Manufacturers Ltd (AGM) established in 1963.
                  90,000 square meters of facilities using state-of-the-art
                  equipment used in the highly sophisticated industry to produce
                  plastic products.
                </p>
              </div>
            </div>
            <div className="h-full flex items-center text-white bg-primary px-4">
              1963
            </div>
          </div>
          <div className="hidden lg:block"></div>

          <div className="hidden lg:block"></div>
          <div
            className="relative flex flex-row items-center"
            data-aos="fade-left"
            data-aos-delay="600"
            data-aos-duration="1000"
          >
            <div className="h-full flex items-center text-white bg-primary px-4">
              1992
            </div>
            <div className=" bg-white dark:bg-dark border-primary border-4 p-2 w-full lg:rounded-tr-lg lg:rounded-br-lg">
              <div className="flex flex-col items-center justify-center">
                <div className="w-full bg-white flex items-center justify-center p-2">
                  <img src="https://hashimindustry.com/images/3p.jpg" alt="" />
                </div>
                <p className="mt-2">3P PIPE</p>
                <p className="text-sm text-dark font-normal normal-case text-justify pt-2 dark:text-white">
                  Prime Plastic Products, also commonly known as 3P Gulf Groups
                  began operations. It covered an impressive 10,000 sq meters in
                  Jeddah, the second largest city in Saudi Arabia.
                </p>
              </div>
            </div>
          </div>

          <div
            className="relative flex flex-row items-center"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            <div className=" bg-white dark:bg-dark border-primary border-4 p-2 w-full lg:rounded-tl-lg lg:rounded-bl-lg">
              <div className="flex flex-col items-center justify-center">
                <div className="w-full bg-white flex items-center justify-center p-2">
                  <img src="https://hashimindustry.com/images/gmb.jpg" alt="" />
                </div>
                <p className="mt-2">RAWASY AL KHALEEJ</p>
                <p className="text-sm text-dark font-normal normal-case text-justify pt-2 dark:text-white">
                  Hashem Group added a new feature in its cap and started Rawasy
                  Al Khaleej, an integrated packaging industry.
                </p>
                <p className="text-sm text-dark font-normal normal-case text-justify">
                  &nbsp;
                </p>
              </div>
            </div>
            <div className="h-full flex items-center text-white bg-primary px-4">
              1994
            </div>
          </div>
          <div className="hidden lg:block"></div>

          <div className="hidden lg:block"></div>
          <div
            className="relative flex flex-row items-center"
            data-aos="fade-left"
            data-aos-delay="450"
            data-aos-duration="1000"
          >
            <div className="h-full flex items-center text-white bg-primary px-4">
              2000
            </div>
            <div className=" bg-white dark:bg-dark border-primary border-4 p-2 w-full lg:rounded-tr-lg lg:rounded-br-lg">
              <div className="flex flex-col items-center justify-center">
                <div className="w-full bg-white flex items-center justify-center p-2">
                  <img src="https://hashimindustry.com/images/gmb.jpg" alt="" />
                </div>
                <p className="mt-2">GULF MANUFACTURER</p>
                <p className="text-sm text-dark font-normal normal-case text-justify pt-2 dark:text-white">
                  In over 40,000 sq meter of land in Egypt, GM’s PVC and PE and
                  fittings. 40,000 sqm. The company used various advanced
                  machineries and equipment.
                </p>
              </div>
            </div>
          </div>

          <div
            className="relative flex flex-row items-center"
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-duration="1000"
          >
            <div className=" bg-white dark:bg-dark border-primary border-4 p-2 w-full lg:rounded-tl-lg lg:rounded-bl-lg">
              <div className="flex flex-col items-center justify-center">
                <div className="w-full bg-white flex items-center justify-center p-2">
                  <img src="https://hashimindustry.com/images/rak.jpg" alt="" />
                </div>
                <p className="mt-2">RAKTHERM</p>
                <p className="text-sm text-dark font-normal normal-case text-justify pt-2 dark:text-white">
                  PP-R and PEX pipes & fitting systems was established. The
                  company increased the group’s production of pipes. It also
                  marked the foray of the group in the construction industry.
                </p>
              </div>
            </div>
            <div className="h-full flex items-center text-white bg-primary px-4">
              2005
            </div>
          </div>
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </div>
  );
};

export default Milestone;
