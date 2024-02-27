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
} from "./assets/banner/Banner";
import GlobalInvesting from "./pages/GlobalInvesting";
import Operations from "./pages/Operations";

const App = () => {
  const [darkMode, setDarkMode] = useState("light");
  const element = document.documentElement;
  const location = useLocation().pathname;
  const [title, setTitle] = useState("");
  const [subTitle, setSubtitle] = useState("");

  const props = { title, setTitle, subTitle, setSubtitle };

  const [bannerImg, setBannerImg] = useState(BANNER2);

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

  const banner = (location) => {
    switch (location) {
      case "/":
        return <Banner />;

      case "/about-us":
        return <PageBanner LOGO={bannerImg} {...props} />;

      case "/global-investing":
        return (
          <PageBanner LOGO={BANNER3} title="Home" subTitle="Global Investing" />
        );

      case "/operations":
        return <PageBanner LOGO={BANNER11} {...props} />;

      default:
        return <Banner />;
    }
  };

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

  return (
    <>
      {location === "/" ? <Header /> : <PageHeader darkMode={darkMode} />}
      {banner(location)}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About {...props} />} />
        <Route path="/global-investing" element={<GlobalInvesting />} />
        <Route path="/operations" element={<Operations {...props} />} />
      </Routes>
      <BackToTop />
      <DarkMode {...darkModeProps} />
      <FloatingMenu />
      <Footer {...darkModeProps} />
    </>
  );
};

export default App;
