import { Modal, Button, Form, Row, Col } from "react-bootstrap";

function AddNew({ onClick }) {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Add New Property</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Property Name</Form.Label>
            <Form.Control placeholder="Vegas Realities" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Property Address</Form.Label>
            <Form.Control placeholder="No 12, Ajanlekoko st" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
              <Form.Label>Property Type</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select an option</option>
                <option value="1">Office Space</option>
                <option value="2">Shop</option>
                <option value="3">Flat</option>
                <option value="4">Factory Shed</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Number of Bedrooms</Form.Label>
              <Form.Control type="number" value="0" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Number of sitting rooms</Form.Label>
              <Form.Control type="number" value="0" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Number of kitchen</Form.Label>
              <Form.Control type="number" value="0" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Number of bathroom</Form.Label>
              <Form.Control type="number" value="0" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Number of toilet</Form.Label>
              <Form.Control type="number" value="0" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Valid From</Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Valid To</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={2} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onClick}>
          Cancel
        </Button>
        <Button variant="success">Add Property</Button>
      </Modal.Footer>
    </>
  );
}

export default AddNew;
