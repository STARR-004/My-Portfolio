// Footer.js
import React from "react";
import styles from "./Footer.module.css";
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>Mercy</div>

        {/* Navigation Links */}
        <nav className={styles.links}>
          <a href="/faqs">FAQs</a>
          <a href="/service">Services</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>

        {/* Social Icons */}
        <div className={styles.socialIcons}>
          <a
            href="https://www.linkedin.com/in/mercy-lawal-9862122b0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/share/1FRGEju952"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/starr.004"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/STARR-004"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copy}>
        © {new Date().getFullYear()} Mercy | All Rights Reserved
      </div>
    </footer>
  );
}
