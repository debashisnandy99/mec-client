import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { Link, navigate } from "gatsby"
import {
  getUser,
  isLoggedIn,
  logout,
  handleLogin,
} from "../../../services/logauth"

const LoginFrom = () => {
  const [validated, setValidated] = useState(false)
  const handleSubmit = event => {
    const form = event.currentTarget
    event.preventDefault()
    event.stopPropagation()
    if (form.checkValidity() === false) {
      setValidated(true)
    } else {
      handleLogin(event.target.phone.value, event.target.password.value)
        .then(res => {navigate("/userdetails")})
        .catch(e => {
          console.log(e.response.data);
          navigate("/")})
    }
  }

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          required
          id="phone"
          type="tel"
          placeholder="Enter phone number"
        />
        <Form.Control.Feedback type="invalid">
          Please enter valid number.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          required
          id="password"
          type="password"
          placeholder="Password"
        />
        <Form.Control.Feedback type="invalid">
          Please enter valid password.
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default LoginFrom
