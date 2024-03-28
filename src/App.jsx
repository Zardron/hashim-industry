import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "animate.css";
import { useLocation } from "react-router-dom";
// Components
import FloatingMenu from "./components/FloatingMenu";
import Banner from "./components/Banner";
import DarkMode from "./components/DarkMode";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import PageBanner from "./components/PageBanner";

// Logo
import PageHeader from "./components/PageHeader";
import BackToTop from "./components/BackToTop";

// Banner
import {
  BANNER12,
  BANNER2,
  BANNER4,
  BANNER7,
  BANNER8,
  BANNER9,
  BANNER3,
  BANNER11,
  BANNER6,
  BANNER13,
  BANNER15,
} from "./assets/banner/Banner";
import GlobalInvesting from "./pages/GlobalInvesting";
import Operations from "./pages/Operations";
import Careers from "./pages/Careers";
import NewsAndEvents from "./pages/NewsAndEvents";
import GroupDirectory from "./pages/GroupDirectory";
import ContactUs from "./pages/ContactUs";

const App = () => {
  // Darkmode Config
  const [darkMode, setDarkMode] = useState("light");
  const element = document.documentElement;
  const location = useLocation().pathname;

  switch (darkMode) {
    case "dark":
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      break;

    case "light":
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      break;

    default:
      element.classList.add("light");
      break;
  }

  const darkModeProps = { darkMode, setDarkMode };
  // End

  // Banner Props
  const [title, setTitle] = useState("");
  const [subTitle, setSubtitle] = useState("history");
  const props = { title, setTitle, subTitle, setSubtitle };
  const [bannerImg, setBannerImg] = useState(BANNER2);
  // End

  // Banner Img Rendering
  useEffect(() => {
    switch (subTitle) {
      case "history":
        setBannerImg(BANNER2);
        break;
      case "keyfacts":
        setBannerImg(BANNER4);
        break;
      case "milestone":
        setBannerImg(BANNER7);
        break;
      case "achievements":
        setBannerImg(BANNER8);
        break;
      case "message":
        setBannerImg(BANNER4);
        break;
      case "management":
        setBannerImg(BANNER9);
        break;
      case "partners":
        setBannerImg(BANNER12);
        break;
    }
  }, [subTitle, setBannerImg]);
  // End

  // Dynamic Page Banner Rendering
  const banner = (location) => {
    switch (location) {
      case "/v7/":
        return <Banner />;
      case "/about-us":
        return <PageBanner darkMode={darkMode} LOGO={bannerImg} {...props} />;
      case "/global-investing":
        return (
          <PageBanner
            darkMode={darkMode}
            LOGO={BANNER3}
            title="Home"
            subTitle="Global Investing"
          />
        );
      case "/operations":
        return <PageBanner darkMode={darkMode} LOGO={BANNER11} {...props} />;
      case "/careers":
        return <PageBanner darkMode={darkMode} LOGO={BANNER12} {...props} />;
      case "/news-and-events":
        return <PageBanner darkMode={darkMode} LOGO={BANNER13} {...props} />;
      case "/group-directory":
        return (
          <PageBanner
            darkMode={darkMode}
            LOGO={BANNER15}
            title="Home"
            subTitle="Group Directory"
          />
        );
      case "/contact-us":
        return (
          <PageBanner
            darkMode={darkMode}
            LOGO={BANNER15}
            title="Home"
            subTitle="Contact Us"
          />
        );
      default:
        return <Banner />;
    }
  };
  // End

  return (
    <>
      {location === "/v7/" ? <Header /> : <PageHeader darkMode={darkMode} />}
      {banner(location)}
      <Routes>
        <Route path="/v7/" element={<Home darkMode={darkMode} />} />
        <Route path="/about-us" element={<About {...props} />} />
        <Route path="/global-investing" element={<GlobalInvesting />} />
        <Route path="/operations" element={<Operations {...props} />} />
        <Route path="/careers" element={<Careers {...props} />} />
        <Route path="/news-and-events" element={<NewsAndEvents {...props} />} />
        <Route path="/group-directory" element={<GroupDirectory />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <BackToTop />
      <DarkMode {...darkModeProps} />
      <FloatingMenu />
      <Footer {...darkModeProps} />
    </>
  );
};

export default App;
