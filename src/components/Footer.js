import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/gmail.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            Prasanna V, Nice to meet you
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon mr-50">
              <a href="https://www.linkedin.com/in/prasanna-rajendra/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="mailto:prasannavadk@gmail.com">
                <img src={navIcon2} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
