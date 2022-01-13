import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function HomePage() {
  return (
    <>
      <NavBar destination="/Login" linkText="Login" />
      <Container className="hero my-5">
        <Row>
          <Col>
            <p className="hero-label">
              Providing you with the comfort of a home.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste iure
              perferendis libero ducimus!
            </p>
            <p>
              <Link className="btn primary-button" to="/RegisterPage">
                Get Started
              </Link>
            </p>
          </Col>
          <Col className="hero-img">
            <img
              className="img img-fluid"
              src="./assets/buy_house.svg"
              alt="vector illustration of a house on sale"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
