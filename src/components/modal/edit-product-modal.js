import React, { useState, useEffect } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { updateProduct } from '../../services/api'

const EditModalProduct = (props) => {
  const { showEdit, handleCloseEdit, setRefresh, refresh, editDataProduct } = props
  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [description, setDescription] = useState("")


  const editProduct = async (e) => {
      e.preventDefault();
    await updateProduct(editDataProduct.id, name, quantity, category, price, imageUrl, description)
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
    handleCloseEdit();
    setRefresh(!refresh);
  }

  useEffect(() => {
        setName(editDataProduct.name)
        setQuantity(editDataProduct.quantity)
        setCategory(editDataProduct.category)
        setPrice(editDataProduct.price)
        setImageUrl(editDataProduct.image)
        setDescription(editDataProduct.description)
    }, [editDataProduct.id])
  

  return (
    <Modal show={showEdit} onHide={handleCloseEdit}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={editProduct}>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlInput1">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="input product name..."
              autoFocus
              required
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlInput1">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              type="number"
              placeholder="input product quantity..."
              autoFocus
              required
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlInput1">
            <Form.Label>Category</Form.Label>
            <Form.Control
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="input product category..."
              autoFocus
              required
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlInput1">
            <Form.Label>Price</Form.Label>
            <Form.Control
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              placeholder="input product price..."
              autoFocus
              required
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlInput1">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              type="text"
              placeholder="input product image url..."
              autoFocus
              required
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Description</Form.Label>
            <Form.Control
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              as="textarea"
              rows={3}
              placeholder="input product description..." />
          </Form.Group>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEdit}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>

    </Modal>
  )
}

export default EditModalProduct