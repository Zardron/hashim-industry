import React, { useEffect } from "react";

const Strategies = () => {
  return (
    <div className="bg-white dark:bg-dark">
      <h1 className="text-primary font-bold text-2xl uppercase border-b-offGray border-b pb-1">
        Strategies
      </h1>
      <div className="bg-white dark:text-white dark:bg-dark mt-3 animate__animated animate__zoomIn">
        <p className="text-lg dark:text-primary normal-case">
          Strategic Initiatives
        </p>
        <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-1">
          Hashim Industry is dedicated to realizing its vision of becoming a
          prominent global market leader within its industry. Our focus lies in
          establishing an "Export-Oriented" plastic conversion platform,
          designed to not only meet current demands but also to facilitate
          potential expansions across various segments in the future.
        </p>

        <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-1">
          Furthermore, we advocate for the concept of a one-stop solution,
          offering a comprehensive range of downstream petrochemical solutions
          to global markets. This approach highlights our commitment to
          efficiency and convenience, ensuring that we provide timely and
          comprehensive support to our valued clientele.
        </p>

        <div data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">
          <p className="text-lg dark:text-primary pt-4 normal-case">
            Growth Strategy
          </p>
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
