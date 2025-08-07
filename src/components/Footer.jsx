import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="">
          <div className="footer-info flex justify-between items-center">
            <div className='flex gap-3 items-start'>
              <img className='object-cover rounded-full w-20' src="./favicon.png" alt="" />
              <div className=' flex flex-col text-start'>
                <h3>Shivansh Sharma</h3>
                <p>Full Stack Developer</p>
              </div>
            </div>
            <div className="social-links flex justify-center items-center">
              <a href="https://linkedin.com/in/shivansh-sharma-73270724b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={42} />
              </a>
              <a className='flex justify-center items-center' href="https://github.com/Y-Shivansh" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub size={42} />
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} Shivansh Sharma. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 