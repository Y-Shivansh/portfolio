import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Portfolio = () => {

  const portfolioItems = [
    {
      id: 1,
      title: 'CourseHub',
      category: 'LMS Platform',
      image: '/projects/CourseHub.png',
      description: 'A scalable full-stack MERN application with OAuth & JWT-based authentication and Gemini AI chatbot, included Razorpay for payments.',
      liveUrl: 'https://coursehub-xi.vercel.app',
      githubUrl: 'https://github.com/Y-Shivansh/CourseHub'
    },
    {
      id: 2,
      title: 'Food Waste Reduction',
      category: 'Social Impact',
      image: '/projects/FoodWaste.png',
      description: 'Freelance MERN application connecting donors and recipients of surplus food.',
      liveUrl: null,
      githubUrl: 'https://github.com/Y-Shivansh/Dinesh_MERN_App'
    },
    {
      id: 3,
      title: 'DroneX',
      category: 'Company Website',
      image: '/projects/DroneX.png',
      description: 'Modern website for a drone club with intuitive user interface.',
      liveUrl: 'https://drone-x.vercel.app',
      githubUrl: null
    },
    {
      id: 4,
      title: 'Unity+',
      category: 'NGO Platform',
      image: '/projects/UnityPlus.png',
      description: 'NGO platform connecting donors and NGOs for collaboration.',
      liveUrl: 'https://elegant-centaur-3707ab.netlify.app',
      githubUrl: null
    },
    {
      id: 5,
      title: 'PayWise',
      category: 'Payment App',
      image: '/projects/PayWise.png',
      description: 'Payment application for money transfers between users.',
      liveUrl: 'https://pay-wise-teal.vercel.app',
      githubUrl: 'https://github.com/Y-Shivansh/PayWise-'
    },
    {
      id: 6,
      title: 'Task Management',
      category: 'Productivity App',
      image: '/projects/TaskManagement.png',
      description: 'Task management application for organizing daily tasks.',
      liveUrl: 'https://op-task-manager.vercel.app',
      githubUrl: 'https://github.com/Y-Shivansh/Task-Management'
    },
  ];

  const slides = [];
  for (let i = 0; i < portfolioItems.length; i += 3) {
    slides.push(portfolioItems.slice(i, i + 3));
  }

  return (
    <section id='portfolio' className="portfolio section">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>My Projects</p>
        </div>

        <div className= {`projects-grid`} data-aos="fade-up" data-aos-delay="200">
          {portfolioItems
            .filter(
              (project) =>
                project.title !== 'Review System'
            )
            .map((project) => (
              <div key={project.id} className={`project-card-new ${project.id === 1 && 'bg-white'}`}>
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