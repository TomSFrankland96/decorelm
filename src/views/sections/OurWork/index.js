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
                                img="https://res.cloudinary.com/decorelm/image/upload/c_scale,w_500/v1646079827/sections/Calming-Dining-And-Living-Room_jf7lgh.webp"
                                titleTag="Feb 2022 - Cardiff"
                                title="Calming Dining &amp; Living Room"
                                link="/projects/calming-dining-and-living-room"
                            />
                        </Col>
                        <Col lg={3} md={6}>
                            <Single
                                img="https://res.cloudinary.com/decorelm/image/upload/c_scale,w_500/v1646079827/sections/Elegant-Living-Room_o9binp.webp"
                                titleTag="Jan 2022 - Manchester"
                                title="Elegant Living Room"
                                description="Some quick example text to..."
                                link="/projects/elegant-living-room"
                            />
                        </Col>
                        <Col lg={3} md={6}>
                            <Single
                                img="https://res.cloudinary.com/decorelm/image/upload/c_scale,w_500/v1646079827/sections/Coastal-Living-And-Dining-Room_nibrtp.webp"
                                titleTag="Dec 2021 - London"
                                title="Coastal Living &amp; Dining Room"
                                description="Some quick example text to..."
                                link="/projects/coastal-living-and-dining-room"
                            />
                        </Col>
                        <Col lg={3} md={6} className="desktop-single">
                            <Single
                                img="https://res.cloudinary.com/decorelm/image/upload/c_scale,w_500/v1646079827/sections/Scandinavian-Living-Room_fmyqsw.webp"
                                titleTag="Oct 2021 - London"
                                title="Scandinavian Living Room"
                                description="Some quick example text to..."
                                link="/projects/scandinavian-living-room"
                            />
                        </Col>
                    </Row>
                </Container>    
            </section>
        )
    }
}
