import React, { useRef } from "react";
import styles from "./Faqs.module.css";
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../Footer";

const Faqs = () => {
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
      </div>

      <div className={styles.goy}>
        <div className={styles.secondpge}>
          <h1>Frequently Asked Questions</h1>
          <h1 className={styles.secondpges}>(FAQs)</h1>
        </div>
        <div className={styles.oney} >
          <p>Q1: What Services do you offer? </p>
          <p>A: I offer Frontend Development, Web Design, Creative Writing (copywriting,</p>
          <p>content creation), and Fashion Design (custom wear design and styling</p>
          <p>consultation).</p>
        </div>

        <div className={styles.oney} >
          <p>Q2: What technologies do you work with for web development? </p>
          <p>A: I work with HTML, CSS, Javascript, React.js. Tailwind CSS, and a few other</p>
          <p>modern tools and libraries.</p>
        </div>

         <div className={styles.oney} >
          <p>Q3: Can you design and build complete website?</p>
          <p>A: Yes! I handle both the design and frontend development, ensuring </p>
          <p>responsive and user-friendly websites.</p>
        </div>

        <div className={styles.oney} >
          <p>Q4: What kind of writing do you specialize in?</p>
          <p>A: I write website copy, blog articles, social media content, and Creative </p>
          <p>storytelling pieces tailored to brand tone and audiences.</p>
        </div>

        <div className={styles.oney} >
          <p>Q5: Do you collaborate with backend developers?</p>
          <p>A: Yes! I'm open to working with backend developers or teams to bring full- </p>
          <p>stack projects to life.</p>
        </div>

        <div className={styles.oney} >
          <p>Q6: Can you help redesign an existing website?</p>
          <p>A: Absolutely! I offer design audits and complete redesign Services to improve </p>
          <p>aesthetics and user experience.</p>
        </div>

        <div className={styles.oney} >
          <p>Q7: Do you take custom fashion design orders?</p>
          <p>A: Yes, I create custom design orders based on your style, body type, and </p>
          <p>occasion, I also offer style consultations.</p>
        </div>

        <div className={styles.oney} >
          <p>Q8: How do I work with you on a project?</p>
          <p>A: You can reach out via the contact form. We'll discuss your vision, goals, and </p>
          <p>timeline, then I'll create a plan that suits your needs.</p>
        </div>

         <div className={styles.oney} >
          <p>Q9: What's your turnaround time? </p>
          <p>A: It depends on the project scope. Simple websites take 1-2 weeks; writing </p>
          <p>asks can be delivered within 2-5 days. Fashion orders depend on fabric </p>
          <p>sourcing and design complexity.</p>
        </div>

        <div className={styles.oney} >
          <p>Q10: Are you open to collaborations or freelance gigs?</p>
          <p>A: Yes, I'm always open to exciting opportunities and creative partnerships.</p>
        </div>
      </div>

      <div className={styles.lastpage}>
        <Footer />
        </div>
        
    </div>
  );
};

export default Faqs;
