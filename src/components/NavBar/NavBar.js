import Container from "react-bootstrap/Container";
import "./NavBar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState, useContext, useEffect } from "react";
import CartContext from "../../Context/cart-context";
import { NavLink, useNavigate } from "react-router-dom";
import { getDatabase, ref, onChildAdded } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseApp } from "../../firebase";
import CartOperation from "../Store/CartOperation";

let dataArray = [];
const NavBar = () => {
  const { AddDelete } = CartOperation();
  const auth = getAuth(firebaseApp);
  const database = getDatabase();
  const Data = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getCartItems = async () => {
      return onAuthStateChanged(auth, async (user) => {
        if (user) {
          dataArray = [];
          onChildAdded(
            ref(
              database,
              `cart/${user.email.replace("@", "").replace(".", "")}`
            ),
            (snapshot) => {
              const data = snapshot.val();
              dataArray.push({ id: snapshot.key, ...data });
              // Do something with the data
              setItems(dataArray);
            }
          );
        }
      });
    };
    getCartItems();
  }, [Data.items, auth, database]);

  const showCartHandler = () => {
    setShowCart(true);
  };
  const closeCartHandler = () => {
    setShowCart(false);
  };
  const removeHandler = async (index) => {
    const newItems = items.filter((item, i) => i !== index);
    setItems(newItems);
    await AddDelete(index, "remove");
  };

  const logoutHandler = () => {
    Data.logout(null);
    navigate("/auth");
  };

  const purchaseHandler = () => {
    alert("item purchase succesfull");
  };

  return (
    <>
      <Navbar
        bg="dark"
        expand="lg"
        variant="dark"
        style={{
          borderBottom: "2px solid white",
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1,
        }}
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
              {!Data.isLoggedin && (
                <NavLink
                  className="nav-link-bold ml-5 mr-5"
                  to="/auth"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  LOG IN
                </NavLink>
              )}
              {Data.isLoggedin && (
                <NavLink
                  className="nav-link-bold ml-5 mr-5"
                  to="/contactus"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  CONTACT US
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>

          <div className="corner-align">
            {Data.isLoggedin && (
              <Button className="btn btn-danger" onClick={logoutHandler}>
                Logout
              </Button>
            )}
            {Data.isLoggedin && (
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
            )}
            {Data.isLoggedin && (
              <span className="ml-5" style={{ color: "aqua" }}>
                {items.length}
              </span>
            )}

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
                          onClick={() => removeHandler(item)}
                        >
                          REMOVE
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  className="btn-success"
                  onClick={purchaseHandler}
                >
                  Purchase
                </Button>
                <Button variant="secondary" onClick={closeCartHandler}>
                  Close
                </Button>
                <div>
                  <h4>
                    Total ${items.reduce((acc, curr) => acc + curr.price, 0)}
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
