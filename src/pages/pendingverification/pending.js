import * as React from "react"
import { navigate, Link } from "gatsby"
import { Container, Row, Col, Card, Table } from "react-bootstrap"
import * as PendingStyles from "./pending.module.css"
import { url } from "../../services/details"

const PendingPage = ({ location }) => {
  if (!location.state) {
    if (typeof window !== `undefined`) {
      navigate("/", { replace: true })
    }

    return <div></div>
  }

  const user = location.state.userData.user
  const docs = location.state.userData.docs
  console.log(docs)

  return (
    <Container>
      <Row class="mt-4">
        <Col md={{ span: 2, offset: 10 }}>
          <Link className="btn btn-primary" to="/" type="button">
            Got To Home
          </Link>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={2}>
          <Card style={{ width: "10rem" }} className="mx-auto">
            <Card.Img
              variant="top"
              height="250"
              src={`${url()}/${user.photo}`}
            />
          </Card>
        </Col>
        <Col md={4}>
          <div className="mt-4">
            <p className={PendingStyles.pTag}>{user.name}</p>
            <p className={PendingStyles.pTag}>DOB : {user.dob}</p>
            <Card style={{ width: "10rem" }} className="mt-4">
              <Card.Img
                variant="top"
                width="300"
                height="90"
                src={`${url()}/${user.signature}`}
              />
              <Card.Title className="h6 mt-1 mx-auto">Signature</Card.Title>
            </Card>
          </div>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Other Details</Card.Title>

              <div className="mt-3">
                <Row>
                  <Col md={4}>
                    <span className={PendingStyles.spanTagHeader}>
                      Fathers Name :
                    </span>
                  </Col>
                  <Col md="auto">
                    <span>{user.fathersName}</span>
                  </Col>
                </Row>
                <Row>
                  <Col md={4}>
                    <span className={PendingStyles.spanTagHeader}>
                      Mothers Name :
                    </span>
                  </Col>
                  <Col md="auto">
                    <span>{user.mothersName}</span>
                  </Col>
                </Row>
                <Row>
                  <Col md={4}>
                    <span className={PendingStyles.spanTagHeader}>
                      Address :
                    </span>
                  </Col>
                  <Col md="auto">
                    <span>{user.address}</span>
                  </Col>
                </Row>
                <Row>
                  <Col md={4}>
                    <span className={PendingStyles.spanTagHeader}>
                      Phone :{" "}
                    </span>
                  </Col>
                  <Col md="auto">
                    <span>+91 {user.phone}</span>
                  </Col>
                </Row>
                <Row>
                  <Col md={4}>
                    <span className={PendingStyles.spanTagHeader}>
                      Email :{" "}
                    </span>
                  </Col>
                  <Col md="auto">
                    <span>{user.email ? user.email : ""}</span>
                  </Col>
                </Row>
              </div>
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
            {docs.map(value => (
              <tr key={value._id}>
                <td className="text-center align-middle">{value.depId.name}</td>
                <td className="text-center align-middle">{value.docId}</td>
                <td className="text-center align-middle">{value.status}</td>
                <td>
                  <Card style={{ width: "10rem" }} className="mx-auto">
                    <Card.Img variant="top" src={`${url()}/${value.file}`} />
                  </Card>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  )
}

export default PendingPage
