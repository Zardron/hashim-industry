import { Link, useLocation } from "react-router-dom";
import LOGO_W from "../assets/img/logo-w.png";
import LOGO_B from "../assets/img/logo-b.png";

const navLink = [
  {
    id: 1,
    title: "Home",
    link: "/v5/",
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

const PageHeader = ({ darkMode }) => {
  const location = useLocation().pathname;

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
            {navLink.map((data, index) => (
              <div key={index}>
                <Link to={data.link}>
                  <div
                    className={`text-xs cursor-pointer ${
                      location === data.link
                        ? "active"
                        : "text-dark dark:text-white "
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

export default PageHeader;
