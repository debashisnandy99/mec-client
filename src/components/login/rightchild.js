import * as React from "react"
import { Col, Container, Row, Form, Button } from "react-bootstrap"

import CardImg from "../../assets/card.svg"

import * as rightStyle from "./right.module.css"
import LoginFrom from "./form/loginfrom"

const RightChild = () => (
  <Container>
    <Row>
      <CardImg className={`${rightStyle.imgCard} mx-auto`} />
    </Row>
    <Row>
      <Col>
        <LoginFrom />
      </Col>
    </Row>
  </Container>
)

export default RightChild
