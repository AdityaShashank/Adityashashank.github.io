import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.jpg";
import projImg6 from "../assets/img/project-img6.jpg";
import projImg7 from "../assets/img/project-img7.jpg";
import projImg8 from "../assets/img/project-img8.jpg";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  // Full Stack Projects
  const projectsFullStack = [
    {
      title: "Customer Rating System",
      description: "Full Stack - React, Node.js, Express, MongoDB",
      imgUrl: projImg1, // Imported image
      link: "https://link-to-project1.com",  // Replace with actual project URL
    },
    {
      title: "MeetWise",
      description: "Full Stack - React, Node.js, Express, MongoDB",
      imgUrl: projImg2, // Imported image
      link: "https://devpost.com/software/teamwise?ref_content=user-portfolio&ref_feature=in_progress",  // Replace with actual project URL
    },
  ];

  // AI / Data Science Projects
  const projectsAI = [
    {
      title: "ArtifactNet (DeepFake Image Identification)",
      description: "Deep Learning, CNN, TensorFlow, Keras, timm, PyTorch, OpenCV, pillow",
      imgUrl: projImg3,  // Imported image
      link: "https://devpost.com/software/artifactnet?ref_content=user-portfolio&ref_feature=in_progress",
    },
    {
      title: "Creation of AI Agents",
      description: "AI, Reinforcement Learning, JSON agents, Python",
      imgUrl: projImg4,  // Imported image
      link: "https://huggingface.co/Aditya57", // Replace with actual project URL
    },
    {
      title: "EDA on Crime Data Set",
      description: "Python, Pandas, Matplotlib, Seaborn, LSTMs for Time Series",
      imgUrl: projImg5,  // Imported image
      link: "https://devpost.com/software/forecasting-crime-trends-across-india?ref_content=user-portfolio&ref_feature=in_progress",
    },
    {
      title: "Music Generation using Deep Learning",
      description: "LSTM, Neural Networks, Python, Keras",
      imgUrl: projImg6,  // Imported image
      link: "https://github.com/AdityaShashank/Music-Generation-using-deep-learning--Major-Project",  // Replace with actual project URL
    },
    {
      title: "Stock Analysis Prediction (Ending and Opening Rates)",
      description: "Time Series, LSTM, Python",
      imgUrl: projImg7,  // Imported image
      link: "https://link-to-ai-project5.com", // Replace with actual project URL
    },
  ];

  // Computer Vision Projects
  const projectsCV = [
    {
      title: "Motion Tracker and Alert (OpenCV)",
      description: "Computer Vision, OpenCV, Python",
      imgUrl: projImg8,  // Imported image
      link: "https://link-to-cv-project.com", // Replace with actual project URL
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={6}>
            <h2>Projects</h2>
            <Tab.Container id="projects-tabs" defaultActiveKey="fullstack">
              <Nav variant="pills" className="mb-5 justify-content-center align-items-center">
                <Nav.Item>
                  <Nav.Link eventKey="fullstack">Full Stack</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="ai">AI / Data Science</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="cv">Computer Vision</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="fullstack">
                  <Row>
                    {projectsFullStack.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="ai">
                  <Row>
                    {projectsAI.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="cv">
                  <Row>
                    {projectsCV.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>

    </section>
  );
};