import { navigate } from "gatsby"
import * as React from "react"
import { Link } from "gatsby"
import { getUser, isLoggedIn, logout, handleLogin } from "../../services/auth"
import { Col, Container, Row, Button } from "react-bootstrap"

const OkPage = () => {
  if (!isLoggedIn()) {
    navigate("/")
    return (<div></div>);
  }

  logout();

  return (
    <div className="full-height">
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="text-center">
            <h2>Registered Successfully</h2>
          </Col>
          <Col md={{ span: 6, offset: 3 }} className="text-center">
            <Link
              className="btn btn-primary"
              to="/pendingverification"
              type="button"
            >
              Get Status Of Application
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default OkPage
