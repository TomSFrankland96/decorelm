import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import './Navigation.css'

export default class Alert extends Component {
    render() {
        return (
            <Container fluid className="Alert">
                <Row>
                    <div className="text-center">{this.props.alert}</div>
                </Row>
            </Container>
        )
    }
}
