import React, { useEffect } from "react";
import NEWS1 from "../../assets/img/news1.jpg";
import NEWS2 from "../../assets/img/news2.jpg";
import NEWS3 from "../../assets/img/news3.jpg";

const newsData = [
  {
    id: 1,
    imgSrc: NEWS1,
    title: "GPCA PLASCTON 2013 SPONSORING",
    desc: "Hashim Industry Are pleased to announce its sponsorship to the upcoming GPCA PlastCon 2013, the region's most prestigious plastic summit, taking place at Intercontinental Dubai festival city, United Arab Emirates. From 7 to 9 april With GPCA PlastCon 2013 gives us opportunity to engage directly with our plastic i industry colleges, and discuses the main challenges and developments in plastic conversion today, since this conference will bring together all major players with an interest in this key industry sector.",
    link: "http://www.gpcaplastics.com/",
  },
  {
    id: 2,
    imgSrc: NEWS2,
    title: "GM NEW EXPANSION STARTS",
    desc: "GM Leader Manufacturer for Infrastructure & Sanitary Piping Systems, Starts its new Expansion in its Industrial Complex at the 6th of October city, Egypt with an extra 50,000 Sqm to assure himself as the biggest Manufacturer in the middle east,GM the benchmark in piping solutions execute its Visionary Planes to trigger higher market share with fulfilling increasing global demand in construction sector.With 50 years of combined experience in plastic manufacturing industry, GM team have the unique knowledge and experience necessary to meet customer's expectations a step beyond others in the field and setting standards in today's exciting world of Plastic solutions.GM solutions are widely used in several applications like cold / hot water supply system, sewage, and gas networks.",
    link: "http://www.gmpipe.com/",
  },
  {
    id: 3,
    imgSrc: NEWS3,
    title: "RAKTHERM ACADEMY HANDLED ITS 2ND SEMINAR",
    desc: "RAktherm Academy power Packed training for building material specialist handeled it second seminar in UAE Al Ain with attendance of biggest consultant engineers RAKtherm with an eye on developing unique training programs featuring green energy efficiency measures and techniques to reduce carbon footprints. And to compliance with the norms and strict environment regulations initiated by the Government, and to get exclusive hands-on experience on new and upcoming projects in the plumbing industry.",
    link: "http://www.raktherm.com/",
  },
];

const PressRelease = () => {
  return (
    <div className="bg-white dark:bg-dark">
      <h1 className="text-primary font-bold text-2xl uppercase border-b-offGray border-b pb-1">
        Press Release
      </h1>
      <div className="bg-white dark:text-white dark:bg-dark mt-3 animate__animated animate__zoomIn">
        {newsData.map((data, index) => (
          <>
            <div key={index}>
              <h1 className="text-primary font-medium text-lg uppercase pb-1">
                {data.title}
              </h1>
              <div className="flex flex-col lg:flex-row items-start justify-between">
                <div className="w-full lg:w-1/4 py-4 ;g:pt-[7px]">
                  <img src={data.imgSrc} alt="" />
                </div>
                <div className="w-full lg:w-3/4">
                  <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal">
                    {data.desc}
                  </p>

                  <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-medium pt-4">
                    Visit the site for info:
                  </p>
                  <a
                    href={data.link}
                    target="_blank"
                    className="text-primary text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-1"
                  >
                    {data.link}
                  </a>
                </div>
              </div>
            </div>
            {data.id !== 3 && <hr className="border border-primary/50 my-10" />}
          </>
        ))}
      </div>
    </div>
  );
};

export default PressRelease;
