import { FaDownload } from 'react-icons/fa';
import { Experiences } from '../contants/contant';

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
            {Experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4>{exp.designation}</h4>
                  <h5>{exp.timeline}</h5>
                  <p><em>{exp.organisation}</em></p>
                  <div className=" space-y-2">
                    {exp.description.map((desc, idx) => (
                      <p key={idx}>{desc}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Resume;
