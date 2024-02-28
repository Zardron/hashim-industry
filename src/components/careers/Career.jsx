import React from "react";
import CAREERS from "../../assets/img/careers.jpg";

const Career = ({ setRenderComponent }) => {
  window.scroll({ top: 500, left: 0, behavior: "smooth" });
  return (
    <div className="bg-white dark:bg-dark">
      <h1 className="text-primary font-bold text-2xl uppercase border-b-offGray border-b pb-1">
        Careers
      </h1>
      <div className="bg-white dark:text-white dark:bg-dark mt-3 animate__animated animate__zoomIn">
        <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-1">
          OUR GROUP defines diversity as all of the differences that make each
          of us unique individuals. Our ability to attract retains, and fully
          engage diverse talent leads to enhanced innovation and creativity in
          our products and services. As such, we believe that our continuing
          commitment to inclusive hiring and promotion is a business imperative.
        </p>
        <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-3">
          Talent management comprises the attraction, retention, engagement, and
          professional development of our workforce. By cultivating and
          deploying our employees’ skills, we can drive superior performance
          amidst accelerating growth and competitiveness in the marketplace and
          maximize our retention of high-performing employees. Thus, we offer
          continuous learning opportunities at every career stage for our
          individual contributors, managers, and directors, with courses
          designed to leverage employees’ existing strengths while targeting
          developmental needs.
        </p>

        <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-3">
          We invite people who are having
        </p>

        <p className="text-dark font-bold text-lg dark:text-white capitalize pt-3">
          Cutting Edge Technology, Brilliant Minds and The Power To Make A
          Difference.
        </p>
        <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal">
          As a company, we’re flexible, nimble and growing rapidly. We Expect
          you to work in a dynamic environment where you are empowered to do
          your job well and be heard. Our people are our assets and key
          ingredients to our success story. We’re changing the world. And you
          can too.
        </p>

        <p
          className=" text-justify text-[16px] leading-6 normal-case leading font-normal pt-3 cursor-pointer text-primary hover:underline"
          onClick={() => setRenderComponent("recent jobs")}
        >
          We’re constantly hiring to expand our global team. See if you fit our
          profile.
        </p>

        <p className="text-lg dark:text-primary capitalize pt-3">
          Corporate Responsibilities:
        </p>

        <div className="flex flex-row justify-between gap-4">
          <div className="w-full lg:w-[70%]">
            <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal">
              Our employees are the company's most valuable asset. We recognize
              the importance of developing individuals across all job levels and
              functions. We offer learning experiences and world-class resources
              that are engaging, challenging, and relevant. We provides:
            </p>
            <ul className="pl-4">
              <li className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal flex flex-row">
                <span className="text-lg font-bold pr-1">»</span>
                <span className="mt-1">
                  Core corporate programs which develop professional skills such
                  as communications, change management, coaching, and more.
                </span>
              </li>
              <li className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal flex flex-row">
                <span className="text-lg font-bold pr-1">»</span>
                <span className="mt-1">
                  Offerings that support employees’ transitions through critical
                  career moments, such as when they join the company and when
                  they are promoted to a manager role.
                </span>
              </li>
              <li className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal flex flex-row">
                <span className="text-lg font-bold pr-1">»</span>
                <span className="mt-1">
                  Functionally-specific training such as sales, finance, and
                  technical support.
                </span>
              </li>
              <li className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal flex flex-row">
                <span className="text-lg font-bold pr-1">»</span>
                <span className="mt-1">
                  Ethics, compliance, and security awareness training.
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-[30%]">
            <img src={CAREERS} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
