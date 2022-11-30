import React from "react";
import "./About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image"; //esto lo añado para poder importar una imagen
import { Col, Container, Row } from "react-bootstrap";

import logo from "../../assets/logo.png";


const About = () => {

    return (
        <Container className="container-fluid aboutDesign">
            <Row className="row rowDesign">
                <Col className="col-6  col1 leftTarget d-flex justify-content-center align-items-center">

                    <div className="aboutTarget text-center">

                        <h3 className="tittleAbout">VUELVE A LOS 90s </h3>
                        <p className="p-3">Las mejores películas de los años noventa demuestran que, sin ellas, sería imposible entender la historia de Hollywood, y del cine mundial. En aquellos maravillosos 90 muchos encontramos nuestras películas favoritas, y los mejores carteles de películas para decorar las paredes de nuestros dormitorios. De las mejores películas de terror de la historia del cine hasta los mejores musicales o las mejores películas animadas de Disney, SUPER EIGHT te ayuda a celebrar el increíble legado que nos dejó esta gran década. Hemos recopilado los mejores títulos de una época única, marcada por la ropa hortera, los Tamagochi, 'Salvados por la campana' y también, como veremos, el mejor cine.</p>

                    </div>

                </Col>

                <Col className="col-12 col-lg-4 col2 rightTarget d-flex align-items-center justify-content-center">


                    <div className="superEightTarget text-center">

                        <Image className="logoImageAbaut" src={logo}></Image>
                        <p className="p-3"> Desde 'Pulp Fiction' hasta 'El show de Truman', desde 'Todo sobre mi madre' hasta 'Titanic', seleccionamos las películas que marcaron la década de los noventa. ¿Cuál es tu favorita? </p>
                        <p className="p-3"> Si has llegado hasta quí es porque SUPER EIGHT es un videoclub online hecho a tu medida. Si creciste con las mejores películas de los 90, te ofrecemos la oportunidad de rememorar algunos de los mejores clásicos desde el sofá de tu casa. ¡Dale al play y disfruta! </p>
                    </div>

                </Col>
            </Row>
        </Container>
    );

}


export default About;
