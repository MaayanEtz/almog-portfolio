// src/components/Gallery.jsx
const images = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
  "/images/6.png",
  "/images/7.png",
  "/images/8.png",
  "/images/9.png",
  "/images/10.png",
  "/images/11.png",
  "/images/12.png",
  "/images/13.png",
  "/images/14.png",
  "/images/15.png",
  "/images/16.png",
  "/images/17.png",
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <h2>Gallery</h2>
      <div className="grid">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`portfolio-${index}`} />
        ))}
      </div>
    </section>
  );
}
