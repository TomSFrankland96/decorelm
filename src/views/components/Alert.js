import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import './Navigation.css'

import {
    Link as RouterLink
} from 'react-router-dom'

export default class Alert extends Component {
    render() {
        return (
            <Container fluid className="Alert">
                <Row>
                    <div className="text-center">{this.props.alert}, <RouterLink to="/enquire" className="alert-link">click here</RouterLink> to get started</div>
                </Row>
            </Container>
        )
    }
}
