import React from 'react';

const About = () => {
  return (
    <>
      <section id='about' className="about section">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>About</h2>
            <p>Learn more about me</p>
          </div>

          <div className="row flex justify-center items-center">
            <div className="col-lg-4" data-aos="fade-right">
              <img 
                src="/profile.jpg" 
                className="img-fluid border rounded-lg" 
                alt="Shivansh Sharma" 
              />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3 className='text-3xl'>Full Stack Developer</h3>
              <p className="text-gray-400 text-sm">
                Results-driven Full Stack Developer with expertise in Microservices architecture, Agile methodologies, and AI Integrations. 
                Adept at designing RESTful APIs and building dynamic React.js interfaces, ensuring secure authentication and payment flows.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <a href='tel:6398799630'>+91-6398799630</a></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <a href='mailto:sharma.shivansh1305@gmail.com'>sharma.shivansh1305@gmail.com</a></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Current Location:</strong> <span>Ghaziabad, India</span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>B.Tech, Infotmation Technology</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span className='text-green-500'>Available</span></li>
                  </ul>
                </div>
              </div>
              <p className='text-gray-500 text-sm'>
                2+ years of experience developing scalable applications with proficiency in Node.js, React.js, MongoDB, 
                Google Gemini API, OAuth, JWT, and Docker. Passionate about creating innovative solutions and 
                contributing to meaningful projects that make a difference.
              </p>
              <p className='text-gray-500 text-sm'>
                I specialize in building modern web applications with a focus on user experience, performance, and scalability. 
                My expertise includes frontend development with React.js, backend development with Node.js and Express.js, 
                database design with MongoDB and PostgreSQL, and integration of third-party services like payment gateways and AI APIs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About; 