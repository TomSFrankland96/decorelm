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
                            <div className="align-self-center subscribe-box m-4">
                                <div className="text-start py-5">
                                    <h4 className="header-tag">subscribe</h4>
                                    <h2 className="mb-5">Subscribe to receive free design tips &amp; product finds</h2>
                                    <SubscribeForm />
                                </div>
                            
                            </div>
                        </Col>
                        <Col md={5} className="d-flex g-0">
                            <div className="subscribe-img w-100">
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}
