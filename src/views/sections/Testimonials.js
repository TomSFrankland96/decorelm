import React, { Component } from 'react'
import {
    Col,
    Row,
    Container
} from 'react-bootstrap'
import './Testimonials.css'

export default class Testimonial extends Component {
    render() {
        return (
            <section className="d-flex testimonial">
                <Container fluid className="align-self-center">
                    <Row className="brown py-5">
                        <Col className="p-5 d-flex">
                            <div className="align-self-center cta-padding">
                                <div className="text-start">
                                    <h4 className="header-tag">testimonials</h4>
                                    <h2>Loved by many, rated 5 stars on Bark &amp; Houzz</h2>
                                </div>
                                <div className="text-start my-3">
                                    <figure>
                                        <blockquote>
                                            <q>I highly recommend Decorelm. They offer an extremely professional service and nothing is too much trouble. Communication is prompt and they explain choices/rationale, so you can visualize the concepts as they develop.
                                            </q>
                                        </blockquote>
                                        <figcaption>—Fatima Patel</figcaption>
                                    </figure>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-start mt-3">
                                    <a href="https://www.bark.com/en/gb/company/decorelm-design-studio/RnVay/" target="_blank" className="t-link"><p className="align-self-end">See all our reviews<i class="bi bi-arrow-right ms-3" /></p></a>
                                </div>
                            </div>
                        </Col>
                        <Col md={5} className="d-flex">
                            <div className="align-self-center">
                                <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}
