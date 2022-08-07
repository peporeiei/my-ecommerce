import * as React from 'react';
import { Container, Nav, Navbar, NavDropdown, Row, Col } from "react-bootstrap";
import NavMenu from "./NavMenu";
export default (props) => (
    <React.Fragment>
        <NavMenu />
        <Container fluid={true}>
            <Row>
                <Col md="12" style={{ marginLeft: 0 }}>
                    <main role="main" style={{ minHeight: "92.5vh" }}>
                        {props.children}
                    </main>
                </Col>
            </Row>
        </Container>
    </React.Fragment>
);