import React, { Component } from 'react';
import ContactForm from './ContactForm'

import {
    Container,
    Row,
    Col,
    Button
} from 'react-bootstrap'

import "./Contact.css"



export default class Contact extends Component {
    componentDidMount(){
        window.scrollTo(0, 60);
    }
    render() {
        return (
            <section>
                <Container className="py-5">
                    <Row>
                        <ContactForm className="my-5"/>
                    </Row>
                </Container>
            </section>
        )
    }
}