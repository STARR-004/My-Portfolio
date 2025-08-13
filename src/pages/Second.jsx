import React from "react";
import styles from "./second.module.css";
import me from "../assets/IMG_8938.jpeg";


const second = () => {
  return (
    <div>
      <div className={styles.mtd}>
        <div className={styles.abtmr}>
          <div className={styles.hyy}>
            <h3 className={styles.hey}>Hi,</h3>
            <h2 className={styles.mer}>
              I'm <span style={{ color: "rgba(255, 100, 0, 1)" }}>Mercy</span>
            </h2>
            <h2 className={styles.mer}>a Frontend Developer</h2>
          </div>
          <div className={styles.rd}>
            <h4>
              I don't just build websites — I craft experiences. From layouts to
              interactions, my goal is
            </h4>
            <h4>
              to create interfaces that not only look good but feel just right.
              With a blend of design sense, writing skills, and front-end
            </h4>
            <h4>
              {" "}
              development, I help brands and individuals tell their stories
              online — beautifully and effectively.
            </h4>
          </div>
        </div>
        <div className={styles.pic}>
          <img src={me} alt="me" className={styles.pic}></img>
        </div>
      </div>

      <div className={styles.btns}>
        <button className={styles.hire}>Hire Me</button>
        <button className={styles.expe}>Experience</button>
      </div>
    </div>
  );
};

export default second;
