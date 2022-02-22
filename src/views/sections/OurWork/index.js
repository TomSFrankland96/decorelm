import React, { Component } from 'react';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap'

import Single from './Single'
import './OurWork.css'

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
                                img="https://res.cloudinary.com/decorelm/image/upload/v1645469797/decorelm-website/Tiziana_7_hsrf1m.png"
                                titleTag="Feb 2022 - London"
                                title="Vibrant Living Room"
                                description="Some quick example text to..."
                                link="https://blog.decorelm.com/toronto-open-plan-apartment/"
                            />
                        </Col>
                        <Col lg={3} md={6}>
                            <Single
                                img="https://res.cloudinary.com/decorelm/image/upload/v1645469747/decorelm-website/Clara_9_xzotxx.png"
                                titleTag="Jan 2022 - Cardiff"
                                title="Modern Coastal Living &amp; Dining Room"
                                link="https://blog.decorelm.com/manchester-modern-rustic-bedroom/"
                            />
                        </Col>
                        <Col lg={3} md={6}>
                            <Single
                                img="https://res.cloudinary.com/decorelm/image/upload/v1645469769/decorelm-website/Gagan_8_kxzzxp.png"
                                titleTag="Dec 2021 - London"
                                title="Scandinavian Modern Ground Floor"
                                description="Some quick example text to..."
                                link="www.google.com"
                            />
                        </Col>
                        <Col lg={3} md={6} className="desktop-single">
                            <Single
                                img="https://res.cloudinary.com/decorelm/image/upload/v1645469778/decorelm-website/Jenny_6_dbtwet.png"
                                titleTag="Oct 2021 - London"
                                title="Calming Living Room"
                                description="Some quick example text to..."
                                link="www.google.com"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}
