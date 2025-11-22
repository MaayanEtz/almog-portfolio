// src/components/Gallery.jsx
const images = [
  "public/images/1.png",
  "public/images/2.png",
  "public/images/3.png",
  "public/images/4.png",
  "public/images/5.png",
  "public/images/6.png",
  "public/images/7.png",
  "public/images/8.png",
  "public/images/9.png",
  "public/images/10.png",
  "public/images/11.png",
  "public/images/12.png",
  "public/images/13.png",
  "public/images/14.png",
  "public/images/15.png",
  "public/images/16.png",
  "public/images/17.png",
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
