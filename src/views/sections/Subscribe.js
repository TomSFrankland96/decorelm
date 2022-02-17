import React, { Component } from 'react'
import {
    Col,
    Row,
    Container
} from 'react-bootstrap'
import './Subscribe.css'
import SubscribeForm from './SubscribeForm'

export default class Subscribe extends Component {
    render() {
        return (
            <section className="d-flex Subcribe">
                <Container fluid className="align-self-center">
                    <Row className="brown">
                        <Col className="p-5 d-flex">
                            <div className="align-self-center">
                                <div className="text-start">
                                    <h4 className="header-tag">subscribe</h4>
                                    <h2>Subscribe to receive free design tips &amp; product finds</h2>
                                    <SubscribeForm />
                                </div>
                            
                            </div>
                        </Col>
                        <Col md={5} className="d-flex">
                            <div className="align-self-center w-75">
                                <img src="https://res.cloudinary.com/decorelm/image/upload/v1642960553/decorelm-website/Screenshot_2022-01-09_at_15.44.22_rpzq4o.jpg" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}
