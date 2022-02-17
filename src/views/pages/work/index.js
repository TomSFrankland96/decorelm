import React, { Component } from 'react';

import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

import Single from './Single'
import Header from '../../sections/Header'

export default class Work extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <>
                <Header
                    tag={
                        "work"
                    }
                    header={
                        "Carefully crafted, meticulously measured"
                    }
                    subheader={
                        "Explore our work to see how we transformed the home of many"
                    }
                    line={
                        "line-in-middle mx-auto"
                    }
                />
                <Container>
                    <Row>
                        <Col md={4}>
                            <Single />
                        </Col>
                        <Col md={4}>
                            <Single />
                        </Col>
                        <Col md={4}>
                            <Single />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <Single />
                        </Col>
                        <Col md={4}>
                            <Single />
                        </Col>
                        <Col md={4}>
                            <Single />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <Single />
                        </Col>
                        <Col md={4}>
                            <Single />
                        </Col>
                        <Col md={4}>
                            <Single />
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
