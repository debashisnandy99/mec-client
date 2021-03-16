import * as React from "react"
import PropTypes from "prop-types"
import { Col, Row } from 'react-bootstrap';


const SignRow = ({childElement,className}) => (
  <Row>
    <Col md={{ span: 4, offset: 4 }} className="text-center">
      {childElement}
    </Col>
  </Row>
)

SignRow.PropTypes = {
    childElement: PropTypes.node.isRequired
}

export default SignRow