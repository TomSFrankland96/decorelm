import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'
import Subscribe from '../sections/Subscribe'
import {
    Link as RouterLink
} from "react-router-dom";

export default class Footer extends Component {
    render() {
        return (
            <>
                <Subscribe />
                <div className="p-3 instagram">
                    <Container>
                        <Row>
                            <div className="d-flex my-3">
                                <h3>Follow us on Instagram</h3>
                                <p className="align-self-end ms-4" style={{ fontSize: "1.3rem" }}><a href="https://instagram.com/decorelm" target="_blank" className="link">@decorelm</a></p>
                            </div>
                            <Col>
                                <a href="https://instagram.com/decorelm" target="_blank">
                                    <img src="https://res.cloudinary.com/decorelm/image/upload/q_60/v1644262858/decorelm-website/Decorelm-Instagram4_kwtjlg.png" className="rounded social-img" />
                                </a>
                            </Col>
                            <Col>
                                <a href="https://instagram.com/decorelm" target="_blank">
                                    <img src="https://res.cloudinary.com/decorelm/image/upload/q_60/v1644262858/decorelm-website/Decorelm-Instagram3_nddxbg.png" className="rounded social-img" />
                                </a>
                            </Col>
                            <Col>
                                <a href="https://instagram.com/decorelm" target="_blank">
                                    <img src="https://res.cloudinary.com/decorelm/image/upload/q_60/v1644262857/decorelm-website/Decorelm-Instagram2_gdny44.png" className="rounded social-img" />
                                </a>
                            </Col>
                            <Col>
                                <a href="https://instagram.com/decorelm" target="_blank">
                                    <img src="https://res.cloudinary.com/decorelm/image/upload/q_60/v1644262858/decorelm-website/Decorelm-Instagram1_v9l0uw.png" className="rounded social-img" />
                                </a>
                            </Col>
                            <Col>
                                <a href="https://instagram.com/decorelm" target="_blank">
                                    <img src="https://res.cloudinary.com/decorelm/image/upload/q_60/v1644262858/decorelm-website/Decorelm-Instagram5_uz68de.png" className="rounded social-img" />
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="Footer">
                    <Container>
                        <div>
                            <img />
                        </div>
                        <hr className="my-5 hr-footer" />
                        <Row>
                            <Col xs={6} md={4}>
                                <div className="Footer-col">
                                    <h5 className="Footer-header">Get In Touch</h5>
                                    <ul>
                                        <li>
                                            <RouterLink to="/enquire" className="link-white">
                                                enquire about design service
                                            </RouterLink>
                                        </li>
                                        <li>
                                            <a href="mailto:enquiries@decorelm.com" className="link-white">
                                                contact
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col xs={6} md={4}>
                                <div className="Footer-col">
                                    <h5 className="Footer-header">Explore</h5>
                                    <ul>
                                        <li>
                                            <RouterLink to="/services" className="link-white">
                                                home design services
                                            </RouterLink>
                                        </li>
                                        <li>
                                            <RouterLink to="/work" className="link-white">
                                                projects
                                            </RouterLink>
                                        </li>
                                        <li>
                                            <RouterLink to="/about-us" className="link-white">
                                                about us
                                            </RouterLink>
                                        </li>
                                        <li>
                                            <a href="https://bark.com" target="_blank">our reviews</a>
                                        </li>
                                        <li>
                                            <RouterLink to="/blog" className="link-white">
                                                blog
                                            </RouterLink>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div className="Footer-col">
                                    <h5 className="Footer-header">Social</h5>
                                    <div>
                                        <a href="https://www.bark.com/en/gb/company/decorelm-design-studio/RnVay/" target="_blank"><img src="https://res.cloudinary.com/decorelm/image/upload/q_60/v1644264632/decorelm-website/Decorelm-Bark_lf9ra0.png" className="social-icon" /></a>
                                        <a href="https://instagram.com/decorelm" target="_blank"><img src="https://res.cloudinary.com/decorelm/image/upload/q_60/v1644264632/decorelm-website/Decorelm-Instagram_hmpmog.png" className="social-icon" /></a>
                                        <a href="https://www.houzz.co.uk/professionals/interior-designers/decorelm-pfvwgb-pf~255770496" target="_blank"><img src="https://res.cloudinary.com/decorelm/image/upload/q_60/v1644264632/decorelm-website/Decorelm-Houzz_apgb7y.png" className="social-icon" /></a>
                                        <a href="https://pin.it/1vmFdhv" target="_blank"><img src="https://res.cloudinary.com/decorelm/image/upload/q_60/v1644264632/decorelm-website/Decorelm-Pinterest_sqizqb.png" className="social-icon" /></a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <footer className="pb-3 text-end">Decorelm 2022® - All Rights Reserved</footer>
                    </ Container>
                </div>
            </>
        )
    }
}


