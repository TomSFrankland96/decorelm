import React, { Component } from 'react'
import './DarkBox.css'

export default class DarkBox extends Component {
    render() {
        return (
            <div className={`DarkBox d-flex flex-column`}>
                <h3 className="uppercase box-header my-4">{this.props.header}</h3>
                <p className="box-text">{this.props.content}</p>
                <hr className="line mt-auto" />
            </div>
        )
    }
}
