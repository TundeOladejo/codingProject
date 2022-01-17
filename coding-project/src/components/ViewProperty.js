import { Modal, Button } from "react-bootstrap";

function ViewProperty({ onClick }) {
  const viewProperties = [
    {
      id: 1,
      label: "Property Address",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
  ];

  return (
    <div className="view">
      <Modal.Header closeButton>
        <Modal.Title>[Property Name]</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {viewProperties.map((viewProperty, index) => (
          <div className="mb-3 d-flex" key={viewProperty.id}>
            <label htmlFor="propertyAddress">{viewProperty.label}</label>
            <span>{viewProperty.details}</span>
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClick}>
          Close
        </Button>
      </Modal.Footer>
    </div>
  );
}

export default ViewProperty;
