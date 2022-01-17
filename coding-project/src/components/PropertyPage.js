import React, { useState } from "react";
import "./scss/PropertyPage.scss";
import {
  Breadcrumb,
  Button,
  Table,
  Modal,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import AddNew from "./AddNew";

function PropertyPage() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="property">
      <Breadcrumb>
        <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item href="#" active>
          Properties
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="mb-3 property-filter">
        <span className="property-filter-title">Properties</span>
      </div>
      <div className="d-flex justify-content-between mb-5">
        <Button className="secondary-button outline" onClick={handleShow}>
          <i className="bi bi-plus-square-fill px-1"></i> Add New
        </Button>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <AddNew onClick={handleClose} />
        </Modal>
      </div>
      <div>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Property Company</th>
              <th>Property Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Vegas Realities</td>
              <td>No 12, Ajanlekoko st</td>
              <td>
                <DropdownButton
                  variant="secondary"
                  id="dropdown-basic-button"
                  title="Options"
                  drop="end"
                >
                  <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
                </DropdownButton>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default PropertyPage;
