import React, { Component } from 'react';

import {
    Container,
    Row,
    Col
} from 'react-bootstrap'

import "./aboutUs.css"

export default class Main extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={6} className="d-flex">
                        <div className="align-self-center about-text mx-auto my-3">
                            <h4 className="header-tag">better for you</h4>
                            <h3 className="mb-4">Design that makes the difference</h3>
                            <p>Inspired by travelling the world and exploring different cultures, our Head Designer, Kerry, realised that a home should authentically reflect the story and personality of the people that live in it.<br /><br />

                                Although we all have our own unique style preferences, what really determines how we furnish our home is how we intend to use it. After all, the layout and furniture we choose will define the sort of lifestyle we can lead. Your home should be a true reflection of you and your personality. It’s by looking at ourselves we gain valuable insight into how we can decorate our house to make it into a home for living compared to one for other to admire.<br /><br />

                                That's why Decorelm was born, out of a desire to design timeless homes to tell the story, personality &amp; lifestyle of clients shine through their home. </p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <img className="w-75 mx-auto d-block" src="https://res.cloudinary.com/decorelm/image/upload/q_50/v1646054339/IMG_4731_r9hdvr.webp" />
                    </Col>
                </Row>
                <Row>
                    <Col md={6} xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
                        <img className="w-75 mx-auto d-block" src="https://res.cloudinary.com/decorelm/image/upload/q_50/v1645991845/IMG_4623_nqkqtx.webp" />
                    </Col>
                    <Col md={6} className="d-flex" xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
                        <div className="align-self-center about-text mx-auto my-4">
                            <h4 className="header-tag">our values</h4>
                            <h3 className="mb-4">Greener choices, no design compromise</h3>
                            <p>With greater awareness, comes greater responsibility, and we want to do every little bit possible to work towards a more environmentally friendly approach to interior design. Decorelm aims for longevity and timelessness when it comes to interior design by seeking more responsible ways to make our homes ‘live longer’. <br /><br />
                                This translates into the multiple aspects of design such as where we source furniture from, products that are made from reclaimed woods or recycled materials, and recommending long-lasting pieces that won’t need to be replaced.  We do our best to consider these values when creating your designs to showcase beautiful rooms that don’t compromise on appearance but also won’t cost the earth.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}
