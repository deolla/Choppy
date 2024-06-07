// src/components/HeroSection/HeroSection.jsx
import { useState, useEffect } from "react";
import "./HeroSection.styles.css";
import food from "../../images/food/food1.jpg";
import food1 from "../../images/food/food2.jpg";
import food2 from "../../images/food/food3.jpg";
import food3 from "../../images/food/food4.jpg";
import food4 from "../../images/food/foodv.mp4";

const mediaItems = [
  { type: "image", src: food },
  { type: "image", src: food1 },
  { type: "image", src: food2 },
  { type: "image", src: food3 },
  { type: "video", src: food4 },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentMedia = mediaItems[currentIndex];

  return (
    <>
      <div className="top-heading-container">
        <div className="top-heading">
          <h3>
            Effortless Recipes Designed for Everyday <strong>Joy and Life Moments.</strong>
          </h3>
        </div>
      </div>
      <div className="hero-container">
        <div className="media-container">
          {currentMedia.type === "image" && (
            <img
              src={currentMedia.src}
              alt={`Slide ${currentIndex}`}
              className="hero-image"
            />
          )}
          {currentMedia.type === "video" && (
            <video className="hero-video" autoPlay muted loop>
              <source src={currentMedia.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <div className="hero-content">
          <h1>Welcome to Our Website</h1>
          <p>Your journey to amazing recipes starts here.</p>
          <button className="hero-button">Get Started</button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
