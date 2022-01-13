import React from "react";
import { Button } from "react-bootstrap";
import "./scss/Button.scss";

const PrimaryButton = ({ label, onClick, className }) => (
  <Button className="primary-button" onClick={onClick}>
    {label}
  </Button>
);

export default PrimaryButton;
