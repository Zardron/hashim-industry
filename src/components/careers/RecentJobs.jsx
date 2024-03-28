import React, { useEffect } from "react";

const RecentJobs = () => {
  return (
    <div className="bg-white dark:bg-dark">
      <h1 className="text-primary font-bold text-2xl uppercase border-b-offGray border-b pb-1">
        Recent Jobs
      </h1>
      <div className="bg-white dark:text-white dark:bg-dark mt-3">
        <div
          className="pb-10"
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <div className="bg-primary flex flex-row items-center justify-between p-4 rounded-t-lg">
            <div className="w-3/4">
              <p className="text-white font-semibold leading-tight text-xs lg:text-lg capitalize">
                Job Title:
              </p>
              <p className="text-white font-normal text-xs lg:text-[16px] capitalize">
                SALES ENGINEER
              </p>
            </div>
            <div className="w-1/3 lg:w-1/4">
              <p className="text-white font-semibold leading-tight text-xs lg:text-lg capitalize">
                Reference No:
              </p>
              <p className="text-white font-normal text-xs lg:text-[16px] capitalize">
                038912
              </p>
            </div>
          </div>
          <div className="bg-[#f0ffff] flex flex-row items-center justify-between p-4 rounded-b-lg border border-primary">
            <div className="w-3/4">
              <p className="text-dark font-semibold leading-tight text-sm lg:text-[16px] capitalize">
                Job Description:
              </p>
              <p className="text-dark font-normal leading-tight text-xs lg:text-[16px] capitalize">
                Sales Engineer, with 5 years experience
              </p>
            </div>
            <div className="w-1/3 lg:w-1/4 flex items-center justify-start">
              <button className="text-dark p-2 border border-secondary rounded-md text-sm hover:bg-primary hover:text-white hover:border-primary">
                Apply Now
              </button>
            </div>
          </div>
        </div>

        <div data-aos="fade-left" data-aos-delay="600" data-aos-duration="1000">
          <div className="bg-primary flex flex-row items-center justify-between p-4 rounded-t-lg gap-4">
            <div className="w-3/4">
              <p className="text-white font-semibold leading-tight text-xs lg:text-lg capitalize">
                Job Title:
              </p>
              <p className="text-white font-normal text-xs lg:text-[16px] capitalize">
                INDUSTRIAL ENGINEER
              </p>
            </div>
            <div className="w-1/3 lg:w-1/4">
              <p className="text-white font-semibold leading-tight text-xs lg:text-lg capitalize">
                Reference No:
              </p>
              <p className="text-white font-normal text-xs lg:text-[16px] capitalize">
                038912
              </p>
            </div>
          </div>
          <div className="bg-[#f0ffff] flex flex-row items-center justify-between p-4 rounded-b-lg border border-primary gap-4">
            <div className="w-3/4">
              <p className="text-dark font-semibold leading-tight text-sm lg:text-[16px] capitalize">
                Job Description:
              </p>
              <p className="text-dark font-normal leading-tight text-xs lg:text-[16px] capitalize">
                Industrial Engineer, with 5 years experience
              </p>
            </div>
            <div className="w-1/3 lg:w-1/4 flex items-center justify-start">
              <button className="text-dark p-2 border border-secondary rounded-md text-sm hover:bg-primary hover:text-white hover:border-primary">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentJobs;
