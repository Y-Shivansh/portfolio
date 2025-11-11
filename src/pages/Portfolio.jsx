import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { portfolioItems } from '../contants/contant';

const Portfolio = () => {


  const slides = [];
  for (let i = 0; i < portfolioItems.length; i += 3) {
    slides.push(portfolioItems.slice(i, i + 3));
  }

  return (
    <section id='portfolio' className="portfolio section">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Major Projects</p>
        </div>

        <div className={`projects-grid`} data-aos="fade-up" data-aos-delay="200">
          {portfolioItems
            .filter(
              (project) =>
                project.title !== 'Review System'
            )
            .map((project) => (
              <div key={project.id} className={`project-card-new`}>
                <div className="project-image-new">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content-new">
                  <h4>{project.title}</h4>
                  <p className="project-category-new">{project.category}</p>
                  <p className="project-description-new">{project.description}</p>
                  <div className="project-links-new flex justify-between">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-link"
                      >
                        <FaGithub /> GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-link"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>

  );
};

export default Portfolio; 