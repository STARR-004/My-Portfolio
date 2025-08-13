import React from "react";
import { useState } from "react";
import styles from "./home.module.css";
import me from "../assets/IMG_8938.jpeg";
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import Navbar from "./Navbar";



function home() {
  return (
    <div className={styles.body}>
      <div className={styles.firstpage}>
        <Navbar />

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
          <div className={styles.btns}>
            <button className={styles.hire}>Hire Me</button>
            <button className={styles.expe}>Experience</button>
          </div>
        </div>
      </div>

      <div className={styles.secondpage}>
        <div className={styles.picshur}>
          <img src={me} alt="me" className={styles.pic}></img>
        </div>
        <div className={styles.mtds}>
          <div className={styles.abtmr}>
            <div className={styles.hyy}>
              <h2 className={styles.mer}>
                About<span style={{ color: "rgba(255, 100, 0, 1)" }}> Me</span>
              </h2>
              <h2 className={styles.mer}>
                Frontend{" "}
                <span style={{ color: "rgba(255, 100, 0, 1)" }}>Developer</span>
              </h2>
            </div>
            <div className={styles.rd}>
              <h4>
                As a creative and detail-oriented Frontend Developer, I
                specialize in crafting visually appealing and highly
              </h4>
              <h4>
                functional websites. From layout to interactivity, I ensure
                every element enhances user experience and brand presence.
              </h4>
              <h4>
                Whether it's building pixel-perfect UI or optimizing code for
                speed, I'm focused on delivering digital experiences that
              </h4>
              <h4>
                stand out. From layout to interactivity, I ensure every element
                enhances user experience and brand presence.
              </h4>
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
          <h2 className={styles.mer}>
            Contact<span style={{ color: "rgba(255, 100, 0, 1)" }}> Me</span>
          </h2>
        </div>
        <div className={styles.mainform}>
          <input type="text" placeholder="Full Name" className={styles.ph} />
          <input type="text" placeholder="Email" className={styles.ph} />
          <input type="text" placeholder="Phone Number" className={styles.ph} />
          <input type="text" placeholder="Subject" className={styles.ph} />
          <textarea
            placeholder="Your Message"
            className={styles.phs}
          ></textarea>
        </div>
        <div className={styles.buton}>
          <button className={styles.expels}>Send Message</button>
        </div>
      </div>
      <div className={styles.lastpage}>
        <div className={styles.socialicons}>
          <a
            href="https://www.linkedin.com/in/mercy-lawal-9862122b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
            href="https://www.instagram.com/starr.004?utm_source=qr&igsh=ajhxMGZ6bGJqYTZs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href=" https://github.com/STARR-004"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
        <div className={styles.laspo}>
          <h3 className={styles.pt}>FAQs</h3>
          <h3 className={styles.pt}>Services</h3>
          <h3 className={styles.pt}>About Me</h3>
          <h3 className={styles.pt}>Contact</h3>
          {/* <h3 className={styles.pt}>Privacy Policy</h3> */}
        </div>
        <div className={styles.mkm}>
          <h3>©2025 Mercy| All Rights Reserved</h3>
        </div>
      </div>
    </div>
  );
}

export default home;
