import React from "react";
import styles from "./experience.module.css";
import Navbar from "../Navbar";
import man from "../../assets/WhatsApp Image 2025-08-11 at 14.52.31_0e7b8b72.jpg";
import ecommerce from "../../assets/ecommerce.jpg";
import dashboard from "../../assets/dashboard.jpg";
import port from "../../assets/portfolino.jpg";

const experience = () => {
  return (
    <div className={styles.body}>
      <div className={styles.firstpage}>
        <Navbar />
      </div>

      <div className={styles.secondpage}>
        <div className={styles.vertical}>
          <div className={styles.firstpart}>
            <h1>Crafting Digital</h1>
            <h1>Experiences &</h1>
            <h1>creative Narratives </h1>
          </div>
          <div className={styles.secondpart}>
            <h3>
              Passionate multi-disciplinary professional blending meticulous
            </h3>
            <h3>
              web development with intuitve design, compelling writing, and
            </h3>
            <h3>innovative fashion concepts. Explore a portfolio built on </h3>
            <h3>creativity, precision and impact.</h3>
          </div>
          <button className={styles.expbtn}>Explore Portfolio</button>
        </div>
        <div className={styles.hori}>
          <img src={man} alt="man"></img>
        </div>
      </div>

      <div className={styles.thirdpage}>
        <h1 className={styles.webo}>Web Design Expertise</h1>
        <div className={styles.bnth}>
          <h3>
            My web design approach focuses on user-centric interfaces, aesthetic
            appeal, and
          </h3>
          <h3>
            optimal functionality. I specialize in responsive layouts, intuitive
            navigation, and
          </h3>
          <h3>
            visual storytelling that converts visitors into engaged users.
          </h3>
        </div>
        <div className={styles.picto}>
          <div className={styles.commercedesign}>
            <h1 className={styles.jy}>E-commerce Redesign</h1>
            <img src={ecommerce} alt="ecommerce" className={styles.imgu}></img>
            <div className={styles.comercewrd}>
              <h3>Mordernizing an online retail platform for</h3>
              <h3>enhanced user experience and mobile</h3>
              <h3>responsiveness, resulting in a 25%</h3>
              <h3>increase in conversion rates.</h3>
            </div>
            <div className={styles.commercelast}>
              <div className={styles.lo}>
                <h3 className={styles.ui}>UI/UX</h3>
                <h3 className={styles.pl}>Responsive</h3>
              </div>
              <div className={styles.km}>
                <h3 className={styles.pls}>Protyping</h3>
                <h3 className={styles.ui}>Figma</h3>
              </div>
            </div>
          </div>
          <div className={styles.commercedesign}>
            <h1 className={styles.jy}>SaaS Dashboard</h1>
            <img src={dashboard} alt="dashboard" className={styles.imgu}></img>
            <div className={styles.comercewrd}>
              <h3>Designing an intuitive and visually clean</h3>
              <h3>dashboard for a B2B SaaS application,</h3>
              <h3>improving data readability and user</h3>
              <h3>engagement by 30%.</h3>
            </div>
            <div className={styles.commercelast}>
              <div className={styles.lo}>
                <h3 className={styles.pl}>Dashboard</h3>
                <h3 className={styles.plso}>Data vis</h3>
              </div>
              <div className={styles.km}>
                <h3 className={styles.plsoljr}>Wireframing</h3>
                <h3 className={styles.ui}>Sketch</h3>
              </div>
            </div>
          </div>
          <div className={styles.commercedesign}>
            <h1 className={styles.jy}>Interactive Portfolio Site</h1>
            <img src={port} alt="port" className={styles.imgu}></img>
            <div className={styles.comercewrd}>
              <h3>Developing a dynamic and engaging</h3>
              <h3>personal portfolio website with custom</h3>
              <h3>animations and a unique visual identity to</h3>
              <h3>showcase creative work.</h3>
            </div>
            <div className={styles.commercelast}>
              <div className={styles.lo}>
                <h3 className={styles.pl}>Animations</h3>
                <h3 className={styles.plso}>Branding</h3>
              </div>
              <div className={styles.km}>
                <h3 className={styles.plso}>Webflow</h3>
                <h3 className={styles.plsol}>Design systems</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.fourthpage}>
        <h1 className={styles.webo}>Web Development Proficiency</h1>
        <div className={styles.bnth}>
          <h3>
            From robust backend architectures to dynamic frontend experiences, I
            build,
          </h3>
          <h3>
            scalable and performant web applications using mordern frameworks
            and best
          </h3>
          <h3>
            pratices. My code is clean, efficient, and well-documented.
          </h3>
        </div>
        <div className={styles.picto}>
          <div className={styles.commercedesign}>
            <h1 className={styles.jy}>E-commerce Redesign</h1>
            <img src={ecommerce} alt="ecommerce" className={styles.imgu}></img>
            <div className={styles.comercewrd}>
              <h3>Mordernizing an online retail platform for</h3>
              <h3>enhanced user experience and mobile</h3>
              <h3>responsiveness, resulting in a 25%</h3>
              <h3>increase in conversion rates.</h3>
            </div>
            <div className={styles.commercelast}>
              <div className={styles.lo}>
                <h3 className={styles.ui}>UI/UX</h3>
                <h3 className={styles.pl}>Responsive</h3>
              </div>
              <div className={styles.km}>
                <h3 className={styles.pls}>Protyping</h3>
                <h3 className={styles.ui}>Figma</h3>
              </div>
            </div>
          </div>
          <div className={styles.commercedesign}>
            <h1 className={styles.jy}>SaaS Dashboard</h1>
            <img src={dashboard} alt="dashboard" className={styles.imgu}></img>
            <div className={styles.comercewrd}>
              <h3>Designing an intuitive and visually clean</h3>
              <h3>dashboard for a B2B SaaS application,</h3>
              <h3>improving data readability and user</h3>
              <h3>engagement by 30%.</h3>
            </div>
            <div className={styles.commercelast}>
              <div className={styles.lo}>
                <h3 className={styles.pl}>Dashboard</h3>
                <h3 className={styles.plso}>Data vis</h3>
              </div>
              <div className={styles.km}>
                <h3 className={styles.plsoljr}>Wireframing</h3>
                <h3 className={styles.ui}>Sketch</h3>
              </div>
            </div>
          </div>
          <div className={styles.commercedesign}>
            <h1 className={styles.jy}>Interactive Portfolio Site</h1>
            <img src={port} alt="port" className={styles.imgu}></img>
            <div className={styles.comercewrd}>
              <h3>Developing a dynamic and engaging</h3>
              <h3>personal portfolio website with custom</h3>
              <h3>animations and a unique visual identity to</h3>
              <h3>showcase creative work.</h3>
            </div>
            <div className={styles.commercelast}>
              <div className={styles.lo}>
                <h3 className={styles.pl}>Animations</h3>
                <h3 className={styles.plso}>Branding</h3>
              </div>
              <div className={styles.km}>
                <h3 className={styles.plso}>Webflow</h3>
                <h3 className={styles.plsol}>Design systems</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default experience;
