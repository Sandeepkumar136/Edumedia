import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const AboutSlider = ({ activeSection, scrollToSection }) => {
  const sliderRef = useRef(null);


  const menuItems = [
    { id: "welcome", label: "Welcome to Block Monitor" },
    { id: "what", label: "What is Block Monitor?" },
    { id: "features", label: "Our Features" },
    { id: "why", label: "Why CoinGecko API?" },
    { id: "integration", label: "CoinGecko Integration" }, // Fixed typo
    { id: "mission", label: "Our Mission" },
    { id: "tech", label: "Technologies Used" },
    { id: "team", label: "Who We Are?" },
    { id: "support", label: "Get Support" },
    { id: "touch", label: "Get in Touch" },
  ];

  useEffect(() => {
    if (sliderRef.current) {
      const activeIndex = menuItems.findIndex((item) => item.id === activeSection);
      if (activeIndex !== -1) {
        sliderRef.current.slickGoTo(activeIndex);
      }
    }
  }, [activeSection]);

  // Slider Settings
  const sliderSettings = {
    slidesToShow: 5, // Adjust slide visibility
    slidesToScroll: 1,
    infinite: false,
    speed: 500,
    focusOnSelect: true,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <>
      <div className="ab-slider-container">
      </div>
        <div style={{ position: "fixed", top: "4.8rem", left: 0, width: "100%", background: "#333", padding: "10px", zIndex: 1000 }}>
          <Slider ref={sliderRef} {...sliderSettings}>
            {menuItems.map((item) => (
              <div key={item.id} style={{ textAlign: "center" }}>
                <a
                  href={`#${item.id}`}
                  onClick={() => {
                    scrollToSection(item.id);
                  }}
                  style={{
                    textDecoration: "none",
                    color: activeSection === item.id ? "#FFD700" : "#fff",
                    fontWeight: activeSection === item.id ? "bold" : "normal",
                    padding: "10px",
                    display: "block",
                  }}
                >
                  {item.label}
                </a>
              </div>
            ))}
          </Slider>
        </div>
    </>
  );
};

export default AboutSlider;
