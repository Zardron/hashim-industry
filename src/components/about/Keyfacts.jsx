import React, { useEffect } from "react";
import RAK from "../../assets/banner/rak-logo.png";
const Keyfacts = () => {
  useEffect(() => {
    window.scroll({ top: 500, left: 0, behavior: "smooth" });
  });

  return (
    <div className="bg-white dark:bg-dark">
      <h1 className="text-primary font-bold text-2xl uppercase border-b-offGray border-b pb-1">
        keyfacts
      </h1>
      <div className="bg-white dark:text-white dark:bg-dark mt-2 animate__animated animate__zoomIn">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="grid grid-cols-2 lg:grid-cols-2">
            <div>
              <p className="text-primary dark:text-white text-[14px] lg:text-[16px] leading-6 normal-case leading font-bold">
                Established:
              </p>
              <p className="text-primary dark:text-white text-[14px] lg:text-[16px] leading-6 normal-case leading font-bold">
                Employees:
              </p>
              <p className="text-primary dark:text-white text-[14px] lg:text-[16px] leading-6 normal-case leading font-bold">
                Sales Network:
              </p>
              <p className="text-primary dark:text-white text-[14px] lg:text-[16px] leading-6 normal-case leading font-bold">
                Annual Converting Capacity:
              </p>
            </div>
            <div>
              <p className="text-dark dark:text-white text-[14px] lg:text-[16px] leading-6 normal-case leading font-semibold">
                1963
              </p>
              <p className="text-dark dark:text-white text-[14px] lg:text-[16px] leading-6 normal-case leading font-semibold">
                2300
              </p>
              <p className="text-dark dark:text-white text-[14px] lg:text-[16px] leading-6 normal-case leading font-semibold">
                In 45+ counties
              </p>
              <p className="text-dark dark:text-white text-[14px] lg:text-[16px] leading-6 normal-case leading font-semibold">
                400,500 tons
              </p>
            </div>
          </div>
          <div>
            <p className="text-primary dark:text-white text-[16px] leading-6 normal-case leading font-bold">
              Business Segments:
            </p>
            <div className="flex flex-wrap gap-2">
              <img
                src="https://hashimindustry.com/v2/img/3p.jpg"
                className="w-[135px] lg:w-[150px]"
                alt=""
              />
              <img
                src="https://hashimindustry.com/v2/img/gm.jpg"
                className="w-[135px] lg:w-[150px]"
                alt=""
              />
              <img
                src="https://hashimindustry.com/v2/img/gmb2.jpg"
                className="w-[135px] lg:w-[150px]"
                alt=""
              />
              <img
                src="https://hashimindustry.com/v2/img/gmb3.jpg"
                className="w-[135px] lg:w-[150px]"
                alt=""
              />
              <img src={RAK} className="w-[135px] lg:w-[150px]" alt="" />
            </div>
          </div>
        </div>

        <p className="text-lg dark:text-primary mt-4">Our People</p>
        <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-1">
          OUR GROUP defines diversity as all of the differences that make each
          of us unique individuals. Our ability to attract retains, and fully
          engage diverse talent leads to enhanced innovation and creativity in
          our products and services. As such, we believe that our continuing
          commitment to inclusive hiring and promotion is a business imperative.
        </p>
        <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal mt-3">
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
        <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal mt-3 mb-0">
          Our employees are the company's most valuable asset. We recognize the
          importance of developing individuals across all job levels and
          functions. We offer learning experiences and world-class resources
          that are engaging, challenging, and relevant. We provides:
        </p>
        <ul className="pl-4">
          <li className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal flex flex-row">
            <span className="text-lg font-bold pr-1">»</span>
            <span className="mt-1">
              Core corporate programs which develop professional skills such as
              communications, change management, coaching, and more.
            </span>
          </li>
          <li className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal flex flex-row">
            <span className="text-lg font-bold pr-1">»</span>
            <span className="mt-1">
              Offerings that support employees’ transitions through critical
              career moments, such as when they join the company and when they
              are promoted to a manager role.
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

        <div className="flex flex-col gap-4 lg:flex-row items-center justify-center mt-4">
          <img
            src="https://hashimindustry.com/v2/img/gr3.jpg"
            alt=""
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="1000"
            className="w-[400px] h-80 bg-white p-2 rounded-lg"
          />
          <img
            src="https://hashimindustry.com/v2/img/gr2.jpg"
            alt=""
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="1000"
            className="w-[400px] h-80 bg-white p-2 rounded-lg"
          />
        </div>

        <div data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">
          <p className="text-lg dark:text-primary mt-4">Business Policy</p>
          <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-1">
            Innovation ► Invention ► Expansion ► Environmental Friendly
            Solutions
          </p>
          <ul className="pl-4">
            <li className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal flex flex-row">
              <span className="text-lg font-bold pr-1">»</span>
              <span className="mt-1">
                We use Field Innovation to find new approaches and the
                inspiration to improve ourselves, while delivering added value
                to our customers.
              </span>
            </li>
            <li className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal flex flex-row">
              <span className="text-lg font-bold pr-1">»</span>
              <span className="mt-1">
                Hashim Group companies work together to accelerate the global
                business expansion.
              </span>
            </li>
            <li className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal flex flex-row">
              <span className="text-lg font-bold pr-1">»</span>
              <span className="mt-1">
                We provide global environmental solutions in all our business
                areas.
              </span>
            </li>
          </ul>

          <p className="text-lg dark:text-primary mt-4">
            Environmental Friendly
          </p>
          <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-1">
            Compliance with all applicable environmental laws and regulations is
            the starting point for our efforts. Beyond these legal requirements,
            we continually look for innovative ways to decrease energy, water,
            and materials use. Our environmental strategy features four key
            components:
          </p>
          <ul className="pl-4">
            <li className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal flex flex-row">
              <span className="text-lg font-bold pr-1">»</span>
              <span className="mt-1">Green IT</span>
            </li>
            <li className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal flex flex-row">
              <span className="text-lg font-bold pr-1">»</span>
              <span className="mt-1">
                Resource conservation by{" "}
                <span className="italic">Reducing Waste through Recycling</span>
              </span>
            </li>
            <li className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal flex flex-row">
              <span className="text-lg font-bold pr-1">»</span>
              <span className="mt-1">Responsible packaging and delivery</span>
            </li>
            <li className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal flex flex-row">
              <span className="text-lg font-bold pr-1">»</span>
              <span className="mt-1">Transportation</span>
            </li>
          </ul>

          <p className="text-lg dark:text-primary mt-4">
            Governance and Ethics
          </p>
          <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-1">
            Our Board of Directors has a duty to oversee all significant
            business issues, including strategy and long-term business plans,
            product issues, corporate responsibility, legal and ethical
            compliance, executive selection and compensation, and Board conduct.
            To enable the Board to successfully perform these duties, Our Group
            adheres to corporate governance best practices, particularly as they
            relate to Board independence.
          </p>
          <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-3">
            Our Corporate Vision, Corporate Values, Principles, and Code of
            Conduct. By sharing and practicing the Way, we aim to continuously
            enhance the value of the company through the ongoing growth and
            development of the Hashim Group. In order to continually raise the
            Group's corporate value, along with pursuing management efficiency
            it is also necessary to control the risks that arise from business
            activities. Recognizing that strengthening corporate governance is
            essential to achieving this, the Board of Directors has articulated
            the Basic Stance on our Internal Control Framework, and these
            measures are continuously implemented.
          </p>
          <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-3">
            With respect to our group of companies, our pursuing is total
            optimization for the Group by clarifying each group company's role
            and position in the process of generating value for the group as a
            whole and managing the group to continuously enhance its corporate
            value.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Keyfacts;
