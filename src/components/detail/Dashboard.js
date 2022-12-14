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
import MenuBar from "../MenuBar"

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  redirectHandler = () => {
    this.props.history.push('/product')
  }

  render() {
    return (
      <div>
        <MenuBar/>
        <ProductList history={this.props.history} redirectHandler={this.redirectHandler.bind(this)}/>
      </div>
    );
  }
}
export default(Dashboard);
