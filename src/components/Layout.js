import * as React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// import { Route, Switch } from 'react-router';
import { Container, Nav, Navbar, NavDropdown, Row, Col } from "react-bootstrap";

import SubLayout from "./SubLayout";
import { PrivateRoute } from "./PrivateRoute";
import { Counter } from "../features/counter/Counter";

import NavMenu from "./NavMenu";
import Login from "./auth/Login";
import Dashboard from "./detail/Dashboard"
import WishListPage from "./detail/WishList";
import ProductDetail from "./detail/ProductDetail";

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
      <Route path="/product" component={ProductDetail} />
    </Container>
  </div>
);

export default Layout;

// export default (props, store) => (
//   <React.Fragment>
//     <Switch>
//       <Route path="/login" component={Login} />
//       <SubLayout>
//         <PrivateRoute path="/main" component={Dashboard} />
//         <PrivateRoute path="/wish" component={WishListPage} />
//         <PrivateRoute path="/product" component={ProductDetail} />
//       </SubLayout>
//     </Switch>
//   </React.Fragment>
// );
