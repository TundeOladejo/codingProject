import React, { Component } from "react";
import NavBar from "./NavBar";
import ListPage from "./ListPage";
import PropertyPage from "./PropertyPage";
import "./scss/MainPage.scss";
import { Tab, Container, Row, Col, ListGroup } from "react-bootstrap";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SignUpClicked: null,
    };
    this.openSignUp = this.openSignUp.bind(this);
  }

  openSignUp() {
    this.setState({
      SignUpClicked: true,
    });
    console.log("signup clicked");
  }

  render() {
    return (
      <div className="mainpage">
        <NavBar linkText="Log Out" destination="/" />
        <Container fluid>
          <Tab.Container
            className="px-3"
            id="list-group-tabs-example"
            defaultActiveKey="#link1"
          >
            <Row>
              <Col md={3} className="sidebar py-3">
                <ListGroup variant="flush">
                  <ListGroup.Item action href="#link1" className="py-3">
                    <i className="bi bi-grid-1x2-fill px-1"></i>Home
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link2" className="py-3">
                    <i className="bi bi-files px-1"></i>My Properties
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col md={9} className="py-3 main">
                <Tab.Content>
                  <Tab.Pane eventKey="#link1">
                    <ListPage />
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link2">
                    <PropertyPage />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
