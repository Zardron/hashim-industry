import React, { useEffect } from "react";
import RAK from "../../assets/banner/rak-logo.png";
const Keyfacts = () => {
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
                in 1963
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

        <p className="text-lg dark:text-primary mt-4 normal-case">
          Our Talented Workforce
        </p>
        <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-1">
          In our organization, we embrace diversity as the culmination of all
          the unique qualities that define each of us as individuals. Our
          commitment to attracting, retaining, and fully engaging diverse talent
          fuels innovation and creativity within our products and services. We
          consider inclusive hiring and promotion practices a necessity for our
          business.
        </p>
        <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal mt-3">
          Talent management is central to our operations, encompassing the
          attraction, retention, engagement, and professional development of our
          workforce. By nurturing and leveraging the skills of our employees, we
          drive superior performance in an increasingly competitive marketplace.
          We are dedicated to maximizing the retention of high-performing
          individuals through continuous learning opportunities tailored to
          every career stage, from individual contributors to managers and
          directors. Our courses are meticulously designed to amplify existing
          strengths while addressing developmental needs.
        </p>
        <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal mt-3 mb-0">
          Our employees are the cornerstone of our success. Recognizing the
          significance of individual development across all levels and
          functions, we offer comprehensive learning experiences and access to
          world-class resources. Our offerings include:
        </p>
        <ul className="pl-4">
          <li className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal flex flex-row">
            <span className="text-lg font-bold pr-1">»</span>
            <span className="mt-1">
              Core corporate programs that hone professional skills such as
              communication, change management, coaching, and more.
            </span>
          </li>
          <li className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal flex flex-row">
            <span className="text-lg font-bold pr-1">»</span>
            <span className="mt-1">
              Tailored support for employees during critical career transitions,
              such as onboarding and advancement to managerial roles.
            </span>
          </li>
          <li className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal flex flex-row">
            <span className="text-lg font-bold pr-1">»</span>
            <span className="mt-1">
              Function-specific training in areas such as sales, finance, and
              technical support.
            </span>
          </li>
          <li className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal flex flex-row">
            <span className="text-lg font-bold pr-1">»</span>
            <span className="mt-1">
              Training modules focused on ethics, compliance, and security
              awareness.
            </span>
          </li>
        </ul>

        <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal mt-3">
          Through these initiatives, we ensure that our employees are equipped
          with the knowledge and skills necessary to excel in their roles and
          contribute to the ongoing success of OUR GROUP.
        </p>

        <div className="flex flex-col gap-4 lg:flex-row items-center justify-center mt-4">
          <img
            src="https://hashimindustry.com/v2/img/gr3.jpg"
            alt=""
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="1000"
            className=" bg-white p-2 rounded-lg"
          />
          <img
            src="https://hashimindustry.com/v2/img/gr2.jpg"
            alt=""
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="1000"
            className="mt-1 bg-white p-2 rounded-lg"
          />
        </div>

        <div data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">
          <p className="text-lg dark:text-primary mt-4 normal-case">
            Business Strategy:
          </p>
          <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-1">
            Innovation ► Invention ► Expansion ► Environmental Friendly
            Solutions
          </p>
          <ul className="pl-4">
            <li className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal flex flex-row">
              <span className="text-lg font-bold pr-1">»</span>
              <span className="mt-1">
                At Hashim Group, we leverage field innovation to pioneer new
                approaches, continuously striving to elevate our standards and
                deliver enhanced value to our esteemed customers.
              </span>
            </li>
            <li className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal flex flex-row">
              <span className="text-lg font-bold pr-1">»</span>
              <span className="mt-1">
                The conglomerate of companies within the Hashim Industry Group
                collaborates harmoniously to drive forward global business
                expansion endeavors, nurturing growth and enhancing enterprise
                on an international scale.
              </span>
            </li>
            <li className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal flex flex-row">
              <span className="text-lg font-bold pr-1">»</span>
              <span className="mt-1">
                In alignment with our commitment to environmental stewardship,
                we offer comprehensive global solutions across all sectors of
                our operations, promoting sustainability and environmental
                responsibility throughout our business endeavors.
              </span>
            </li>
          </ul>

          <p className="text-lg dark:text-primary mt-4 normal-case">
            Sustainable Environmental Initiatives:
          </p>
          <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-1">
            Adherence to all relevant environmental laws and regulations serves
            as the foundation of our commitment. Going above and beyond these
            legal mandates, we consistently seek out innovative approaches to
            minimize our consumption of energy, water, and materials. Our
            environmental strategy is built upon four essential pillars:
          </p>
          <ul className="pl-4">
            <li className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal flex flex-row">
              <span className="text-lg font-bold pr-1">»</span>
              <span className="mt-1">Sustainable Green IT Solutions</span>
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
              <span className="mt-1">
                Responsible and eco-friendly packaging and delivery methods.
              </span>
            </li>
            <li className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal flex flex-row">
              <span className="text-lg font-bold pr-1">»</span>
              <span className="mt-1">Sustainable transportation measures</span>
            </li>
          </ul>

          <p className="text-lg dark:text-primary mt-4">
            Corporate Governance and Ethical Standards
          </p>
          <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-1">
            Our Board of Directors enforces a fundamental responsibility in
            overseeing all critical aspects of our business operations,
            including strategic planning, long-term business strategies, product
            integrity, corporate social responsibility, legal and ethical
            compliance, executive appointments and compensation, and Board
            conduct. To enable the Board to effectively fulfill these duties,
            Our Group diligently adheres to corporate governance best practices,
            with a special emphasis on ensuring Board independence.
          </p>
          <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-3">
            Our Corporate Vision, Values, Principles, and Code of Conduct serve
            as foundational pillars, guiding our collective pursuit of
            excellence within the Hashim Group. Through the dissemination and
            application of these guiding principles, we strive to continuously
            enhance the company's value by fostering ongoing growth and
            development across our organization. Concurrently, as we endeavor to
            optimize management efficiency, we prioritize controlling the risks
            that arise from business activities. Recognizing the crucial role of
            robust corporate governance in achieving our objectives, the Board
            of Directors has clearly communicated its unwavering commitment to
            our Basic Stance on our Internal Control Framework, which is
            rigorously implemented and maintained.
          </p>
          <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-3">
            Regarding our group of companies, our endeavor is to optimize the
            Group's performance by elucidating each company's role and position
            in the value creation process for the collective benefit of the
            Group. We meticulously manage the Group to perpetually elevate its
            corporate value.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Keyfacts;
