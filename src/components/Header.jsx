import { Link, useLocation } from "react-router-dom";
import LOGO from "../assets/img/logo-w.png";

const navLink = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "about the group",
    link: "/about-us",
  },
  {
    id: 3,
    title: "global investing",
    link: "/global-investing",
  },
  {
    id: 4,
    title: "operations",
    link: "/operations",
  },
  {
    id: 5,
    title: "careers",
    link: "/careers",
  },
  {
    id: 6,
    title: "news & events",
    link: "/news-and-events",
  },
  {
    id: 7,
    title: "group directory",
    link: "/group-directory",
  },
  {
    id: 8,
    title: "contact us",
    link: "/contact-us",
  },
];

const Header = () => {
  const location = useLocation().pathname;

  return (
    <div className="absolute top-0 w-full z-50">
      <div className="hidden container lg:block mx-auto py-2">
        <div className="flex items-center justify-between">
          <div>
            <img className="h-30" src={LOGO} alt="" />
          </div>

          <div className="flex gap-10">
            {navLink.map((data, index) => (
              <div key={index}>
                <Link to={data.link}>
                  <div
                    className={`text-xs cursor-pointer ${
                      location === data.link
                        ? "active"
                        : "text-white dark:text-dark "
                    } uppercase font-medium hover:text-[#67c0e9]`}
                  >
                    {data.title}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
