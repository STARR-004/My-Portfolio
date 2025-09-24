import React, { useRef } from "react";
import styles from "./Home.module.css";
import me from "../assets/IMG_8938.jpeg";
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";

function Home() {
  const navigate = useNavigate();

  const goExperience = () => {
    navigate("/experience");
  };

  const goService = () => {
    navigate("/service");
  };
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const goAbout = () => {
    navigate("/about");
  };

  const goFaqs = () => {
    navigate("/faqs");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6vt306c", // Replace with your actual service ID
        "template_pp62j8u", // Replace with your actual template ID
        e.target,
        "mckD9ztU1_NwVJjyD" // Replace with your public key from EmailJS dashboard
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          e.target.reset(); // Clears the form
        },
        (error) => {
          alert("Oops! Something went wrong. Please try again.");
        }
      );
  };

  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact-form" && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

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
            <button className={styles.hire} onClick={scrollToForm}>
              Hire Me
            </button>
            <button className={styles.expe} onClick={goExperience}>
              Experience
            </button>
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
              <h4>stand out.</h4>
              <h4>Let's build something amazing together!</h4>
            </div>
          </div>
        </div>
        <div className={styles.btns}>
          <button className={styles.expel} onClick={goExperience}>
            Experience
          </button>
        </div>
      </div>
      <div ref={formRef} className={styles.thirdpage}>
        <div className={styles.conc}>
          <h2 className={styles.mer}>
            Contact<span style={{ color: "rgba(255, 100, 0, 1)" }}> Me</span>
          </h2>
        </div>
        {/* <div style={{ height: "500px" }}></div> */}
        <form
          onSubmit={sendEmail}
          className={styles.mainform}
          id="contact-form"
        >
          <input
            type="text"
            name="full_name"
            placeholder="Full Name"
            className={styles.ph}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={styles.ph}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className={styles.ph}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className={styles.ph}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className={styles.phs}
            required
          ></textarea>
          <div className={styles.buton}>
            <button type="submit" className={styles.expels}>
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className={styles.lastpage}>
        <Footer />
        </div>
      
    </div>
  );
}

export default Home;
