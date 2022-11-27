import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { addSearch, filmData, addCriteria } from "../Films/filmSlice";
import { logout, login, userData } from "../../containers/User/userSlice";
import { searchMovies } from "../../services/ApiCalls";
import { useJwt } from "react-jwt";


import "./Header.css";
import { Container, Navbar, Nav, Form, Button } from "react-bootstrap";

const Header = () => {
  // Hooks
  const [criteria, setCriteria] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("jwt");
  let {decodedToken} = useJwt(token);
  console.log(decodedToken)
  if (decodedToken === null) {
    decodedToken = { name: "" };
  }
  // Handlers

  const criteriaHandler = (e) => {
    setCriteria(e.target.value);
    console.log(criteria);
  };

  // Functions

  const logout = () => {
    localStorage.removeItem("jwt")
    navigate("/")
  }

  // Life-cycle
  useEffect(() => {
    dispatch(addCriteria(criteria));

    if (criteria !== "") {
      searchMovies(criteria)
        .then((result) => {
          console.log(result);
          dispatch(addSearch(result));
        })
        .catch((error) => console.error(error));
    }
    console.log(filmData);
  }, [criteria]);

  if (token) {
    return (
      <Navbar collapseOnSelect expand="lg" className="headerDesign">
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>SUPER-8</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="m-auto">
            <Nav
              onClick={() => navigate("/movies")}
              className="fw-bold m-auto text-center"
            >
              Movies
            </Nav>
            <Nav
              onClick={() => navigate("/about")}
              className="fw-bold mx-auto mt-1 mb-md-1 text-center"
            >
              About Us
            </Nav>

            <Form className="formDesign d-flex mt-1 mb-md-1 m-auto">
              <Form.Control
                type="search"
                placeholder="Search"
                id="inputDesign"
                aria-label="Search"
                onChange={(e) => criteriaHandler(e)}
              />
              <Button id="buttonDesign">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="black"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </Button>
            </Form>
            <Nav
              onClick={() => navigate("/profile")}
              className="fw-bold mx-auto mt-1 mb-md-1 text-center"
            >
              Hi, {decodedToken.name}!
            </Nav>
            <Nav
              onClick={() => logout()}
              className="fw-bold mx-auto mt-1 mb-md-1 text-center"
            >
              Logout
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  } else {
    return (
      <Navbar collapseOnSelect expand="lg" className="headerDesign">
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>SUPER-8</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="m-auto">
            <Nav
              onClick={() => navigate("/movies")}
              className="fw-bold m-auto text-center"
            >
              Movies
            </Nav>
            <Nav
              onClick={() => navigate("/about")}
              className="fw-bold mx-auto mt-1 mb-md-1 text-center"
            >
              About Us
            </Nav>

            <Form className="formDesign d-flex mt-1 mb-md-1 m-auto">
              <Form.Control
                type="search"
                placeholder="Search"
                id="inputDesign"
                aria-label="Search"
                onChange={(e) => criteriaHandler(e)}
              />
              <Button id="buttonDesign">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="black"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </Button>
            </Form>
            <Nav
              onClick={() => navigate("/login")}
              className="fw-bold mx-auto mt-1 mb-md-1 text-center"
            >
              Login
            </Nav>
            <Nav
              onClick={() => navigate("/register")}
              className="fw-bold mx-auto mt-1 mb-md-1 text-center"
            >
              Register
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
};

export default Header;
