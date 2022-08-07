import * as React from "react";
import { Redirect, useHistory, withRouter } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { connect } from "react-redux";

import { getProduct, resetGetProduct } from "../../store/ProductContainer";
import { addWishList } from "../../store/WishListContainer"
import { appendProduct } from "../../store/ShopingCartContainer";
import { numberToBath } from "../Common"

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checkInital: true, checkGenerateProduct: true };
    this.redirectHandler = this.redirectHandler.bind(this)
  }

  componentDidMount() {
    if (this.state.checkInital) {
      this.setState({
        checkInital: false,
      });
      this.props.getProduct();
    }
  }

  componentDidUpdate(nextProps, nextState) {
    const { production_list } = this.props;
    if (
      this.state.checkGenerateProduct &&
      production_list.isload_production &&
      production_list.status_production == 200
    ) {
      this.setState({
        checkGenerateProduct: false,
      });
      console.log(production_list.result_list);
    }
  }

  handdleAddToCart = (data, quantity) => {
    this.props.appendProduct(data, quantity);
    console.log(`You Clicked: ${JSON.stringify(this.props.shoping_cart)}`);
  };

  handdleAddWishList = (id) => {
    this.props.addWishList(id)
    console.log(`You Clicked: handdleAddWishList()`);
  }

  redirectHandler = () => {
    this.props.history.push('/product')
  }

  render() {
    const { getProduct, resetGetProduct, production_list } = this.props;

    return (
      <Container>
        <Row>
          <Col>
            <h3>New Product</h3>
          </Col>
        </Row>
        <Row className="mt-3">
          {/* Generate Product */}
          {production_list.isload_production &&
            production_list.status_production == 200 &&
            production_list.result_list.map((item, idx) => {
              return (
                <div className="col-lg-3 col-md-6 col-sm-6" key={idx}>
                  <figure className="card card-product-grid" onClick={() => this.redirectHandler()}>
                    <div className="img-wrap">
                      <img src={item.product_pic} width={240}></img>
                    </div>
                    <figcaption className="info-wrap border-top justify-content-end">
                      <p className="title mb-2 font-weight-bold">
                        {item.product_name}
                      </p>
                      <span className="product-title text-muted mb-2">
                        {item.product_detail}
                      </span>
                      <hr />
                      <Row>
                        <Col>
                          <div className="d-flex">
                            <Button
                              variant="primary"
                              size="md"
                              onClick={() => this.handdleAddToCart(item, 1)}
                            >
                              <FaShoppingCart />
                            </Button>
                            <Button
                              variant="outline-danger"
                              className="mx-1"
                              size="md"
                              onClick={() => this.handdleAddWishList(item.product_id)}
                            >
                              <FaHeart />
                            </Button>
                          </div>
                        </Col>
                        <Col>
                          <div className="price-wrap">
                            <span className="price">
                              {item.product_discount != ""
                                ? numberToBath(item.product_discount)
                                : numberToBath(item.product_price)}{" "}
                            </span>
                            {item.product_discount != "" && (
                              <p className="boxprice text-muted">
                                <span className="discount">
                                  {numberToBath(item.product_price)}-
                                </span>
                                <span className="discount-per">
                                  -{item.product_percent}%
                                </span>
                              </p>
                            )}
                          </div>
                        </Col>
                      </Row>
                    </figcaption>
                  </figure>
                </div>
              );
            })}
        </Row>
      </Container>
    );
  }
}

// const mapDispatchToProps = (dispatch) = {
//   return (
//   getProduct : () => {dispatch(getProduct())},
//   resetGetProduct : () => resetGetProduct(),
//   appendProduct : data => appendProduct(data)
// )};

const mapDispatchToProps = (dispatch) => {
  return {
    getProduct: () => {
      dispatch(getProduct());
    },
    resetGetProduct: () => {
      dispatch(resetGetProduct());
    },
    appendProduct: (data, quantity) => {
      dispatch(appendProduct(data, quantity));
    },
    addWishList: (id) => {
      dispatch(addWishList(id))
    }
  };
};

const mapStateToProps = (state) => ({
  production_list: state.production_list,
  shoping_cart: state.shoping_cart,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
