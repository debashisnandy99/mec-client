import * as React from "react"
import { Link } from "gatsby"

import SEO from "../../components/seo"
import LeftChild from "../../components/login/leftchild"
import RightChild from "../../components/login/rightchild"
import LoginMainLayout from "../../components/login/login"
import { Col, Container, Row } from "react-bootstrap"

const LoginPage = () => (
  <LoginMainLayout leftChild={<LeftChild/>} rightChild={<RightChild/>}>

  </LoginMainLayout>
)

export default LoginPage
