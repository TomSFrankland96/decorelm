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
                <OurWork />
                <Container fluid style={{ backgroundColor: "#f8f7f38c" }} className="py-5">
                    <div className="w-75 mx-auto">
                        <Row>
                            <div className="title mx-auto text-center">
                                <h4 className="header-tag">how it works</h4>
                                <h1>Receive our expertise in a few simple steps</h1>
                                <p>Our online design service means you can access expert interior design for one flat fee.</p>
                            </div>
                        </Row>
                        <Row className="mt-2 mb-5">
                            <Col md={6} className="d-flex m-0 g-0">
                                <div className="text-start align-self-center ms-auto step-text shadow bg-white w-100 p-5 m-0">
                                    <h4 className="header-tag">step 01</h4>
                                    <h3>The Details</h3>
                                    <p>Send over visuals &amp; measurements of the room then meet your designer by phone, email or messaging to kick off the project.</p>
                                    <hr />
                                </div>
                            </Col>
                            <Col md={6} className="d-flex m-0 g-0">
                                <img src="https://res.cloudinary.com/decorelm/image/upload/v1644068538/decorelm-website/Mood_Board_x2bwzr.png" className="grow-img align-self-center" />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6} xs={{ order: 1, span: 12 }} md={{ order: 12, span: 6 }} className="d-flex m-width m-0 g-0">
                                <img src="https://res.cloudinary.com/decorelm/image/upload/v1644068538/decorelm-website/Mood_Board_x2bwzr.png" className="grow-img align-self-center ms-auto" />
                            </Col>
                            <Col md={6} xs={{ order: 12, span: 12 }} md={{ order: 1, span: 6 }} className="d-flex m-width m-0 g-0">
                                <div className="text-start align-self-center ms-auto step-text shadow bg-white w-100 p-5 m-0">
                                    <h4 className="header-tag">step 02</h4>
                                    <h3>Bring the ideas together</h3>
                                    <p>Your designer will present some mood boards &amp; inspiration images to bring your ideas together &amp; guide the design direction.</p>
                                    <hr />
                                </div>
                            </Col>
                        </Row>
                        <Row className="my-5">
                            <Col md={6} className="d-flex m-0 g-0">
                                <div className="text-start align-self-center ms-auto step-text shadow bg-white w-100 p-5 m-0">
                                    <h4 className="header-tag">step 03</h4>
                                    <h3>Receive your design plans</h3>
                                    <p>You'll get a detailed document containing the room layout plans, designer notes &amp; recommended furniture.</p>
                                    <hr />
                                </div>
                            </Col>
                            <Col md={6} className="d-flex m-0 g-0">
                                <img src="https://res.cloudinary.com/decorelm/image/upload/v1644068538/decorelm-website/Mood_Board_x2bwzr.png" className="grow-img align-self-center me-auto" />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6} xs={{ order: 1, span: 12 }} md={{ order: 12, span: 6 }} className="d-flex m-0 g-0">
                                <img src="https://res.cloudinary.com/decorelm/image/upload/v1644056772/decorelm-website/3D_Visualisation_ewv2mr.png" className="grow-img align-self-center ms-auto" />
                            </Col>
                            <Col md={6} xs={{ order: 12, span: 12 }} md={{ order: 1, span: 6 }} className="d-flex m-0 g-0">
                                <div className="text-start align-self-center ms-auto step-text shadow bg-white w-100 p-5 m-0">
                                    <h4 className="header-tag">step 04</h4>
                                    <h3>Visualise &amp; Explore</h3>
                                    <p>View your 3D visualisation of your room with the design implemented &amp; receive access to your own sourcing list with the items used in the design.</p>
                                    <a href="https://floorplanner.com/360vr/54038742-1633091109" className="button-blog" target="_blank">see example <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </Col>
                        </Row>
                        <Row className="my-5">
                            <Col md={6} className="d-flex m-0 g-0">
                                <div className="text-start align-self-center ms-auto step-text shadow bg-white w-100 p-5 m-0">
                                    <h4 className="header-tag">step 05</h4>
                                    <h3>Shop the Design</h3>
                                    <p>Use the sourcing list to swiftly click into each item &amp; order in your own time! You'll also receive 30 days post design support from this point.</p>
                                    <a href="https://res.cloudinary.com/decorelm/image/upload/v1644059149/decorelm-website/Shopping_List_onlfkr.png" className="button-blog" target="_blank">see example <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </Col>
                            <Col md={6} className="d-flex m-0 g-0">
                                <img src="https://res.cloudinary.com/decorelm/image/upload/v1643830330/decorelm-website/Screenshot_2022-02-02_at_19.30.31_eykwka.png" className="grow-img align-self-center me-auto" />
                            </Col>
                        </Row>
                    </div>
                </Container>
                <Container fluid className="container-img">
                    <Row className="mb-5 py-5 boxes mx-auto">
                        <Col md={6}>


                        </Col>
                        <Col md={6}>
                            <h4 className="header-tag">one flat fee</h4>
                            <h2>Starting at £395, work with us to create a home you love.</h2>
                            <div>
                                <h3>happiness guarantee</h3>
                                <p>We work with you until you are completely happy with the designs!</p>
                            </div>
                            <div>
                                <h3>flexibility</h3>
                                <p>Receive multiple design &amp; furniture options with your design, all within your budget.</p>
                            </div>
                            <div>
                                <h3>support</h3>
                                <p>You'll receive 30 days post design support to answer any questions you may have.</p>
                            </div>
                            <RouterLink to="/enquire">
                                <Button className="button" href="/enquire">start your design project <i className="bi bi-arrow-right" /></Button>
                            </ RouterLink>
                        </Col>
                    </Row>
                </Container>
                <Testimonial />
                <Container fluid>
                    <Row className="green banner">
                        <Col md={7} className="d-flex">
                            <div className="text-start align-self-center mx-auto text-white p-4 py-5 step-text">
                                <h4 className="header-tag">get started</h4>
                                <h1>Arrange a free call today to get your project quote.</h1>
                                <p>We typically book up fast &amp; recommend booking your project ahead of time.</p>
                                <RouterLink to="/enquire">
                                    <Button className="button-sec" href="/enquire">start your design project <i className="bi bi-arrow-right"></i></Button>
                                </ RouterLink>
                            </div>
                        </Col>
                        <Col md={5} className="">
                            <img src="https://res.cloudinary.com/decorelm/image/upload/v1644053752/decorelm-website/IMG_4606_sd5w9w.jpg" />
                        </Col>
                    </Row>
                </Container>
                <section>
                    <Container>
                        <Row>
                            <div className="my-5">
                                <h4 className="header-tag">FAQs</h4>
                                <h2>Have any questions?</h2>
                            </div>
                            <Row>
                                <Col lg={3} xs={6} className="border-start border-end">
                                    <div className="my-5">
                                        <h4 className="uppercase r-header mb-3">How much does it cost for each room?</h4>
                                        <p>We charge a simple flat fee per room, starting from £395.</p>
                                    </div>
                                </Col>
                                <Col lg={3} xs={6} className="border-end mobile-bd">
                                    <div className="my-5">
                                        <h4 className="uppercase r-header mb-3">How long does it take for each room?</h4>
                                        <p>A typical room design can take anywhere between 1-2 weeks.</p>
                                    </div>
                                </Col>
                                <Col lg={3} xs={6} className="border-start border-end">
                                    <div className="my-5">
                                        <h4 className="uppercase r-header mb-3">What if we don't like the designs?</h4>
                                        <p>We embrace individuality &amp; work with you until you're happy.</p>
                                    </div>
                                </Col>
                                <Col lg={3} xs={6}>
                                    <div className="my-5">
                                        <h4 className="uppercase r-header mb-3">How much budget do I need?</h4>
                                        <p>We're flexible around what budget you have, contact us to learn more.</p>
                                    </div>
                                </Col>
                            </Row>
                            <div className="my-5">
                                <h4 className="uppercase r-header">Want to ask us another question?</h4>
                                <RouterLink to="/contact">
                                    <Button className="button" href="/contact">contact us now <i className="bi bi-arrow-right"></i></Button>
                                </ RouterLink>
                            </div>
                        </Row>
                    </Container>
                </section>
                <AboutUs />
            </div >
        )
    }
}
