import React, { Component } from 'react'

import {
    Col,
    Container,
    Row,
    Button
} from 'react-bootstrap'

import { Link as RouterLink } from 'react-router-dom'

import OurWork from '../../sections/OurWork/index'
import DarkBox from '../../components/DarkBox'
import Testimonials from '../../sections/Testimonials'
import EnquireForm from '../enquire/EnquireForm';
import HowItWorks from "../how-it-works/HowItWorks";

import './Main.css'


export default class Main extends Component {
    render() {
        return (
            <div>
                <Container className="my-5 py-5">
                    <Row className="d-flex justify-content-center">
                        <Col lg={6} className="my-3">
                            <img src="https://res.cloudinary.com/decorelm/image/upload/c_scale,w_1000/v1649864230/Decorelm_Living_Room_kfv2kc.webp" />
                        </Col>
                        <Col lg={6} className="my-3">
                            <img src="https://res.cloudinary.com/decorelm/image/upload/c_scale,w_1000/v1649864231/Decorelm_Living_Room_2_vx6nmr.webp" />
                        </Col>
                    </Row>
                </Container>
                <Container className="instagram pb-5 pt-3 px-5" fluid>
                    <Row>
                        <Container className="d-flex my-3">
                            <Row>
                                <Col sm={6}>
                                    <h3>Learn more about us on Instagram</h3>
                                </Col>
                                <Col sm={6}>
                                    <p className="align-self-end ms-4" style={{ fontSize: "1.3rem" }}><a href="https://instagram.com/decorelm" target="_blank" className="link">@decorelm</a></p>
                                </Col>
                            </Row>
                        </Container>
                        <Col xs={6} sm={2} className="my-3">
                            <a href="https://instagram.com/decorelm" target="_blank">
                                <img src="https://res.cloudinary.com/decorelm/image/upload/c_scale,w_500/v1649424307/view_1a_rk3bix.webp" className="rounded social-img" />
                            </a>
                        </Col>
                        <Col xs={6} sm={2} className="my-3">
                            <a href="https://instagram.com/decorelm" target="_blank">
                                <img src="https://res.cloudinary.com/decorelm/image/upload/c_scale,w_500/v1646079307/sections/Decorelm_Instagram_1_fb0ysf.webp" className="rounded social-img" />
                            </a>
                        </Col>
                        <Col xs={6} sm={2} className="my-3">
                            <a href="https://instagram.com/decorelm" target="_blank">
                                <img src="https://res.cloudinary.com/decorelm/image/upload/c_scale,w_500/v1646079308/sections/Decorelm_Instagram_2_atvem0.webp" className="rounded social-img" />
                            </a>
                        </Col>
                        <Col xs={6} sm={2} className="my-3">
                            <a href="https://instagram.com/decorelm" target="_blank">
                                <img src="https://res.cloudinary.com/decorelm/image/upload/c_scale,w_500/v1646079308/sections/Decorelm_Instagram_3_bclynn.webp" className="rounded social-img" />
                            </a>
                        </Col>
                        <Col xs={6} sm={2} className="my-3">
                            <a href="https://instagram.com/decorelm" target="_blank">
                                <img src="https://res.cloudinary.com/decorelm/image/upload/c_scale,w_500/v1646079309/sections/Decorelm_Instagram_4_sylumf.webp" className="rounded social-img" />
                            </a>
                        </Col>
                        <Col xs={6} sm={2} className="my-3">
                            <a href="https://instagram.com/decorelm" target="_blank">
                                <img src="https://res.cloudinary.com/decorelm/image/upload/c_scale,w_500/v1646079308/sections/Decorelm_Instagram_5_i8oxax.webp" className="rounded social-img" />
                            </a>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className="beige py-5 mb-5">
                    <Row>
                        <Col xs={{ order: 2, span: 12 }} md={{ order: 1, span: 6 }}>
                            <EnquireForm />
                        </Col>
                        <Col xs={{ order: 1, span: 12 }} md={{ order: 2, span: 6 }}>
                            <div className="w-75 mx-auto my-5">
                                <h2>Timeless design that lasts years, not just through trends.</h2>
                                <p>Don't leave your home decorating to chance, potentially costing you thousands of pounds in wrong decisions &amp; wasted time.</p>
                                <p>Our award-winning e-design service makes it easy for you to pull your ideas together combined with our professional help to create a home you love.</p>
                                <p>Get in touch today by booking a free call or filling out enquiry form, I can't wait to hear about your upcoming project!</p>
                                <Row>
                                    <Col>
                                        <img src="https://res.cloudinary.com/decorelm/image/upload/c_scale,w_1800/v1646054339/IMG_4731_r9hdvr.webp" />
                                    </Col>
                                    <Col>
                                        <p style={{ fontFamily: 'Licorice', fontSize: '3rem' }}>Kerry</p>
                                        <p>Interior Designer</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container className="my-5">
                    <Row>
                        <div className="text-center">
                            <h2>Design Package</h2>
                        </div>
                    </Row>
                    <Row>
                        <Col lg={6} className="p-2 my-4">
                            <div className="shadow p-5">
                                <h2>Receive bespoke designs &amp; sourcing for one room</h2>
                                <h5 className="my-4">From £395</h5>
                                <ul className="list my-4">
                                    <li>Design Consultation</li>
                                    <li>Inspiration Boards to Capture Design Direction</li>
                                    <li>2D Design Concepts</li>
                                    <li>Multiple Space Layout Options</li>
                                    <li>Your Own Shopping List</li>
                                    <li>3D Photorealistic Design Visualisations</li>
                                    <li>4 Weeks Post Design Support</li>
                                </ul>
                                <RouterLink to="/enquire">
                                    <Button className="button mb-4">Get free quote now <i className="bi bi-arrow-right" /></Button>
                                </RouterLink><br />
                                <Button className="button-sec" href="https://collaborate.decorelm.com/projects/624c1bcbbc18c3001695f7f7" target="_blank">See Example of What's Included<i className="bi bi-arrow-right" /></Button>
                            </div>
                        </Col>
                        <Col lg={6} className="p-2 my-4 d-flex">
                            <div className="p-5 align-self-center">
                                <h4 className="header-tag">next steps</h4>
                                <h3 className="mb-5">Get your project started in 3 simple next steps</h3>
                                <h4 className="steps-cta">01 - Chat with us</h4>
                                <p className="mb-5">Book a free, no-obligatory discovery call to speak with or us enquire via our form.</p>
                                <h4 className="steps-cta">02 - Get your final quote</h4>
                                <p className="mb-5">We'll provide your final project quote via phone or email, depending on your communication preference.</p>
                                <h4 className="steps-cta">03 - Book your slot</h4>
                                <p className="mb-5">You'll then book your slot for your consultation and the design process will begin!</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <div className="text-center my-5">
                            <h3>Have any questions or want a more custom service?</h3>
                            <RouterLink to="/contact">
                                <Button className="button-sec mx-auto d-block my-4">Contact Us <i className="bi bi-arrow-right" /></Button>
                            </RouterLink>
                        </div>
                    </Row>
                </Container>
                <Testimonials />
                <Container>
                    <Row >
                        <Col lg={6} className="py-3 mx-auto my-5">
                            <img src="https://res.cloudinary.com/decorelm/image/upload/c_scale,w_1000/v1649865082/Decorelm_Dining_Room_l9g0ql.png" />
                        </Col>
                        <Col lg={6} className="py-3 mx-auto my-5">
                            <img src="https://res.cloudinary.com/decorelm/image/upload/c_scale,w_1000/v1649865080/Decorelm_Dining_Room_2_whbeln.png" />
                        </Col>
                    </Row>
                </Container>
                <div className="ourWorkTop">
                    <OurWork />
                </div>
            </div >
        )
    }
}
