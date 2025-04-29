import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";  // Ensure the image path is correct
import emailjs from 'emailjs-com'; // Import EmailJS
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    try {
      const result = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, // Service ID from EmailJS
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Template ID from EmailJS
        formDetails, // Form data to be sent
        process.env.REACT_APP_EMAILJS_USER_ID // User ID from EmailJS
      );

      setButtonText("Send");
      setFormDetails(formInitialDetails);
      setStatus({ success: true, message: 'Message sent successfully!' });
      console.log(result.text);  // Log the result from EmailJS
    } catch (error) {
      setButtonText("Send");
      setStatus({ success: false, message: 'Something went wrong. Please try again.' });
      console.error(error.text);  // Log the error from EmailJS
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
                  <TrackVisibility>
                    {({ isVisible }) => (
                        // Just display the image without any animation or hover effect
                        <img src={contactImg} alt="Contact Us" />
                    )}      
                  </TrackVisibility>
          </Col>

          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <Form onSubmit={handleSubmit} className="contact-form">
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <Form.Control
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) => onFormUpdate('firstName', e.target.value)}
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <Form.Control
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          onChange={(e) => onFormUpdate('lastName', e.target.value)}
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <Form.Control
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) => onFormUpdate('email', e.target.value)}
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <Form.Control
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) => onFormUpdate('phone', e.target.value)}
                          required
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <Form.Control
                          as="textarea"
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) => onFormUpdate('message', e.target.value)}
                          required
                        />
                        <Button type="submit" className="submit-button">{buttonText}</Button>
                      </Col>
                      {status.message &&
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      }
                    </Row>
                  </Form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
