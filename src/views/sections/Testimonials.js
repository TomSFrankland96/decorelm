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
                <Container fluid className="align-self-center green text-white my-5">
                    <Row className="py-5 testimonial-box mx-auto">
                        <div className="align-self-center cta-padding">
                            <div className="text-center">
                                <h4 className="header-tag">testimonials</h4>
                                <h2>Loved by many, rated 5 stars on Bark &amp; Houzz</h2>
                            </div>
                            <Row>
                                <TestimonialsCarousel />
                            </Row>
                            <div className="d-flex justify-content-center my-2">
                                <a href="https://www.bark.com/en/gb/company/decorelm-design-studio/RnVay/" target="_blank"><img className="me-3" src="https://res.cloudinary.com/decorelm/image/upload/v1643704501/decorelm-website/coe-badge-2021_ulgmqw.png" alt="Kerry Armstrong in Leeds, West Yorkshire, UK on Bark" style={{width: "75px"}}/></a>
                                <a href="https://www.houzz.co.uk/pro/decorelm/decorelm" target="_blank"><img src="https://st.hzcdn.com/static_en-GB/badge_57_8@2x.png" alt="Kerry Armstrong in Leeds, West Yorkshire, UK on Houzz" border="0" style={{width: "55px"}} /></a>
                            </div>
                            <div className="d-flex justify-content-center mt-3">
                                <a href="https://www.bark.com/en/gb/company/decorelm-design-studio/RnVay/" target="_blank" className="t-link"><p className="align-self-end text-white">See all our reviews<i class="bi bi-arrow-right ms-3" /></p></a>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
        )
    }
}


