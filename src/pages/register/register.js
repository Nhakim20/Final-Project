import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { register } from '../../services/api';
import ProtectedComponent from '../../layout/protected-component';

const Register = () => {
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")

  const submitRegister = async (e) => {
    e.preventDefault();
    await register(name, address, phoneNumber, password)
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
  }

  return (
    <ProtectedComponent>
    <div>
      <h1>Register</h1>
      <Form onSubmit={submitRegister}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter name" 
            onChange={(e) => setName(e.target.value)}
            required={true} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Address</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter address" 
            onChange={(e) => setAddress(e.target.value)}
            required={true} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter phone number" 
            onChange={(e) => setPhoneNumber(e.target.value)}
            required={true} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Password" 
            onChange={(e) => setPassword(e.target.value)}
            required={true} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
    </ProtectedComponent>
  )
}

export default Register