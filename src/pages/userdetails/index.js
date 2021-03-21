import * as React from "react"
import { navigate, Link } from "gatsby"
import { Container, Row, Col, Card, Table, Button } from "react-bootstrap"
import {
  getUser,
  isLoggedIn,
  logout,
  handleLogin,
} from "../../services/logauth"
import * as PendingStyles from "./userdetails.module.css"
import axios from "../../services/api"
import ipfsaxios from "../../services/ipfsapi"
import { ipfsUrl } from "../../services/details"
import Loading from "./loading"

class UserDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = { user: {}, ipfs: "", images: [], isDataLoaded: false }
  }
  componentDidMount() {
    axios
      .get("/auth/getValidateDetails", {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: `Bearer ${getUser().token}`,
        },
      })
      .then(res => {
        this.setState({ user: res.data.user, ipfs: res.data.ipfsHash })
        return ipfsaxios.post("/api/v0/ls?arg=" + res.data.ipfsHash)
      })
      .then(res => {
        let imageList = []
        
        res.data.Objects[0].Links.forEach(value => {
          imageList.push(value.Name)
        })
        this.setState({ images: [...imageList], isDataLoaded: true })
      })
      .catch(e => {
        console.log(e)
      })
  }
  render() {
    if (!isLoggedIn()) {
      if (typeof window !== `undefined`) {
        navigate("/", { replace: true })
      }
      return <div></div>
    }
    return !this.state.isDataLoaded ? (
      <Loading />
    ) : (
      <Container>
        <Row className="mt-4">
          <Col md={{ span: 2, offset: 10 }}>
            <Button
              className="btn btn-primary"
              onClick={() => logout()}
              type="button"
            >
              Got To Home
            </Button>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={2}>
            <Card style={{ width: "10rem" }} className="mx-auto">
              <Card.Img
                variant="top"
                height="250"
                src={`${ipfsUrl()}/ipfs/${this.state.ipfs}/${
                  this.state.images[3]
                }`}
              />
            </Card>
          </Col>
          <Col md={4}>
            <div className="mt-4">
              <p className={PendingStyles.pTag}>{this.state.user.name}</p>
              <p className={PendingStyles.pTag}>DOB : {this.state.user.dob}</p>
              <p className={PendingStyles.pTag}>MEC : {this.state.user.mecId}</p>
              <Card style={{ width: "10rem" }} className="mt-4">
                <Card.Img
                  variant="top"
                  width="300"
                  height="90"
                  src={`${ipfsUrl()}/ipfs/${this.state.ipfs}/${
                    this.state.images[3]
                  }`}
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
                      <span>{this.state.user.fathersName}</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <span className={PendingStyles.spanTagHeader}>
                        Mothers Name :
                      </span>
                    </Col>
                    <Col md="auto">
                      <span>{this.state.user.mothersName}</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <span className={PendingStyles.spanTagHeader}>
                        Address :
                      </span>
                    </Col>
                    <Col md="auto">
                      <span>{this.state.user.address}</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <span className={PendingStyles.spanTagHeader}>
                        Phone :{" "}
                      </span>
                    </Col>
                    <Col md="auto">
                      <span>+91 {this.state.user.phone}</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <span className={PendingStyles.spanTagHeader}>
                        Email :{" "}
                      </span>
                    </Col>
                    <Col md="auto">
                      <span>
                        {this.state.user.email ? this.state.user.email : ""}
                      </span>
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
                <th className="text-center">Name Of Docs</th>
                <th className="text-center">Image</th>
              </tr>
            </thead>
            <tbody>
              {this.state.images.map((value,idx) => (
                <tr key={idx}>
                  <td className="text-center align-middle">
                    {value.split(".")[0]}
                  </td>
                  <td>
                    <Card style={{ width: "10rem" }} className="mx-auto">
                      <Card.Img
                        variant="top"
                        src={`${ipfsUrl()}/ipfs/${this.state.ipfs}/${value}`}
                      />
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
}

export default UserDetails
