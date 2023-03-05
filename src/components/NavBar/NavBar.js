import Container from "react-bootstrap/Container";
import "./NavBar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { cartElements } from "./CartData";

const NavBar = () => {
  const [showCart, setShowCart] = useState(false);
  const [items, setItems] = useState(cartElements);

  const showCartHandler = () => {
    setShowCart(true);
  };
  const closeCartHandler = () => {
    setShowCart(false);
  };
  const removeHandler = (index) => {
    const newItems = items.filter((item, i) => i !== index);
    setItems(newItems);
  };

  return (
    <>
      <Navbar
        bg="dark"
        expand="lg"
        variant="dark"
        style={{ borderBottom: "2px solid white" }}
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-3" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto mx-auto">
              <Nav.Link
                className="nav-link-bold  ml-5 mr-5"
                href="#home"
                style={{ color: "white" }}
              >
                HOME
              </Nav.Link>

              <Nav.Link
                className="nav-link-bold ml-5 mr-5"
                href="#store"
                style={{ color: "white" }}
              >
                STORE
              </Nav.Link>

              <Nav.Link
                className="nav-link-bold ml-5 mr-5"
                href="#about"
                style={{ color: "white" }}
              >
                ABOUT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <div>
            <Button
              onClick={showCartHandler}
              variant="dark"
              style={{
                border: "2px solid aqua",
                padding: "2px 17px 5px 17px",
                marginRight: "-30px",
                borderRadius: "10px",
              }}
            >
              cart
            </Button>
            <span className="ml-5" style={{ color: "aqua" }}>
              {0}
            </span>

            <Modal
              show={showCart} // check true or false
              onHide={closeCartHandler}
              backdrop="static"
              keyboard={true}
            >
              <Modal.Header closeButton>
                <Modal.Title>CART</Modal.Title>
              </Modal.Header>
              <div className="description">
                <div>
                  <h4>ITEM</h4>
                </div>
                <div>
                  <h4>PRICE</h4>
                </div>
                <div>
                  <h4>QUANTITY</h4>
                </div>
              </div>
              <Modal.Body>
                {items.map((item, index) => {
                  return (
                    <div className="cart" key={index}>
                      <div>
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="my-image"
                        />
                        {item.title}
                      </div>

                      <div className="price">${item.price}</div>
                      <div>
                        <div className="quantity">{item.quantity}</div>
                        <Button
                          className="btn-danger mt-1"
                          onClick={() => removeHandler(index)}
                        >
                          REMOVE
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" className="btn-success">
                  Purchase
                </Button>
                <Button variant="secondary" onClick={closeCartHandler}>
                  Close
                </Button>
                <div>
                  <h4>Total ${34.67}</h4>
                </div>
              </Modal.Footer>
            </Modal>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
