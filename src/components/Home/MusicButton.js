import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import PlayButton from "./PlayButton";

const MusicButton = () => {
  return (
    <>
      <Container
        fluid
        style={{
          backgroundColor: "grey",
          height: "5rem",
          position: "relative",
        }}
      >
        <Row>
          <Col className="d-flex align-items-center justify-content-center">
            <Button
              className=" btn-primary mt-3"
              style={{
                backgroundColor: "grey",
                border: "1px solid aqua",
                borderRadius: "0px",
                padding: "10px 15px",
                fontSize: "20px",
              }}
            >
              Get Our Latest Album
            </Button>
          </Col>
        </Row>
      </Container>

      <Container
        fluid
        style={{
          backgroundColor: "grey",
          height: "5rem",
          position: "relative",
        }}
      >
        <Row>
          <Col className="d-flex align-items-center justify-content-center">
            <Button
              className=" btn-primary mt-2"
              style={{
                backgroundColor: "grey",
                border: "1px solid aqua",
                fontSize: "20px",
                borderRadius: "50%",
                padding: " 10px 13px 13px 15px",
              }}
            >
              <PlayButton />
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MusicButton;
