import React, { useState } from "react";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", toggleVisibility);

  return (
    <button data-aos="fade-in"
            data-aos-delay="200"
            className={`scroll-to-top ${isVisible ? "scroll-to-top-visible" : ""}`}
            onClick={scrollToTop}
            >
          <i className="fa fa-angle-double-up"></i>
      </button>
  );
};






    