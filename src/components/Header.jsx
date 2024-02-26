import { Link } from "react-router-dom";
import LOGO from "../assets/img/logo-w.png";
const Header = () => {
  return (
    <div className="absolute top-0 w-full z-50">
      <div className="hidden container lg:block mx-auto py-2">
        <div className="flex items-center justify-between">
          <div>
            <img className="h-30" src={LOGO} alt="" />
          </div>
          <div className="flex gap-10">
            <Link to="/">
              <div className="text-xs cursor-pointer text-white uppercase font-medium hover:text-[#67c0e9]">
                Home
              </div>
            </Link>
            <Link to="/about-us">
              <div className="text-xs cursor-pointer text-white uppercase font-medium hover:text-[#67c0e9]">
                about the group
              </div>
            </Link>
            <Link to="/global-investing">
              <div className="text-xs cursor-pointer text-white uppercase font-medium hover:text-[#67c0e9]">
                global investing
              </div>
            </Link>
            <div className="text-xs cursor-pointer text-white uppercase font-medium hover:text-[#67c0e9]">
              operations
            </div>
            <div className="text-xs cursor-pointer text-white uppercase font-medium hover:text-[#67c0e9]">
              careers
            </div>
            <div className="text-xs cursor-pointer text-white uppercase font-medium hover:text-[#67c0e9]">
              news & events
            </div>
            <div className="text-xs cursor-pointer text-white uppercase font-medium hover:text-[#67c0e9]">
              group directory
            </div>
            <div className="text-xs cursor-pointer text-white uppercase font-medium hover:text-[#67c0e9]">
              contact us
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
