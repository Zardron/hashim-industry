import React, { useEffect } from "react";

const Concept = () => {
  return (
    <div className="bg-white dark:bg-dark">
      <h1 className="text-primary font-bold text-2xl uppercase border-b-offGray border-b pb-1">
        Concept
      </h1>
      <p className="text-lg dark:text-primary mt-4 normal-case">Key Concepts</p>
      <div className="bg-white dark:text-white dark:bg-dark animate__animated animate__zoomIn">
        <div className="pt-1">
          <ul className="pl-4">
            <li className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal flex flex-row">
              <span className="text-lg font-bold pr-1">»</span>
              <span className="mt-1">Access to domestic feedstock sources</span>
            </li>
            <li className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal flex flex-row">
              <span className="text-lg font-bold pr-1">»</span>
              <span className="mt-1">
                Cost-effective energy and labor resources
              </span>
            </li>
            <li className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal flex flex-row">
              <span className="text-lg font-bold pr-1">»</span>
              <span className="mt-1">Leveraging economies of scale</span>
            </li>
            <li className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal flex flex-row">
              <span className="text-lg font-bold pr-1">»</span>
              <span className="mt-1">Established off-take agreements</span>
            </li>
            <li className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal flex flex-row">
              <span className="text-lg font-bold pr-1">»</span>
              <span className="mt-1">
                Convenient access to target export markets
              </span>
            </li>
            <li className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal flex flex-row">
              <span className="text-lg font-bold pr-1">»</span>
              <span className="mt-1">
                Established marketing and distribution networks
              </span>
            </li>
            <li className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal flex flex-row">
              <span className="text-lg font-bold pr-1">»</span>
              <span className="mt-1">
                Ongoing research and development initiatives
              </span>
            </li>
          </ul>
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1000"
          className="pt-3"
        >
          <p className="text-lg dark:text-primary normal-case">
            Value-Added Products for Global Markets
          </p>
          <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-1">
            Hashim Industry is committed to fostering cluster-based economic
            development, recognizing the significant advantages it offers. The
            industry cluster framework has demonstrated its efficacy in
            facilitating collaboration among companies to address needs and
            advance mutual interests. Specifically, clusters present substantial
            potential for bolstering our regional economy.
          </p>

          <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-3">
            Our strategy for job creation is geared towards meeting employment
            demands while concurrently nurturing talent. Hashim Industry
            implements sustainable Exchange Training Programs aimed at
            cultivating a skilled workforce, thereby cultivating a valuable
            intangible asset. By offering innovative yet straightforward
            solutions to complex challenges, we aim to lead technological
            advancements in the downstream petrochemical industry. Our
            overarching objective is to establish ourselves as a premier
            manufacturing facility capable of delivering competitive products on
            a global scale.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Concept;
