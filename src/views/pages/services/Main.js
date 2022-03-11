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
                <Container className="my-5 py-5">
                    <Row className="d-flex justify-content-center">
                        <Col className="py-3" lg={4}>
                            <DarkBox
                                class="kerry"
                                header="01 - receive bespoke room designs"
                                content="We'll combine your own unique tastes with our meticulous design flair into one detailed plan."
                            />
                        </Col>
                        <Col className="py-3" lg={4}>
                            <DarkBox
                                class="shopping"
                                header="02 - get the best furniture sourced"
                                content="Save hours of trying to find the right furniture. You'll receive all design items into one list."
                            />
                        </Col>
                        <Col className="py-3" lg={4}>
                            <DarkBox
                                class="visualise"
                                header="03 - experience your designs in 3D"
                                content="Each design comes with realistic 3D visualisations so you can experience the design."
                            />
                        </Col>
                    </Row>
                    <div className="text-center mt-5">
                        <h3>Our unique &amp; trusted virtual process is key to transforming your home</h3>
                        <RouterLink to="/how-it-works">
                            <Button className="button-sec mx-auto d-block my-4">Explore How it works <i className="bi bi-arrow-right" /></Button>
                        </RouterLink>
                    </div>
                </Container>
                <Container className="my-5">
                    <Row>
                        <Col lg={6}>
                            <img className="" src="https://res.cloudinary.com/decorelm/image/upload/v1645994297/Home_CTA_xgmuwd.webp" />
                        </Col>
                        <Col lg={6} className="p-4 py-5">
                            <h4 className="header-tag">what's included</h4>
                            <h2>Each design comes with the following:</h2>
                            <h5>From £395 per room</h5>
                            <ul className="list my-4">
                                <li>Initial Consultation</li>
                                <li>Inspiration Boards to Capture Design Direction</li>
                                <li>2D Design Concepts</li>
                                <li>Multiple Space Layout Options</li>
                                <li>Accessory Suggestions</li>
                                <li>Your Own Sourcing List Portal</li>
                                <li>3D Photorealistic Design Visualisations</li>
                                <li>Designer Notes &amp; Collaboration</li>
                                <li>1 Month Post Design Support</li>
                            </ul>
                            <RouterLink to="/enquire">
                                <Button className="button mb-4">Enquire now <i className="bi bi-arrow-right" /></Button>
                            </RouterLink><br />
                            <RouterLink to="/how-it-works">
                                <Button className="button-sec">Explore How It Works <i className="bi bi-arrow-right" /></Button>
                            </RouterLink>
                        </Col>
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
                                        <p style={{fontFamily: 'Licorice', fontSize: '3rem'}}>Kerry</p>
                                        <p>Interior Designer</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Testimonials />
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
                                    <Button className="button" href="/enquire">enquire about design service <i className="bi bi-arrow-right" /></Button>
                                </ RouterLink>
                            </div>
                        </div>
                    </Row>
                </Container>
                <Container className="my-5">
                    <Row>
                        <video src="https://res.cloudinary.com/decorelm/video/upload/v1646587318/projects/Calming-Dining-And-Living-Room/Decorelm_p9vvzt.mp4" loop muted />
                    </Row>
                </Container>
                <div className="ourWorkTop">
                    <OurWork />
                </div>
            </div>
        )
    }
}
