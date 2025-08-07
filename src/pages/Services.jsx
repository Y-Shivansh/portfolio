import React from 'react';
import { 
  FaCode, 
  FaPalette, 
  FaServer, 
  FaDatabase, 
  FaRobot, 
  FaCloud 
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: 'Web Development',
      description: 'Full-stack web applications using React.js, Node.js, and modern technologies with responsive design and optimal performance.'
    },
    {
      icon: <FaPalette />,
      title: 'UI/UX Design',
      description: 'User-centered design with modern interfaces, seamless user experiences, and intuitive navigation patterns.'
    },
    {
      icon: <FaServer />,
      title: 'API Development',
      description: 'RESTful APIs and microservices architecture for scalable applications with proper authentication and security.'
    },
    {
      icon: <FaDatabase />,
      title: 'Database Design',
      description: 'Database architecture and design using MongoDB, PostgreSQL with efficient data modeling and optimization.'
    },
    {
      icon: <FaRobot />,
      title: 'AI Integration',
      description: 'Integration of AI services like Google Gemini API and OpenAI API for chatbots and intelligent features in applications.'
    },
    {
      icon: <FaCloud />,
      title: 'DevOps & Deployment',
      description: 'Docker containerization, and cloud deployment strategies for production applications.'
    }
  ];

  return (
    <>
      <section id='services' className="services section">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Services</h2>
            <p>My Services</p>
          </div>

          <div className="row mb-3">
            {services.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6 d-flex align-items-stretch mb-2" data-aos="zoom-in" data-aos-delay={100 * (index + 1)}>
                <div className="icon-box mb-2 p-6 bg-gray-800 shadow-md rounded-lg hover:shadow-lg transition">
                  <div className="icon text-4xl text-blue-500 mb-3">{service.icon}</div>
                  <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services; 