import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.Navbarcontainer}>
      <div className={styles.header}>
        {/* Brand */}
        <div className={styles.namely}>
          <h3 className={styles.nak}>
            ME<span className={styles.hoverHighlight}>RCY</span>
          </h3>
        </div>

        {/* Desktop navigation (kept visible on desktop, hidden on small screens via CSS) */}
        <div className={styles.mid}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.mt} ${styles.mtnew} ${styles.active}` : styles.mt
            }
            onClick={() => setIsOpen(false)}
          >
            <h3>Home</h3>
          </NavLink>

          <NavLink
            to="/service"
            className={({ isActive }) =>
              isActive ? `${styles.mt} ${styles.active}` : styles.mt
            }
            onClick={() => setIsOpen(false)}
          >
            <h3>Services</h3>
          </NavLink>

          <NavLink
            to="/experience"
            className={({ isActive }) =>
              isActive ? `${styles.mt} ${styles.active}` : styles.mt
            }
            onClick={() => setIsOpen(false)}
          >
            <h3>Experience</h3>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? `${styles.mt} ${styles.active}` : styles.mt
            }
            onClick={() => setIsOpen(false)}
          >
            <h3>Resume</h3>
          </NavLink>
        </div>

        {/* Desktop contact button (kept as-is) */}
        <Link to="/#contact-form" className={styles.btnLink}>
          <button className={styles.btn}>Contact Me</button>
        </Link>

        {/* Hamburger - hidden on desktop, shown on mobile via CSS */}
        <button
          type="button"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className={styles.menuBtn}
          onClick={() => setIsOpen((s) => !s)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown — only rendered when isOpen is true.
          Styling & placement are applied inside the mobile media query in CSS. */}
      {isOpen && (
        <div className={styles.mobileMenu} role="menu" aria-label="Mobile navigation">
          <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? `${styles.mobileLink} ${styles.active}` : styles.mobileLink}>
            Home
          </NavLink>

          <NavLink to="/service" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? `${styles.mobileLink} ${styles.active}` : styles.mobileLink}>
            Services
          </NavLink>

          <NavLink to="/experience" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? `${styles.mobileLink} ${styles.active}` : styles.mobileLink}>
            Experience
          </NavLink>

          <NavLink to="/about" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? `${styles.mobileLink} ${styles.active}` : styles.mobileLink}>
            Resume
          </NavLink>

          <Link to="/#contact-form" onClick={() => setIsOpen(false)} className={styles.mobileLink}>
            Contact Me
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
