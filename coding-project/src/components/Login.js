import React, { useState } from "react";
import { Container, Row, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./scss/Register.scss";

function Login() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container fluid className="register">
      <Row className="text-center">
        <h2 className="mb-3">
          <i className="bi-house" />
          LekkiProject
        </h2>
        <h3>Login</h3>
      </Row>
      <Row>
        <Card style={{ width: "30rem" }}>
          <Card.Body>
            <Form
              className="py-4"
              validated={validated}
              onSubmit={handleSubmit}
            >
              <Form.Group className="mb-3" controlId="validationCustom03">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  className="register-input"
                  placeholder="Enter email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  className="register-input"
                  placeholder="Password"
                  required
                />
              </Form.Group>
              <div className="d-flex justify-content-center pb-3">
                <Link
                  className="btn primary-button"
                  type="submit"
                  to="/Dashboard"
                >
                  Login
                </Link>
                {/* <Button type="submit">Submit form</Button> */}
              </div>
              <Form.Text>forgot password? Click here!</Form.Text>
            </Form>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default Login;
