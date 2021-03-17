import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Col, Container, Row, Button } from "react-bootstrap"

const IndexPage = () => (
  <div className="full-height">
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <div class="d-grid gap-2">
            <Link className="btn btn-primary" to="/login" type="button">
              Log In Kiosk
            </Link>
            <Link className="btn btn-outline-primary" to="/signup" type="button">
              Register For MEC
            </Link>
            <Link className="btn btn-primary" type="button">
              Check MEC Status
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
)

export default IndexPage
