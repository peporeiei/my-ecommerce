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

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }

  parentHandleOpenCart = () => {
    this.props.parentHandleOpenCart();
  };

  render() {
    return (
      <div>
        <aside
          className={
            "offcanvas offcanvas-end " + (this.props.openWishCart ? "show" : "")
          }
          tabIndex={-1}
          id="offcanvas_cart"
          aria-aria-modal={true}
          role="dialog"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">Your cart (3) </h5>
            <Button
              variant="outline-light"
              className="btn-close text-reset"
              onClick={() => this.parentHandleOpenCart()}
            ></Button>
          </div>
          <div className="offcanvas-body">
            {/* Cart Detail */}
            <figure className="itemside mb-4">
              <div className="aside">
                <img
                  className="border img-sm rounded"
                  src="https://www.ec-mall.com/wp-content/uploads/2020/09/Sony-a7C-1.jpg"
                  width={100}
                ></img>
              </div>
              <figcaption className="info">
                <a className="btn btn-icon btn-light float-end">
                  <FaTrash />
                </a>
                <p>Sony A7C 2022</p>
                <span className="text-muted">1 x $200.95 </span>
                <br />
                <strong>15,900</strong>
              </figcaption>
            </figure>
            <hr />
          </div>
        </aside>
        {this.props.openWishCart && 
          <div className="offcanvas-backdrop fade show"></div>
        }
      </div>
    );
  }
}
export default ShoppingCart;
