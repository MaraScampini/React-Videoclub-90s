import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { addSearch, filmData, addCriteria } from "../Films/filmSlice";
import { logout, login, userData } from "../../containers/User/userSlice";
import { searchMovies } from "../../services/ApiCalls";

import "./Header.css";
import { Container, Navbar, Nav, Form, Button } from "react-bootstrap";

const Header = () => {
  // Hooks
  const [criteria, setCriteria] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userCredentials = useSelector(userData);

  // Handlers

  const criteriaHandler = (e) => {
    setCriteria(e.target.value);
    console.log(criteria);
  };

  // Functions

  const logUserOut = () => {
    dispatch(logout({}));
    return navigate("/");
  };

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

  if (userCredentials?.credentials.token !== undefined) {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="headerDesign">
            <div className="linksDesign">
              <div onClick={() => navigate("/movies")} className="linkDesign">
                Movies
              </div>
              <div onClick={() => navigate("/about")} className="linkDesign">
                About Us
              </div>
            </div>
            <div className="logoSearchDesign">
              <div onClick={() => navigate("/")}>LOGO</div>
              <input
                className="inputDesign"
                type="text"
                name="criteria"
                placeholder="search a film"
                onChange={(e) => criteriaHandler(e)}
              />
            </div>
            <div className="linksDesign">
              <div onClick={() => navigate("/profile")} className="linkDesign">
                Hi, {userCredentials?.credentials?.name}!
              </div>
              <div onClick={() => logout()} className="linkDesign">
                Logout
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <Navbar collapseOnSelect expand="lg" className="headerDesign">
        <Container>
          <Navbar.Brand href="/">SUPER-8</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="m-auto">
            <Nav.Link className="fw-bold m-auto text-center" href="/movies">
              Movies
            </Nav.Link>
            <Nav.Link
              className="fw-bold mx-auto mt-1 mb-md-1 text-center"
              href="/about"
            >
              About Us
            </Nav.Link>

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
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </Button>
            </Form>
            <Nav.Link
              className="fw-bold mx-auto mt-1 mb-md-1 text-center"
              href="/login"
            >
              Login
            </Nav.Link>
            <Nav.Link
              className="fw-bold mx-auto mt-1 mb-md-1 text-center"
              href="/register"
            >
              Register
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
};

export default Header;
