import React, { Component } from 'react';
import {
    Button,
    Card,
} from 'react-bootstrap'
import {
    Link as RouterLink
} from 'react-router-dom'


export default class Single extends Component {
    render() {
        return (
            <Card style={{ border: 'none' }} className="text-start mb-5">
                <RouterLink to={this.props.link}>
                    <Card.Img variant="top" src={this.props.img} />
                </RouterLink>
                <Card.Body className="p-0">
                    <Card.Title className="pt-2">
                        <h3 className="blog-tag">{this.props.titleTag}</h3>
                        <h2 className="blog-header">{this.props.title}</h2>
                    </Card.Title>
                    <RouterLink to={this.props.link}>
                        <a className="button-blog">view more <i class="bi bi-arrow-right"></i></a>
                    </RouterLink>
                </Card.Body>
            </Card>
        )
    }
}
