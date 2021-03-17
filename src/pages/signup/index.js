import React, { useState } from "react"
import { Col, Container, Row, Button, Form } from "react-bootstrap"
import RenderPage from "../../components/signup/renderpage"

const SignUpPage = () => {
  const [formPage, setFormPage] = useState(0)
  const [validated, setValidated] = useState(false)

  const handleSubmit = event => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()

      setValidated(true)
    } else {
      event.preventDefault();
      event.stopPropagation();
      event.target.reset();
      console.log(event.target.name.value)
      if (formPage === 0) {
        setFormPage(formPage + 1)
      } else if (formPage === 1) {
        setFormPage(formPage + 1)
      } else if (formPage === 2) {
        setFormPage(formPage + 1)
      } else if (formPage === 3) {
        setFormPage(formPage + 1)
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
            <button className="btn btn-primary" type="button">
              SignIn Using MEC ID Or UserName
            </button>
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

      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <RenderPage formPage={formPage} nextPage={goToNext} />
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
