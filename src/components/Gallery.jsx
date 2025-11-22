// src/components/Gallery.jsx
const images = [
  "src/assets/images/1.png",
  "src/assets/images/2.png",
  "src/assets/images/3.png",
  "src/assets/images/4.png",
  "src/assets/images/5.png",
  "src/assets/images/6.png",
  "src/assets/images/7.png",
  "src/assets/images/8.png",
  "src/assets/images/9.png",
  "src/assets/images/10.png",
  "src/assets/images/11.png",
  "src/assets/images/12.png",
  "src/assets/images/13.png",
  "src/assets/images/14.png",
  "src/assets/images/15.png",
  "src/assets/images/16.png",
  "src/assets/images/17.png",
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
