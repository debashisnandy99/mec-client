import React, { useState } from "react"
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap"
import { navigate } from "gatsby"
import axios from "../../services/api"
import * as PendingStyles from "./pending.module.css"

const PendingLoginPage = () => {
  const [validated, setValidated] = useState(false)
  const [wentWrong, setVaidationStatus] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = event => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()

      setValidated(true)
    } else {
      event.preventDefault()
      event.stopPropagation()
      let form_data = new FormData()
      form_data.append("phone", event.target.phone.value)
      axios
        .post("/auth/getdetails", form_data, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then(res => {
          const dataUser = res.data
          navigate("/pendingverification/pending", {
            state: { userData: dataUser },
            replace: true,
          })
          setErrorMessage("")
          setVaidationStatus(false)
          setValidated(false)
        })
        .catch(e => {
          setErrorMessage(e.response.data.message)
          setVaidationStatus(true)
        })
    }
  }

  return (
    <Container>
      <Row className="mt-5 mb-4">
        <Col md={{ span: 6, offset: 3 }}>
          <h1>Check MEC ID Status</h1>
        </Col>
      </Row>
      {wentWrong ? (
        <Row className="pb-2">
          <Col xs={{ span: 6, offset: 3 }}>
            <Alert variant="danger">{errorMessage}</Alert>
          </Col>
        </Row>
      ) : (
        <div></div>
      )}
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                required
                type="tel"
                id="phone"
                pattern="[0-9]{10}"
                placeholder="Enter phone number"
              />
              <Form.Control.Feedback type="invalid">
                Please enter valid phone number.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>OTP</Form.Label>
              <Form.Control required id="name" placeholder="Enter OTP" />
              <Form.Control.Feedback type="invalid">
                Please enter valid OTP.
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default PendingLoginPage
