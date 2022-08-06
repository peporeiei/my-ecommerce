import * as React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import ProductList from "./ProductList";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Row style={{ marginTop: "-2.5%" }}>
          <Col>
            <Navbar className="navbar navbar-light bg-white border-top navbar-expand-lg">
              <Container>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-start">
                  <Nav>
                    <Nav.Link href="#action1">Product</Nav.Link>
                    <NavDropdown title="Link" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="#action3">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#action1">PC specs</Nav.Link>
                    <Nav.Link href="#action1">Waranty</Nav.Link>
                    <Nav.Link href="#action1">Logistics</Nav.Link>
                    <Nav.Link href="#action1">Contact</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
          <hr />
        </Row>
        <ProductList />
      </div>
    );
  }
}
export default Dashboard;
