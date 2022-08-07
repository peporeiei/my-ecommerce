import * as React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaHeart , FaHeartBroken, FaShoppingCart } from "react-icons/fa";
import { connect } from "react-redux";

import MenuBar from "../MenuBar"
import { CardBody } from "reactstrap";
import { getWishList, addWishList, deleteWishList, clearWishList, initialStateWishList } from "../../store/WishListContainer"
import { numberToBath } from "../Common"

import { appendProduct } from "../../store/ShopingCartContainer";

class WishListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialRender: true
        }
    }

    componentDidMount() {
        if (this.state.initialRender) {
            this.setState({
                initialRender: false
            })
            this.props.getWishList()
        }
    }

    handdleAddToCart = (data, quantity) => {
        this.props.appendProduct(data, quantity);
        console.log(`You Clicked: ${JSON.stringify(this.props.shoping_cart)}`);
    };

    handleDeleteWishList = (id) => {
        this.props.deleteWishList(id);
        console.log(`You Clicked: deleteWishList()`);
    }

    render() {
        console.log(this.props.wish_list)
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col>
                            <h3>Wish List</h3>
                        </Col>
                    </Row>
                    {this.props.wish_list != undefined && this.props.wish_list.responseWishList.length == 0 && !this.state.initialRender &&
                        <Row className="mt-3">
                            <Col>
                                <div className="card mb-3">
                                    <div className="row no-gutters">
                                        <div className="col-lg-12">
                                            <div className="card-body text-center">
                                                <p className="text-muted"><FaHeart/> There are no favorites yet. Add your favorites to wishlist and they will show here.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    }
                    <div className="mt-3">
                        {this.props.wish_list != undefined && !this.state.initialRender && this.props.wish_list.responseWishList.map((item, idx) => {
                            return (
                                <Row key={idx}>
                                    <Col>
                                        <div className="card mb-3">
                                            <div className="row no-gutters">
                                                <div className="col-md-2">
                                                    <img src={item.product_pic} width={120} style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} />
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="card-body">
                                                        <h5 className="card-title">{item.product_name}</h5>
                                                        {/* <p className="card-text">{item.product_detail}</p> */}
                                                        <p className="card-text"><small className="text-muted">{item.product_left} remaining.</small></p>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="price-wrap text-center mt-3">
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
                                                </div>
                                                <div className="col-md-2">
                                                    <div className="d-flex justify-content-start mt-3">
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
                                                            onClick={() => this.handleDeleteWishList(item.product_id)}
                                                        >
                                                            <FaHeartBroken />
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            )
                        })}
                    </div>
                </Container>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addWishList: (id) => {
            dispatch(addWishList(id));
        },
        getWishList: () => {
            dispatch(getWishList());
        },
        deleteWishList: (id) => {
            dispatch(deleteWishList(id))
        },
        clearWishList: () => {
            dispatch(clearWishList())
        },
        initialStateWishList: () => {
            dispatch(initialStateWishList())
        },
        appendProduct: (data, quantity) => {
            dispatch(appendProduct(data, quantity));
        },
    };
};

const mapStateToProps = (state) => ({
    production_list: state.production_list,
    shoping_cart: state.shoping_cart,
    wish_list: state.wish_list
});
export default connect(mapStateToProps, mapDispatchToProps)(WishListPage)