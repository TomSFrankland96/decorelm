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
                        "Explore our work samples to see how we transformed the homes of many."
                    }
                    line={
                        "line-in-middle mx-auto"
                    }
                />
                <Container>
                    <Row>
                        <Col md={4} className="p-4">
                            <Single
                                img="https://res.cloudinary.com/decorelm/image/upload/q_60/v1645469747/decorelm-website/Clara_9_xzotxx.png"
                                titleTag="Feb 2022 - Cardiff"
                                title="Calming Dining &amp; Living Room"
                                link="/projects/calming-dining-and-living-room"
                            />
                        </Col>
                        <Col md={4} className="p-4">
                            <Single
                                img="https://res.cloudinary.com/decorelm/image/upload/q_60/v1645469797/decorelm-website/Tiziana_7_hsrf1m.png"
                                titleTag="Jan 2022 - Manchester"
                                title="Elegant Living Room"
                                description="Some quick example text to..."
                                link="/projects/elegant-living-room"
                            />
                        </Col>
                        <Col md={4} className="p-4">
                            <Single
                                img="https://res.cloudinary.com/decorelm/image/upload/q_60/v1645469769/decorelm-website/Gagan_8_kxzzxp.png"
                                titleTag="Dec 2021 - London"
                                title="Coastal Living &amp; Dining Room"
                                description="Some quick example text to..."
                                link="/projects/coastal-living-room-and-dining-room"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} className="p-4">
                            <Single
                                img="https://res.cloudinary.com/decorelm/image/upload/q_60/v1645469778/decorelm-website/Jenny_6_dbtwet.png"
                                titleTag="Oct 2021 - London"
                                title="Scandinavian Living Room"
                                description="Some quick example text to..."
                                link="/projects/scandinavian-living-room"
                            />
                        </Col>
                        <Col md={4} className="p-4">
                            <Single
                                img="https://res.cloudinary.com/decorelm/image/upload/q_60/v1645729277/decorelm-website/Edgar_7_rmktpe.png"
                                titleTag="Oct 2021 - Northern Ireland"
                                title="Modern Living Room"
                                description="Some quick example text to..."
                                link="/projects/modern-living-room"
                            />
                        </Col>
                        <Col md={4} className="p-4">
                            <Single
                                img="https://res.cloudinary.com/decorelm/image/upload/q_60/v1645730348/decorelm-website/70_gu5fxw.png"
                                titleTag="Oct 2021 - London"
                                title="Bohemian Apartment"
                                description="Some quick example text to..."
                                link="/projects/bohemian-apartment"
                            />
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
