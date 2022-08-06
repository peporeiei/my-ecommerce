import * as React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { connect } from "react-redux";

import { getProduct, resetGetProduct } from "../../store/ProductContainer";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checkInital: true , checkGenerateProduct : true };
  }

  componentDidMount() {
    if (this.state.checkInital) {
        this.setState({
            checkInital : false
        })
      this.props.getProduct();
    }
  }

  componentDidUpdate(nextProps,nextState){
    const { production_list } = this.props
    if(this.state.checkGenerateProduct && production_list.isload_production && production_list.status_production == 200){
        this.setState({
            checkGenerateProduct : false
        })
        console.log(production_list.result_list)
    }
  }

  render() {
    const { getProduct, resetGetProduct , production_list } = this.props;
    // if(this.state.checkGenerateProduct && production_list.isload_production && production_list.status_production == 200){
    //     this.setState({
    //         checkGenerateProduct : false
    //     })
    //     console.log(production_list.result_list)
    // }

    return (
      <Container>
        <Row>
          <Col>
            <h3>New Product</h3>
          </Col>
        </Row>
        <Row className="mt-3">
          {/* Generate Product */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <figure className="card card-product-grid">
              <div className="img-wrap">
                <img
                  src="https://www.ec-mall.com/wp-content/uploads/2020/09/Sony-a7C-1.jpg"
                  width={240}
                ></img>
              </div>
              <figcaption className="info-wrap border-top justify-content-end">
                <p className="title mb-2">Sony A7C 2022</p>
                <span className="product-title text-muted mb-2">
                  Mixing the quality and advantages of a full-frame sensor with
                  an especially sleek and portable design, the black Sony a7C
                  offers the hybrid recording capabilities, 24.2MP Exmor R BSI
                  CMOS sensor, and intelligent AF performance you would expect
                  from an Alpha camera but with a form factor for all-day,
                  everyday carry.
                </span>
                <hr />
                <Row>
                  <Col>
                    <div className="d-flex">
                      <Button variant="primary" size="md">
                        <FaShoppingCart />
                      </Button>
                      <Button
                        variant="outline-secondary"
                        className="mx-1"
                        size="md"
                      >
                        <FaHeart />
                      </Button>
                    </div>
                  </Col>
                  <Col>
                    <div className="price-wrap">
                      <span className="price">15,900 Bath</span>
                      <p className="boxprice text-muted">
                        <span className="discount">19,900-</span>
                        <span className="discount-per">-35%</span>
                      </p>
                    </div>
                  </Col>
                </Row>
              </figcaption>
            </figure>
          </div>

          {production_list.isload_production && production_list.status_production == 200 && production_list.result_list.map((item , idx) => {
            return(
                <div className="col-lg-3 col-md-6 col-sm-6" key={idx}>
                <figure className="card card-product-grid">
                  <div className="img-wrap">
                    <img
                      src={item.product_pic}
                      width={240}
                    ></img>
                  </div>
                  <figcaption className="info-wrap border-top justify-content-end">
                    <p className="title mb-2">{item.product_name}</p>
                    <span className="product-title text-muted mb-2">
                      {item.product_detail}
                    </span>
                    <hr />
                    <Row>
                      <Col>
                        <div className="d-flex">
                          <Button variant="primary" size="md">
                            <FaShoppingCart />
                          </Button>
                          <Button
                            variant="outline-secondary"
                            className="mx-1"
                            size="md"
                          >
                            <FaHeart />
                          </Button>
                        </div>
                      </Col>
                      <Col>
                        <div className="price-wrap">
                          <span className="price">{item.product_discount} Bath</span>
                          <p className="boxprice text-muted">
                            <span className="discount">{item.product_price}-</span>
                            <span className="discount-per">-{item.product_percent}%</span>
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </figcaption>
                </figure>
              </div>
            )
          })}

        </Row>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  getProduct,
  resetGetProduct,
};

const mapStateToProps = (state) => ({
    production_list : state.production_list
//   total_count: state.total_count,
//   result_list: state.result_list,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
