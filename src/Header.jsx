import { useState } from "react";
import "./Header.css";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="logo">SURAJ</div>

      {/* Hamburger */}
      <div
        className={open ? "hamburger open" : "hamburger"}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation */}
      <nav>
        <ul className={open ? "open" : ""}>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
