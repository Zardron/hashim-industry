import React, { useEffect, useState } from "react";
import PARTNER_LOGO1 from "../../assets/img/Partners-logo1.jpg";
import PARTNER_LOGO2 from "../../assets/img/Partners-logo2.jpg";
import PARTNER_LOGO3 from "../../assets/img/Partners-logo3.jpg";
import PARTNER_LOGO4 from "../../assets/img/Partners-logo4.jpg";
import PARTNER_LOGO5 from "../../assets/img/Partners-logo5.jpg";

const Partners = () => {
  useEffect(() => {
    window.scroll({ top: 500, left: 0, behavior: "smooth" });
  });
  const [readMore, setReadMore] = useState({
    pepsi: false,
    nestle: false,
    unilever: false,
    pandg: false,
    cocacola: false,
  });

  const { pepsi, nestle, unilever, pandg, cocacola } = readMore;

  const partners = [
    {
      id: 200,
      title: "Pepsi",
      imgSrc: PARTNER_LOGO1,
      desc: "At Hashim Industries , we strongly believe in collaborating closely with partners who share a common dream and have the similar goals",
      more: " of making the future better through innovative and consumer-centric products. Our partners choose us because of our business ethics, unfailing commitment to provide satisfactory services and our ability to cut costs with the help of new technology in plastics conversion.",
      slub: pepsi,
      func: () => {
        setReadMore({ ...readMore, pepsi: !pepsi });
      },
    },
    {
      id: 400,
      title: "Nestle",
      imgSrc: PARTNER_LOGO2,
      desc: "Nestle is the world’s largest food company and by reports, it is all set to double its Middle East sales to 3.3 billion USD",
      more: "  in the next few years. Nestle has joined hands with many partners to reach international markets and here in the Middle East, we are one of the top partners of Nestle.",
      slub: nestle,
      func: () => {
        setReadMore({ ...readMore, nestle: !nestle });
      },
    },
    {
      id: 600,
      title: "Unilever",
      imgSrc: PARTNER_LOGO3,
      desc: "With a turnover in excess of €5 billion in 2012, Unilever is perhaps the most well-known name across the entirety of the Kingdom",
      more: " because of its over 400 brands of healthcare and consumer products, and it’s a matter of pride that we help them reach every household in the middle east!",
      slub: unilever,
      func: () => {
        setReadMore({ ...readMore, unilever: !unilever });
      },
    },
    {
      id: 800,
      title: "P&G",
      imgSrc: PARTNER_LOGO4,
      desc: "Established in 1873 and headquartered in Ohio, USA, P&G is among the top lifestyle and healthcare company with an annual sales of $82,559 million worldwide",
      more: " and it has a very strong presence in the Middle East. The Hashim Group is the company of choice for P&G’s Middle East operations.",
      slub: pandg,
      func: () => {
        setReadMore({ ...readMore, pandg: !pandg });
      },
    },
    {
      id: 1000,
      title: "COCA-COLA",
      imgSrc: PARTNER_LOGO5,
      desc: "Another company that is synonymous with cold beverages is Coca Cola. The company has operations worldwide and is growing in presence and significance.",
      more: " The Hashim Group has helped the company perform strongly by aligning with the company’s business goals.",
      slub: cocacola,
      func: () => {
        setReadMore({ ...readMore, cocacola: !cocacola });
      },
    },
  ];

  return (
    <div className="bg-white dark:bg-dark">
      <h1 className="text-primary font-bold text-2xl uppercase border-b-offGray border-b pb-1">
        Partners
      </h1>
      <div className="bg-white dark:text-white dark:bg-dark mt-3 animate__animated animate__zoomIn">
        <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-1">
          The path from innovation and ground breaking scientific advances to
          successful consumer products depends on convening the best global
          resources, experience and talent.
        </p>
        <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-3">
          At Hashim Industries , we strongly believe in collaborating closely
          with partners who share a common dream and have the similar goals of
          making the future better through innovative and consumer-centric
          products. Our partners choose us because of our business ethics,
          unfailing commitment to provide satisfactory services and our ability
          to cut costs with the help of new technology in plastics conversion.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-4">
        {partners.map((data, index) => (
          <div
            key={index}
            className=" hover:scale-105 transition-all ease-in-out duration-300"
          >
            <div
              className="w-full flex flex-col items-center"
              data-aos="flip-right"
              data-aos-delay={data.id}
              data-aos-duration="1000"
            >
              <img
                src={data.imgSrc}
                alt=""
                className="w-full bg-primary border-2 border-primary border-l-2 border-r-2 border-t-2 rounded-tr-md rounded-tl-md p-10"
              />
              <div className="w-full border-l-2 border-r-2 border-b-2 border-primary rounded-b-md">
                <div className="text-center py-2">{data.title}</div>
                <div
                  className={`overflow-hidden transition-[max-height] ease-linear duration-300 ${
                    data.slub ? "max-h-[350px]" : "max-h-20"
                  }`}
                >
                  <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal px-4 py-2">
                    {data.desc}
                    {data.more}
                  </p>
                </div>
                <div className="mb-4 text-center mt-2">
                  <button
                    className="border-2 border-primary rounded-md text-sm px-4 py-2 hover:bg-primary hover:text-white "
                    onClick={data.func}
                  >
                    {data.slub ? "Read less" : "Read more"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
