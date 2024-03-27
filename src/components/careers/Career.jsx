import React, { useEffect } from "react";
import CAREERS from "../../assets/img/careers.jpg";

const Career = ({ setRenderComponent }) => {
  return (
    <div className="bg-white dark:bg-dark">
      <h1 className="text-primary font-bold text-2xl uppercase border-b-offGray border-b pb-1">
        Careers
      </h1>
      <div className="bg-white dark:text-white dark:bg-dark mt-3 animate__animated animate__zoomIn">
        <p className="text-lg dark:text-primary normal-case">
          Career Journey Overview
        </p>
        <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-1">
          At OUR GROUP, we embrace diversity as the collective blend of unique
          qualities that define each individual. Our ability to attract, retain,
          and fully engage diverse talent fosters innovation and creativity in
          our products and services. Therefore, we view our ongoing commitment
          to inclusive hiring and promotion as essential to our business
          success.
        </p>
        <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-3">
          Talent management includes the attraction, retention, engagement, and
          professional development of our workforce. By nurturing and deploying
          our employees' skills, we can drive exceptional performance amidst
          rapid growth and increasing competitiveness in the marketplace while
          retaining top talent. To this end, we offer continuous learning
          opportunities tailored to employees at every career stage, focusing on
          leveraging existing strengths and addressing developmental needs.
        </p>
        <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-3">
          We welcome individuals who embody Cutting Edge Technology, Brilliant
          Minds, and The Power To Make A Difference. As a company, we operate in
          a dynamic and rapidly expanding environment. We empower our employees
          to excel in their roles and encourage open communication. Our people
          are the cornerstone of our success story, and we recognize their
          significance. Together, we are shaping the world, and we invite you to
          join us in this journey.
        </p>

        <p
          className=" text-justify text-[16px] leading-6 normal-case leading font-normal pt-3 cursor-pointer text-primary hover:underline"
          onClick={() => setRenderComponent("recent jobs")}
        >
          We are actively recruiting to grow our global team. Explore if your
          qualifications align with our requirements.
        </p>

        <p className="text-lg dark:text-primary capitalize pt-3">
          Corporate Responsibilities:
        </p>

        <div className="flex flex-row justify-between gap-4">
          <div className="w-full lg:w-[70%]">
            <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal">
              Our employees are the cornerstone of our company's success. We
              understand the significance of nurturing individuals at every
              level and in every department. We provide enriching learning
              opportunities and access to top-tier resources that are both
              stimulating and pertinent. Our offerings include:
            </p>
            <ul className="pl-4">
              <li className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal flex flex-row">
                <span className="text-lg font-bold pr-1">»</span>
                <span className="mt-1">
                  Comprehensive corporate programs aimed at enhancing
                  professional competencies such as effective communication,
                  change management, coaching, and more.
                </span>
              </li>
              <li className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal flex flex-row">
                <span className="text-lg font-bold pr-1">»</span>
                <span className="mt-1">
                  Supportive resources tailored to guide employees through
                  pivotal career milestones, from their initial onboarding to
                  their transition into managerial roles.
                </span>
              </li>
              <li className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal flex flex-row">
                <span className="text-lg font-bold pr-1">»</span>
                <span className="mt-1">
                  Specialized training programs designed to bolster expertise in
                  specific functional areas such as sales, finance, and
                  technical support.
                </span>
              </li>
              <li className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal flex flex-row">
                <span className="text-lg font-bold pr-1">»</span>
                <span className="mt-1">
                  Rigorous training modules focused on ethics, compliance, and
                  security awareness, ensuring a culture of integrity and
                  responsibility throughout our organization.
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
