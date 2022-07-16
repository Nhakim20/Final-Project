import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react"
import {useDispatch} from "react-redux";
import { addItem, delItem } from "../../redux/action/index";

const FigureProduct = (props) => {
  console.log(props);

  const [cartBtn, setCartBtn] = useState("Add to Cart")

  const dispatch = useDispatch();

  const handleCart = (product) => {
    if (cartBtn === "Add to Cart") {
      dispatch(addItem(product));
      setCartBtn("Remove from Cart");
  }else {
    dispatch(delItem(product));
    setCartBtn("Add to Cart");
  }
}
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="col-md-6">
              <img
                src={props.dataProduct.image}
                alt={props.dataProduct.name}
                height="400px"
                width="400px"
              ></img>
            </div>
          </Col>
          <Col>
            <div>
              <h4 className="text-uppercase text-black-50">
                {props.dataProduct.category}
              </h4>
              <h1 className="display-5">{props.dataProduct.name}</h1>
              <h5 className="my-4">
                Available Stock :{props.dataProduct.quantity}
              </h5>
              <h3 className="display-6 fw-bold my-4">
                Rp {props.dataProduct.price}{" "}
              </h3>
              <p className="lead">{props.dataProduct.description}</p>
              <Button 
              onClick={() => handleCart(props)}
              variant="outline-dark" 
              className="px-4 py-2"
              >
                {cartBtn}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FigureProduct;
