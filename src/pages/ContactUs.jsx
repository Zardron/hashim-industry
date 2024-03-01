import React, { useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    window.scroll({ top: 500, left: 0, behavior: "smooth" });
  });
  return (
    <div className="dark:bg-dark">
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-primary font-bold text-2xl uppercase border-b-offGray border-b pb-1">
          Contact Us
        </h1>

        <div className="bg-white dark:text-white dark:bg-dark mt-3 animate__animated animate__zoomIn">
          <div className="grid grid-cols-2 lg:grid-cols-5 my-2">
            <p className="text-dark text-justify dark:text-white text-[11px] lg:text-[16px] leading-6 normal-case leading font-medium pt-1">
              Name:
            </p>
            <input className="text-sm border border-primary py-1 px-2 rounded-md focus:outline-none text-dark  dark:bg-transparent dark:text-white"></input>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 my-2">
            <p className="text-dark text-justify dark:text-white text-[11px] lg:text-[16px] leading-6 normal-case leading font-medium pt-1">
              Email:
            </p>
            <input className="text-sm border border-primary py-1 px-2 rounded-md focus:outline-none text-dark  dark:bg-transparent dark:text-white"></input>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 my-2">
            <p className="text-dark text-justify dark:text-white text-[11px] lg:text-[16px] leading-6 normal-case leading font-medium pt-1">
              Phone:
            </p>
            <input className="text-sm border border-primary py-1 px-2 rounded-md focus:outline-none text-dark  dark:bg-transparent dark:text-white"></input>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 my-2">
            <p className="text-dark text-justify dark:text-white text-[11px] lg:text-[16px] leading-6 normal-case leading font-medium pt-1">
              Mobile:
            </p>
            <input className="text-sm border border-primary py-1 px-2 rounded-md focus:outline-none text-dark  dark:bg-transparent dark:text-white"></input>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 my-2">
            <p className="text-dark text-justify dark:text-white text-[11px] lg:text-[16px] leading-6 normal-case leading font-medium pt-1">
              Message:
            </p>
            <textarea className="text-sm border border-primary py-1 px-2 rounded-md focus:outline-none text-dark  dark:bg-transparent dark:text-white"></textarea>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 my-2 pt-2">
            <p className="text-dark text-justify dark:text-white text-[11px] lg:text-[16px] leading-6 normal-case leading font-medium pt-1">
              &nbsp;
            </p>
            <button className="bg-primary hover:bg-white dark:hover:bg-primary dark:hover:border-white hover:text-dark text-sm border border-primary py-1 px-2 rounded-md focus:outline-none text-white  dark:bg-transparent dark:text-white">
              SUBMIT
            </button>
          </div>

          <p className="text-dark text-justify dark:text-white text-[11px] lg:text-[16px] leading-6 normal-case leading font-normal pt-3 italic">
            Note: We do our best to respond to all our enquiries as we check our
            email & faxes regularly. The fastest way to reach is via E-mail. We
            try to respond to all our emails promptly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
