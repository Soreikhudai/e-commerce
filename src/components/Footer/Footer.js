import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container
        fluid
        style={{
          backgroundColor: "aqua",
          height: "7rem",
          position: "relative",
        }}
      >
        <Row>
          <Col
            className="d-flex align-items-center justify-content-center"
            style={{ top: "20px", left: "-300px" }}
          >
            <h1
              style={{
                fontSize: "calc(20px + 2vw)",
                color: "white",
                fontWeight: "bolder",
              }}
            >
              The Generics
            </h1>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
