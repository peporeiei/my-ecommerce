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
import { connect } from "react-redux";
import { FaTrash } from "react-icons/fa";
import ProductList from "./ProductList";
import MenuBar from "../MenuBar"
import { getProduct, resetGetProduct } from "../../store/ProductContainer";
import { addWishList } from "../../store/WishListContainer"
import { appendProduct } from "../../store/ShopingCartContainer";
import { numberToBath } from "../Common"

class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount(){
        // this.props.getProduct();
    }

    render() {
        return (
            <div>
                <MenuBar />
                <Container>
                    <Row>
                        <Col>
                            <div className="img-big-wrap img-thumbnail">
                                <a data-fslightbox="mygalley" data-type="image" href="https://notebookspec.com/nbs/upload_notebook/20210822-083821_c.jpg">
                                    <img height="560" src="https://notebookspec.com/nbs/upload_notebook/20210822-083821_c.jpg" />
                                </a>
                            </div>
                        </Col>
                        <Col>
                            <h4 className="title text-dark"></h4>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
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


export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
