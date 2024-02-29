import React, { useEffect } from "react";
import LOGO1 from "../assets/img/logo1.png";
import LOGO2 from "../assets/img/logo2-1.png";
import LOGO3 from "../assets/img/logo3.png";
import LOGO5 from "../assets/img/logo5.png";

const groupDirectoryData = [
  {
    id: 100,
    title: "ARABIAN GULF MANUFACTURERS",
    imgSrc: LOGO1,
    url: "https://www.gulfmaid.com",
    address: "P.O.Box:  2143, Jeddah",
    country: "Saudi Arabia",
    tel: "+966 2 6377944",
    fax: "+966 2 6365445",
    email: "gulfpackaging@sps.net.sa",
  },
  {
    id: 300,
    title: "3P PIPE",
    imgSrc: LOGO2,
    url: "https://www.3ppipe.com",
    address: "Post Box: 2143 Jeddah - 21451 KSA",
    country: "Saudi Arabia",
    tel: "+966 2 6360099",
    fax: "+966 2 6352111",
    email: "info@gulfmaid.com",
  },
  {
    id: 500,
    title: "GULF MANUFACTURERS",
    imgSrc: LOGO3,
    url: "https://www.gmpipe.com",
    address: "6 October City.5th Industrial Zone.",
    country: "Egypt",
    tel: "002 02 - 38165000-> 19",
    fax: "002 02 - 38165010- 38165011",
    email: "gmpipe@gmpipe.com",
  },
  {
    id: 700,
    title: "RAWASY AL KHALEEJ",
    imgSrc: LOGO3,
    url: "https://www.rawasyplastic.com",
    address: "P.O.Box: 28089, Sharjah",
    country: "United Arab Emirates",
    tel: "+971 6 534 0735/6",
    fax: "+971 6 534 0737",
    email: "info@gmplast.com",
  },
  {
    id: 900,
    title: "RAKTHERM",
    imgSrc: LOGO5,
    url: "https://www.raktherm.com",
    address: "P.O.Box: 30739, Factory Al Jazira",
    country: "United Arab Emirates",
    tel: "+971 7 2447124/ 5/ 6/ 8",
    fax: "+971 7 2447129",
    email: "info@raktherm.com",
  },
];

const GroupDirectory = () => {
  useEffect(() => {
    window.scroll({ top: 500, left: 0, behavior: "smooth" });
  });
  return (
    <div className="dark:bg-dark">
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-primary font-bold text-2xl uppercase border-b-offGray border-b pb-1">
          Group Directory
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pt-6">
          {groupDirectoryData.map((data, index) => (
            <div
              key={index}
              className="hover:scale-105 transition-all ease-in-out duration-300 "
            >
              <div
                className="border border-primary rounded-md shadow-lg p-4"
                data-aos="flip-right"
                data-aos-delay={data.id}
                data-aos-duration="1000"
              >
                <div className="flex items-center mb-3 w-full bg-white">
                  <img src={data.imgSrc} alt="" className="h-30" />
                </div>
                <div className="pt-2 border-t-offGray border-t flex flex-row">
                  <p className="text-md w-1/4 font-semibold dark:text-white">
                    Address:
                  </p>
                  <p className="text-md w-3/4">{data.address}</p>
                </div>

                <div className="pt-2 flex flex-row">
                  <p className="text-md w-1/4 font-semibold dark:text-white">
                    Country:
                  </p>
                  <p className="text-md w-3/4">{data.country}</p>
                </div>

                <div className="pt-2 flex flex-row">
                  <p className="text-md w-1/4 font-semibold dark:text-white">
                    Tel:
                  </p>
                  <p className="text-md w-3/4">{data.tel}</p>
                </div>

                <div className="pt-2 flex flex-row">
                  <p className="text-md w-1/4 font-semibold dark:text-white">
                    Fax:
                  </p>
                  <p className="text-md w-3/4">{data.fax}</p>
                </div>

                <div className="pt-2 flex flex-row">
                  <p className="text-md w-1/4 font-semibold dark:text-white">
                    Email:
                  </p>
                  <p className="text-md w-3/4">
                    <a
                      href={`mailto:${data.url}`}
                      target="_blank"
                      className="text-primary cursor-pointer"
                    >
                      {data.email}
                    </a>
                  </p>
                </div>

                <div className="pt-2 flex flex-row">
                  <p className="text-md w-1/4 font-semibold dark:text-white">
                    Website:
                  </p>
                  <p className="text-md w-3/4">
                    <a
                      href={`${data.url}`}
                      target="_blank"
                      className="text-primary cursor-pointer"
                    >
                      {data.url.replace("https://", "")}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroupDirectory;
