import {
  FaUsers,
  FaLocationDot,
  FaCalendarDays,
  FaScaleBalanced,
} from "react-icons/fa6";
import CountUp from "react-countup";
import OurPartner from "../components/OurPartner";
import OurGroup from "../components/OurGroup";

import NEWS1 from "../assets/img/news1.jpg";
import NEWS2 from "../assets/img/news2.jpg";
import NEWS3 from "../assets/img/news3.jpg";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const Home = ({ darkMode }) => {
  const [news, setNews] = useState("news1");

  const newsData = () => {
    switch (news) {
      case "news1":
        return (
          <>
            <h1 className="text-primary font-semibold text-xl">
              GPCA PLASCTON 2013 SPONSORING
            </h1>

            <img src={NEWS1} alt="" className="my-4" />
            <div className="text-justify dark:text-white">
              Hashim Industry Are pleased to announce its sponsorship to the
              upcoming GPCA PlastCon 2013, the region's most prestigious plastic
              summit, taking place at Intercontinental Dubai festival city,
              United Arab Emirates. From 7 to 9 april With GPCA PlastCon 2013
              gives us opportunity to engage directly with our plastic i
              industry colleges, and discuses the main challenges and
              developments in plastic conversion today, since this conference
              will bring together all major players with an interest in this key
              industry sector.
            </div>

            <div className="pt-4">
              <p className="font-medium dark:text-white">
                Visit the site for more info:
              </p>
              <a
                href="https://www.gpcaplastics.com/"
                className="font-normal text-primary hover:underline cursor-pointer"
                target="_blank"
              >
                www.gpcaplastics.com
              </a>
            </div>
          </>
        );

      case "news2":
        return (
          <>
            <h1 className="text-primary font-semibold text-xl">
              GM NEW EXPANSION STARTS
            </h1>

            <img src={NEWS2} alt="" className="my-4" />
            <div className="text-justify dark:text-white">
              GM Leader Manufacturer for Infrastructure & Sanitary Piping
              Systems, Starts its new Expansion in its Industrial Complex at the
              6th of October city, Egypt with an extra 50,000 Sqm to assure
              himself as the biggest Manufacturer in the middle east,GM the
              benchmark in piping solutions execute its Visionary Planes to
              trigger higher market share with fulfilling increasing
              globaldarkMode demand in construction sector.With 50 years of
              combined experience in plastic manufacturing industry, GM team
              have the unique knowledge and experience necessary to meet
              customer's expectations a step beyond others in the field and
              setting standards in today's exciting world of Plastic
              solutions.GM solutions are widely used in several applications
              like cold / hot water supply system, sewage, and gas networks.
            </div>

            <div className="pt-4">
              <p className="font-medium dark:text-white">
                Visit the site for more info:
              </p>
              <a
                href="https://www.gmpipe.com/"
                className="font-normal text-primary hover:underline cursor-pointer"
                target="_blank"
              >
                www.gmpipe.com
              </a>
            </div>
          </>
        );

      case "news3":
        return (
          <>
            <h1 className="text-primary font-semibold text-xl">
              RAKTHERM ACADEMY HANDLED ITS 2ND SEMINAR
            </h1>

            <img src={NEWS3} alt="" className="my-4" />
            <div className="text-justify dark:text-white">
              RAktherm Academy power Packed training for building material
              specialist handeled it second seminar in UAE Al Ain with
              attendance of biggest consultant engineers RAKtherm with an eye on
              developing unique training programs featuring green energy
              efficiency measures and techniques to reduce carbon footprints.
              And to compliance with the norms and strict environment
              regulations initiated by the Government, and to get exclusive
              hands-on experience on new and upcoming projects in the plumbing
              industry.
            </div>

            <div className="pt-4">
              <p className="font-medium dark:text-white">
                Visit the site for more info:
              </p>
              <a
                href="https://www.raktherm.com/"
                className="font-normal text-primary hover:underline cursor-pointer"
                target="_blank"
              >
                www.raktherm.com
              </a>
            </div>
          </>
        );

      default:
        return (
          <div className="border-primary border rounded-md p-4 w-3/4 shadow-sm shadow-primary/50">
            <h1 className="text-primary font-semibold text-xl">
              GPCA PLASCTON 2013 SPONSORING
            </h1>

            <img src={NEWS1} alt="" className="my-4" />
            <div className="text-justify dark:text-white">
              Hashim Industry Are pleased to announce its sponsorship to the
              upcoming GPCA PlastCon 2013, the region's most prestigious plastic
              summit, taking place at Intercontinental Dubai festival city,
              United Arab Emirates. From 7 to 9 april With GPCA PlastCon 2013
              gives us opportunity to engage directly with our plastic i
              industry colleges, and discuses the main challenges and
              developments in plastic conversion today, since this conference
              will bring together all major players with an interest in this key
              industry sector.
            </div>

            <div className="pt-4">
              <p className="font-medium dark:text-white">
                Visit the site for more info:
              </p>
              <p className="font-normal text-primary hover:underline cursor-pointer">
                www.gpcaplastics.com
              </p>
            </div>
          </div>
        );
    }
  };
  return (
    <>
      <div className="bg-white dark:bg-dark">
        <div className="container mx-auto lg:px-0">
          <div className="demo p-[2em] mx-auto">
            <div className="or or--x text-primary text-[15px] lg:text-[45px] font-bold  mx-auto">
              HASHIM INDUSTRY
            </div>
          </div>
        </div>
        {/* About Section */}
        <div className="bg-white dark:text-white dark:bg-dark">
          <div className="container mx-auto px-10 pb-20 dark:pb-4 lg:px-0">
            <div className="flex flex-col lg:flex-row items-start gap-10">
              <div
                className="w-full lg:w-[60%]"
                data-aos="zoom-in"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <h1 className="text-4xl font-semibold mt-4">
                  Established in 1963 in Saudi Arabia
                </h1>
                <p className="text-md pl-1 text-justify mt-2">
                  Hashim Industry is proudly marching towards its golden jubilee
                  after successfully making its mark all over the globe. Today,
                  Hashim Industry has is at the peak of its glory with its
                  entire sister concerns performing to the best of their
                  ability.
                </p>
                <p className="text-md pl-1 text-justify mt-2">
                  Under the visionary leadership, the Hashim Industry, the
                  famous international entrepreneur, has grown rapidly since the
                  day it was founded. Fifty years from today, the group began on
                  its illustrious journey when the foundation of the Arabian
                  Gulf Manufacturers was laid by Mr.Hashim Hashim. AGM has since
                  become a name to be reckoned with in the high-technology
                  plastic manufacturing industry and has inspired many others to
                  follow on the footsteps of the accomplished leader.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 pt-10">
                  <div className="flex flex-col items-center font-medium text-secondary dark:text-white gap-2">
                    <FaCalendarDays
                      size={40}
                      className=" text-secondary dark:text-white"
                    />
                    <p className="text-2xl font-bold">
                      <CountUp end={60} duration={5} />+
                    </p>
                    <p className="text-sm">Years of Experience</p>
                  </div>
                  <div className="flex flex-col items-center font-medium text-secondary dark:text-white gap-2">
                    <FaLocationDot
                      size={40}
                      className=" text-secondary dark:text-white"
                    />
                    <p className="text-2xl font-bold">
                      <CountUp end={45} duration={5} />+
                    </p>
                    <p className="text-sm">Stockists Countries</p>
                  </div>
                  <div className="flex flex-col items-center font-medium text-secondary dark:text-white gap-2">
                    <FaUsers
                      size={40}
                      className=" text-secondary dark:text-white"
                    />
                    <p className="text-2xl font-bold">
                      <CountUp end={2300} duration={5} />+
                    </p>
                    <p className="text-sm">Total Employee&apos;s</p>
                  </div>
                  <div className="flex flex-col items-center font-medium text-secondary dark:text-white gap-2">
                    <FaScaleBalanced
                      size={40}
                      className=" text-secondary dark:text-white"
                    />
                    <p className="text-2xl font-bold">
                      <CountUp end={400500} duration={5} decimal={4} />+
                    </p>
                    <p className="text-sm">Annual Converting (Tons)</p>
                  </div>
                </div>
                {/* read more */}
              </div>
              <div
                className="relative w-full lg:w-[40%]"
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                <img
                  className="mt-4 w-full pl-2 pb-2"
                  src="https://hashimindustry.com/v4/img/Saudi-Arabia.jpg"
                  alt=""
                />
                <img
                  className="absolute bottom-0 border-t-[10px] border-t-white border-r-[10px] border-r-white dark:border-t-dark dark:border-r-dark"
                  src="https://hashimindustry.com/v4/img/hashim.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* End */}
        {/* Our Group Section */}

        <div
          className={`bg-gradientLight dark:bg-gradientDark ${
            darkMode === "dark" ? "" : "shadoww pb-10"
          }`}
        >
          <div className="container mx-auto lg:px-0">
            <div className="demo p-[2em] mx-auto">
              <div className="or or--x text-primary text-[15px] lg:text-[30px] font-bold  mx-auto">
                <span className="text-white">Our Group</span>
              </div>
              <p className="dark:text-white text-sm lg:text-base">
                We have built our business model from the ground up to ensure
                that we have the capabilities required to successfully deliver
                our services to our growing client base.
              </p>
            </div>
          </div>
          <OurGroup />
          <div className="container mx-auto pt-14 pb-10 dark:pb-0 max-w-4xl">
            <hr className="text-primary" />
          </div>

          {/* News Section */}
          <div className="container mx-auto p-10 lg:p-0">
            <p className=" text-primary text-[15px] lg:text-[30px] font-bold">
              NEWS & EVENTS
            </p>

            <div className="flex flex-col lg:flex-row gap-4 my-4  lg:h-[480px]">
              <div
                className="border-primary border rounded-md p-4 w-full lg:w-3/4 shadow-md shadow-3d"
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                {newsData()}
              </div>

              <div
                className="border-primary border rounded-md p-4 w-full lg:w-1/4 shadow-md shadow-3d"
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                <h1 className="text-primary font-bold text-xl">Recent News</h1>
                <ul>
                  <div className="flex flex-row items-center">
                    <IoIosArrowForward className="text-dark dark:text-white" />
                    <li
                      className={`${
                        news === "news1"
                          ? "font-semibold text-primary underline"
                          : "dark:text-white"
                      } my-2 cursor-pointer hover:text-primary hover:underline text-dark `}
                      onClick={() => setNews("news1")}
                    >
                      GPCA PLASCTON 2013 SPONSORING
                    </li>
                  </div>
                  <div className="flex flex-row items-center">
                    <IoIosArrowForward className="text-dark dark:text-white" />
                    <li
                      className={`${
                        news === "news2"
                          ? "font-semibold text-primary underline"
                          : "dark:text-white"
                      } my-2 cursor-pointer hover:text-primary hover:underline text-dark `}
                      onClick={() => setNews("news2")}
                    >
                      GM NEW EXPANSION STARTS
                    </li>
                  </div>
                  <div className="flex flex-row items-start">
                    <div>
                      <IoIosArrowForward className="mt-3 text-dark dark:text-white" />
                    </div>
                    <div>
                      <li
                        className={`${
                          news === "news3"
                            ? "font-semibold text-primary dark:text-primary underline"
                            : "dark:text-white"
                        } my-2 cursor-pointer hover:text-primary hover:underline text-dark `}
                        onClick={() => setNews("news3")}
                      >
                        RAKTHERM ACADEMY HANDLED ITS 2ND SEMINAR
                      </li>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          {/* End */}
        </div>
        {/* End */}

        {/* Our Partner Section */}
        <div className="container mx-auto lg:px-0 pt-10 dark:pt-0">
          <div className="demo p-[2em] mx-auto">
            <div className="or or--x text-primary text-[15px] lg:text-[30px] font-bold  mx-auto">
              Our Partner
            </div>
            <p className="dark:text-white">
              The path from innovation and ground breaking scientific advances
              to successful consumer products depends on convening the best
              global resources, experience and talent.
            </p>
          </div>
        </div>
        <OurPartner />
        {/* End */}
      </div>
    </>
  );
};

export default Home;
