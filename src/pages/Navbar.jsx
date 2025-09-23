import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.Navbarcontainer}>
      <div className={styles.header}>
        <div className={styles.namely}>
          <h3 className={styles.nak}>
            ME<span className={styles.hoverHighlight}>RCY</span>
          </h3>
        </div>
        
        <div className={styles.mid}>
         
           <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.mt} ${styles.active}` : styles.mt
            }
          >
            <h3>Home</h3>
          </NavLink> 
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? `${styles.mt} ${styles.active}` : styles.mt
            }
          >
            <h3>About</h3>
          </NavLink>
          <NavLink
            to="/service"
            className={({ isActive }) =>
              isActive ? `${styles.mt} ${styles.active}` : styles.mt
            }
          >
            <h3>Services</h3>
          </NavLink>
          <NavLink
            to="/experience"
            className={({ isActive }) =>
              isActive ? `${styles.mt} ${styles.active}` : styles.mt
            }
          >
            <h3>Experience</h3>
          </NavLink>
        </div>
        <div className={styles.conc}>
          <button className={styles.btn}>Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
