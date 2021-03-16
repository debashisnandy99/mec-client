import * as React from "react"
import { Container, Row, Col, Card, Table } from "react-bootstrap"
import * as PendingStyles from "./pending.module.css"

const PendingPage = () => (
  <Container>
    <Row className="mt-5">
      <Col md={2}>
        <Card style={{ width: "10rem" }} className="mx-auto">
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
        </Card>
      </Col>
      <Col md={4}>
        <div className="mt-3">
          <p className={PendingStyles.pTag}>Debashis Nandy</p>
          <p className={PendingStyles.pTag}>DOB : 21/01/1997</p>
          <p className={PendingStyles.pTag}>MALE</p>
          <Card style={{ width: "10rem" }} className="mt-4">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
            <Card.Title className="h6 mt-1 mx-auto">Signature</Card.Title>
          </Card>
        </div>
      </Col>
      <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>Other Details</Card.Title>

            <Card.Text className="mt-3">
              <Row>
                <Col md={4}>
                  <span class={PendingStyles.spanTagHeader}>
                    Fathers Name :{" "}
                  </span>
                </Col>
                <Col md="auto">
                  <span>Debashis Nandy</span>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <span class={PendingStyles.spanTagHeader}>
                    Mothers Name :{" "}
                  </span>
                </Col>
                <Col md="auto">
                  <span>Debashis Nandy</span>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <span class={PendingStyles.spanTagHeader}>Address : </span>
                </Col>
                <Col md="auto">
                  <span>5T Mathur Babu Lane Kolkata 700015</span>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <span class={PendingStyles.spanTagHeader}>Phone : </span>
                </Col>
                <Col md="auto">
                  <span>+91 8583 858 959</span>
                </Col>
              </Row>
              <Row>
                <Col md="auto">
                  <span class={PendingStyles.spanTagHeader}>Email : </span>
                </Col>
                <Col md="auto">
                  <span></span>
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>

          <Card.Footer>
            <small className="text-muted">MEC Verification pending</small>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
    <Row className="mt-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="text-center">Department</th>
            <th className="text-center">Document ID</th>
            <th className="text-center">Status</th>
            <th className="text-center">Image</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center align-middle">Adhaar</td>
            <td className="text-center align-middle">1800 1452 5426</td>
            <td className="text-center align-middle">Pending</td>
            <td><Card style={{ width: "10rem" }} className="mx-auto">
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
        </Card></td>
          </tr>
          
        </tbody>
      </Table>
    </Row>
  </Container>
)

export default PendingPage
