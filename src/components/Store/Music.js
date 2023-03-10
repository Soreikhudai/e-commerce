import "./Music.css";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useContext } from "react";
import { ProductsArr } from "./Data";
import CartContext from "../../Context/cart-context";
import { useNavigate } from "react-router-dom";

const Music = () => {
  const navigate = useNavigate();
  const Data = useContext(CartContext);
  const addToCartHandler = (item) => {
    Data.addItem({ item });
  };
  return (
    <Container>
      <Row className="text-center mb-5 mt-2">
        <h1 style={{ fontFamily: "Metal Mania" }}>Music</h1>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs="0" lg="3" md="3"></Col>

        <Col xs="12" md="6" className="product-grid">
          {ProductsArr.map((item, index) => {
            return (
              <>
                <div className="product" key={index} id={"amount " + item.id}>
                  <h3>{item.title}</h3>
                  <div
                    className="img-container mb-3"
                    onClick={() => navigate(`/store/item?id=${item.id}`)}
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="my-image"
                    />
                  </div>
                  <div className="cart-buttom">
                    <div>
                      <p>${item.price}</p>
                    </div>
                    <div>
                      <Button
                        className="btn btn-primary"
                        onClick={() => addToCartHandler(item)}
                      >
                        ADD TO CART
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </Col>

        <Col xs="0" lg="3" md="3"></Col>
      </Row>
    </Container>
  );
};

export default Music;
