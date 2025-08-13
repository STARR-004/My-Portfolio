import React from "react";
import styles from "./Navbar.module.css";

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
          <h3 className={styles.rt}>Home</h3>
          <h3 className={styles.mt}>About</h3>
          <h3 className={styles.mt}>Services</h3>
          <h3 className={styles.mt}>Experience</h3>
        </div>
        <div className={styles.conc}>
          <button className={styles.btn}>Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
