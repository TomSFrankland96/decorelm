import React, { Component } from 'react';

import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

import Single from '../../sections/OurWork/Single'
import Header from '../../sections/Header'

export default class Work extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <>
                <Header
                    tag={
                        "work"
                    }
                    header={
                        "Carefully crafted, meticulously measured"
                    }
                    subheader={
                        "Explore our work to see how we transformed the homes of many."
                    }
                    line={
                        "line-in-middle mx-auto"
                    }
                />
                <Container>
                    <Row>
                        <Col md={4}>
                            <Single
                                img="https://res.cloudinary.com/decorelm/image/upload/v1645469797/decorelm-website/Tiziana_7_hsrf1m.png"
                                titleTag="Feb 2022 - London"
                                title="Vibrant Living Room"
                                description="Some quick example text to..."
                                link="https://blog.decorelm.com/toronto-open-plan-apartment/"
                            />
                        </Col>
                        <Col md={4}>
                            <Single
                                img="https://res.cloudinary.com/decorelm/image/upload/v1645469747/decorelm-website/Clara_9_xzotxx.png"
                                titleTag="Jan 2022 - Cardiff"
                                title="Modern Coastal Living &amp; Dining Room"
                                link="https://blog.decorelm.com/manchester-modern-rustic-bedroom/"
                            />
                        </Col>
                        <Col md={4}>
                            <Single
                                img="https://res.cloudinary.com/decorelm/image/upload/v1645469769/decorelm-website/Gagan_8_kxzzxp.png"
                                titleTag="Dec 2021 - London"
                                title="Scandinavian Modern Ground Floor"
                                description="Some quick example text to..."
                                link="www.google.com"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <Single
                                img="https://res.cloudinary.com/decorelm/image/upload/v1645469778/decorelm-website/Jenny_6_dbtwet.png"
                                titleTag="Oct 2021 - London"
                                title="Calming Living Room"
                                description="Some quick example text to..."
                                link="www.google.com"
                            />
                        </Col>
                        <Col md={4}>
                            <Single />
                        </Col>
                        <Col md={4}>
                            <Single />
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
