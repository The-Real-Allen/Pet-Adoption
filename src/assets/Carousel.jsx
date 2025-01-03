import React, { useState, useEffect } from "react";
import "./Carousel.css";
import img1 from "./Images/dog1.jpg";
import img2 from "./Images/cat.jpg";
import img3 from "./Images/dog2.jpg";
import { motion } from "framer-motion";

import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function Carousel() {
  const slidesData = [
    { src: img1, alt: "Dog 1" },
    { src: img2, alt: "Cat" },
    { src: img3, alt: "Dog 2" },
  ];
  useEffect(() => {
    const timer = setInterval(nextSlide, 3000); // Change slides every 3 seconds
    return () => clearInterval(timer); // Cleanup the timer on component unmount
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slidesData.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slidesData.length - 1 : prevSlide - 1
    );
  };

  return (
    <motion.div className="carousel-section">
      {/* Navigation Arrows */}
      {/* <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={prevSlide}
      /> */}
      {/* <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={nextSlide}
      /> */}

      {/* Carousel Slides */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "0" }}
        exit={{ x: "-100%" }}
        transition={{ duration: "0.2" }}
        className="carousel-slides"
      >
        {slidesData.map((slide, index) => (
          <img
            className={`carousel-img ${
              currentSlide === index ? "active" : "hidden"
            }`}
            src={slide.src}
            alt={slide.alt}
            key={index}
          />
        ))}
      </motion.div>

      {/* Indicators */}
      <motion.div
        className="indicators"
        initial={{ x: "100%" }}
        animate={{ x: "0" }}
        exit={{ x: "-100%" }}
        transition={{ duration: "0.2" }}
      >
        {slidesData.map((_, index) => (
          <button
            className={`indicator ${
              currentSlide === index ? "active" : "inactive"
            }`}
            key={index}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Carousel;
