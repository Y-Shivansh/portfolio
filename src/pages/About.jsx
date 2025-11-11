import profile from '../assets/images/Profile.jpg'

const About = () => {
  return (
    <>
      <section id='about' className="about section">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>About</h2>
          </div>

          <div className="row flex justify-center items-center">
            <div className="col-lg-4" data-aos="fade-right">
              <img
                src={profile}
                className="img-fluid border rounded-lg"
                alt="Shivansh Sharma"
              />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              {/* <h3 className='text-3xl'>Full Stack Developer</h3> */}
              <p className="text-gray-400 text-lg text-center">
                I design APIs, ship React apps, and occasionally{" "}
                <span className="text-yellow-600 ">
                  drop dad jokes
                </span>{" "}
                to remind humans we're still here.
              </p>


              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li className='px-2'><strong>Phone:</strong> <a href='tel:6398799630'>+91-6398799630</a></li>
                    <li className='px-2'> <strong>Email:</strong> <a href='mailto:sharma.shivansh1305@gmail.com'>sharma.shivansh1305@gmail.com</a></li>
                    {/* <li className='px-2'> <strong>Current Location:</strong> <span>Ghaziabad, India</span></li> */}
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li className='px-2'> <strong>Degree:</strong> <span>B.Tech, Information Technology</span></li>
                    <li className='px-2'> <strong>Freelance:</strong> <span className='text-green-500'>Available</span></li>
                  </ul>
                </div>
              </div>
              <p className='text-gray-500 text-md'>
                2+ years of experience building scalable web apps with Node.js, React.js, MongoDB,
                and Docker. Skilled in API design, authentication, and AI integrations like Google Gemini.
              </p>
              <p className='text-gray-500 text-md'>
                I focus on creating performant, user-friendly applications with expertise across frontend,
                backend, databases, and third-party integrations,
                <span className="text-yellow-600 m-2">basically everywhere bugs like to hide.</span>
              </p>


            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About; 