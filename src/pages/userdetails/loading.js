import * as React from "react"
import { Spinner } from "react-bootstrap"

const Loading = () => (
  <div className="full-height">
    <Spinner animation="border" role="status">
    </Spinner>
  </div>
)

export default Loading
