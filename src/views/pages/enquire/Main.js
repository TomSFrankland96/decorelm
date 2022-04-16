import React, { Component } from 'react';
import EnquireForm from './EnquireForm'

import {
    Container,
    Row,
    Col,
    Button
} from 'react-bootstrap'

import "./Enquire.css"



export default class Main extends Component {
    render() {
        return (
            <section>
                <Container>
                    <div className="mx-auto enquire-text">
                        <p>Got a project that you need help with? Call us now or complete the enquiry form to chat about your design project and receive a final quote.</p>
                    </div>
                    <Row className="my-5">
                        <Col sm={4}>
                            <p>Mon-Fri
                                8am-6pm
                            </p>
                            <Button className="footer-cta-button"><i class="bi bi-telephone"></i> <a href="tel:01772298588">01772 298588</a></Button>
                        </Col>
                        <Col sm={8}>
                            <EnquireForm />
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

