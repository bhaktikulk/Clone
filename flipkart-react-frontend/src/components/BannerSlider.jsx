import React, { useState } from "react";

const bannerImages = [
  "/images/banner1.jpg",
];

const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? bannerImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="banner-slider">
      <button className="prev" onClick={prevSlide}>‹</button>
      <img src={bannerImages[currentIndex]} alt="Banner" />
      <button className="next" onClick={nextSlide}>›</button>
    </div>
  );
};

export default BannerSlider;
