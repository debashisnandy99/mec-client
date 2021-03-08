import * as React from "react"
import PropTypes from "prop-types"
import { Container } from "react-bootstrap"

import * as leftChildStyle from "./leftchild.module.css"
import utils from './utils/utils';

const LeftChild = () => (
  <div className={leftChildStyle.mainDiv}>
    <div className={leftChildStyle.overlay}>
      <img src={utils.imgUrl}  width="100"/>
    </div>
  </div>
)

export default LeftChild
