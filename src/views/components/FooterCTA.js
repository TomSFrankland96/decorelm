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
                        <RouterLink to="/enquire" className="mx-2 w-100">
                            <Button className="footer-cta-button"><i class="bi bi-telephone"></i> <a href="tel:01772298588">01772 298588</a></Button>
                        </RouterLink>
                    </div>
                </Row>
            </Container>
        </Navbar>
    )
}

export default FooterCTA;
