import React from "react";
import { useEffect } from "react";

const IsSticky = () => {
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".menu-section");
    const scrollTop = window.scrollY;
    scrollTop >= 450
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };
  return isSticky;
};

export default IsSticky;
