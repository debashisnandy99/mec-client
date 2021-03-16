import React, { useState } from "react"
import PropTypes from "prop-types"
import { Col, Container, Row, Button, Form } from "react-bootstrap"

const RenderPages = ({ formPage }) => {
  const [fatherStatus, setFatherStatus] = useState(0)
  const [motherStatus, setMotherStatus] = useState(0)

  if (formPage === 0) {
    return (
      <div>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control placeholder="Enter name" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            pattern="[0-9]{10}"
            placeholder="Enter phone number"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            id="pass"
            aria-describedby="passwordHelpBlock"
          />
          <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-20 characters long.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Re-Type Password</Form.Label>
          <Form.Control type="password" id="retypepass" />
        </Form.Group>
        <div className="form-group mb-3">
          <Form.Label>Upload profile photo</Form.Label>
          <br></br>
          <input type="file" class="form-control" id="inputGroupFile01"></input>
        </div>
      </div>
    )
  } else if (formPage === 1) {
    return (
      <div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Date Of Birth</Form.Label>
          <Form.Control type="date" placeholder="Enter phone number" />
        </Form.Group>
        <Row className="mb-3">
          <Form.Label>Father Name</Form.Label>
          <Col md={3}>
            <select
              class="form-select"
              value={fatherStatus}
              onChange={val => setFatherStatus(val.target.value)}
              aria-label="Mr."
            >
              <option value="0" selected>
                Mr.
              </option>
              <option value="1">Let</option>
            </select>
          </Col>
          <Col md={9}>
            <Form.Group controlId="formFather">
              <Form.Control placeholder="Enter Father name" />
            </Form.Group>
          </Col>
        </Row>
        {fatherStatus == 0 ? (
          <Form.Group controlId="formFatherMec" className="mb-3">
            <Form.Label>Father MEC ID</Form.Label>
            <Form.Control placeholder="Enter Father MEC ID" />
          </Form.Group>
        ) : (
          <div></div>
        )}

        <Row></Row>
        <Row className="mb-3">
          <Form.Label>Mother Name</Form.Label>
          <Col md={3}>
            <select
              class="form-select"
              value={motherStatus}
              onChange={val => setMotherStatus(val.target.value)}
              aria-label="Mr."
            >
              <option value="0" selected>
                Mrs.
              </option>
              <option value="1">Let</option>
            </select>
          </Col>
          <Col md={9}>
            <Form.Group controlId="formMotherName">
              <Form.Control placeholder="Enter Mother name" />
            </Form.Group>
          </Col>
        </Row>
        {motherStatus == 0 ? (
          <Form.Group controlId="formMotherMec" className="mb-3">
            <Form.Label>Mother MEC ID</Form.Label>
            <Form.Control placeholder="Enter Mother MEC ID" />
          </Form.Group>
        ) : (
          <div></div>
        )}
        <Form.Group controlId="formGridAddress1" className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="Enter Address" />
        </Form.Group>

        <div className="form-group mb-3">
          <Form.Label>Upload Singature</Form.Label>
          <br></br>
          <input type="file" class="form-control" id="inputGroupFile01"></input>
        </div>
      </div>
    )
  } else if (formPage === 2) {
    return (
      <div>
        <Form.Group controlId="formDocumentId" className="mb-3">
          <Form.Label>Adhaar Number ID</Form.Label>
          <Form.Control placeholder="Enter Adhaar ID" />
        </Form.Group>
        <div className="form-group mb-3">
          <Form.Label>Upload Adhaar</Form.Label>
          <br></br>
          <input type="file" class="form-control" id="inputGroupFile01"></input>
        </div>
      </div>
    )
  } else if (formPage === 3) {
    return (
      <div>
        <Form.Group controlId="formDocumentId" className="mb-3">
          <Form.Label>Pan Card Number</Form.Label>
          <Form.Control placeholder="Enter Pan Card Number" />
        </Form.Group>
        <div className="form-group mb-3">
          <Form.Label>Upload Pan</Form.Label>
          <br></br>
          <input type="file" class="form-control" id="inputGroupFile01"></input>
        </div>
      </div>
    )
  } else if (formPage === 4) {
    return (
      <div>
        <Form.Group controlId="formDocumentId" className="mb-3">
          <Form.Label>Birth Certificate Register Number</Form.Label>
          <Form.Control placeholder="Enter Birth Certificate Register Number" />
        </Form.Group>
        <div className="form-group mb-3">
          <Form.Label>Upload Birth Certificate</Form.Label>
          <br></br>
          <input type="file" class="form-control" id="inputGroupFile01"></input>
        </div>
      </div>
    )
  }
}
RenderPages.propTypes = {
  formPage: PropTypes.node.isRequired,
}

export default RenderPages
