import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaBars } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    closeMenu();
  }, [location]);

  const navItems = [
    { path: '#hero', label: 'Home' },
    { path: '#about', label: 'About' },
    { path: '#resume', label: 'Resume' },
    { path: '#portfolio', label: 'Portfolio' },
    { path: '#services', label: 'Services' },
    { path: '#certificates', label: 'Certificates' },
    { path: '#contact', label: 'Contact' }
  ];

  return (
    <header id="header" className="header-top">
      <div className="container">
        <div className="header-content">
          <a href="#" className="logo">
            <h1 className=''>Shivansh Sharma</h1>
          </a>

          <button 
            className="header-toggle" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <FaBars />
          </button>

          <nav className={`navmenu ${isMenuOpen ? 'show' : ''} `}>
            <ul>
              {navItems.map((item) => (
                <li key={item.path}>
                  <a 
                    href={item.path} 
                    className={location.pathname === item.path ? 'active' : ''}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="social-links">
            <a href="https://linkedin.com/in/shivansh-sharma-73270724b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Y-Shivansh" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 