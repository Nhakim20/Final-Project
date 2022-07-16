import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { addProduct } from "../../services/api";

const AddModalProduct = (props) => {
  const { show, handleClose, setRefresh, refresh } = props;
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [deskription, setDescription] = useState("");

  const addNewProduct = async (e) => {
    e.preventDefault();
    await addProduct(name, quantity, category, price, imageUrl, deskription)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    handleClose();
    setRefresh(!refresh);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={addNewProduct}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Product Name</Form.Label>
            <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="input product name..." autoFocus required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Quantity</Form.Label>
            <Form.Control value={quantity} onChange={(e) => setQuantity(e.target.value)} type="number" placeholder="input product quantity..." autoFocus required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Category</Form.Label>
            <Form.Control value={category} onChange={(e) => setCategory(e.target.value)} type="text" placeholder="input product category..." autoFocus required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Price</Form.Label>
            <Form.Control value={price} onChange={(e) => setPrice(e.target.value)} type="number" placeholder="input product price..." autoFocus required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Image URL</Form.Label>
            <Form.Control value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} type="text" placeholder="input product image url..." autoFocus required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control value={deskription} onChange={(e) => setDescription(e.target.value)} as="textarea" rows={3} placeholder="input product description..." />
          </Form.Group>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddModalProduct;
