import Slider from "react-slick";
import GM from "../assets/img/gulfmaid.jpg";
import PPIPE from "../assets/img/3p.jpg";
import GM2 from "../assets/img/gm.jpg";
import RAWASY from "../assets/img/rawasy.jpg";
import RAKTHERM from "../assets/img/rakherm.jpg";
import { Link } from "react-router-dom";

const bannerDetails = [
  {
    src: GM,
    title: "AGM-Gulfmaid",
    details:
      "Founded in 1963, AGM has grown to more than 90,000 square meters of facilities using state-of-the-art...",
  },
  {
    src: PPIPE,
    title: "3P Pipe",
    details:
      "3P Gulf Group is one of the leading manufacturers for packaging and piping solutions in Jeddah,...",
  },
  {
    src: GM2,
    title: "Gulf Manufacturers",
    details:
      "Gulf Manufacturers ‘‘GM ‘‘, was established in 2000 in the 6 of October City, Arab Republic of Egypt...",
  },
  {
    src: RAWASY,
    title: "Rawasy Al Khaleej",
    details:
      "We are actively serving Food and Beverage Industries in the Middle East and North African region...",
  },
  {
    src: RAKTHERM,
    title: "RAKtherm",
    details:
      "With over 60 years experience in plastic pipe and fitting manufacturing in Saudi Arabia, Egypt and...",
  },
];

const Banner = () => {
  const settings = {
    arrows: false,
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: false,
  };

  return (
    <Slider {...settings}>
      {bannerDetails.map((data, key) => (
        <div key={key} className="animate__animated animate__slideInDown">
          <div
            className={` h-[50vh] lg:h-screen bg-cover bg-no-repeat`}
            style={{ backgroundImage: `url(${data.src})` }}
          >
            <div className="absolute flex items-center justify-center opacity-65 w-full h-full bg-gray"></div>
            <div className="w-full h-full flex items-center justify-center">
              <div className="inner_wrap w-full mx-10 lg:w-1/3 lg:mx-0">
                <h1 className="text-xl lg:text-[40px] font-bold uppercase leading-8 lg:leading-[60px] mt-4 mb-2">
                  {data.title}
                </h1>
                <p className="text-xs text-justify font-normal lg:text-[16px] lg:text-justify leading-5">
                  {data.details}
                </p>

                <div className="py-4 mb-2">
                  <Link
                    to="/global-investing"
                    className="border border-primary px-4 py-2 my-2 lg:my-4 rounded-md cursor-pointer shadow-sm shadow-primary"
                  >
                    Read More
                  </Link>
                </div>
                <span className="border_btm"></span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Banner;
