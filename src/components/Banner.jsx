import Slider from "react-slick";

const bannerDetails = [
  {
    src: "url(../src/assets/img/gulfmaid.jpg)",
    title: "AGM-Gulfmaid",
    details:
      "Founded in 1963, AGM has grown to more than 90,000 square meters of facilities using state-of-the-art equipment...",
  },
  {
    src: "url(../src/assets/img/3p.jpg)",
    title: "3P Pipe",
    details:
      "3P Gulf Group is one of the leading manufacturers for packaging and piping solutions in Jeddah, Kingdom of Saudi Arabia...",
  },
  {
    src: "url(../src/assets/img/gm.jpg)",
    title: "Gulf Manufacturers",
    details:
      "Gulf Manufacturers ‘‘GM ‘‘, was established in 2000 in the 6 of October City, Arab Republic of Egypt...",
  },
  {
    src: "url(../src/assets/img/rawasy.jpg)",
    title: "Rawasy Al Khaleej",
    details:
      "We are actively serving Food and Beverage Industries in the Middle East and North African region with a turnover of over $400 mil p.a...",
  },
  {
    src: "url(../src/assets/img/rakherm.jpg)",
    title: "RAKtherm",
    details:
      "With over 60 years experience in plastic pipe and fitting manufacturing in Saudi Arabia, Egypt and United Arab Emirates...",
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
            style={{ backgroundImage: data.src }}
          >
            <div className="absolute flex items-center justify-center opacity-65 w-full h-full bg-gray"></div>
            <div className="w-full h-full flex items-center justify-center">
              <div className="inner_wrap w-full mx-10 lg:w-1/3 lg:mx-0">
                <h1 className="text-4xl lg:text-[40px] font-bold uppercase leading-8 lg:leading-[60px] mt-4 mb-2">
                  {data.title}
                </h1>
                <p className="text-sm text-justify font-normal lg:text-[16px] lg:text-justify">
                  {data.details}
                </p>
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
