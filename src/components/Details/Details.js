import React, { useContext, useEffect, useMemo, useState } from "react";
import { Button, Toast, ToastContainer } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { ProductsArr } from "../Store/Data";
import CartContext from "../../Context/cart-context";
import "./Details.css";
const Details = () => {
  const Data = useContext(CartContext);
  const [show, setShow] = useState(false);
  const [itemID, setItemID] = useState("");
  const location = useLocation();

  const searchParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );

  useEffect(() => {
    const id = searchParams.has("id") ? searchParams.get("id") : "";
    setItemID(id);
    return () => {};
  }, [searchParams]);

  const addToCartHandler = (item) => {
    Data.addItem({ item });
  };
  const buyNowHandler = () => {
    setShow(true);
  };
  return (
    <div className="product-details">
      <ToastContainer position="top-end" className="p-3">
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">{itemID}</strong>
          </Toast.Header>
          <Toast.Body>Item Purchased Successfully!</Toast.Body>
        </Toast>
      </ToastContainer>
      <div className="products m-4">
        {ProductsArr.filter((id) => id.id === itemID).map((item) => {
          return (
            <div className="product_container">
              <div>
                <img src={item.imageUrl} alt={item.title} />
                <div className="mt-3 buttons">
                  <Button
                    className="btn btn-warning"
                    onClick={() => addToCartHandler(item)}
                  >
                    Add to Cart
                  </Button>
                  <Button className="btn" onClick={buyNowHandler}>
                    Buy Now
                  </Button>
                </div>
              </div>
              <div className="ml-3">
                <h4>Title: {item.title}</h4>
                <p>{item.description}</p>
                <p>Price: ${item.price}</p>
                <div className="reviews mt-5">
                  <h3>Customer Reviews</h3>
                  <div className="review-list">
                    <div className="review">
                      <h4>
                        John Doe
                        <span className="star">
                          &#9734;&#9734;&#9734;&#9734;&#9734;
                        </span>
                      </h4>

                      <p className="comments">This is a great product!</p>
                    </div>
                    <div className="review">
                      <h4>
                        Jane Smith{" "}
                        <span className="star">
                          &#9734;&#9734;&#9734;&#9734;
                        </span>
                      </h4>

                      <p className="comments">I love this product!</p>
                    </div>
                    <div className="review">
                      <h4>
                        Bob Johnson{" "}
                        <span className="star">
                          &#9734;&#9734;&#9734;&#9734;
                        </span>
                      </h4>
                      <p className="comments">
                        This product exceeded my expectations!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Details;
