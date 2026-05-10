import { useState, useEffect } from "react";

// Automatically grab images from the gallery
const imageModules = import.meta.glob('../assets/gallery/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' });
const allImages = Object.values(imageModules);

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [heroImages, setHeroImages] = useState([]);

  useEffect(() => {
    if (allImages.length > 0) {
      // Pick up to 5 random images for the hero slider
      const shuffled = [...allImages].sort(() => 0.5 - Math.random());
      setHeroImages(shuffled.slice(0, 5));
    }
  }, []);

  useEffect(() => {
    if (heroImages.length > 0) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % heroImages.length);
      }, 5000); // Change image every 5 seconds
      return () => clearInterval(interval);
    }
  }, [heroImages]);

  const scrollToGallery = () => {
    const gallerySection = document.getElementById("gallery");
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="hero">
      {heroImages.map((img, index) => (
        <div
          key={index}
          className={`hero-bg ${index === currentImage ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
      <div className="hero-overlay"></div>
      
      <div className="hero-content glass-card">
        <h1 className="hero-title">Capturing Moments, Telling Stories</h1>
        <p className="hero-subtitle">Photography portfolio by Almog Ezioni</p>
        <button className="hero-btn" onClick={scrollToGallery}>
          Explore Gallery
        </button>
      </div>
    </header>
  );
}
