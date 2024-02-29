import React, { useEffect } from "react";

const Strategies = () => {
  useEffect(() => {
    window.scroll({ top: 500, left: 0, behavior: "smooth" });
  });

  return (
    <div className="bg-white dark:bg-dark">
      <h1 className="text-primary font-bold text-2xl uppercase border-b-offGray border-b pb-1">
        Strategies
      </h1>
      <div className="bg-white dark:text-white dark:bg-dark mt-3 animate__animated animate__zoomIn">
        <p className="text-lg dark:text-primary">
          Corporate Strategy and Brand Promise
        </p>
        <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-1">
          Hashim Industry strive to achieve an objective to be a global market
          leader in its industry. We are geared towards an “Export Oriented”
          plastic conversion platform, which would also serve as an attractive
          play for potential future expansions in different segments.
        </p>

        <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-1">
          Hashim Industry promote for one-stop solution concept, a quick way to
          provide a full range of downstream Petrochemical solutions to global
          markets.
        </p>

        <div data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">
          <p className="text-lg dark:text-primary pt-4">GROWTH STRATEGY</p>
          <ol className="pl-8 list-decimal">
            <li className="text-dark dark:text-white text-[16px] leading-6 normal-case leading font-normal">
              Greenfield ventures
            </li>
            <li className="text-dark dark:text-white text-[16px] leading-6 normal-case leading font-normal">
              Strategic acquisitions
            </li>
            <li className="text-dark dark:text-white text-[16px] leading-6 normal-case leading font-normal">
              Integration of our current capabilities in MENA region
            </li>
            <li className="text-dark dark:text-white text-[16px] leading-6 normal-case leading font-normal">
              Reinforcing distribution platform by acquiring distribution
              channels in targeted export markets
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Strategies;
