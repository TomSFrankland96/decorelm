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
                        <Col className="d-flex">
                            <div className="align-self-center subscribe-box m-auto my-5">
                                <div className="text-start">
                                    <h4 className="header-tag">subscribe</h4>
                                    <h2 className="mb-5">Subscribe to receive free design tips &amp; product finds</h2>
                                    <SubscribeForm />
                                </div>
                            
                            </div>
                        </Col>
                        <Col md={5} className="d-flex">
                            <div className="align-self-end w-100 m-0">
                                <img src="https://res.cloudinary.com/decorelm/image/upload/v1642960553/decorelm-website/Screenshot_2022-01-09_at_15.44.22_rpzq4o.jpg" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}
