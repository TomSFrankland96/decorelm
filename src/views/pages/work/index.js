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
        ReactGA.pageview(window.location.pathname);
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
                                img="https://res.cloudinary.com/decorelm/image/upload/c_scale,w_757/v1646079827/sections/Calming-Dining-And-Living-Room_jf7lgh.png"
                                titleTag="Feb 2022 - Cardiff"
                                title="Calming Dining &amp; Living Room"
                                link="/projects/calming-dining-and-living-room"
                            />
                        </Col>
                        <Col md={4} className="p-4">
                            <Single
                                img="https://res.cloudinary.com/decorelm/image/upload/c_scale,w_757/v1646079827/sections/Elegant-Living-Room_o9binp.png"
                                titleTag="Jan 2022 - Manchester"
                                title="Elegant Living Room"
                                description="Some quick example text to..."
                                link="/projects/elegant-living-room"
                            />
                        </Col>
                        <Col md={4} className="p-4">
                            <Single
                                img="https://res.cloudinary.com/decorelm/image/upload/c_scale,w_757/v1646079827/sections/Coastal-Living-And-Dining-Room_nibrtp.png"
                                titleTag="Dec 2021 - London"
                                title="Coastal Living &amp; Dining Room"
                                description="Some quick example text to..."
                                link="/projects/coastal-living-and-dining-room"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} className="p-4">
                            <Single
                                img="https://res.cloudinary.com/decorelm/image/upload/c_scale,w_757/v1646079827/sections/Scandinavian-Living-Room_fmyqsw.png"
                                titleTag="Oct 2021 - London"
                                title="Scandinavian Living Room"
                                description="Some quick example text to..."
                                link="/projects/scandinavian-living-room"
                            />
                        </Col>
                        <Col md={4} className="p-4">
                            <Single
                                img="https://res.cloudinary.com/decorelm/image/upload/c_scale,w_757/v1646081820/sections/Modern-Living-Room_qgsk2s.png"
                                titleTag="Oct 2021 - Northern Ireland"
                                title="Modern Living Room"
                                description="Some quick example text to..."
                                link="/projects/modern-living-room"
                            />
                        </Col>
                        <Col md={4} className="p-4">
                            <Single
                                img="https://res.cloudinary.com/decorelm/image/upload/c_scale,w_757/v1646081820/sections/Bohemian-Apartment_lhfbyf.png"
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
