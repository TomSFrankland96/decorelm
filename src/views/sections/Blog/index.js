import React, { Component } from 'react';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap'

import Single from './Single'

export default class OurWork extends Component {
    render() {
        return (
            <section className="pb-5">
                <Container>
                    <div className="border-top border-bottom py-3">
                        <h3 className="r-header uppercase m-0">
                            blog
                        </h3>
                    </div>
                    <Row>
                        <Col md={6}>
                            <Row>
                                <Col md={6}>
                                    <Single
                                        img={"https://res.cloudinary.com/decorelm/image/upload/v1646082258/blog/Home-Office_a5yfkj.png"}
                                        titleTag={"design tips"}
                                        title={"Home Office"}
                                        description={"With many more hours to be spent at home..."}
                                        link={"https://blog.decorelm.com/home-office/"}
                                    />
                                </Col>
                                <Col md={6}>
                                    <Single
                                        img={"https://res.cloudinary.com/decorelm/image/upload/v1646082258/blog/Top-3-Home-Interior-Trends-2022_rhenzn.png"}
                                        titleTag={"inspiration"}
                                        title={"Top 3 Home Interior Trends for 2022"}
                                        description={"The new year is here and that means it’s..."}
                                        link={"https://blog.decorelm.com/top-3-home-interior-trends-for-2022/"}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Single
                                        img={"https://res.cloudinary.com/decorelm/image/upload/v1646082257/blog/Best-Sustainable-Homeware-Brands-In-The-UK_fq3sz8.png"}
                                        titleTag={"eco edit"}
                                        title={"Best Sustainable Homeware Brands in the UK"}
                                        description={"From planting trees to Fair Trade principles, these UK brands have put sustainabiliy..."}
                                        link={"https://blog.decorelm.com/best-sustainable-homeware-brands-in-the-uk/"}
                                    />
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6}>
                            <Row>
                                <Col md={6}>
                                    <Single
                                        img="https://res.cloudinary.com/decorelm/image/upload/v1646082257/blog/Tips-For-A-More-Sustainable-Christmas_ntkcgw.png"
                                        titleTag={"design tips"}
                                        title={"Tips for a more sustainable Christmas"}
                                        description={"From natural decorations to gifts that won’t cost the earth...."}
                                        link={"https://blog.decorelm.com/tips-for-a-more-sustainable-christmas/"}
                                    />
                                </Col>
                                <Col md={6}>
                                    <Single
                                        img={"https://res.cloudinary.com/decorelm/image/upload/v1646082256/blog/5-Tips-To-Create-The-Perfect-Cosy-Space-For-The-Festive-Season_gdviic.png"}
                                        titleTag={"design tips"}
                                        title={"5 tips to create the perfect cosy space for the festive season."}
                                        description={"We’re getting ready to cosy up for Christmas time so here’s some simple tips that will bring..."}
                                        link={"https://blog.decorelm.com/decorating-your-home-this-christmas/"}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <Single
                                        img={"https://res.cloudinary.com/decorelm/image/upload/v1646082257/blog/How-To-Perfect-Still-Life-Arrangements_rqgpiu.png"}
                                        titleTag={"design tips"}
                                        title={"How To Perfect Still-Life Arrangements"}
                                        description={"When it comes to styling small areas of your home it can often become overwhelming..."}
                                        link={"https://blog.decorelm.com/how-to-perfect-still-life-arrangements/"}
                                    />
                                </Col>
                                <Col md={6}>
                                    <Single
                                        img={"https://res.cloudinary.com/decorelm/image/upload/v1646082258/blog/Italy-Inspo_afxwfz.png"}
                                        titleTag={"inspiration"}
                                        title={"Italy Inspo"}
                                        description={"One of the most common problems I hear from clients is that they have no idea where to begin..."}
                                        link={"https://blog.decorelm.com/italy-inspo/"}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}