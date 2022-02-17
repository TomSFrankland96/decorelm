import React, { Component } from 'react';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap'

import Single from './Single'

export default class OurWork extends Component {
    render() {
        return (
            <section>
                <Container>
                    <div className="border-top border-bottom py-3">
                        <h3 className="r-header uppercase m-0">
                            projects
                        </h3>
                    </div>
                    <Row className="my-4">
                        <Col lg={3} md={6}>
                            <Single
                                img="https://blog.decorelm.com/wp-content/uploads/2021/06/Decorelm-Project-Cover.png"
                                titleTag="Dec 2021 - Manchester"
                                title="Modern Rustic Apartment"
                                description="Some quick example text to..."
                                link="https://blog.decorelm.com/manchester-modern-rustic-bedroom/"
                            />
                        </Col>
                        <Col lg={3} md={6}>
                            <Single
                                img="https://blog.decorelm.com/wp-content/uploads/2021/06/Scandi-Open-Plan.png"
                                titleTag="Jul 2021 - London"
                                title="Apartment Open-Plan Living"
                                description="Some quick example text to..."
                                link="https://blog.decorelm.com/toronto-open-plan-apartment/"
                            />
                        </Col>
                        <Col lg={3} md={6}>
                            <Single
                                img="https://blog.decorelm.com/wp-content/uploads/2021/06/Project.png"
                                titleTag="Jul 2021 - London"
                                title="Apartment Open-Plan Living"
                                description="Some quick example text to..."
                                link="www.google.com"
                            />
                        </Col>
                        <Col lg={3} md={6}>
                            <Single />
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}
