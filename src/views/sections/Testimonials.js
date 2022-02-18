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
            <section className="d-flex">
                <Container fluid className="align-self-center">
                    <Row className="py-5">
                        <div className="align-self-center cta-padding">
                            <div className="text-center">
                                <h4 className="header-tag">testimonials</h4>
                                <h2>Loved by many, rated 5 stars on Bark &amp; Houzz</h2>
                            </div>
                            <Col md={6}>
                                <div className="text-start my-3 p-5">
                                    <figure>
                                        <blockquote>
                                            <q>I highly recommend Decorelm. They offer an extremely professional service and nothing is too much trouble. Communication is prompt and they explain choices/rationale, so you can visualize the concepts as they develop.
                                            </q>
                                        </blockquote>
                                        <figcaption>—Fatima Patel</figcaption>
                                    </figure>
                                </div>
                                <div className="text-start my-3 p-5">
                                    <figure>
                                        <blockquote>
                                            <q>I highly recommend Decorelm. They offer an extremely professional service and nothing is too much trouble. Communication is prompt and they explain choices/rationale, so you can visualize the concepts as they develop.
                                            </q>
                                        </blockquote>
                                        <figcaption>—Fatima Patel</figcaption>
                                    </figure>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="text-start my-3 p-5">
                                    <figure>
                                        <blockquote>
                                            <q>I highly recommend Decorelm. They offer an extremely professional service and nothing is too much trouble. Communication is prompt and they explain choices/rationale, so you can visualize the concepts as they develop.
                                            </q>
                                        </blockquote>
                                        <figcaption>—Fatima Patel</figcaption>
                                    </figure>
                                </div>
                                <div className="text-start my-3 p-5">
                                    <figure>
                                        <blockquote>
                                            <q>I highly recommend Decorelm. They offer an extremely professional service and nothing is too much trouble. Communication is prompt and they explain choices/rationale, so you can visualize the concepts as they develop.
                                            </q>
                                        </blockquote>
                                        <figcaption>—Fatima Patel</figcaption>
                                    </figure>
                                </div>
                            </Col>
                            <div className="d-flex justify-content-center mt-3">
                                <a href="https://www.bark.com/en/gb/company/decorelm-design-studio/RnVay/" target="_blank" className="t-link"><p className="align-self-end">See all our reviews<i class="bi bi-arrow-right ms-3" /></p></a>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
        )
    }
}
