import React from "react";
import styles from "./experience.module.css";
import Navbar from "../Navbar";
import man from "../../assets/WhatsApp Image 2025-08-11 at 14.52.31_0e7b8b72.jpg";
import ecommerce from "../../assets/ecommerce.jpg";
import dashboard from "../../assets/dashboard.jpg";
import port from "../../assets/portfolino.jpg";
import api from "../../assets/api.jpg";
import pple from "../../assets/pple.jpg";
import open from "../../assets/open.jpg";
import brand from "../../assets/brand.jpg";
import book from "../../assets/book.jpg";
import voice from "../../assets/voice.jpg";
import apparel from "../../assets/apparel.jpg";
import gown from "../../assets/gown.jpg";
import top from "../../assets/top.jpg";
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Footer from "../Footer";

const Experience = () => {
  const navigate = useNavigate();

  const handleExploreServices = () => {
    navigate("/service"); // This will route to the Service page
  };

  const goFaqs = () => {
  navigate("/faqs");
};

  const handleGetInTouch = () => {
  navigate('/#contact');
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
          <button className={styles.expbtn} onClick={handleExploreServices}>
      Explore Services
    </button>
        </div>
        <div className={styles.hori}>
          <img src={man} alt="man" className={styles.man}></img>
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
            build
          </h3>
          <h3>
            scalable and performant web applications using mordern frameworks
            and best
          </h3>
          <h3>pratices. My code is clean, efficient, and well-documented.</h3>
        </div>
        <div className={styles.picto}>
          <div className={styles.commercedesign}>
            <h1 className={styles.jy}>API Integration Platform</h1>
            <img src={api} alt="api" className={styles.imgu}></img>
            <div className={styles.comercewrd}>
              <h3>Buildng a robust backend platform for</h3>
              <h3>seamless API integrations, enabling</h3>
              <h3>efficient data exchange and microservices</h3>
              <h3>architecture.</h3>
            </div>
            <div className={styles.commercelast}>
              <div className={styles.lo}>
                <h3 className={styles.uio}>Node.js</h3>
                <h3 className={styles.uih}>APIs</h3>
              </div>
              <div className={styles.km}>
                <h3 className={styles.plsoljr}>Microservices</h3>
                <h3 className={styles.pl}>PostgreSQL</h3>
              </div>
            </div>
          </div>
          <div className={styles.commercedesign}>
            <h1 className={styles.jy}>Custom CMS Development</h1>
            <img src={dashboard} alt="dashboard" className={styles.imgu}></img>
            <div className={styles.comercewrd}>
              <h3>Developing a tailored content</h3>
              <h3>management system that provides clients</h3>
              <h3>with flexible and intuitive control over their</h3>
              <h3>website content.</h3>
            </div>
            <div className={styles.commercelast}>
              <div className={styles.lo}>
                <h3 className={styles.ui}>React</h3>
                <h3 className={styles.uio}>Next.js</h3>
              </div>
              <div className={styles.km}>
                <h3 className={styles.plsol}>Headless CMS</h3>
                <h3 className={styles.plso}>Firebase</h3>
              </div>
            </div>
          </div>
          <div className={styles.commercedesign}>
            <h1 className={styles.jy}>Real-time Chat Application</h1>
            <img src={port} alt="port" className={styles.imgu}></img>
            <div className={styles.comercewrd}>
              <h3>Implementing a high-performance</h3>
              <h3>real-time chat application with secure</h3>
              <h3>communication channels and responsive</h3>
              <h3>user interface.</h3>
            </div>
            <div className={styles.commercelast}>
              <div className={styles.lo}>
                <h3 className={styles.plsoljr}>Web Sockets</h3>
                <h3 className={styles.plso}>Socket.IO</h3>
              </div>
              <div className={styles.km}>
                <h3 className={styles.plso}>Express.js</h3>
                <h3 className={styles.pls}>TypeScript</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.fourthpage}>
        <h1 className={styles.webo}>Creative Writing & Content Strategy</h1>
        <div className={styles.bnth}>
          <h3>
            I craft compelling narratives and engaging content that resonates
            with target
          </h3>
          <h3>
            audiences. My Expertise spans copywriting for marketing campaigns,
            engaging blog
          </h3>
          <h3>
            posts, and technical documentation, always with a clear voice and
            strategic intent.
          </h3>
        </div>
        <div className={styles.picto}>
          <div className={styles.commercedesign}>
            <h1 className={styles.jy}>Brand Story Campaign</h1>
            <img src={brand} alt="brand" className={styles.imgu}></img>
            <div className={styles.comercewrd}>
              <h3>Crafting a compelling brand narratives and</h3>
              <h3>messaging strategy across multiple</h3>
              <h3>touchpoints to enhance brand identity and</h3>
              <h3>customer loyalty.</h3>
            </div>
            <div className={styles.commercelast}>
              <div className={styles.lo}>
                <h3 className={styles.pl}>Storytelling</h3>
                <h3 className={styles.plsoljr}>Copywriting</h3>
              </div>
              <div className={styles.km}>
                <h3 className={styles.pls}>Marketing</h3>
                <h3 className={styles.pl}>Brand voice</h3>
              </div>
            </div>
          </div>
          <div className={styles.commercedesign}>
            <h1 className={styles.jy}>Tech Blog Series</h1>
            <img src={book} alt="book" className={styles.imgu}></img>
            <div className={styles.comercewrd}>
              <h3>Writing a series of engaging and</h3>
              <h3>informative blog posts on emerging</h3>
              <h3>technlogies, designed to educate and</h3>
              <h3>attract a tech-savvy audience.</h3>
            </div>
            <div className={styles.commercelastg}>
              <div className={styles.lo}>
                <h3 className={styles.pls}>Blogging</h3>
                <h3 className={styles.uih}>SEO</h3>
              </div>
              <div className={styles.km}>
                <h3 className={styles.plsolm}>Technical Writing</h3>
              </div>
              <div className={styles.km}>
                <h3 className={styles.plsolm}>Content Strategy</h3>
              </div>
            </div>
          </div>
          <div className={styles.commercedesign}>
            <h1 className={styles.jy}>Product Lunch Copy</h1>
            <img src={voice} alt="voice" className={styles.imgu}></img>
            <div className={styles.comercewrd}>
              <h3>Developing persuasive and concise copy</h3>
              <h3>for product launches, including website</h3>
              <h3>content, email campaigns,and press</h3>
              <h3>releases.</h3>
            </div>
            <div className={styles.commercelast}>
              <div className={styles.lo}>
                <h3 className={styles.pls}>Sales Copy</h3>
                <h3 className={styles.uih}>PR</h3>
              </div>
              <div className={styles.km}>
                <h3 className={styles.plsolm}>Product Marketing</h3>                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.fourthpage}>
        <h1 className={styles.webo}>Fashion Design & Concept Development</h1>
        <div className={styles.bnth}>
          <h3>
            My passion for fashion translastes into innovative designs, detailed
            technical
          </h3>
          <h3>
            sketches, and cohesive collection development. I focus on wearable
            art, sustainable
          </h3>
          <h3>pratices, and designs that blend with timeless elegance.</h3>
        </div>
        <div className={styles.picto}>
          <div className={styles.commercedesign}>
            <h1 className={styles.jy}>Sustainable Apparel Line</h1>
            <img src={apparel} alt="apparel" className={styles.imgu}></img>
            <div className={styles.comercewrd}>
              <h3>Designing an eco-conscious apparel</h3>
              <h3>collection using sustainable materials and</h3>
              <h3>ethical production methods, emphasizing</h3>
              <h3>minimalist aesthetic.</h3>
            </div>
            <div className={styles.commercelast}>
              <div className={styles.lo}>
                <h3 className={styles.plsoljr}>Sustainability</h3>
                <h3 className={styles.pls}>Sketching</h3>
              </div>
              <div className={styles.km}>
                <h3 className={styles.plsol}>Ethical Fashion</h3>
                <h3 className={styles.ui}>Textile</h3>
              </div>
            </div>
          </div>
          <div className={styles.commercedesign}>
            <h1 className={styles.jy}>Coutre Evening Wear Collection</h1>
            <img src={gown} alt="gown" className={styles.imgu}></img>
            <div className={styles.comercewrd}>
              <h3>Creating an exclusive collection of</h3>
              <h3>high-end evening wear, featuring intricate</h3>
              <h3>detailing, luxurious fabrics, and bespoke</h3>
              <h3>craftsmanship .</h3>
            </div>
            <div className={styles.commercelast}>
              <div className={styles.lo}>
                <h3 className={styles.plsoljr}>Haute Coutre</h3>
                 <h3 className={styles.plsoljr}>Embroidery</h3>        
              </div>
              <div className={styles.km}>
                <h3 className={styles.plsol}>Pattern Making</h3>
                <h3 className={styles.uio}>Draping</h3>
              </div>
            </div>
          </div>
          <div className={styles.commercedesign}>
            <h1 className={styles.jy}>Active Wear Prototype</h1>
            <img src={top} alt="top" className={styles.imgu}></img>
            <div className={styles.comercewrd}>
              <h3>Developing a functional and ergonomic</h3>
              <h3>activewear prototype, focusing on</h3>
              <h3>innovative materials and design for</h3>
              <h3>enhanced performance and comfort.</h3>
            </div>
            <div className={styles.commercelast}>
              <div className={styles.lo}>
                <h3 className={styles.pl}>Sportswear</h3>
                 <h3 className={styles.plsoljr}>Prototyping</h3>
              </div>
              <div className={styles.km}>
                <h3 className={styles.plsoljr}>Fit & Comfort</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.seventhpage}>
        <h2 className={styles.rc}>Get in Touch</h2>
        <div className={styles.mik}>
          <h3>Whether you need a new website, engaging content or innovative</h3>
          <h3>design, I'm here to bring your vision to life.Let's create something</h3>
          <h3>extraordinary together.</h3>
        </div>
        <button className={styles.gebtn} onClick={handleGetInTouch}>
  Get in Touch
</button>
      </div>

      <div className={styles.lastpage}>
        <Footer />
        </div>
    </div>
  );
};

export default Experience;
