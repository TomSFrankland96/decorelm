import React, { Component } from 'react'
import {
    Col,
    Row,
    Container
} from 'react-bootstrap'
import './Testimonials.css'
import TestimonialsCarousel from './TestimonialsCarousel'

export default class Testimonial extends Component {
    render() {
        return (
            <section>
                <Container fluid className="align-self-center brown my-5">
                    <Row className="py-5">
                        <Col xs={12} md={6} className="d-flex align-items-center">
                            <div className="mx-auto w-75">
                                <div className="text-start">
                                    <h4 className="header-tag">testimonials</h4>
                                    <h2>Rated 5 stars on Bark &amp; Houzz</h2>
                                </div>
                                <h3 className="d-block text-start">Awards</h3>
                                <div className="d-flex mx-auto">
                                    <div className="text-start">
                                        <a href="https://www.bark.com/en/gb/company/decorelm-design-studio/RnVay/" target="_blank"><img className="mb-2 me-4" src="https://res.cloudinary.com/decorelm/image/upload/v1646085413/services/Bark_g0oqrg.png" alt="Kerry Armstrong in Leeds, West Yorkshire, UK on Bark" style={{ width: "84px" }} /></a>
                                        <a href="https://www.houzz.co.uk/pro/decorelm/decorelm" target="_blank"><img className="mb-2" src="https://st.hzcdn.com/static_en-GB/badge_57_8@2x.png" alt="Kerry Armstrong in Leeds, West Yorkshire, UK on Houzz" border="0" style={{ width: "65px" }} /></a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} className="mx-auto">
                            <TestimonialsCarousel />
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}


