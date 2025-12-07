import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/img/SVG/logo.svg"; 
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  function goTo(path) {
    const [base, hash] = path.split("#");
    const targetId = hash;

    if (location.pathname !== base) {
      navigate(base || "/");
      if (targetId) {
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 120);
      }
    } else {
      if (targetId) {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    setOpen(false);
  }

  return (
    <header className="navbar">
      <a href="/" className="navbar-logo">
        <img src={logo} alt="Mi Logo" className="logo-img" />
      </a>

      <nav className={`navbar-links ${open ? "open" : ""}`}>
        <button className="nav-link" onClick={() => goTo("/#home")}>
          Home
        </button>
        <button className="nav-link" onClick={() => goTo("/#conocenos")}>
          Conocenos
        </button>
        <button className="nav-link" onClick={() => goTo("/#trabajos")}>
          Nuestros trabajos
        </button>
        <button className="nav-link" onClick={() => goTo("/contacto")}>
          Hablemos!
        </button>
      </nav>

      {}
      <button className="navbar-toggle" onClick={() => setOpen(!open)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </header>
  );
}
