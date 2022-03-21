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
                    <Row>
                        <div className="mx-auto enquire-text">
                            <p>Got a project that you need help with? Book a free, no-obligation discovery call to discuss your design ambition and learn the next steps.</p>
                            <a href="https://calendly.com/decorelm/15min" target="_blank" style={{ color: "#494949", textDecoration: "none" }}><Button className="my-5 book-call">book a free call <i class="bi bi-arrow-right"></i></Button></a>
                        </div>
                        <div className="mx-auto enquire-text">
                            <p>Alternatively, if you'd like to make an email enquiry or ask any questions please complete the form below.</p>
                        </div>
                        <EnquireForm />
                    </Row>
                </Container>
            </section>
        )
    }
}

