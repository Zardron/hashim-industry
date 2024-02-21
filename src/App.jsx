import { Route, Routes } from "react-router-dom";
import { useState } from "react";
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
import ABOUT_LOGO from "../src/assets/banner/innerheader2.jpg";
import PageHeader from "./components/PageHeader";
import BackToTop from "./components/BackToTop";

const App = () => {
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

  const [title, setTitle] = useState("");
  const [subTitle, setSubtitle] = useState("");

  const props = { title, setTitle, subTitle, setSubtitle };

  const banner = (location) => {
    switch (location) {
      case "/":
        return <Banner />;

      case "/about-us":
        return <PageBanner LOGO={ABOUT_LOGO} {...props} />;
      default:
        return <Banner />;
    }
  };

  const darkModeProps = { darkMode, setDarkMode };

  return (
    <>
      {location === "/" ? <Header /> : <PageHeader darkMode={darkMode} />}
      {banner(location)}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About {...props} />} />
      </Routes>
      <BackToTop />
      <DarkMode {...darkModeProps} />
      <FloatingMenu />
      <Footer {...darkModeProps} />
    </>
  );
};

export default App;