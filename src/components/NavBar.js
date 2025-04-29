import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import leetcodeIcon from '../assets/img/leetcode.svg'; 
import githubIcon from '../assets/img/github.svg'; 
import linkedinIcon from '../assets/img/linkedin.svg'; 
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event for changing navbar style
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Router>
      <Navbar expand="md" className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo"/>
             </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active' : ''} onClick={() => setActiveLink('home')}>
                <h5>Home</h5>
              </Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active' : ''} onClick={() => setActiveLink('skills')}>
                <h5>Skills</h5>
              </Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active' : ''} onClick={() => setActiveLink('projects')}>
                <h5>Projects</h5>
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://leetcode.com/u/aditya_shashank_98/" target="_blank" rel="noopener noreferrer"><img src={leetcodeIcon} alt="LeetCode" /></a>
                <a href="https://github.com/AdityaShashank" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="GitHub" /></a>
                <a href="https://www.linkedin.com/in/aditya-shashank" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="LinkedIn" /></a>
              </div>
              <HashLink to="#connect">
                <button>Let’s Connect</button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
