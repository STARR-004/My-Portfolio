import React from "react";
import styles from "./service.module.css";
import Navbar from "../Navbar";
import techimg from "../../assets/fabio-oyXis2kALVg-unsplash.jpg";
import computer from "../../assets/47651.jpg";
import write from "../../assets/krismas-irN_UAWAVHI-unsplash.jpg";
import house from "../../assets/home-color-icon.png";
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Footer from "../Footer";

const Service = () => {
  const navigate = useNavigate();

  const handleStartProject = () => {
    navigate('/#contact-form');
  };
   const goFaqs = () => {
  navigate("/faqs");
};
  
  return (
    <div className={styles.body}>
      <div className={styles.firstpage}>
        <Navbar />
      </div>
      <div className={styles.secondpage}>
        <div className={styles.vertical}>
          <div className={styles.firstpart}>
            <h1>Crafting Digital</h1>
            <h1>Experiences, One</h1>
            <h1>Pixel at a Time.</h1>
          </div>
          <div className={styles.secondpart}>
            <h3>Elevate your online presence with STARR</h3>
            <h3>website design, robust front-end development,</h3>
            <h3>compelling content, and high-converting</h3>
            <h3>landing pages.</h3>
          </div>
        </div>
        <div className={styles.imgpart}>
          <img src={techimg} alt="techimg" className={styles.techimg}></img>
        </div>
      </div>

      <div className={styles.thirdpage}>
        <div className={styles.first}>
          <h2>My Expert Services</h2>
        </div>
        <div className={styles.second}>
          <div className={styles.website}>
            <img src={computer} alt="computer" className={styles.comp}></img>
            <h2 className={styles.web}>Website Design</h2>
            <div className={styles.words}>
              <h4>Transform your vision into a stunning user-friendly</h4>
              <h4>
                website. Focusing on intuitive UI/UX and aesthetic appeals
              </h4>
              <h4>to captivate your audience.</h4>
            </div>
            <button className={styles.brth}>Learn More</button>
          </div>
          <div className={styles.website}>
            <img src={computer} alt="computer" className={styles.comp}></img>
            <h2 className={styles.web}>Front End Development</h2>
            <div className={styles.words}>
              <h4>Building responsive, high performance, and scalable web </h4>
              <h4>applications using mordern frameworks and best coding</h4>
              <h4>pratices.</h4>
            </div>
            <button className={styles.brth}>Learn More</button>
          </div>
        </div>
        <div className={styles.second}>
          <div className={styles.website}>
            <img src={write} alt="write" className={styles.comp}></img>
            <h2 className={styles.web}>Content Writing</h2>
            <div className={styles.words}>
              <h4>From engaging blog posts to persuasive copywriting and </h4>
              <h4>creative narratives. I craft words that resonates and</h4>
              <h4>converts.</h4>
            </div>
            <button className={styles.brth}>Learn More</button>
          </div>
          <div className={styles.website}>
            <img src={house} alt="house" className={styles.comp}></img>
            <h2 className={styles.web}>Landing Page</h2>
            <div className={styles.words}>
              <h4>Design and develop optimized landing pages engineered</h4>
              <h4>to maximize conversions and achieve your marketing</h4>
              <h4>goals.</h4>
            </div>
            <button className={styles.brth}>Learn More</button>
          </div>
        </div>
      </div>

      <div className={styles.fourthpage}>
        <div className={styles.yh}>
          <h2>Ready to Transform Your Digital Presence?</h2>
        </div>
        <div className={styles.lol}>
          <h3>
            Let's collaborate to build something impactful. Get in touch to
          </h3>
          <h3>discuss your project and bring your ideas to life.</h3>
        </div>
         <button className={styles.tuy} onClick={handleStartProject}>
      Start Your Project Now
    </button>
      </div>

      <div className={styles.lastpage}>
        <Footer />
        </div>
    </div>
  );
};

export default Service;
