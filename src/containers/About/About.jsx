import React, { useState, useEffect } from "react";
import "./About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image"; //esto lo añado para poder importar una imagen
import { Col, Container, Row } from "react-bootstrap";

import pattern1 from "../../assets/pattern1.png";
import mouse from "../../assets/mouse.png";


const About = () => {

    return (
        <Container className="container-fluid aboutDesign">
            <Row className="row rowDesign">
                <Col className="col-fluid col-sm-6 col1 leftTarget d-flex justify-content-center align-items-center">

                    <div className="aboutTarget text-center ">

                        <h3 className="tittleAbout">VUELVE A LOS 90´S </h3>
                        <p className="textAbout">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, tempora. Consequuntur delectus sequi quae iste in aliquam suscipit. Dicta tempora temporibus mollitia voluptatem quisquam ipsam, numquam id recusandae deserunt nemo!</p>


                    </div>

                </Col>

                <Col className="col-fluid col2"> HOLA SOY COL 2</Col>




            </Row>

        </Container>
    );

}


export default About;
