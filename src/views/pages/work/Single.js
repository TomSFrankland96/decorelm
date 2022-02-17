import React, { Component } from 'react';
import {
    Button,
    Card,
} from 'react-bootstrap'

export default class Single extends Component {
    render() {
        return (
            <Card style={{ border: 'none' }} className="text-start">
                <Card.Img variant="top" src="https://res.cloudinary.com/decorelm/image/upload/v1642959603/decorelm-website/Consultation_tcvmqq.png" />
                <Card.Body>
                    <Card.Title>
                        <h3 className="blog-sub">Dec 2021 - Manchester</h3>
                        <h2 className="blog-header">Modern Rustic Apartment</h2>
                    </Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button className="button-blog" href="">view more <i class="bi bi-arrow-right"></i></Button>
                </Card.Body>
            </Card>
        )
    }
}