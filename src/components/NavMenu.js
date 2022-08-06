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
import {
  FaStoreAlt,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";

import ShoppingCart from "./detail/ShoppingCart";
// const logo = require('../../public/medical-lab.png')
import logo from "./medical-lab.png";

class Navmenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openWishCart: false,
    };
  }

  handleOpenCart = () => {
    if (this.state.openWishCart) {
      this.setState({
        openWishCart: false,
      });
    } else {
      this.setState({
        openWishCart: true,
      });
    }
  };

  render() {
    return (
      <div>
        <Navbar sticky="top" className="shadow-sm p-3 mb-5 bg-white rounded">
          <Container fluid>
            <Navbar.Brand href="#home">
              <span className="brandLogo">
                <img src={logo} width={40} alt="piture" /> ECOMMERCE
              </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  size="md"
                />
                <Button variant="primary">
                  <FaSearch />
                </Button>
              </Form>
              <div className="d-flex mx-4">
                <Button variant="outline-secondary" href="/login">
                  <FaUser /> Sign In
                </Button>
                <Button variant="outline-secondary mx-1">
                  <FaHeart /> Wishlist
                </Button>
                <Button
                  variant="outline-secondary mx-1"
                  onClick={() => this.handleOpenCart()}
                >
                  <FaShoppingCart /> Shoping Cart
                </Button>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <ShoppingCart
          openWishCart={this.state.openWishCart}
          parentHandleOpenCart={this.handleOpenCart}
        />
      </div>
    );
  }
}

export default Navmenu;
