import { React, useState } from 'react';
import axios from "axios";
import useInputState from '../../hooks/useInputState';
import useToggle from '../../hooks/useToggle';
import {
    Button, Form
} from 'react-bootstrap'

import './Subscribe.css'

export default function SubscribeForm() {
    const [validated, setValidated] = useState(false);
    const [email, updateEmail, resetEmail] = useInputState("");
    const [isFormSubmitted, toggleIsFormSubmitted] = useToggle(true);
    let formData = {
        "fields": [
            {
                "objectTypeId": "0-1",
                "name": "email",
                "value": email
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
        return axios.post('https://api.hsforms.com/submissions/v3/integration/submit/25282196/7ecb6a3c-71d1-4263-ae71-a7beabcc68b3', formData)
            .then(toggleIsFormSubmitted)
    }
    return (
        <div>
            {isFormSubmitted ? (
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Control type="email" value={email} onChange={updateEmail} required className="subscribe-field d-inline"/>
                    <Button className="subscribe-button" type="submit">Submit <i className="bi bi-arrow-right" /></Button>
                </Form>
            ) : (
                "Thank you for subscribing!"
            )}
        </div>
    )
}