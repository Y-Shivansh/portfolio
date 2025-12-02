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
                  <div className="flex items-center gap-4 mb-2">
                    <img
                      className="h-10 w-30 rounded-md object-cover/contain"
                      src={exp.logo}
                      alt={`${exp.organisation} logo`}
                    />
                    <div>
                      <h4 className="m-0">{exp.designation}</h4>
                      <p className="text-sm text-white/90 m-0">{exp.organisation} • {exp.timeline}</p>
                    </div>
                  </div>
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
