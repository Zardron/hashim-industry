import { MdOutlineDoubleArrow } from "../assets/Icons";

const PageBanner = ({ LOGO, title, subTitle }) => {
  return (
    <div className="-z-50 animate__animated animate__slideInDown">
      <div
        className={`h-[38vh] w-full bg-cover bg-no-repeat`}
        style={{ backgroundImage: `url(${LOGO})` }}
      >
        <div className="absolute flex items-center justify-center opacity-65 dark:opacity-85 w-full h-full bg-gray"></div>
        <div className="absolute top-16 left-0 w-full p-10 lg:top-24 lg:left-56 lg:p-0 lg:w-1/3">
          <div className="page_wrapper w-full">
            <h1 className="text-4xl lg:text-[40px] font-bold uppercase leading-8 lg:leading-[60px] mt-4 mb-2">
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
