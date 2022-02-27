import React, { Component } from 'react'
import {
    Col,
    Row,
    Container,
    Button
} from 'react-bootstrap'

import {
    Link as RouterLink
} from "react-router-dom";

import "./Template.css"

export default class Template extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <Container className="cont">
                <Row>
                    <Col className="d-flex">
                        <Button className="button align-self-center m-2"><RouterLink to="/projects" className="link"><i class="bi bi-arrow-left"></i> Return</RouterLink></Button>
                    </Col>
                    <Col xs={10}>
                        <h2 className="text-center py-4">{this.props.headerText}</h2>
                    </Col>
                    <hr />
                </Row>
                <Row>
                    <Col lg={6} className="p-5">
                        <p>
                            {this.props.p1}
                        </p>
                        <p>
                            {this.props.p2}
                        </p>
                        <p>
                            {this.props.p3}
                        </p>
                    </Col>
                    <Col lg={6} className="p-5">
                        <img src={this.props.inspiration} />
                        <h3 className="my-4 text-end">Inspiration</h3>
                    </Col>
                </Row>
                <Row>
                    <h3 className="my-4">Design Concept</h3>
                    <Col lg={3}>
                        <img src={this.props.d1} />
                    </Col>
                    <Col lg={3}>
                        <img src={this.props.d2} />
                    </Col>
                    <Col lg={3}>
                        <img src={this.props.d3} />
                    </Col>
                    <Col lg={3}>
                        <img src={this.props.d4} />
                    </Col>
                </Row>
                <Row>
                    <h3 className="my-4">Visualisation</h3>
                    <Col lg={3}>
                        <img src={this.props.v1} />
                    </Col>
                    <Col lg={3}>
                        <img src={this.props.v2} />
                    </Col>
                    <Col lg={3}>
                        <img src={this.props.v3} />
                    </Col>
                    <Col lg={3}>
                        <img src={this.props.v4} />
                    </Col>
                </Row>
                <Row>
                    {this.props.b1 && (
                        <h3 className="my-4">Before</h3>
                    )}
                    <Col lg={3}>
                        <img src={this.props.b1} />
                    </Col>
                    <Col lg={3}>
                        <img src={this.props.b2} />
                    </Col>
                    <Col lg={3}>
                        <img src={this.props.b3} />
                    </Col>
                    <Col lg={3}>
                        <img src={this.props.b4} />
                    </Col>
                </Row>
            </Container >
        )
    }
}
