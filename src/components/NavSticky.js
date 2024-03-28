import React from "react";
import { useEffect } from "react";

const NavSticky = () => {
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".mob-section");
    const scrollTop = window.scrollY;
    scrollTop >= 100
      ? header.classList.add("nav-sticky")
      : header.classList.remove("nav-sticky");
  };
  return isSticky;
};

export default NavSticky;
