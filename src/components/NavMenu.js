import React, { useState } from "react";
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
  Modal
} from "react-bootstrap";
import {
  FaStoreAlt,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";
import { connect } from "react-redux";
import ShoppingCart from "./detail/ShoppingCart";
// const logo = require('../../public/medical-lab.png')
import logo from "./medical-lab.png";
import WishListPage from "./detail/WishList"

class Navmenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openWishCart: false,
      openWishList: false
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

  handleOpenWishList = () => {
    if (this.state.openWishList) {
      this.setState({
        openWishList: false
      })
    } else {
      this.setState({
        openWishList: true
      })
    }
  }

  render() {

    return (
      <div>
        <Navbar sticky="top" className="shadow-sm p-3 mb-5 bg-white rounded">
          <Container fluid>
            <Navbar.Brand href="/main">
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
                <Button variant="outline-secondary mx-1" onClick={() => this.handleOpenWishList()}>
                  <FaHeart /> Wishlist ({this.props.wish_list.responseWishList.length  == undefined || this.props.wish_list.responseWishList.length  == 0 ? 0 : this.props.wish_list.responseWishList.length })
                </Button>
                <Button
                  variant="outline-secondary mx-1"
                  onClick={() => this.handleOpenCart()}
                >
                  <FaShoppingCart /> Shoping Cart ({this.props.shoping_cart.responseCart.result_list.length == undefined || this.props.shoping_cart.responseCart.result_list.length == 0 ? 0 : this.props.shoping_cart.responseCart.result_list.length})
                </Button>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <ShoppingCart
          openWishCart={this.state.openWishCart}
          parentHandleOpenCart={this.handleOpenCart}
        />

        <Modal show={this.state.openWishList} onHide={() => this.handleOpenWishList()} size="xl">
          <Modal.Body>
            <WishListPage />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  shoping_cart: state.shoping_cart,
  wish_list: state.wish_list
});

export default connect(mapStateToProps)(Navmenu);
