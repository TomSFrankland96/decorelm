import { React, useState } from 'react';
import axios from "axios";
import useInputState from '../../../hooks/useInputState';
import useToggle from '../../../hooks/useToggle';
import {
    Button, Form, Col, Container, Row
} from 'react-bootstrap'

import './Contact.css'

export default function SubscribeForm() {
    const [validated, setValidated] = useState(false);
    const [firstName, updateFirstName, resetFirstName] = useInputState("");
    const [lastName, updateLastName, resetLastName] = useInputState("");
    const [email, updateEmail, resetEmail] = useInputState("");
    const [description, updateDescription, resetDescription] = useInputState("");
    const [isFormSubmitted, toggleIsFormSubmitted] = useToggle(true);
    let formData = {
        "fields": [
            {
                "objectTypeId": "0-1",
                "name": "firstname",
                "value": firstName
            },
            {
                "objectTypeId": "0-1",
                "name": "lastname",
                "value": lastName
            },
            {
                "objectTypeId": "0-1",
                "name": "email",
                "value": email
            },
            {
                "objectTypeId": "0-1",
                "name": "please_write_any_information_here",
                "value": description
            }
        ]
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        return axios.post('https://api.hsforms.com/submissions/v3/integration/submit/25282196/5fd9163a-f33f-4eaa-8b1c-7dbdd4e011e3', formData)
            .then(toggleIsFormSubmitted)
    }
    return (
        <div>
            {isFormSubmitted ? (
                <Container className="shadow form py-5 bg-white">
                    <Row>
                        <h3>Get in touch</h3>
                        <p className="mt-2">Want to send us a message? We'd love to hear from you. Complete the form below &amp; we'll be in touch soon.</p>
                        <Form noValidate validated={validated} onSubmit={handleSubmit} className="px-4 mx-auto">
                            <Row className="my-4 text-start">
                                <Form.Group as={Col} md="6" controlId="validationCustom01" className="my-3">
                                    <Form.Label>First name<sup>*</sup></Form.Label>
                                    <Form.Control type="text" value={firstName} onChange={updateFirstName} aria-label="First name" required className="enquire-field d-inline" />
                                </ Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustom01" className="my-3">
                                    <Form.Label>Last name<sup>*</sup></Form.Label>
                                    <Form.Control type="text" value={lastName} onChange={updateLastName} aria-label="Last name" required className="enquire-field d-inline" />
                                </ Form.Group>
                            </Row>
                            <Row className="my-4 text-start">
                                <Form.Group as={Col} md="12" controlId="validationCustom01">
                                    <Form.Label>Email<sup>*</sup></Form.Label>
                                    <Form.Control type="email" value={email} onChange={updateEmail} aria-label="Email" required className="enquire-field" />
                                </ Form.Group>
                            </Row>
                            <Row className="my-4 text-start">
                                <Form.Group as={Col} md="12" controlId="validationCustom01">
                                    <Form.Label>Please write your message here<sup>*</sup></Form.Label>
                                    <Form.Control as="textarea" value={description} onChange={updateDescription} aria-label="Project description" required className="enquire-field" />
                                </ Form.Group>
                            </Row>
                            <Button className="button mb-4" type="submit">Submit <i className="bi bi-arrow-right" /></Button>
                        </Form>
                    </Row>
                </Container>
            ) : (
                <Container className="shadow form py-5">
                    <Row>
                        <div className="mx-auto">Thank you for your message! We'll be in touch soon.</div>
                    </Row>
                </Container>
            )}
        </div>
    )
}