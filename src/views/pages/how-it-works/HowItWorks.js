import React, { useEffect, useState } from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'

import Testimonial from '../../sections/Testimonials';
import AboutUs from '../../sections/AboutUs';
import OurWork from '../../sections/OurWork';
import EnquireForm from '../enquire/EnquireForm';
import "./howItWorks.css";
import FooterCTA from '../../components/FooterCTA';

import {
    Link as RouterLink
} from 'react-router-dom'


function HowItWorks() {
    const [showCta, setShowCta] = useState(false)
    useEffect(() => {
        window.scrollTo(0, 60)
        setTimeout(function () { setShowCta(true); }, 3000);
    }, []);
    return (
        <div>
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
                                <h3>About You &amp; Your Project Goals</h3>
                                <p>We’ll start by viewing images &amp; measurements of your room then arrange a chat to understand your unique preferences and requirements.</p>
                                <hr />
                            </div>
                        </Col>
                        <Col md={6} className="d-flex m-0 g-0">
                            <img src="https://res.cloudinary.com/decorelm/image/upload/c_scale,w_800/v1646078628/services/The_Details_-_01-min_bgbjvr.webp" className="grow-img align-self-center" />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} xs={{ order: 1, span: 12 }} md={{ order: 12, span: 6 }} className="d-flex m-width m-0 g-0">
                            <img src="https://res.cloudinary.com/decorelm/image/upload/c_scale,w_800/v1646078535/services/The_Direction_-_02-min_umotfv.webp" className="grow-img align-self-center ms-auto" />
                        </Col>
                        <Col md={6} xs={{ order: 12, span: 12 }} md={{ order: 1, span: 6 }} className="d-flex m-width m-0 g-0">
                            <div className="text-start align-self-center ms-auto step-text shadow bg-white w-100 p-5 m-0">
                                <h4 className="header-tag">step 02</h4>
                                <h3>The Design Direction</h3>
                                <p>Your designer, Kerry, will then present some initial ideas in an inspiration mood board to bring your ideas together &amp; guide the design’s direction.</p>
                                <p>You'll also get access to our unique design portal at this point.</p>
                                <hr className="mb-3" />
                                <a href="https://collaborate.decorelm.com/projects/624c1bcbbc18c3001695f7f7" className="button-blog" target="_blank">see example of design portal<i className="bi bi-arrow-right"></i></a>
                            </div>
                        </Col>
                    </Row>
                    <Row className="my-5">
                        <Col md={6} className="d-flex m-0 g-0">
                            <div className="text-start align-self-center ms-auto step-text shadow bg-white w-100 p-5 m-0">
                                <h4 className="header-tag">step 03</h4>
                                <h3>Receive Your Design Delivered</h3>
                                <p>You’ll receive a detailed design concept containing the room design, layout plans and designer’s notes in your own design portal.</p>
                                <hr className="mb-3" />
                                <a href="https://collaborate.decorelm.com/projects/624c1bcbbc18c3001695f7f7/rooms/624c1bf0bc18c3001695f800/designs" className="button-blog" target="_blank">see example of designs<i className="bi bi-arrow-right"></i></a>
                            </div>
                        </Col>
                        <Col md={6} className="d-flex m-0 g-0">
                            <img src="https://res.cloudinary.com/decorelm/image/upload/c_scale,w_800/v1646078534/services/The_Designs_-_03-min_u2fmy4.webp" className="grow-img align-self-center me-auto" />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} xs={{ order: 1, span: 12 }} md={{ order: 12, span: 6 }} className="d-flex m-0 g-0">
                            <img src="https://res.cloudinary.com/decorelm/image/upload/c_scale,w_800/v1646078534/services/Visualise_Explore-min_gql015.webp" className="grow-img align-self-center ms-auto" />
                        </Col>
                        <Col md={6} xs={{ order: 12, span: 12 }} md={{ order: 1, span: 6 }} className="d-flex m-0 g-0">
                            <div className="text-start align-self-center ms-auto step-text shadow bg-white w-100 p-5 m-0">
                                <h4 className="header-tag">step 04</h4>
                                <h3>Visualise &amp; Explore</h3>
                                <p>See your new space with a photo-realistic 3D tour that helps you visualise the spacing &amp; layout.</p>
                                <hr className="mb-3" />
                                <a href="https://collaborate.decorelm.com/projects/624c1bcbbc18c3001695f7f7/rooms/624c1bf0bc18c3001695f800/render" className="button-blog" target="_blank">see example of 3D render<i className="bi bi-arrow-right"></i></a>
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
                                <a href="https://collaborate.decorelm.com/projects/624c1bcbbc18c3001695f7f7/rooms/624c1bf0bc18c3001695f800" className="button-blog" target="_blank">see example of shopping list<i className="bi bi-arrow-right"></i></a>
                            </div>
                        </Col>
                        <Col md={6} className="d-flex m-0 g-0">
                            <img src="https://res.cloudinary.com/decorelm/image/upload/c_scale,w_800/v1646078533/services/Shop_the_Design-min_idkbxc.webp" className="grow-img align-self-center me-auto" />
                        </Col>
                    </Row>
                    <Row>
                        <div className="mt-3 text-center">
                            <h4 className="header-tag mb-4">partners</h4>
                            <img src="https://res.cloudinary.com/decorelm/image/upload/q_40/v1646070702/West_Elm_logo_lvejfg.webp" style={{ maxWidth: '150px' }} className="mx-3 my-2" /><img src="https://res.cloudinary.com/decorelm/image/upload/q_40/v1646070706/cox_rvthoh.webp" style={{ maxWidth: '150px' }} className="mx-3 my-2" /><img src="https://res.cloudinary.com/decorelm/image/upload/v1646084913/services/MadeLogo.2_kb39fb.svg" style={{ maxWidth: '150px' }} className="mx-3 my-2" /><img src="https://res.cloudinary.com/decorelm/image/upload/q_40/v1645987614/Lick_tkxlt6.webp" style={{ maxWidth: '120px' }} className="mx-3 my-2" /><img src="https://res.cloudinary.com/decorelm/image/upload/v1646078532/services/La_Redoute-min_zjmlea.webp" style={{ maxWidth: '150px' }} className="mx-3 my-2" />
                            <p className="mt-5">Plus 100's more...</p>
                        </div>
                    </Row>
                </div>
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
                                    <p>Contact us to learn more about recommended budget.</p>
                                </div>
                            </Col>
                        </Row>
                        <div className="my-3">
                            <h4 className="uppercase r-header">Want to ask us another question?</h4>
                            <RouterLink to="/enquire">
                                <Button className="button" href="/enquire">enquire now <i className="bi bi-arrow-right"></i></Button>
                            </ RouterLink>
                        </div>
                    </Row>
                </Container>
            </section>
        </div >
    )
}

export default HowItWorks;