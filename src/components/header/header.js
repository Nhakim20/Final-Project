import React, { useState,useEffect,  useContext } from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../assets/styles/index.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { useSelector } from "react-redux";
import { DataContext } from '../../context/context';

const Header = () => {
  const isLogin = Cookies.get("token");
  const navigate = useNavigate();
  const [value, setValue] = useState([])
  const state = useSelector((state) => state.addItem)
  const search = useContext(DataContext)
  const { setDataSearch } = search

  const handleSearch = async (e) => {
    e.preventDefault();
    await axios.get(`http://localhost:4000/api/products/search/${value}`)
      .then((response) => {
        setDataSearch(response.data.data)
        setValue("")
        console.log(response.data.data)
      })
      .catch((err) => console.log(err));
   if (search = null ) {
    navigate("/search")
   } else {  
  navigate("/search")
   }
    }

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand className="fw-bold fs-4 py-3">La Collection</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: "100px", fontSize: "18px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            {isLogin ? (
              <>
                <Nav.Link as={Link} to="/dashboard-admin" className="dashboard">
                  Dasboard Admin
                </Nav.Link>
                <Button
                  as={Link}
                  to="/register"
                  variant="outline-dark"
                  href=""
                  className="me-2"
                >
                  <i className="fa fa-user-plus me-1"></i>Register
                </Button>
                <Button
                  onClick={() => {
                    Cookies.remove("token");
                    navigate("/login");
                  }}
                  variant="outline-dark"
                  href=""
                  className="me-2"
                >
                  <i className="fa fa-sign-out me-1 ms-2"></i>Logout
                </Button>
              </>
            ) : (
              <Button
                as={Link}
                to="/login"
                variant="outline-dark"
                href=""
                className="me-2"
              >
                <i className="fa fa-sign-in me-1 ms-2"></i>Login
              </Button>
            )}
          </Nav>
          <Form className="d-flex" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setValue(e.target.value)}
            />
            <Button type="submit" variant="dark">Search</Button>
          </Form>
          <Button
                as={Link}
                to="/cart"
                variant="outline-dark"
                href=""
                className="me-1"
              >
                <i className="fa fa-shopping-cart me-1"></i>Cart ({state.length})
              </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
