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
import EnquireForm from '../../pages/enquire/EnquireForm'

import './Main.css'


export default class Main extends Component {
    render() {
        return (
            <div>
                <Container >
                    <Row>
                        <Col md={7} className="py-3">
                            <img src="https://res.cloudinary.com/decorelm/image/upload/v1647812098/iStock-1357529184_fjpwf2.webp" />
                        </Col>
                        <Col md={5} className="py-3">
                            <img src="https://res.cloudinary.com/decorelm/image/upload/v1647873724/Decorelm_Interior_Design_okyr27.webp" />
                        </Col>
                    </Row>
                </Container>
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
                    <div className="text-center mt-5">
                        <h2>Learn more about how the process works</h2>
                        <RouterLink to="/how-it-works">
                            <Button className="button-sec mx-auto d-block my-4">Explore How it works <i className="bi bi-arrow-right" /></Button>
                        </RouterLink>
                    </div>
                </Container>
                <Container className="my-5">
                    <Row>
                        <div className="text-center">
                            <h2>Design Packages</h2>
                        </div>
                    </Row>
                    <Row>
                        <Col lg={6} className="p-2 my-4">
                            <div className="shadow p-5">
                                <h4 className="header-tag">basic</h4>
                                <h2>Receive bespoke designs &amp; sourcing for one room</h2>
                                <h5 className="my-4">From £395</h5>
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
                                    <Button className="button mb-4">Get free quote now <i className="bi bi-arrow-right" /></Button>
                                </RouterLink><br />
                                <RouterLink to="/how-it-works">
                                    <Button className="button-sec">Explore How It Works <i className="bi bi-arrow-right" /></Button>
                                </RouterLink>
                            </div>
                        </Col>
                        <Col lg={6} className="p-2 my-4">
                            <div className="shadow p-5">
                                <h4 className="header-tag">premium</h4>
                                <h2>Two rooms or multi-purpose space plus extra support time</h2>
                                <h5 className="my-4">From £745</h5>
                                <ul className="list my-4">
                                    <li>Design Consultation</li>
                                    <li>2 Rooms Included</li>
                                    <li>Inspiration Boards to Capture Design Direction</li>
                                    <li>2D Design Concepts</li>
                                    <li>Multiple Space Layout Options</li>
                                    <li>Accessory Suggestions</li>
                                    <li>Your Own Shopping List</li>
                                    <li>3D Photorealistic Design Visualisations</li>
                                    <li>6 Weeks Post Design Support</li>
                                </ul>
                                <RouterLink to="/enquire">
                                    <Button className="button mb-4">Get free quote now <i className="bi bi-arrow-right" /></Button>
                                </RouterLink><br />
                                <RouterLink to="/how-it-works">
                                    <Button className="button-sec">Explore How It Works <i className="bi bi-arrow-right" /></Button>
                                </RouterLink>
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
                <Container fluid className="beige py-5 my-5">
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
                <Container fluid className="container-img my-5">
                    <Row className="py-5 mx-auto">
                        <div className="mx-auto text-center my-3 cta-box">
                            <h4 className="header-tag">let's work together</h4>
                            <h2>Ready to get started? The next steps are simple:</h2>
                            <Row className="my-5">
                                <Col lg={4} className="my-2">
                                    <h4 className="steps-cta">01 - Tell us about your project</h4>
                                    <p>Book a free, no-obligatory discovery call to speak with or us enquire via our form.</p>
                                </Col>
                                <Col lg={4} className="my-2">
                                    <h4 className="steps-cta">02 - Learn how we can help</h4>
                                    <p>We'll chat via phone or email to learn more &amp; see images of your space.</p>
                                </Col>
                                <Col lg={4} className="my-2">
                                    <h4 className="steps-cta">03 - Receive your project quote</h4>
                                    <p>You'll receive your final fixed project quote, and we can go from there!</p>
                                </Col>
                            </Row>
                            <div className="text-center my-3">
                                <RouterLink to="/enquire">
                                    <Button className="dark-button" href="/enquire">get free quote now <i className="bi bi-arrow-right" /></Button>
                                </ RouterLink>
                            </div>
                        </div>
                    </Row>
                </Container>
                {/* <Container className="my-5">
                    <Row>
                    <img src="https://res.cloudinary.com/decorelm/image/upload/c_scale,w_1400/v1647874711/Decorelm_qltwrg.gif" alt="Decorelm Gif" />

                    </Row>
                </Container> */}
                <div className="ourWorkTop">
                    <OurWork />
                </div>
            </div>
        )
    }
}
