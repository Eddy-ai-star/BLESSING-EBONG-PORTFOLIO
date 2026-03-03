import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `nav-link${isActive ? ' nav-link--active' : ''}`;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          BFE<span className="logo-dot">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="nav-links desktop-only">
          <NavLink to="/" end className={navLinkClass}>Home</NavLink>
          <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
        </div>

        <div className="nav-socials desktop-only">
          <a
            href="https://www.linkedin.com/in/blessing-ebong-692b52263?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            title="LinkedIn Profile"
          >
            <Linkedin size={20} />
          </a>
          <a href="mailto:ebongb04@gmail.com" className="social-icon" title="Send Email">
            <Mail size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <NavLink to="/" end className="mobile-link" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/projects" className="mobile-link" onClick={() => setIsOpen(false)}>Projects</NavLink>
          <NavLink to="/about" className="mobile-link" onClick={() => setIsOpen(false)}>About</NavLink>
          <div className="mobile-socials">
            <a
              href="https://www.linkedin.com/in/blessing-ebong-692b52263?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a href="mailto:ebongb04@gmail.com" title="Send Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
