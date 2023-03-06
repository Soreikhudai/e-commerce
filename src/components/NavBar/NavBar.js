import Container from "react-bootstrap/Container";
import "./NavBar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState, useContext, useEffect } from "react";
import CartContext from "../../Context/cart-context";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const Data = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);
  const [items, setItems] = useState(Data.items);

  useEffect(() => {
    setItems(Data.items);
  }, [Data.items]);

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
              <NavLink
                activeclassname="active"
                className="nav-link-bold  ml-5 mr-5"
                to="/"
                style={{ color: "white", textDecoration: "none" }}
              >
                HOME
              </NavLink>

              <NavLink
                className="nav-link-bold ml-5 mr-5"
                to="/store"
                style={{ color: "white", textDecoration: "none" }}
              >
                STORE
              </NavLink>

              <NavLink
                className="nav-link-bold ml-5 mr-5"
                to="/about"
                style={{ color: "white", textDecoration: "none" }}
              >
                ABOUT
              </NavLink>
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
              {items.length}
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
                          src={item.item.imageUrl}
                          alt={item.item.title}
                          className="my-image"
                        />
                        {item.item.title}
                      </div>

                      <div className="price">${item.item.price}</div>
                      <div
                        style={{
                          display: "flex",
                          alignContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <input
                          type="text"
                          defaultValue={1}
                          className="quantity mr-2"
                        />
                        <Button
                          className="btn-danger"
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
                  <h4>
                    Total $
                    {items.reduce((acc, curr) => acc + curr.item.price, 0)}
                  </h4>
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
