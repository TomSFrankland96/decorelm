import React, { Component } from 'react';

import {
    Container,
    Row,
    Col
} from 'react-bootstrap'

export default class Main extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={6} className="d-flex">
                        <div className="align-self-center">
                            <h4 className="header-tag">better for you</h4>
                            <h3 className="mb-4">Design that makes the difference</h3>
                            <p>Inspired by travelling the world and exploring different cultures, our Head Designer, Kerry, realised that a home should authentically reflect the story and personality of the people that live in it.<br /><br />

                                Although we all have our own unique style preferences, what really determines how we furnish our home is how we intend to use it. After all, the layout and furniture we choose will define the sort of lifestyle we can lead. Your home should be a true reflection of you and your personality. It’s by looking at ourselves we gain valuable insight into how we can decorate house to make it into a home for living compared to one for other to admire.<br /><br />

                                That's why Decorelm was born, out of a desire to design timeless homes to tell the story, personality &amp; lifestyle of clients shine through their home. </p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <img className="w-75" src="https://res.cloudinary.com/decorelm/image/upload/v1644664558/decorelm-website/photo-1557308917-ef00c7059bfd_nsbrlu.jpg" />
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <img className="w-75" src="https://res.cloudinary.com/decorelm/image/upload/v1643743956/decorelm-website/benjamin-elliott-4zbITfP0-jM-unsplash_ql4vzf.jpg" />
                    </Col>
                    <Col md={6} className="d-flex">
                        <div className="align-self-center">
                            <h4 className="header-tag">better for the planet</h4>
                            <h3 className="mb-4">Greener choices, no design compromise</h3>
                            <p>Inspired by travelling the world and exploring different cultures, our Head Designer, Kerry, realised that a home should authentically reflect the story and personality of the people that live in it.<br /><br />

                                Although we all have our own unique style preferences, what really determines how we furnish our home is how we intend to use it. After all, the layout and furniture we choose will define the sort of lifestyle we can lead. Your home should be a true reflection of you and your personality. It’s by looking at ourselves we gain valuable insight into how we can decorate house to make it into a home for living compared to one for other to admire.<br /><br />

                                That's why Decorelm was born, out of a desire to design timeless homes to tell the story, personality &amp; lifestyle of clients shine through their home. </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}
