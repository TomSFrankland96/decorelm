import React, { Component } from 'react'
import './DarkBox.css'

export default class DarkBox extends Component {
    render() {
        return (
            <div className={`DarkBox shadow d-flex text-center flex-column ${this.props.class}`}>
                <div className="overlay p-5">
                    <h3 className="uppercase box-header my-4">{this.props.header}</h3>
                    <hr className="line mb-4" />
                    <p className="box-text">{this.props.content}</p>
                </div>
            </div>
        )
    }
}
