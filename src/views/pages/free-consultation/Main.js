import React, { Component } from 'react';

import {
    Col,
    Container,
    Row,
    Button
} from 'react-bootstrap';

import Calendly from '../../components/Calendly';

import './Main.css'


export default class Main extends Component {
    render() {
        return (
            <Container fluid style={{backgroundColor: "#f8f7f3"}}>
               <Row>
               <Col xs={12} lg={6}>
                 <div className="p-5">
                    <h1>Our online interior design service allows you to turn your ideas into professional designs.</h1>
                    <ul style={{listStyle: "none", fontSize: "1.2rem"}} className="my-5">
                      <li>✓ Professional bespoke designs</li>
                      <li>✓ Oriented around your design tastes</li>
                      <li>✓ Fast Delivery and only one flat fee with no hidden charges</li>
                    </ul>
                  </div>
                </Col>
                <Col xs={12} lg={6}>
                  <img className="p-4" src="https://res.cloudinary.com/decorelm/image/upload/c_scale,w_800/v1649864230/Decorelm_Living_Room_kfv2kc.webp" />
                </Col>
              </Row>
              <Row>
                <Col xs={12} lg={6}>
                  <img className="p-4" src="https://res.cloudinary.com/decorelm/image/upload/v1652087543/Free_COnsultation_1_c3u0wd.webp" />
                </Col>
                <Col xs={12} lg={6} className="d-flex">
                  <h1 className="align-self-center p-5" id="large">Book your free consultation below to learn more about how we can help you</h1>
                </Col>
              </Row>
              <Row>
                <Calendly />
              </Row>
              <Row>
                <h3 className="align-self-center p-5 text-center">Prefer to email? Send us an email to <a href="mailto:enquiries@decorelm.com" style={{color: "#494949"}}>enquiries@decorelm.com</a></h3>
              </Row>
            </Container>
        )
    }
}
