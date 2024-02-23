import { MdOutlineDoubleArrow } from "../assets/Icons";

const PageBanner = ({ LOGO, title, subTitle }) => {
  return (
    <div className="-z-50 animate__animated animate__slideInDown">
      <div
        className={`h-[40vh] w-full bg-cover bg-no-repeat`}
        style={{ backgroundImage: `url(${LOGO})` }}
      >
        <div className="absolute flex items-center justify-center opacity-65 dark:opacity-85 w-full h-full bg-gray"></div>
        <div
          className="absolute top-1/2 w-full p-10 lg:left-16 2xl:left-52 lg:p-0 md:w-full lg:w-1/3 2xl:w-1/3"
          style={{ transform: "translateY(-50%)" }}
        >
          <div className="page_wrapper p-10">
            <h1 className="text-md md:text-[30px] 2xl:text-[40px] font-bold uppercase mb-4">
              {title}
            </h1>
            <div className="flex flex-row items-center">
              <MdOutlineDoubleArrow className="mr-1 text-primary" />
              <p className="text-sm text-justify capitalize font-normal lg:text-justify m-0">
                {subTitle}
              </p>
            </div>
            <span className="border_btm"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
