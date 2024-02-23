import React from "react";

const Partners = () => {
  return (
    <div className="bg-white dark:bg-dark">
      <h1 className="text-primary font-bold text-2xl uppercase border-b-offGray border-b pb-1">
        Partners
      </h1>
      <div className="bg-white dark:text-white dark:bg-dark mt-3 animate__animated animate__zoomIn">
        <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-1">
          The path from innovation and ground breaking scientific advances to
          successful consumer products depends on convening the best global
          resources, experience and talent.
        </p>
        <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-3">
          At Hashim Industries , we strongly believe in collaborating closely
          with partners who share a common dream and have the similar goals of
          making the future better through innovative and consumer-centric
          products. Our partners choose us because of our business ethics,
          unfailing commitment to provide satisfactory services and our ability
          to cut costs with the help of new technology in plastics conversion.
        </p>
      </div>

      <div class="flex flex-row items-start justify-center gap-4 mt-4">
        <div
          className="w-[30%] text-center bg-primary"
          data-aos="flip-right"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          01
        </div>
        <div
          className="w-[30%] text-center bg-primary"
          data-aos="flip-right"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          01
        </div>
        <div
          className="w-[30%] text-center bg-primary"
          data-aos="flip-right"
          data-aos-delay="600"
          data-aos-duration="1000"
        >
          01
        </div>
      </div>
      <div class="flex flex-row items-start justify-center gap-4  mt-4">
        <div className="w-[15%]"></div>
        <div
          className="w-[30%] text-center bg-primary"
          data-aos="flip-right"
          data-aos-delay="800"
          data-aos-duration="1000"
        >
          01
        </div>
        <div
          className="w-[30%] text-center bg-primary"
          data-aos="flip-right"
          data-aos-delay="1000"
          data-aos-duration="1000"
        >
          01
        </div>
        <div className="w-[15%]"></div>
      </div>
    </div>
  );
};

export default Partners;
