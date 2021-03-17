import React, { useState } from "react"
import PropTypes from "prop-types"
import { Col, Container, Row, Button, Form, Spinner } from "react-bootstrap"

import axios from "../../services/api"
import * as SignUpCss from "./signup.module.css"

const RenderPages = ({ formPage, nextPage }) => {
  const [fatherStatus, setFatherStatus] = useState(0)
  const [motherStatus, setMotherStatus] = useState(0)
  const [motherMecVerifyStatus, setMotherVerifyStatus] = useState(false)
  const [fatherMecVerifyStatus, setFatherVerifyStatus] = useState(false)
  const [initLoad, setinitStatus] = useState(true)
  const [isFatherMecIdValid, setFatherMecIdStatus] = useState(false)
  const [isMotherMecIdValid, setMotherMecIdStatus] = useState(false)
  const [motherMecId, setMotherMecId] = useState("")
  const [fatherMecId, setFatherMecId] = useState("")
  const [errorMessageF, setErrorMessageF] = useState("")
  const [errorMessageM, setErrorMessageM] = useState("")
  const [adhaarId, setAdhaarId] = useState()

  const renderButtonForForm2 = () => {
    if (fatherStatus == 0 && motherStatus == 0) {
      return (
        <Button
          className="mb-5"
          disabled={
            initLoad
              ? true
              : isMotherMecIdValid && isFatherMecIdValid
              ? false
              : true
          }
          variant="primary"
          type="submit"
        >
          Submit &amp; Next
        </Button>
      )
    } else if (fatherStatus == 0) {
      return (
        <Button
          className="mb-5"
          disabled={initLoad ? true : isFatherMecIdValid ? false : true}
          variant="primary"
          type="submit"
        >
          Submit &amp; Next
        </Button>
      )
    } else if (motherStatus == 0) {
      return (
        <Button
          className="mb-5"
          disabled={initLoad ? true : isMotherMecIdValid ? false : true}
          variant="primary"
          type="submit"
        >
          Submit &amp; Next
        </Button>
      )
    } else {
      return (
        <Button className="mb-5" variant="primary" type="submit">
          Submit &amp; Next
        </Button>
      )
    }
  }

  const checkMecId = (mecId, type) => {
    setinitStatus(false)
    let form_data = new FormData()
    form_data.append("mec", mecId)

    if (type == "f") {
      setFatherVerifyStatus(true)
    } else if (type == "m") {
      setMotherVerifyStatus(true)
    }
    axios
      .post("/auth/checkmec", form_data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then(res => {
        if (type == "f") {
          setFatherVerifyStatus(false)
          setFatherMecIdStatus(true)
        } else if (type == "m") {
          setMotherVerifyStatus(false)
          setMotherMecIdStatus(true)
        }
      })
      .catch(e => {
        if (type == "f") {
          setFatherVerifyStatus(false)
          setFatherMecIdStatus(false)
          setErrorMessageF(e.response.data.message)
        } else if (type == "m") {
          setMotherVerifyStatus(false)
          setMotherMecIdStatus(false)
          setErrorMessageM(e.response.data.message)
        }
      })
  }
  if (formPage === 0) {
    return (
      <div>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group>
              <Form.Label>Name*</Form.Label>
              <Form.Control required id="name" placeholder="Enter name" />
              <Form.Control.Feedback type="invalid">
                Please enter valid name.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control id="email" type="email" placeholder="Enter email" />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>Phone Number*</Form.Label>
          <Form.Control
            required
            type="tel"
            id="tel"
            pattern="[0-9]{10}"
            placeholder="Enter phone number"
          />
          <Form.Control.Feedback type="invalid">
            Please enter valid phone number.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password*</Form.Label>
          <Form.Control
            required
            type="password"
            id="pass"
            minLength="8"
            aria-describedby="passwordHelpBlock"
          />
          <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-20 characters long.
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            Please enter valid password.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Re-Type Password*</Form.Label>
          <Form.Control
            minLength="8"
            required
            type="password"
            id="retypepass"
            aria-describedby="rePasswordHelpBlock"
          />
          <Form.Control.Feedback type="invalid">
            Please retype password.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Upload profile photo</Form.Label>
          <br></br>
          <Form.Control
            className="form-control"
            required
            type="file"
            id="image"
          />
          <Form.Control.Feedback type="invalid">
            Please upload a file.
          </Form.Control.Feedback>
        </Form.Group>
        <Button className="mb-5" variant="primary" type="submit">
          Submit &amp; Next
        </Button>
      </div>
    )
  } else if (formPage === 1) {
    return (
      <div>
        <Form.Group className="mb-3">
          <Form.Label>Date Of Birth*</Form.Label>
          <Form.Control required id="dob" type="date" placeholder="Enter DOB" />
          <Form.Control.Feedback type="invalid">
            Please select dob.
          </Form.Control.Feedback>
        </Form.Group>
        <Row className="mb-3">
          <Form.Label>Father Name</Form.Label>
          <Col md={3}>
            <select
              className="form-select"
              value={fatherStatus}
              onChange={val => setFatherStatus(val.target.value)}
              aria-label="Mr."
            >
              <option value="0">Mr.</option>
              <option value="1">Late</option>
            </select>
          </Col>
          <Col md={9}>
            <Form.Group>
              <Form.Control
                id="fathername"
                required
                placeholder="Enter Father name"
              />
              <Form.Control.Feedback type="invalid">
                Please enter father name.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        {fatherStatus == 0 ? (
          <Row className="mb-3">
            <Form.Label>Father MEC ID</Form.Label>
            <Col md={10}>
              <Form.Group>
                <Form.Control
                  value={fatherMecId}
                  id="fatherMecId"
                  onChange={e => setFatherMecId(e.target.value)}
                  placeholder="Enter Father MEC ID"
                />
                {!isFatherMecIdValid ? (
                  <Row>
                    <Col>
                      <div className={SignUpCss.invalidMec}>
                        {errorMessageF}
                      </div>
                    </Col>
                  </Row>
                ) : (
                  <div />
                )}
              </Form.Group>
            </Col>
            <Col md={2}>
              <Button
                variant="light"
                disabled={fatherMecVerifyStatus}
                onClick={() => checkMecId(fatherMecId, "f")}
              >
                {fatherMecVerifyStatus ? (
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    className="mx-3"
                  />
                ) : (
                  <p className={SignUpCss.m0}>Verify</p>
                )}
              </Button>
            </Col>
          </Row>
        ) : (
          <div></div>
        )}

        <Row></Row>
        <Row className="mb-3">
          <Form.Label>Mother Name</Form.Label>
          <Col md={3}>
            <select
              className="form-select"
              value={motherStatus}
              onChange={val => setMotherStatus(val.target.value)}
              aria-label="Mr."
            >
              <option value="0">Mrs.</option>
              <option value="1">Late</option>
            </select>
          </Col>
          <Col md={9}>
            <Form.Group>
              <Form.Control
                id="mothername"
                required
                placeholder="Enter Mother name"
              />
              <Form.Control.Feedback type="invalid">
                Please enter mother name.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        {motherStatus == 0 ? (
          <Row>
            <Form.Label>Mother MEC ID</Form.Label>
            <Col md={10}>
              <Form.Group className="mb-3">
                <Form.Control
                  value={motherMecId}
                  id="motherMecId"
                  onChange={e => setMotherMecId(e.target.value)}
                  placeholder="Enter Mother MEC ID"
                />
                {!isMotherMecIdValid ? (
                  <Row>
                    <Col>
                      <div className={SignUpCss.invalidMec}>
                        {errorMessageM}
                      </div>
                    </Col>
                  </Row>
                ) : (
                  <div />
                )}
              </Form.Group>
            </Col>
            <Col md={2}>
              <Button
                variant="light"
                disabled={motherMecVerifyStatus}
                onClick={() => checkMecId(motherMecId, "m")}
              >
                {motherMecVerifyStatus ? (
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    className="mx-3"
                  />
                ) : (
                  <p className={SignUpCss.m0}>Verify</p>
                )}
              </Button>
            </Col>
          </Row>
        ) : (
          <div></div>
        )}
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control required id="address" placeholder="Enter Address" />
          <Form.Control.Feedback type="invalid">
            Please enter valid address.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Upload Singature</Form.Label>
          <br></br>
          <Form.Control
            className="form-control"
            required
            type="file"
            id="image"
          />
          <Form.Control.Feedback type="invalid">
            Please upload a signature.
          </Form.Control.Feedback>
        </Form.Group>
        {renderButtonForForm2()}
      </div>
    )
  } else if (formPage === 2) {
    return (
      <div>
        <Form.Group>
          <Form.Label>Adhaar ID</Form.Label>
          <Form.Control
            required
            id="adhid"
            type="text"
            placeholder="Enter Adhaar ID"
          />
          <Form.Control.Feedback type="invalid">
            Please enter adhaar id.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Upload Adhaar</Form.Label>
          <br></br>
          <Form.Control
            className="form-control"
            required
            type="file"
            id="image"
          />
          <Form.Control.Feedback type="invalid">
            Please upload adhaar copy.
          </Form.Control.Feedback>
        </Form.Group>
        <Button className="mb-5" variant="primary" type="submit">
          Submit &amp; Next
        </Button>
      </div>
    )
  } else if (formPage === 3) {
    return (
      <div>
        <Form.Group className="mb-3">
          <Form.Label>Pan Card Number</Form.Label>
          <Form.Control required id="pan" placeholder="Enter Pan Card Number" />
          <Form.Control.Feedback type="invalid">
            Please enter pan number.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Upload Pan</Form.Label>
          <br></br>
          <Form.Control
            className="form-control"
            required
            type="file"
            id="image"
          />
          <Form.Control.Feedback type="invalid">
            Please upload pan copy.
          </Form.Control.Feedback>
        </Form.Group>
        <Button className="mb-5" variant="primary" type="submit">
          Submit &amp; Next
        </Button>
      </div>
    )
  } else if (formPage === 4) {
    return (
      <div>
        <Form.Group className="mb-3">
          <Form.Label>Birth Certificate Register Number</Form.Label>
          <Form.Control
            id="birth"
            required
            placeholder="Enter Birth Certificate Register Number"
          />
          <Form.Control.Feedback type="invalid">
            Please enter Birth Reg No.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Upload Birth Certificate</Form.Label>
          <br></br>
          <Form.Control
            className="form-control"
            required
            type="file"
            id="image"
          />
        </Form.Group>
        <Button className="mb-5" variant="primary" type="submit">
          Submit &amp; Finish
        </Button>
      </div>
    )
  }
}
RenderPages.propTypes = {
  formPage: PropTypes.node.isRequired,
}

export default RenderPages
