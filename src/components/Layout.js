import React from "react";
import {Route, Routes } from "react-router-dom";
// import { Route, Switch } from 'react-router';
import { Container, Nav, Navbar, NavDropdown, Row, Col } from "react-bootstrap";

import NavMenu from "./NavMenu";
import Login from "./auth/Login";
import Dashboard from "./detail/Dashboard"
import WishListPage from "./detail/WishList";
import ProductDetail from "./detail/ProductDetail";
import ProductList from "./detail/ProductList";

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.location)
    return (
      <React.Fragment>
        {/* {window.location.pathname !== '/login' && <NavMenu />} */}
        <NavMenu />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="login" element={<Login />} />
            <Route path="main" element={<Dashboard />} />
            <Route path="wish" element={<WishListPage />} />
            <Route path="product" component={<ProductDetail />} />
          </Routes>
      </React.Fragment>
    );
  }
}

// const LoginContainer = () => (
//   <Container fluid>
//     <Route exact path="/" render={() => <Redirect to="/login" />} />

//   </Container>
// );

// const DefaultContainer = () => (
//   <Container fluid>
//     {/* <NavMenu /> */}
//   </Container>
// );

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
