import React from "react";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">CastaAds</div>
       
        <div className="footer-copy">© {year} CastaAds. Todos los derechos reservados.</div>
      </div>
    </footer>
  );
}
