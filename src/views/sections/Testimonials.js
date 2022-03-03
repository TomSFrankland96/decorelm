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
                            <h3 className="text-center mt-2">Awards</h3>
                            <div className="d-flex w-50 mx-auto">
                                <div className="w-50 text-center">
                                    <a href="https://www.bark.com/en/gb/company/decorelm-design-studio/RnVay/" target="_blank"><img className="mb-2" src="https://res.cloudinary.com/decorelm/image/upload/v1646085413/services/Bark_g0oqrg.png" alt="Kerry Armstrong in Leeds, West Yorkshire, UK on Bark" style={{ width: "84px" }} /></a>
                                    <p className="award-text w-75 mx-auto">Bark Certificate of Excellence 2021</p>
                                </div>
                                <div className="w-50 text-center">
                                    <a href="https://www.houzz.co.uk/pro/decorelm/decorelm" target="_blank"><img className="mb-2" src="https://st.hzcdn.com/static_en-GB/badge_57_8@2x.png" alt="Kerry Armstrong in Leeds, West Yorkshire, UK on Houzz" border="0" style={{ width: "65px" }} /></a>
                                    <p className="award-text w-75 mx-auto">Best of Houzz Service 2022</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center mt-3">
                                <a href="https://www.bark.com/en/gb/company/decorelm-design-studio/RnVay/" target="_blank" className="t-link"><p className="align-self-end text-whit all-reviews">See all our reviews<i class="bi bi-arrow-right ms-3" /></p></a>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
        )
    }
}


