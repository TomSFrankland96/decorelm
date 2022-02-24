import React, { Component } from 'react'
import {
    Col,
    Row,
    Container
} from 'react-bootstrap'

export default class Template extends Component {
    render() {
        return (
            <Container style={{ backgroundColor: '#f8f7f3', marginTop: '50px' }}>
                <Row>
                    <h2>{this.props.headerText}</h2>
                    <hr />
                    <Col lg={6}>
                        <p>
                            {this.props.subText}
                        </p>
                    </Col>
                    <Col lg={6}>
                        <img src={this.props.inspiration} />
                    </Col>
                </Row>
                <Row>
                    <h3>Design Concept</h3>
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
                    <h3>Visualisation</h3>
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
                    <h3>Before</h3>
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
            </Container>
        )
    }
}
