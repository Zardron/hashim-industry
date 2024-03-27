import React, { useEffect } from "react";

const HowToApply = () => {
  return (
    <div className="bg-white dark:bg-dark">
      <h1 className="text-primary font-bold text-2xl uppercase border-b-offGray border-b pb-1">
        How To Apply
      </h1>
      <div className="bg-white dark:text-white dark:bg-dark mt-3 animate__animated animate__zoomIn">
        <div className="grid grid-cols-2 lg:grid-cols-3 my-2">
          <p className="text-dark text-justify dark:text-white text-[11px] lg:text-[16px]  leading-6 normal-case leading font-medium pt-1">
            Job Title:
          </p>
          <select
            name=""
            className="text-sm border border-primary py-1 px-2 rounded-md focus:outline-none text-dark  dark:bg-transparent dark:text-white"
            id=""
          >
            <option
              value=""
              className="bg-white text-dark dark:text-white dark:bg-dark"
            >
              SALES ENGINEER
            </option>
            <option
              value=""
              className="bg-white text-dark dark:text-white dark:bg-dark"
            >
              INDUSTRIAL ENGINEER
            </option>
          </select>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 my-2">
          <p className="text-dark text-justify dark:text-white text-[11px] lg:text-[16px]  leading-6 normal-case leading font-medium pt-1">
            Name:
          </p>
          <input className="text-sm border border-primary py-1 px-2 rounded-md focus:outline-none text-dark  dark:bg-transparent dark:text-white"></input>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 my-2">
          <p className="text-dark text-justify dark:text-white text-[11px] lg:text-[16px]  leading-6 normal-case leading font-medium pt-1">
            Education:
          </p>
          <input className="text-sm border border-primary py-1 px-2 rounded-md focus:outline-none text-dark  dark:bg-transparent dark:text-white"></input>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 my-2">
          <p className="text-dark text-justify dark:text-white text-[11px] lg:text-[16px]  leading-6 normal-case leading font-medium pt-1">
            Interested Field:
          </p>
          <input className="text-sm border border-primary py-1 px-2 rounded-md focus:outline-none text-dark  dark:bg-transparent dark:text-white"></input>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 my-2">
          <p className="text-dark text-justify dark:text-white text-[11px] lg:text-[16px]  leading-6 normal-case leading font-medium pt-1">
            Date of Birth:
          </p>
          <input className="text-sm border border-primary py-1 px-2 rounded-md focus:outline-none text-dark  dark:bg-transparent dark:text-white"></input>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 my-2">
          <p className="text-dark text-justify dark:text-white text-[11px] lg:text-[16px]  leading-6 normal-case leading font-medium pt-1">
            Nationality:
          </p>
          <input className="text-sm border border-primary py-1 px-2 rounded-md focus:outline-none text-dark  dark:bg-transparent dark:text-white"></input>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 my-2">
          <p className="text-dark text-justify dark:text-white text-[11px] lg:text-[16px]  leading-6 normal-case leading font-medium pt-1">
            Language Known:
          </p>
          <input className="text-sm border border-primary py-1 px-2 rounded-md focus:outline-none text-dark  dark:bg-transparent dark:text-white"></input>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 my-2">
          <p className="text-dark text-justify dark:text-white text-[11px] lg:text-[16px]  leading-6 normal-case leading font-medium pt-1">
            Previous Experience (if any):
          </p>
          <input className="text-sm border border-primary py-1 px-2 rounded-md focus:outline-none text-dark  dark:bg-transparent dark:text-white"></input>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 my-2">
          <p className="text-dark text-justify dark:text-white text-[11px] lg:text-[16px]  leading-6 normal-case leading font-medium pt-1">
            Achievements (if any):
          </p>
          <input
            type="file"
            className="text-sm border border-primary py-1 px-2 rounded-md focus:outline-none text-dark  dark:bg-transparent dark:text-white"
          ></input>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 my-2">
          <p className="text-dark text-justify dark:text-white text-[11px] lg:text-[16px]  leading-6 normal-case leading font-medium pt-1">
            &nbsp;
          </p>
          <button className="bg-primary hover:bg-white dark:hover:bg-primary dark:hover:border-white hover:text-dark text-sm border border-primary py-1 px-2 rounded-md focus:outline-none text-white  dark:bg-transparent dark:text-white">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowToApply;
