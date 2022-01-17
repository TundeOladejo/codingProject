import "./scss/Button.scss";
import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

function NavBar({ linkText, destination }) {
  return (
    <Navbar>
      <Container fluid>
        <Navbar.Brand href="#home">
          <i className="bi-house"></i>LekkiProject
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Link className="btn primary-button" to={destination}>
            {linkText}
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
