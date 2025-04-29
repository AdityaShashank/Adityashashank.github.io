import React from "react";
import { FaPython, FaDatabase, FaCloud, FaTools, FaMicrochip } from 'react-icons/fa'; // Example icons
import { IoIosCode } from 'react-icons/io'; // Example for Ionic, React Native
import { AiFillApi } from 'react-icons/ai'; // For API-related skills
import { Container, Row, Col } from 'react-bootstrap'; // Ensure Bootstrap components are imported

const Skills = () => {
  // Skills data
  const skills = [
    {
      icon: <FaPython size={40} />,
      skillName: "Programming",
      description: "Python, JavaScript, Typescript, Node.js, Ionic, React.js, SQL, React Native"
    },
    {
      icon: <FaDatabase size={40} />,
      skillName: "Data Engineering",
      description: "ETL Pipelines, Data Modeling, Data Governance"
    },
    {
      icon: <FaDatabase size={40} />,
      skillName: "Databases",
      description: "SQL (MySQL, PostgreSQL), NoSQL (MongoDB), DynamoDB, IndexedDB"
    },
    {
      icon: <FaCloud size={40} />,
      skillName: "Cloud & DevOps",
      description: "AWS Services, Azure DevOps, GitHub Actions, Unit Testing (JUnit, Mockito), Jenkins"
    },
    {
      icon: <FaTools size={40} />,
      skillName: "Data Quality & Validation",
      description: "Data Integrity, Schema Design, Performance Optimization"
    },
    {
      icon: <AiFillApi size={40} />,
      skillName: "Web & Microservices Dev",
      description: "Django, RESTful APIs, Event-Driven Architecture, GraphQL, .Net, Responsive Layouts"
    },
    {
      icon: <IoIosCode size={40} />,
      skillName: "Software Engineering Principles",
      description: "Data Structures, Algorithms, Design Patterns, Agile Methodologies, SDLC Tools, UI"
    },
    {
      icon: <FaMicrochip size={40} />,
      skillName: "Other Interests",
      description: "Machine Learning, Secure Programming, Distributed Systems, HCM, AI, Agents"
    }
  ];

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Skills</h2>
            <div className="skills-container">
              {skills.map((skill, index) => (
                <div key={index} className="skill-block">
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-name">{skill.skillName}</div>
                  <div className="skill-description">{skill.description}</div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export {Skills};
