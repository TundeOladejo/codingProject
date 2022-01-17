import React, { useState } from "react";
import "./scss/ListPage.scss";
import { Link } from "react-router-dom";
import ViewProperty from "./ViewProperty";
import {
  Row,
  Col,
  Breadcrumb,
  Stack,
  Form,
  Button,
  Card,
  Container,
  Modal,
} from "react-bootstrap";

function ListPage() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const listProperties = [
    {
      id: 1,
      title: "Ajayi Properties",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      id: 2,
      title: "Muniru Properties",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      id: 3,
      title: "Raven Holdings",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      id: 4,
      title: "Alexander Homes Ltd.",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      id: 5,
      title: "Lekan Properties",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
  ];

  return (
    <div className="list">
      <Breadcrumb>
        <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item href="#" active>
          List
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="mb-3 list-filter">
        <span className="list-filter-title">Available Properties</span>
        <span>
          <i className="bi bi-sliders px-1 text-bold"></i>custom filter
        </span>
      </div>
      <div className="d-flex justify-content-between">
        <Stack direction="horizontal" gap={3} className="col-md-8 mx-auto">
          <Form.Control className="me-auto" placeholder="Search by address" />
          <Button className="secondary-button">Search</Button>
        </Stack>
      </div>

      <Container>
        <Row xs={1} md={3} className="g-4 mt-5">
          {listProperties.map((listProperty, index) => (
            <Col key={listProperty.id}>
              <Card>
                <Card.Img variant="top" src="./assets/home.svg" />
                <Card.Body className="text-center">
                  <Card.Title>
                    <Link
                      className="card-title stretched-link"
                      to="/Dashboard#link1"
                      onClick={handleShow}
                    >
                      {listProperty.title}
                    </Link>
                  </Card.Title>
                  <Card.Text>{listProperty.details}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <ViewProperty onClick={handleClose} />
        </Modal>
      </Container>
    </div>
  );
}

export default ListPage;
