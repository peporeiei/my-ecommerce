import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Container, Card, Col, Row } from "react-bootstrap";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Row className="mt-5">
          <Col lg={4}></Col>
          <Col lg={4}>
            <Card>
              <Card.Body>
                <h4 className="mb-4">Sign In</h4>
                <form>
                  <div class="d-flex gap-2">
                    <a href="#" class="d-flex align-items-center btn btn-light w-100">
                      <img class="me-2" src="https://www.iconlogovector.com/uploads/images/2022/01/facebook-rounded.png" height="20" width="20" /> Facebook
                    </a>
                    <a href="#" class="d-flex align-items-center btn btn-light w-100">
                      <img class="me-2" src="https://www.pngplay.com/wp-content/uploads/12/Google-PNG-HD-Photos.png" height="20" width="20" /> Google
                    </a>
                  </div>
                  <p class="text-divider my-4"> Or login with username </p>
                  <div class="mb-3"> <input type="text" class="form-control" placeholder="Username" /> </div>
                  <div class="mb-3 input-group"> <input type="password" class="form-control" placeholder="Password" /> <button type="button" class="btn btn-light"> <i class="text-muted fa fa-eye"></i> </button> </div>
                  <div class="mb-3"> <label class="form-check"> <input class="form-check-input" type="checkbox" value="" checked="" /> <span class="form-check-label"> Remember </span> </label> </div>
                  <div class="mb-4">
                    {/* <Link to="/main"> */}
                      <a class="btn w-100 btn-primary" type="button" href="/main"> Sign in </a>
                    {/* </Link> */}
                  </div>
                  <p class="mb-1 text-center">Don’t have an account? Sign Up</p>
                </form>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}></Col>
        </Row>
      </Container>
    );
  }
}

export default Login