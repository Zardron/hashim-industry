import { Link } from "react-router-dom";
import LOGO_W from "../assets/img/logo-w.png";
import LOGO_B from "../assets/img/logo-b.png";

const PageHeader = ({ darkMode }) => {
  return (
    <div className="w-full dark:bg-dark ">
      <div className="hidden container lg:block mx-auto py-2">
        <div className="flex md:flex-col 2xl:flex-row items-center justify-between ">
          <div>
            <img
              className="h-30 z-50"
              src={darkMode === "light" ? LOGO_B : LOGO_W}
              alt=""
            />
          </div>
          <div className="flex flex-row gap-10 z-50 md:py-4 md:border-t md:border-t-primary 2xl:border-none">
            <Link to="/">
              <div className="text-xs cursor-pointer text-dark dark:text-white uppercase font-medium hover:text-[#67c0e9]">
                Home
              </div>
            </Link>
            <Link to="/about-us">
              <div className="text-xs cursor-pointer text-dark dark:text-white uppercase font-medium hover:text-[#67c0e9]">
                about the group
              </div>
            </Link>
            <Link to="/global-investing">
              <div className="text-xs cursor-pointer text-dark dark:text-white uppercase font-medium hover:text-[#67c0e9]">
                global investing
              </div>
            </Link>
            <Link to="/operations">
              <div className="text-xs cursor-pointer text-dark dark:text-white uppercase font-medium hover:text-[#67c0e9]">
                operations
              </div>
            </Link>
            <div className="text-xs cursor-pointer text-dark dark:text-white uppercase font-medium hover:text-[#67c0e9]">
              careers
            </div>
            <div className="text-xs cursor-pointer text-dark dark:text-white uppercase font-medium hover:text-[#67c0e9]">
              news & events
            </div>
            <div className="text-xs cursor-pointer text-dark dark:text-white uppercase font-medium hover:text-[#67c0e9]">
              group directory
            </div>
            <div className="text-xs cursor-pointer text-dark dark:text-white uppercase font-medium hover:text-[#67c0e9]">
              contact us
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
