import {
  FaUsers,
  FaLocationDot,
  FaCalendarDays,
  FaScaleBalanced,
} from "react-icons/fa6";
import CountUp from "react-countup";
import OurPartner from "../components/OurPartner";
import OurGroup from "../components/OurGroup";

const Home = () => {
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

        <div className="bg-white dark:text-white dark:bg-dark">
          <div className="container mx-auto px-10 pb-10 lg:px-0">
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

        <div className="container mx-auto lg:px-0">
          <div className="demo p-[2em] mx-auto">
            <div className="or or--x text-primary text-[15px] lg:text-[30px] font-bold  mx-auto">
              Our Group
            </div>
            <p className="dark:text-white">
              We have built our business model from the ground up to ensure that
              we have the capabilities required to successfully deliver our
              services to our growing client base.
            </p>
          </div>
        </div>
        <OurGroup />

        <div className="container mx-auto lg:px-0 mt-10">
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
      </div>
    </>
  );
};

export default Home;
