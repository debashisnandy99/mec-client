import * as React from 'react';
import PropTypes from "prop-types"
import { Col, Container, Row } from 'react-bootstrap';

import * as loginStle from './login.module.css';

const LoginLayout = ({leftChild, rightChild}) => (
    <Container fluid className={loginStle.pl0}>
        <Row className={loginStle.fullContainer}>
            <Col className={loginStle.pr0} md={6}>
                {leftChild}
            </Col>
            <Col md={6} className={`${loginStle.pr0} d-flex align-items-center`}>
                {rightChild}
            </Col>
        </Row>
    </Container>
);

LoginLayout.propTypes = {
    leftChild: PropTypes.node.isRequired,
    rightChild: PropTypes.node.isRequired
}

export default LoginLayout