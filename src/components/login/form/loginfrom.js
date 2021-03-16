import * as React from "react"

import { Form, Button } from "react-bootstrap"

const LoginFrom = () => (
  <Form>
    <Form.Group controlId="formGroupEmail" className="mb-3">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
    <Form.Group controlId="formGroupPassword" className="mb-3">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
)

export default LoginFrom
