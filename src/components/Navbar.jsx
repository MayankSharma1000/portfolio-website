import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Work", href: "#smartmoney" },
    { name: "Strengths", href: "#highlights" },
    { name: "Skills", href: "#skills" },
    { name: "Certificates", href: "#certifications" },
    { name: "Journey", href: "#journey" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="navbar">
      <a href="#home" className="brand" onClick={() => setOpen(false)}>
        MS
      </a>

      <nav className={open ? "nav-menu active" : "nav-menu"}>
        {links.map((link) => (
          <a key={link.name} href={link.href} onClick={() => setOpen(false)}>
            {link.name}
          </a>
        ))}
      </nav>

      <a href="#contact" className="nav-cta">
        Let’s Talk
      </a>

      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <FiX /> : <FiMenu />}
      </button>
    </header>
  );
}

export default Navbar;