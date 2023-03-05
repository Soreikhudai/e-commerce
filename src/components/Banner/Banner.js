import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Banner = () => {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "grey",
        height: "10rem",
        position: "relative",
      }}
    >
      <Row>
        <Col className="d-flex align-items-center justify-content-center">
          <h1
            style={{
              fontSize: "calc(43px + 3vw)",
              color: "white",
              fontWeight: "bolder",
            }}
          >
            The Generics
          </h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
