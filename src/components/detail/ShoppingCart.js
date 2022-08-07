import * as React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
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
import { FaTrash, FaCheckCircle } from "react-icons/fa";

import {
  popProduct,
  resetAppendProduct,
  initialStateCart,
  getCartList,
} from "../../store/ShopingCartContainer";

import { numberToBath } from "../Common"
import swal from 'sweetalert2';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialRender: true,
      cartList: [],
    };
  }

  componentDidMount() {
    if (this.state.initialRender) {
      this.setState({
        initialRender: false,
      });
      this.props.getCartList();
    }
  }

  componentDidUpdate(nextProps, nextState) {
    const { isLoadCart, statusCart, messageCart, responseCart } =
      this.props.shoping_cart;
    // if (
    //   !this.state.initialRender &&
    //   responseCart.result_list.length != this.state.cartList.result_list.length &&
    //   responseCart.result_list.length != 0 && responseCart.result_list != undefined
    // ) {
    //   this.props.initialStateCart();
    //   this.setState({
    //     cartList: responseCart,
    //   });
    //   console.log(this.state.cartList);
    // }
  }

  parentHandleOpenCart = () => {
    this.props.parentHandleOpenCart();
  };

  handleDeleteCart = (data) => {
    this.props.popProduct(data);

    // swal.fire({
    //   title: "Are you sure?",
    //   text: "You want to delete it",
    //   icon: "warning",
    //   confirmButtonColor: '#3085d6',
    //   confirmButtonText: 'Yes',
    //   allowOutsideClick: false
    // }).then((result) => {
    //   if (result.value) {
    //   }
    // })
  }

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
            <h5 className="offcanvas-title">
              Your cart ({this.props.shoping_cart.responseCart.result_list.length == undefined || this.props.shoping_cart.responseCart.result_list.length == 0 ? 0 : this.props.shoping_cart.responseCart.result_list.length}){" "}
            </h5>
            <Button
              variant="outline-light"
              className="btn-close text-reset"
              onClick={() => this.parentHandleOpenCart()}
            ></Button>
          </div>
          <hr />
          <div className="offcanvas-body">
            {/* gen cart list */}
            {!this.state.initialRender && this.props.shoping_cart.responseCart.result_list.length != 0 && !this.props.shoping_cart.isload_production &&
              this.props.shoping_cart.responseCart.result_list.map((item, idx) => {
                return (
                  <figure key={idx} className="itemside mb-4">
                    <div className="aside">
                      <img
                        className="border img-sm rounded"
                        src={item.product_pic}
                        width={100}
                      ></img>
                    </div>
                    <figcaption className="info">
                      <a className="btn btn-icon btn-light float-end" onClick={() => this.handleDeleteCart(item)}>
                        <FaTrash />
                      </a>
                      <p className="font-weight-bold">{item.product_name}</p>
                      <span className="text-muted">{item.product_quantity} x {numberToBath(item.product_price)} </span>
                      <br />
                      <strong>{numberToBath(item.product_price_per_quantity)}</strong>
                    </figcaption>
                  </figure>
                );
              })}
            {!this.state.initialRender && this.props.shoping_cart.responseCart.result_list.length == 0 &&
              <div className="text-center">
                <p className="text-muted">There are no items in this cart</p>
              </div>
            }
            <hr />
            <p className="mb-3 text-center">Subtotal : <strong className="text-danger">{numberToBath(this.props.shoping_cart.responseCart.total_price)}</strong></p>
            <div className="text-center">
              <Button variant="outline-success" className="btn-block" disabled={this.props.shoping_cart.responseCart.result_list.length == 0 ? true : false}><FaCheckCircle /> Checkout!</Button>
            </div>
          </div>
        </aside>
        {this.props.openWishCart && (
          <div className="offcanvas-backdrop fade show"></div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    popProduct: (data) => {
      dispatch(popProduct(data));
    },
    resetAppendProduct: () => {
      dispatch(resetAppendProduct());
    },
    initialStateCart: () => {
      dispatch(initialStateCart());
    },
    getCartList: () => {
      dispatch(getCartList());
    },
  };
};

const mapStateToProps = (state) => ({
  shoping_cart: state.shoping_cart,
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
