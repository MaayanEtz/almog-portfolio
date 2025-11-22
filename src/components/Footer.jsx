// src/components/Footer.jsx
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {currentYear} Almog Ezioni Photography. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a href="mailto:ezioni.almog@gmail.com">
          Email
        </a>
      </div>
    </footer>
  );
}
