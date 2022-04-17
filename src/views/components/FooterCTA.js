import React from 'react'

import {
    Container,
    Row,
    Col,
    Navbar,
    Button
} from "react-bootstrap"

import {
    Link as RouterLink
} from "react-router-dom";

import "./FooterCTA.css"

function FooterCTA({ show }) {
    return (
        <Navbar fixed="bottom" className={`bg-white shadow-lg ${show === true ? 'footer-cta' : `hide`}`}>
            <Container>
                <Row className="mx-auto text-center">
                    <div className="d-flex justify-content-center">
                        <RouterLink to="/enquire">
                            <Button className="footer-cta-button">Enquire about design service <i class="bi bi-arrow-right-short"></i></Button>
                        </RouterLink>
                    </div>
                </Row>
            </Container>
        </Navbar>
    )
}

export default FooterCTA;
