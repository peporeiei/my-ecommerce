import * as React from "react";
import { BrowserRouter, Switch, Route , Redirect } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown, Row, Col } from "react-bootstrap";

import NavMenu from "./NavMenu"
import { Counter } from "../features/counter/Counter";
import Login from "./auth/Login";
import Dashboard from "./detail/Dashboard"
import WishListPage from "./detail/WishList";

class Layout extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <BrowserRouter>
          <Switch>
            <div className="App">
              <Route exact path="/(login)" component={LoginContainer} />
              <Route component={DefaultContainer} />
            </div>
          </Switch>
        </BrowserRouter>
      );
    }
  }

const LoginContainer = () => (
  <Container fluid>
    <Route exact path="/" render={() => <Redirect to="/login" />} />
    <Route path="/login" component={Login} />
  </Container>
);

const DefaultContainer = () => (
  <div>
    <Container fluid>
      <NavMenu />
      <Route path="/main" component={Dashboard} />
      <Route path="/wish" component={WishListPage} />
    </Container>
  </div>
);

export default Layout;
