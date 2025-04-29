import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const StatsSection = () => {
  return (
    <section className="stats-section" id="stats">
      <Container>
        <Row className="text-center">
          <Col sm={4}>
            <div className="stat-card">
              <h3>10+</h3>
              <p>Projects Completed</p>
              <p className="client-name">Fabin Tech</p>
            </div>
          </Col>
          <Col sm={4}>
            <div className="stat-card">
              <h3>100+</h3>
              <p>Happy Clients</p>
              <p className="client-name">Hischip Technologies</p>
            </div>
          </Col>
          <Col sm={4}>
            <div className="stat-card">
              <h3>20+</h3>
              <p>Reviews</p>
              <p className="client-name">UT Arlington</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default StatsSection;
