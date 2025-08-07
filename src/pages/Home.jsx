import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowDown, FaDownload } from 'react-icons/fa';
import { ReactTyped } from 'react-typed';
import TechStack from '../components/TechStack';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import Services from './Services';
import Certificates from './Certificates';
import About from './About';

const Home = () => {
  const navigate = useNavigate();
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'Shivansh_Sharma_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero section dark-background">
        <div className="hero-background">
          <img
            src="https://via.placeholder.com/1920x1080/040b14/149ddd?text=Hero+Background"
            alt="Hero Background"
          />
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2>Shivansh Sharma</h2>
            <p>I'm a <span className="typed">
              <ReactTyped
                strings={[
                  "Full Stack Developer",
                  "AI-Driven App Innovator",
                  "Frontend-First Problem Solver",
                  "Scalable System Architect",
                  "Passionate Tech Explorer"
                ]}
                typeSpeed={50}
                backSpeed={30}
                backDelay={2000}
                loop
              />
            </span></p>
            <div className="hero-buttons">
              <a href="#about" className="btn btn-primary">
                About Me
              </a>
              <button onClick={downloadResume} className="btn btn-outline-primary">
                <FaDownload /> Download Resume
              </button>
              <a href="#contact" className="btn btn-outline-primary" onClick={() => scrollToSection('contact')}>
                Contact Me
              </a>
            </div>
          </div>
        </div>

        <div className="scroll-down">
          <button onClick={() => scrollToSection('about')} aria-label="Scroll down">
            <FaArrowDown />
          </button>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Tech Stack Section */}
      <TechStack />

      {/* Resume Section */}
      <Resume />

      {/* Portfolio Section */}
      <Portfolio />

      {/* Certificates */}
      <Certificates />


      {/* Services Section */}
      <Services />

      {/* Contact Section */}
      <Contact />
    </>
  );
};

export default Home; 