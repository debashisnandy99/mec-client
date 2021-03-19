import React, { useState } from "react"
import { Link, navigate } from "gatsby"
import axios from "../../services/api"
import { getUser, isLoggedIn, logout, handleLogin } from "../../services/auth"
import { Col, Container, Row, ProgressBar, Form, Alert } from "react-bootstrap"
import RenderPage from "../../components/signup/renderpage"

const SignUpPage = () => {
  const [formPage, setFormPage] = useState(0)
  const [sendingData, setSendingDataStatus] = useState(false)
  const [validated, setValidated] = useState(false)
  const [wentWrong, setVaidationStatus] = useState(false)

  const handleSubmit = event => {
    const form = event.currentTarget
    setSendingDataStatus(true)
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
      setValidated(true)
      console.log(event.target.email.value)
    } else {
      event.preventDefault()
      event.stopPropagation()
      console.log(event.target.name.value)
      if (formPage === 0) {
        handleLogin(
          event.target.name.value,
          event.target.password.value,
          event.target.image.files[0],
          event.target.phone.value,
          event.target.email.value
        )
          .then(value => {
            if (value) {
              setSendingDataStatus(false)
              setVaidationStatus(false)
              event.target.reset()
              setFormPage(formPage + 1)
            } else {
              setVaidationStatus(true)
              setSendingDataStatus(false)
            }
          })
          .catch(e => {
            console.log(e)
            setSendingDataStatus(false)
            setVaidationStatus(true)
          })
      } else if (formPage === 1) {
        let target = event.target
        let form_data = new FormData()
        form_data.append("dob", target.dob.value)
        form_data.append("fathersName", target.fathername.value)
        form_data.append("mothersName", target.mothername.value)
        form_data.append("address", target.address.value)
        form_data.append("image", target.image.files[0])
        if (target.mothermecid) {
          form_data.append("mothersmecid", target.mothersmecid.value)
        }
        if (target.fathersmecid) {
          form_data.append("fathersmecid", target.fathersmecid.value)
        }
        axios
          .put("/auth/detailsUp", form_data, {
            headers: {
              "content-type": "multipart/form-data",
              Authorization: `Bearer ${getUser().token}`,
            },
          })
          .then(res => {
            setSendingDataStatus(false)
            setVaidationStatus(false)
            event.target.reset()
            setFormPage(formPage + 1)
          })
          .catch(e => {
            setSendingDataStatus(false)
            setVaidationStatus(false)
          })
      } else if (formPage === 2) {
        let target = event.target
        let form_data = new FormData()
        form_data.append("docid", target.adhid.value)
        form_data.append("dep", "adhaar")
        form_data.append("image", target.image.files[0])
        axios
          .put("/auth/fileUpload", form_data, {
            headers: {
              "content-type": "multipart/form-data",
              Authorization: `Bearer ${getUser().token}`,
            },
          })
          .then(res => {
            setSendingDataStatus(false)
            setVaidationStatus(false)
            event.target.reset()
            setFormPage(formPage + 1)
          })
          .catch(e => {
            setSendingDataStatus(false)
            setVaidationStatus(false)
          })
      } else if (formPage === 3) {
        let target = event.target
        let form_data = new FormData()
        form_data.append("docid", target.pan.value)
        form_data.append("dep", "pan")
        form_data.append("image", target.image.files[0])
        axios
          .put("/auth/fileUpload", form_data, {
            headers: {
              "content-type": "multipart/form-data",
              Authorization: `Bearer ${getUser().token}`,
            },
          })
          .then(res => {
            setSendingDataStatus(false)
            setVaidationStatus(false)
            event.target.reset()
            setFormPage(formPage + 1)
          })
          .catch(e => {
            setSendingDataStatus(false)
            setVaidationStatus(false)
          })
      } else if (formPage === 4) {
        let target = event.target
        let form_data = new FormData()
        form_data.append("docid", target.birth.value)
        form_data.append("dep", "birth")
        form_data.append("image", target.image.files[0])
        axios
          .put("/auth/fileUpload", form_data, {
            headers: {
              "content-type": "multipart/form-data",
              Authorization: `Bearer ${getUser().token}`,
            },
          })
          .then(res => {
            navigate("/signup/ok", { replace: true })
            setSendingDataStatus(false)
            setVaidationStatus(false)
            event.target.reset()
          })
          .catch(e => {
            setSendingDataStatus(false)
            setVaidationStatus(false)
          })
      }
      setValidated(false)
    }
  }

  const goToNext = () => {
    if (formPage === 0) {
      setFormPage(formPage + 1)
    } else if (formPage === 1) {
      setFormPage(formPage + 1)
    } else if (formPage === 2) {
      setFormPage(formPage + 1)
    } else if (formPage === 3) {
      setFormPage(formPage + 1)
    }
    console.log("hello")
  }

  return (
    <Container>
      <Row className="pt-5 pb-2">
        <Col md={{ span: 4, offset: 4 }} className="text-center">
          <h4>Sign In Kiosk</h4>
        </Col>
      </Row>

      <Row className="pt-2">
        <Col md={{ span: 4, offset: 4 }}>
          <div className="d-grid gap-2">
            <Link className="btn btn-primary" to="/login" type="button">
              SignIn Using MEC ID Or UserName
            </Link>
          </div>
        </Col>
      </Row>

      <Row className="pt-4 pb-2 justify-content-md-center">
        <Col md={2}>
          <hr></hr>
        </Col>
        <Col md="auto">Or Register</Col>
        <Col md={2}>
          <hr></hr>
        </Col>
      </Row>
      {wentWrong ? (
        <Row className="pb-2">
          <Col xs={{ span: 6, offset: 3 }}>
            <Alert variant="danger">Something went wrong</Alert>
          </Col>
        </Row>
      ) : (
        <div></div>
      )}
      <Row className="pb-2">
        <Col xs={{ span: 6, offset: 3 }}>
          <ProgressBar animated now={formPage} min={0} max={4} />
        </Col>
      </Row>

      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <RenderPage formPage={formPage} sendingData={sendingData} />
            {/* <Row>
              <Col md={2}>
                <Button className="mb-5" variant="primary" onClick={() => {}}>
                  Next
                </Button>
              </Col>
              <Col md={2}>
                {formPage == 0 ? (
                  <div></div>
                ) : (
                  <Button
                    className="mb-5"
                    variant="secondary"
                    onClick={() => {
                      if (formPage === 2) {
                        setFormPage(formPage - 1)
                      } else if (formPage === 1) {
                        setFormPage(formPage - 1)
                      }
                    }}
                  >
                    Back
                  </Button>
                )}
              </Col>
            </Row>
             */}
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default SignUpPage
