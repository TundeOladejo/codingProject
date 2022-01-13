import { Container, Row, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./scss/Register.scss";

function RegisterPage() {
  return (
    <Container fluid className="register">
      <Row className="text-center">
        <h2 className="mb-3">
          <i className="bi-house" />
          LekkiProject
        </h2>
        <h3>Register</h3>
      </Row>
      <Row>
        <Card style={{ width: "30rem" }}>
          <Card.Body>
            <Form className="py-4">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  className="register-input"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  className="register-input"
                  placeholder="Password"
                />
              </Form.Group>
              <div className="d-flex justify-content-center">
                <Link className="btn primary-button" to="/Dashboard">
                  Register
                </Link>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default RegisterPage;
