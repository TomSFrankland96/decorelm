import React, { Component } from 'react';
import {
    Button,
    Card
} from 'react-bootstrap'

import "./Blog.css"

export default class Single extends Component {
    render() {
        return (
            <>
                <Card style={{ border: 'none' }} className="text-start my-5">
                    <a href={this.props.link} className="blog-link">
                        <Card.Img variant="top" src={this.props.img} className="blog-img" />
                    </a>
                    <Card.Body className="my-3 p-0">
                        <a href={this.props.link} className="blog-link">
                            <Card.Title>
                                <h3 className="blog-tag">{this.props.titleTag}</h3>
                                <h2 className="blog-header">{this.props.title}</h2>
                            </Card.Title>
                        </a>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Button className="button-blog" href={this.props.link}>view more <i class="bi bi-arrow-right"></i></Button>
                    </Card.Body>
                </Card>
                <hr />
            </>
        )
    }
}