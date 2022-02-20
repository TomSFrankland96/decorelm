import React, { Component } from 'react';
import {
    Button,
    Card,
} from 'react-bootstrap'


export default class Single extends Component {
    render() {
        return (
            <Card style={{ border: 'none' }} className="text-start mb-5">
                <a href={this.props.link} target="_blank">
                    <Card.Img variant="top" src={this.props.img} />
                </a>
                <Card.Body className="p-0">
                    <Card.Title className="pt-2">
                        <h3 className="blog-tag">{this.props.titleTag}</h3>
                        <h2 className="blog-header">{this.props.title}</h2>
                    </Card.Title>
                    <Button className="button-blog" href={this.props.link} target="_blank">view more <i class="bi bi-arrow-right"></i></Button>
                </Card.Body>
            </Card>
        )
    }
}
