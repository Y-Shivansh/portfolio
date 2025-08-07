import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear success message after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <section id='contact' className="contact section">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Contact</h2>
            <p>Get In Touch</p>
          </div>

          <div className="flex justify-center">
            <div className="col-lg-8 mx-auto">
              <div className="contact-info-grid">
                <div className="contact-info-item" data-aos="fade-up" data-aos-delay="100">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-details">
                    <h4>Location</h4>
                    <p>Ghaziabad, Uttar Pradesh, India</p>
                  </div>
                </div>

                <div className="contact-info-item" data-aos="fade-up" data-aos-delay="200">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <a href='mailto:sharma.shivansh1305@gmail.com' 
                  className="contact-details">
                    <h4>Email</h4>
                    <p>sharma.shivansh1305@gmail.com</p>
                  </a>
                </div>

                <div className="contact-info-item" data-aos="fade-up" data-aos-delay="300">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <a href='tel:6398799630' 
                  className="contact-details">
                    <h4>Phone</h4>
                    <p>(+91) 6398799630</p>
                  </a>
                </div>

                <div className="contact-info-item" data-aos="fade-up" data-aos-delay="400">
                  <div className="contact-icon">
                    <FaLinkedin />
                  </div>
                  <div className="contact-details">
                    <h4>Social Profiles</h4>
                    <div className="social-links">
                      <a href="https://linkedin.com/in/shivansh-sharma-73270724b" target="_blank" rel="noopener noreferrer" className="linkedin">
                        <FaLinkedin />
                      </a>
                      <a href="https://github.com/Y-Shivansh" target="_blank" rel="noopener noreferrer" className="github">
                        <FaGithub />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-form-container" data-aos="fade-up" data-aos-delay="500">
                <h3>Send Message</h3>
                
                {submitStatus === 'success' && (
                  <div className="alert alert-success">
                    <i className="bi bi-check-circle"></i>
                    Your message has been sent successfully! I'll get back to you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input 
                          type="text" 
                          name="name" 
                          className="form-control" 
                          placeholder="Your Name" 
                          value={formData.name}
                          onChange={handleChange}
                          required 
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input 
                          type="email" 
                          className="form-control" 
                          name="email" 
                          placeholder="Your Email" 
                          value={formData.email}
                          onChange={handleChange}
                          required 
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <input 
                      type="text" 
                      className="form-control" 
                      name="subject" 
                      placeholder="Subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <textarea 
                      className="form-control" 
                      name="message" 
                      rows="6" 
                      placeholder="Your Message" 
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="form-submit">
                    <button 
                      type="submit" 
                      className="btn btn-primary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="spinner"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane /> Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact; 