import React, { Component, useEffect } from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'

import Testimonial from '../../sections/Testimonials'
import AboutUs from '../../sections/AboutUs'
import DarkBox from '../../components/DarkBox'
import OurWork from "../../sections/OurWork"
import "./Main.css"

import {
    Link as RouterLink
} from 'react-router-dom'

import FadeIn from '../../components/FadeIn';


export default class Main extends Component {
    render() {
        return (
            <div>
                <div className="ourWorkTop">
                    <OurWork />
                </div>
                <Container fluid style={{ backgroundColor: "#f8f7f38c" }} className="py-5">
                    <div className="steps mx-auto">
                        <Row>
                            <div className="title mx-auto text-center">
                                <h4 className="header-tag">how it works</h4>
                                <h1>Our unique &amp; trusted process puts you at the core.</h1>
                            </div>
                        </Row>
                        <Row className="mt-2 mb-5">
                            <Col md={6} className="d-flex m-0 g-0">
                                <div className="text-start align-self-center ms-auto step-text shadow bg-white w-100 p-5 m-0">
                                    <h4 className="header-tag">step 01</h4>
                                    <h3>The Details</h3>
                                    <p>We’ll start by viewing images &amp; measurements of your room then arrange a chat to understand your unique preferences and requirements</p>
                                    <hr />
                                </div>
                            </Col>
                            <Col md={6} className="d-flex m-0 g-0">
                                <img src="https://res.cloudinary.com/decorelm/image/upload/v1645820007/decorelm-website/Dir_epecb4.png" className="grow-img align-self-center" />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6} xs={{ order: 1, span: 12 }} md={{ order: 12, span: 6 }} className="d-flex m-width m-0 g-0">
                                <img src="https://res.cloudinary.com/decorelm/image/upload/v1645819703/decorelm-website/Direction_cved8r.png" className="grow-img align-self-center ms-auto" />
                            </Col>
                            <Col md={6} xs={{ order: 12, span: 12 }} md={{ order: 1, span: 6 }} className="d-flex m-width m-0 g-0">
                                <div className="text-start align-self-center ms-auto step-text shadow bg-white w-100 p-5 m-0">
                                    <h4 className="header-tag">step 02</h4>
                                    <h3>The Direction</h3>
                                    <p>Your designer, Kerry, will then present some initial ideas in an inspiration mood board to guide the design’s direction.</p>
                                    <hr />
                                </div>
                            </Col>
                        </Row>
                        <Row className="my-5">
                            <Col md={6} className="d-flex m-0 g-0">
                                <div className="text-start align-self-center ms-auto step-text shadow bg-white w-100 p-5 m-0">
                                    <h4 className="header-tag">step 03</h4>
                                    <h3>The Designs</h3>
                                    <p>You’ll receive a detailed design concept containing the room design, layout plans and designer’s notes.</p>
                                    <hr className="mb-3" />
                                    <a href="https://floorplanner.com/360vr/54038742-1633091109" className="button-blog" target="_blank">see example <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </Col>
                            <Col md={6} className="d-flex m-0 g-0">
                                <img src="https://res.cloudinary.com/decorelm/image/upload/v1645819448/decorelm-website/Design_brx5yh.png" className="grow-img align-self-center me-auto" />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6} xs={{ order: 1, span: 12 }} md={{ order: 12, span: 6 }} className="d-flex m-0 g-0">
                                <img src="https://res.cloudinary.com/decorelm/image/upload/v1645819370/decorelm-website/Visualise_r5c4vg.png" className="grow-img align-self-center ms-auto" />
                            </Col>
                            <Col md={6} xs={{ order: 12, span: 12 }} md={{ order: 1, span: 6 }} className="d-flex m-0 g-0">
                                <div className="text-start align-self-center ms-auto step-text shadow bg-white w-100 p-5 m-0">
                                    <h4 className="header-tag">step 04</h4>
                                    <h3>Visualise &amp; Explore</h3>
                                    <p>See your new space with a photo-realistic 3D tour that helps you visualise the spacing &amp; layout.</p>
                                    <hr className="mb-3" />
                                    <a href="https://floorplanner.com/360vr/54038742-1633091109" className="button-blog" target="_blank">see example <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </Col>
                        </Row>
                        <Row className="my-5">
                            <Col md={6} className="d-flex m-0 g-0">
                                <div className="text-start align-self-center ms-auto step-text shadow bg-white w-100 p-5 m-0">
                                    <h4 className="header-tag">step 05</h4>
                                    <h3>Shop the Design</h3>
                                    <p>Remove the stress of finding the furnishings &amp; order in your own time! You'll also receive 30 days post design support from this point.</p>
                                    <hr className="mb-3" />
                                    <a href="https://res.cloudinary.com/decorelm/image/upload/v1644059149/decorelm-website/Shopping_List_onlfkr.png" className="button-blog" target="_blank">see example <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </Col>
                            <Col md={6} className="d-flex m-0 g-0">
                                <img src="https://res.cloudinary.com/decorelm/image/upload/v1643830330/decorelm-website/Screenshot_2022-02-02_at_19.30.31_eykwka.png" className="grow-img align-self-center me-auto" />
                            </Col>
                        </Row>
                        <Row>
                            <div className="mt-3 text-center">
                                <h4 className="header-tag mb-4">partners</h4>
                                <img src="https://www.westelm.co.uk/we-uk-18-2/extensions/PS/Theme_Westelm/18.2.4/img/West_Elm_logo.svg" style={{ maxWidth: '150px' }} className="mx-3 my-2" /><img src="https://www.coxandcox.co.uk/static/version1645181634/frontend/CoxAndCox/default/en_GB/images/logo.svg" style={{ maxWidth: '150px' }} className="mx-3 my-2" /><img src="https://media.made.com/mws-assets/images/MadeLogo.2.svg" style={{ maxWidth: '150px' }} className="mx-3 my-2" /><img src="https://res.cloudinary.com/decorelm/image/upload/v1645563175/decorelm-website/nkuku_sjosad.png" style={{ maxWidth: '150px' }} className="mx-3 my-2" /><img src="https://res.cloudinary.com/decorelm/image/upload/v1645563331/decorelm-website/la-redoute-1_dh8t5t.svg" style={{ maxWidth: '150px' }} className="mx-3 my-2" />
                                <p className="mt-5">Plus 100's more...</p>
                            </div>
                        </Row>
                    </div>
                </Container>
                <Container fluid className="container-img">
                    <Row className="py-5 mx-auto">
                        <div className="mx-auto text-center my-3 cta-box">
                            <h4 className="header-tag">one flat fee</h4>
                            <h2>Starting at £395, work with us to create a home you love.</h2>
                            <Row className="my-3">
                                <Col md={6}>
                                    <div>
                                        <h3 className="uppercase cta-header">happiness guarantee</h3>
                                        <p>We work with you until you are completely delighted with the designs.</p>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div>
                                        <h3 className="uppercase cta-header">flexibility</h3>
                                        <p>Receive multiple design &amp; furniture options with your design, all within your budget.</p>
                                    </div>
                                </Col>
                            </Row>
                            <div className="text-center my-3">
                                <RouterLink to="/enquire">
                                    <Button className="button" href="/enquire">start your design project <i className="bi bi-arrow-right" /></Button>
                                </ RouterLink>
                            </div>
                        </div>
                    </Row>
                </Container>
                <Testimonial />
                <Container fluid style={{ backgroundColor: "#f8f7f3" }}>
                    <Row className="banner">
                        <Col md={6} className="d-flex">
                            <div className="text-start align-self-center mx-auto py-5 step-text w-75">
                                <h4 className="header-tag">get started</h4>
                                <h1>Arrange a free call today to get your project quote.</h1>
                                <p>We typically book up fast &amp; recommend booking your project ahead of time.</p>
                                <RouterLink to="/enquire">
                                    <Button className="button" href="/enquire">start your design project <i className="bi bi-arrow-right"></i></Button>
                                </ RouterLink>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="cta-img"></div>
                        </Col>
                    </Row>
                </Container>
                <section>
                    <Container>
                        <Row>
                            <div>
                                <h4 className="header-tag">FAQs</h4>
                                <h2>Have any questions?</h2>
                            </div>
                            <Row className="my-4">
                                <Col lg={3} xs={12}>
                                    <div className="my-2 border p-4">
                                        <h4 className="uppercase r-header mb-3">How much does it cost for each room?</h4>
                                        <p>We charge a simple flat fee per room, starting from £395.</p>
                                    </div>
                                </Col>
                                <Col lg={3} xs={12}>
                                    <div className="my-2 border mx-1 p-4">
                                        <h4 className="uppercase r-header mb-3">How long does it take for each room?</h4>
                                        <p>A typical room design can take anywhere between 7-14 days.</p>
                                    </div>
                                </Col>
                                <Col lg={3} xs={12}>
                                    <div className="my-2 border p-4">
                                        <h4 className="uppercase r-header mb-3">What if we don't like the designs?</h4>
                                        <p>We embrace individuality &amp; work with you until you're happy.</p>
                                    </div>
                                </Col>
                                <Col lg={3} xs={12}>
                                    <div className="my-2 border p-4">
                                        <h4 className="uppercase r-header mb-3">How much budget do I need?</h4>
                                        <p>We're flexible around what budget you have, contact us to learn more.</p>
                                    </div>
                                </Col>
                            </Row>
                            <div className="my-3">
                                <h4 className="uppercase r-header">Want to ask us another question?</h4>
                                <RouterLink to="/contact">
                                    <Button className="button" href="/contact">contact us now <i className="bi bi-arrow-right"></i></Button>
                                </ RouterLink>
                            </div>
                        </Row>
                    </Container>
                </section>
                <div className="ourWorkBottom">
                    <OurWork />
                </div>
                <AboutUs />
            </div >
        )
    }
}
