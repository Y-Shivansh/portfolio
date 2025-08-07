import { FaDownload } from 'react-icons/fa';

const Resume = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Shivansh_Sharma_Resume.pdf';
    link.download = 'Shivansh_Sharma_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section id='resume' className="resume section">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Professional Experience</h2>
            <p>My Work Journey</p>
            <div className="text-center mt-3">
              <button onClick={downloadResume} className="btn btn-primary">
                <FaDownload /> Download Resume
              </button>
            </div>
          </div>

          <div className="timeline">
            <div className="timeline-item" data-aos="fade-up">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>Software Development Intern</h4>
                <h5>August 2025 - Present</h5>
                <p><em>OrangeCat Technologies</em></p>
                <ul>
                  <li>Spearheaded frontend redesign using React and Tailwind CSS v4, improving UI performance and consistency</li>
                  <li>Created a library of 10+ reusable UI components integrated with OAuth</li>
                  <li>Collaborated with design team to ensure consistent UI implementation, reducing frontend handoff friction</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>Web Development Intern</h4>
                <h5>June 2025 - August 2025</h5>
                <p><em>NexisLabs Solutions</em></p>
                <ul>
                  <li>Supported feature delivery in an Agile setup using React.js and Node.js, contributing to faster development cycles</li>
                  <li>Implemented RESTful APIs to streamline data flow</li>
                  <li>Optimized request handling logic, reducing backend response time by nearly 10%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
