import React, { Component } from 'react';

import {
    Col,
    Container,
    Row,
    Button
} from 'react-bootstrap';

import { Link as RouterLink } from 'react-router-dom';

import OurWork from '../../sections/OurWork/index';
import DarkBox from '../../components/DarkBox';
import Testimonials from '../../sections/Testimonials';
import EnquireForm from '../../pages/enquire/EnquireForm';
import HowItWorks from "../how-it-works/HowItWorks";

import './Main.css'


export default class Main extends Component {
    render() {
        return (
            <div>
                <Container className="my-5 py-5">
                    <Row className="d-flex justify-content-center">
                        <div className="text-center my-4">
                            <h2>Our unique &amp; trusted virtual process is key to transforming your home</h2>
                        </div>
                        <Col className="py-3" lg={4}>
                            <DarkBox
                                class="kerry"
                                header="01 - remove the stress of design ideas"
                                content="We'll combine your own unique tastes with our meticulous design flair into one detailed plan."
                            />
                        </Col>
                        <Col className="py-3" lg={4}>
                            <DarkBox
                                class="shopping"
                                header="02 - save hours sourcing furniture"
                                content="You'll receive the best quality furniture &amp; accessories from the design, within budget, into one list."
                            />
                        </Col>
                        <Col className="py-3" lg={4}>
                            <DarkBox
                                class="visualise"
                                header="03 - experience your designs in 3D"
                                content="Each design comes with realistic 3D visualisations so you can experience the design before choosing."
                            />
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <HowItWorks />
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
                                <h5 className="my-4">From ??395</h5>
                                <ul className="list my-4">
                                    <li>Design Consultation</li>
                                    <li>1 Room Included</li>
                                    <li>Inspiration Boards to Capture Design Direction</li>
                                    <li>2D Design Concepts</li>
                                    <li>Multiple Space Layout Options</li>
                                    <li>Accessory Suggestions</li>
                                    <li>Your Own Shopping List</li>
                                    <li>3D Photorealistic Design Visualisations</li>
                                    <li>4 Weeks Post Design Support</li>
                                </ul>
                                <RouterLink to="/enquire">
                                    <Button className="button mb-4">Enquire about design service <i className="bi bi-arrow-right" /></Button>
                                </RouterLink><br />
                                <Button className="button-sec" href="https://collaborate.decorelm.com/projects/624c1bcbbc18c3001695f7f7" target="_blank">See Example of What's Included<i className="bi bi-arrow-right" /></Button>
                            </div>
                        </Col>
                        <Col lg={6} className="p-2 my-4">
                            <div className="p-5">
                                <h4 className="header-tag">next steps</h4>
                                <h2 className="mb-5">Get your project started in 3 simple next steps</h2>
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
                        <Col xs={{ order: 2, span: 12 }} lg={{ order: 1, span: 6 }}>
                            <EnquireForm />
                        </Col>
                        <Col xs={{ order: 1, span: 12 }} lg={{ order: 2, span: 6 }}>
                            <div className="w-75 mx-auto my-5">
                                <h2>Timeless design that lasts years, not just through trends.</h2>
                                <p>Don't leave your home decorating to chance, potentially costing you thousands of pounds in wrong decisions &amp; wasted time.</p>
                                <p>Our award-winning e-design service makes it easy for you to pull your ideas together combined with our professional help to create a home you love.</p>
                                <p>Get in touch today by booking a free call or filling out enquiry form, I can't wait to hear about your upcoming project!</p>
                                <Row>
                                    <Col>
                                        <img src="https://res.cloudinary.com/decorelm/image/upload/v1646054339/IMG_4731_r9hdvr.webp" />
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
                <Testimonials />
                <Container >
                    <Row>
                        <Col md={5} className="py-3 mx-auto">
                            <img src="https://res.cloudinary.com/decorelm/image/upload/v1647874321/Decorelm_3_m5odqs.webp" />
                        </Col>
                        <Col md={5} className="py-3 mx-auto">
                            <img src="https://res.cloudinary.com/decorelm/image/upload/v1647874323/Decorelm_2_g9nnn7.webp" />
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
