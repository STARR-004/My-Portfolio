import React from "react";
import { useState } from "react";
import styles from "./home.module.css";
import me from "../assets/IMG_8938.jpeg";

function home() {
  return (
    <div className={styles.body}>
      <div className={styles.firstpage}>
        <div className={styles.header}>
          <div className={styles.namely}>
            <h3 className={styles.nak}>
              ME<span className={styles.hoverHighlight}>RCY</span>
            </h3>
          </div>
          <div className={styles.mid}>
            <h3 className={styles.rt}>Portfolio</h3>
            <h3 className={styles.mt}>Services</h3>
            <h3 className={styles.mt}>Experience</h3>
            <h3 className={styles.mt}>Projects</h3>
            <h3 className={styles.mt}>Education</h3>
          </div>
          <div className={styles.conc}>
            <button className={styles.btn}>Contact Me</button>
          </div>
        </div>

        <div className={styles.mtd}>
          <div className={styles.abtmr}>
            <div className={styles.hyy}>
              <h3 className={styles.hey}>Hi,</h3>
              <h2 className={styles.mer}>
                I'm <span style={{ color: "rgba(255, 100, 0, 1)" }}>Mercy</span></h2>
              <h2 className={styles.mer}>a Frontend Developer</h2>
            </div>
            <div className={styles.rd}>
              <h4>
                I don't just build websites — I craft experiences. From layouts
                to interactions, my goal is
              </h4>
              <h4>
                to create interfaces that not only look good but feel just
                right. With a blend of design sense, writing skills, and
                front-end
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

      <div className={styles.secondpage}>
        <div className={styles.picshur}>
          <img src={me} alt="me" className={styles.pic}></img>
        </div>
        <div className={styles.mtds}>
          <div className={styles.abtmr}>
            <div className={styles.hyy}>
              <h2 className={styles.mer}>About<span style={{ color: "rgba(255, 100, 0, 1)" }}>Me</span></h2>
              <h2 className={styles.mer}>Frontend <span style={{ color: "rgba(255, 100, 0, 1)" }}>Developer</span></h2>
            </div>
            <div className={styles.rd}>
              <h4>As a creative and detail-oriented Frontend Developer, I specialize in crafting visually appealing and highly</h4>
              <h4>functional websites. From layout to interactivity, I ensure every element enhances user experience and brand presence.</h4>
              <h4>Whether it's building pixel-perfect UI or optimizing code for speed, I'm focused on delivering digital experiences that</h4>
              <h4>stand out. From layout to interactivity, I ensure every element enhances user experience and brand presence.</h4>
              <h4>Let's build something amazing together!</h4>
            </div>
          </div>
        </div>
        <div className={styles.btns}>
          <button className={styles.expel}>Experience</button>
        </div>
      </div>
      <div className={styles.thirdpage}>
        <div className={styles.conc}>
            
        </div>
      </div>
    </div>
  );
}

export default home;


