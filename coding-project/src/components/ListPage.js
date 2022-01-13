import "./scss/ListPage.scss";
import {
  Row,
  Col,
  Breadcrumb,
  Stack,
  Form,
  Button,
  Card,
  Container,
} from "react-bootstrap";

function ListPage() {
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
          <i className="bi bi-sliders px-1"></i>custom filter
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
          {Array.from({ length: 6 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img variant="top" src="./assets/home.svg" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ListPage;
