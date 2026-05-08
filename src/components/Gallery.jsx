import { useState, useEffect } from "react";

// Automatically find all image files in the gallery folder (no code changes needed to add new photos!)
const imageModules = import.meta.glob('../assets/gallery/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' });
const images = Object.values(imageModules);

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = "auto";
  };

  const showNext = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext(e);
      if (e.key === "ArrowLeft") showPrev(e);
    };
    if (selectedImageIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImageIndex]);

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-header">
        <h2>My Work</h2>
        <p>A collection of my latest projects and creations.</p>
      </div>
      
      <div className="grid masonry">
        {images.map((src, index) => (
          <div key={index} className="gallery-item" onClick={() => openLightbox(index)}>
            <img src={src} alt={`portfolio-${index}`} loading="lazy" />
            <div className="gallery-overlay">
              <span className="view-text">View Image</span>
            </div>
          </div>
        ))}
      </div>

      {selectedImageIndex !== null && (
        <div className="lightbox-modal" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>&times;</button>
          <button className="lightbox-nav prev" onClick={showPrev}>&#10094;</button>
          
          <img 
            src={images[selectedImageIndex]} 
            alt={`portfolio-full-${selectedImageIndex}`} 
            className="lightbox-image" 
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
          />
          
          <button className="lightbox-nav next" onClick={showNext}>&#10095;</button>
          <div className="lightbox-counter">
            {selectedImageIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
}
