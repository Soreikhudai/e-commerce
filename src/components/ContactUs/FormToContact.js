import { Form, Button } from "react-bootstrap";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./FormToContact.css";

const FormToContact = () => {
  const navigate = useNavigate();
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneNumberRef = useRef("");

  const addToFireBase = async (event) => {
    event.preventDefault();
    const details = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      number: phoneNumberRef.current.value,
    };
    try {
      const response = await fetch(
        "https://react-http-project-da8f6-default-rtdb.firebaseio.com/details.json",
        {
          method: "POST",
          body: JSON.stringify(details),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("request failed");
      }
      const data = await response.json();
      navigate("/store");
      console.log(data);
    } catch (error) {
      alert("something went wrong");
      console.error(error);
    }
  };
  return (
    <Form onSubmit={addToFireBase} style={{ minHeight: "70vh" }}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" ref={nameRef} />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email id</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
      </Form.Group>

      <Form.Group controlId="formPhone">
        <Form.Label>Phone number</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Enter phone number"
          ref={phoneNumberRef}
        />
      </Form.Group>

      <Button className="btn-form" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FormToContact;
