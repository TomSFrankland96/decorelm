import React, { Component } from 'react'

import {
    Container,
    Row,
    Button
} from 'react-bootstrap';

import {
    Link as RouterLink
} from "react-router-dom";

export default class NotFound extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <div className="text-center my-5">
                        <h1 className="my-5">Sorry, but the page you're looking for isn't available!</h1>
                        <Button className="button"><RouterLink to="/" className="link"><i class="bi bi-arrow-left"></i> return home</RouterLink></Button>
                    </div>
                </Row>
            </Container>
        )
    }
}
