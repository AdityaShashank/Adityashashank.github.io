import { Container, Row, Col } from "react-bootstrap";
import leetcodeIcon from '../assets/img/leetcode.svg'; 
import githubIcon from '../assets/img/github.svg'; 
import linkedinIcon from '../assets/img/linkedin.svg'; 

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* Removed the logo column */}
          <Col size={6} className="text-center">
            <div className="social-icon">
              <a href="https://leetcode.com/u/aditya_shashank_98/" target="_blank" rel="noopener noreferrer">
                <img src={leetcodeIcon} alt="LeetCode" />
              </a>
              <a href="https://github.com/AdityaShashank" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/aditya-shashank" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
            </div>
            <p className="copyright-text">Copyright 2025 Aditya Shashank Chinta. All Rights Reserved. Designed and Developed by Aditya Shashank Chinta</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
