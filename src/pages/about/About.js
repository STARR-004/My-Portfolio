import React from "react";
import styles from "./about.module.css";
import Navbar from "../Navbar";
import me from "../../assets/IMG_8938.jpeg";
import webdesign from "../../assets/webdesign.jpg";
import webdev from "../../assets/webdev.jpg";
import creaty from "../../assets/creativewrite.jpg";
import fashion from "../../assets//fashiontop.jpg";
import dashboard from "../../assets/dashboard.jpg";
import ecommerce from "../../assets/ecommerce.jpg";
import brand from "../../assets/brand.jpg";
import gown from "../../assets/gown.jpg";
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";

const About = () => {
  const navigate = useNavigate();
  const goFaqs = () => {
  navigate("/faqs");
};
  return (
    <div className={styles.body}>
      <div className={styles.firstpage}>
        <Navbar />
      </div>

      <div className={styles.secondpage}>
        <div className={styles.ertical}>
          <h1 className={styles.mercylawal}>Mercy Lawal</h1>
          <h3 className={styles.mercylawalk}>
            Web Designer, Developer & Creative
          </h3>
          <h3 className={styles.mercylawalk}>Professional</h3>
          <div className={styles.secondpart}>
            <h4>Crafting compelling digital experiences with a blend of</h4>
            <h4>
              aesthetic design, robust development, and impactful content.
            </h4>
            <h4>
              Passionate about bringing ideas to life across various creative
            </h4>
            <h4>domains.</h4>
          </div>
          <div className={styles.btg}>
            <button className={styles.resumebtg}>Download Resume</button>
            <button className={styles.portfoliobtg}>View Portfolio</button>
          </div>
        </div>

        <div className={styles.picshur}>
          <img src={me} alt="me" className={styles.pic}></img>
        </div>
      </div>

      <div className={styles.thirdpage}>
        <h1 className={styles.abtme}>About me</h1>
        <div className={styles.btword}>
          <h4>
            As a versatile professional, my career is driven by a passion for
            creating impactful digital
          </h4>
          <h4>
            solutions. My journey spans from conceptualizing visually stunning
            interfaces and building
          </h4>
          <h4>
            robust web applications, to crafting engaging narratives and
            designing compelling fashion
          </h4>
          <h4>
            pieces. I thrive in environments that challenges me to blend
            creativity with technical
          </h4>
          <h4>
            precission, always aiming to deliver innovative and user-centric
            experiences. I believe that
          </h4>
          <h4>
            thoughtful design, clean code and resonant words are the pillars of
            truly effective
          </h4>
          <h4>communication.</h4>
        </div>
      </div>
      <div className={styles.fourthpage}>
        <h1 className={styles.myexpert}>My Expertise</h1>
        <div className={styles.fourthexpert}>
          <div className={styles.webdesignw}>
            <img
              src={webdesign}
              alt="webdesign"
              className={styles.wedesign}
            ></img>
            <h2 className={styles.webdesignq}>Web Design</h2>
            <div className={styles.webdesignline}></div>
            <div className={styles.wrd}>
              <h3>UI/UX Principles</h3>
              <h3>Wireframing & Prototyping</h3>
              <h3>Figma, sketch, Adobe XD</h3>
              <h3>Responsive Design</h3>
              <h3>Design Systems</h3>
            </div>
          </div>
          <div className={styles.webdesignw}>
            <img src={webdev} alt="webdev" className={styles.wedesign}></img>
            <h2 className={styles.webdesignq}>Web Development</h2>
            <div className={styles.webdesignline}></div>
            <div className={styles.wrd}>
              <h3>React, Next.js</h3>
              <h3>Typescript, Javascript</h3>
              <h3>Tailwind CSS, scss</h3>
              <h3>Restful APIs</h3>
              <h3>Full-stack Integrations</h3>
            </div>
          </div>
          <div className={styles.webdesignw}>
            <img src={creaty} alt="creaty" className={styles.wedesign}></img>
            <h2 className={styles.webdesignq}>Creative Writing</h2>
            <div className={styles.webdesignline}></div>
            <div className={styles.wrd}>
              <h3>Copywriting for Web</h3>
              <h3>Blog Post Creation</h3>
              <h3>SEO Content Strategy</h3>
              <h3>Brand Storytelling</h3>
              <h3>Content Editing</h3>
            </div>
          </div>
          <div className={styles.webdesignw}>
            <img src={fashion} alt="fashion" className={styles.wedesign}></img>
            <h2 className={styles.webdesignq}>Fashion Design</h2>
            <div className={styles.webdesignline}></div>
            <div className={styles.wrd}>
              <h3>Apparel Design</h3>
              <h3>Textile Knowledge</h3>
              <h3>Pattern Making</h3>
              <h3>Adobe Illustrator, Photoshop</h3>
              <h3>Trend Analysis</h3>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.fifthpage}>
        <h1 className={styles.myexpert}>Professional Experience</h1>
        <div className={styles.fourthexpert}>
          <div className={styles.webdesignwt}>
            <h2 className={styles.webdesignqr}>Senior UI/UX</h2>
            <h2 className={styles.webdesignqr}>Designer</h2>
            <h4 className={styles.webdesignqrt}>Innovate Solutions</h4>
            <h4 className={styles.webdesignqrj}>June 2021 - present</h4>
            <div className={styles.webdesignline}></div>
            <div className={styles.wrdi}>
              <h3>Led design efforts for</h3>
              <h3>flagship products</h3>
              <h3>increasing user </h3>
              <h3>engagement by 25%.</h3>
            </div>
            <div className={styles.wrdik}>
              <h3>Developed and</h3>
              <h3>maintained </h3>
              <h3>comprehensive design </h3>
              <h3>system across miultiple</h3>
              <h3>platforms.</h3>
            </div>
            <div className={styles.wrdik}>
              <h3>Collaborted with</h3>
              <h3>cross-functional teams to</h3>
              <h3>translate user needs into </h3>
              <h3>intuitive interfaces.</h3>
            </div>
          </div>

          <div className={styles.webdesignwt}>
            <h2 className={styles.webdesignqr}>Frontend</h2>
            <h2 className={styles.webdesignqr}>Developer</h2>
            <h4 className={styles.webdesignqrt}>Brookes Ltd</h4>
            <h4 className={styles.webdesignqrj}>May 2025 - present</h4>
            <div className={styles.webdesignline}></div>
            <div className={styles.wrdi}>
              <h3>Built responsive web</h3>
              <h3>applications using react</h3>
              <h3>and TypeScript, improving </h3>
              <h3>load time by 15%.</h3>
            </div>
            <div className={styles.wrdik}>
              <h3>Implemented pixel-perfect</h3>
              <h3>designs from Figma </h3>
              <h3>mockups using Tailwind</h3>
              <h3>CSS.</h3>
            </div>
            <div className={styles.wrdik}>
              <h3>Contributed to API</h3>
              <h3>integration and backend</h3>
              <h3>logic for dynamic content </h3>
              <h3>delivery.</h3>
            </div>
          </div>

          <div className={styles.webdesignwt}>
            <h2 className={styles.webdesignqr}>Creative</h2>
            <h2 className={styles.webdesignqr}>Writer</h2>
            <h4 className={styles.webdesignqrt}>Remote</h4>
            <h4 className={styles.webdesignqrj}>Oct 2022 - present</h4>
            <div className={styles.webdesignline}></div>
            <div className={styles.wrdi}>
              <h3>Crafted compelling</h3>
              <h3>website copy and blog</h3>
              <h3>articles that boosted </h3>
              <h3>organic traffic by 40%.</h3>
            </div>
            <div className={styles.wrdik}>
              <h3>Developed content</h3>
              <h3>calendars and managed </h3>
              <h3>editorial workflows, for </h3>
              <h3>various clients.</h3>
            </div>
            <div className={styles.wrdik}>
              <h3>Analyzed content</h3>
              <h3>performance metrics to</h3>
              <h3>refine strategies and</h3>
              <h3>improve conversion rates.</h3>
            </div>
          </div>

          <div className={styles.webdesignwt}>
            <h2 className={styles.webdesignqr}>Fashion</h2>
            <h2 className={styles.webdesignqr}>Designer</h2>
            <h4 className={styles.webdesignqrt}>Julie's daughter</h4>
            <h4 className={styles.webdesignqrj}>Jan 2021 - present</h4>
            <div className={styles.webdesignline}></div>
            <div className={styles.wrdi}>
              <h3>Assisted in the</h3>
              <h3>conceptualization and</h3>
              <h3>development of seasonal</h3>
              <h3>collections.</h3>
            </div>
            <div className={styles.wrdik}>
              <h3>Prepared technical</h3>
              <h3>drawings and </h3>
              <h3>speicifcations for garment</h3>
              <h3>production.</h3>
            </div>
            <div className={styles.wrdik}>
              <h3>Conducted market</h3>
              <h3>research to identify</h3>
              <h3>emerging trends and</h3>
              <h3>fabric innovations.</h3>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.fifthpage}>
        <h1 className={styles.myexpert}>Featured Projects</h1>
        <div className={styles.fourthexpert}>
          <div className={styles.commercedesign}>
            <h1 className={styles.jy}>SaaS Dashboard</h1>
            <img src={dashboard} alt="dashboard" className={styles.imgu}></img>
            <div className={styles.comercewrd}>
              <h3>Designing an intuitive and visually</h3>
              <h3>clean dashboard for a B2B SaaS</h3>
              <h3>application, improving data</h3>
              <h3>readability and user engagement</h3>
              <h3> by 30%.</h3>
            </div>
            <div className={styles.commercelast}>
              <div className={styles.lo}>
                <h3 className={styles.pl}>Dashboard</h3>
                <h3 className={styles.plso}>Data vis</h3>
              </div>
              <div className={styles.km}>
                <h3 className={styles.plsoljr}>Wireframing</h3>
              </div>
            </div>
          </div>

          <div className={styles.commercedesign}>
            <h1 className={styles.jy}>Custom CMS Development</h1>
            <img src={ecommerce} alt="ecommerce" className={styles.imgu}></img>
            <div className={styles.comercewrd}>
              <h3>Developing a tailored content</h3>
              <h3>management system that provides</h3>
              <h3>clients with flexible and intuitive</h3>
              <h3>control over their website content.</h3>
            </div>
            <div className={styles.commercelast}>
              <div className={styles.lo}>
                <h3 className={styles.ui}>React</h3>
                <h3 className={styles.uio}>Next.js</h3>
              </div>
              <div className={styles.km}>
                <h3 className={styles.plso}>Firebase</h3>
              </div>
            </div>
          </div>

          <div className={styles.commercedesign}>
            <h1 className={styles.jy}>Brand Story Campaign</h1>
            <img src={brand} alt="brand" className={styles.imgu}></img>
            <div className={styles.comercewrd}>
              <h3>Crafting a compelling brand</h3>
              <h3>narratives and messaging strategy</h3>
              <h3>across multiple touchpoints to </h3>
              <h3>enhance brand identity and</h3>
              <h3>customer loyalty.</h3>
            </div>
            <div className={styles.commercelast}>
              <div className={styles.lo}>
                <h3 className={styles.pls}>Storytelling</h3>
              </div>
              {/* <h3 className={styles.plsoljr}>Copywriting</h3> */}
              <div className={styles.km}>
                <h3 className={styles.pls}>Marketing</h3>
              </div>
            </div>
          </div>

          <div className={styles.commercedesign}>
            <h1 className={styles.jy}>Coutre Evening Wear Collection</h1>
            <img src={gown} alt="gown" className={styles.imgu}></img>
            <div className={styles.comercewrd}>
              <h3>Creating an exclusive collection of</h3>
              <h3>high-end evening wear, featuring</h3>
              <h3>intricate detailing, luxurious</h3>
              <h3>fabrics, and bespoke </h3>
              <h3>craftsmanship .</h3>
            </div>
            <div className={styles.commercelast}>
              <div className={styles.lo}>
                <h3 className={styles.plsoljr}>Embroidery</h3>
                <h3 className={styles.uioh}>Draping</h3>
              </div>
              <div className={styles.km}>
                <h3 className={styles.plsol}>Pattern Making</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.seventhpage}>
        <h1 className={styles.myexpert}>Education & Qualifications</h1>
        <div className={styles.firstone}>
          <h2 className={styles.bc}>
            Bachelor of Technology in Information Systems
          </h2>
          <h4 className={styles.bcso}>
            Federal University of Technology, Akure.
          </h4>
          <h4 className={styles.bcs}>2020-2025</h4>
          <h4 className={styles.bcs}>
            Specialized in Web development and software engineering principles.
          </h4>
        </div>
        <div className={styles.firstone}>
          <h2 className={styles.bc}>High School Diploma</h2>
          <h4 className={styles.bcso}>
            St. Louis Girls Grammar School, Akure.
          </h4>
          <h4 className={styles.bcs}>2014-2020</h4>
          <h4 className={styles.bcs}>
            Graduated with honours participating in Science and Technology
            clubs.
          </h4>
        </div>
        <div className={styles.firstone}>
          <h2 className={styles.bc}>Primary Education</h2>
          <h4 className={styles.bcso}>
            Oluwarotimi Nursery & Primary School, Akure.
          </h4>
          <h4 className={styles.bcs}>2005-2014</h4>
          <h4 className={styles.bcs}>
            Foundational learning in core subjects.
          </h4>
        </div>
      </div>

      <div className={styles.eighthpage}>
        <h2 className={styles.rc}>Ready to Collaborate?</h2>
        <div className={styles.mik}>
          <h3>
            Interested in collaborating or just want to say hello, Feel free to
            reach out !
          </h3>
        </div>
        <button className={styles.gebtn} onClick={() => navigate("/#contact")}>
          Contact Me
        </button>
      </div>

      <div className={styles.lastpage}>
        <Footer />
        </div>
      
    </div>
  );
};

export default About;
