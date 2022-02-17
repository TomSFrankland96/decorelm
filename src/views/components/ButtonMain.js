import React, { Component } from 'react'
import {
    Button,
}
    from 'react-bootstrap';
import {
    Route,
    Routes
} from "react-router-dom";

export default class ButtonMain extends Component {
    render() {
        return (
            <Routes>
                <Route path={this.props.path}>
                    {/* <Button className="button" onClick={handleClick}>{this.props.content} <i class="bi bi-arrow-right-short"></i></Button> */}
                </Route>
            </Routes>
        )
    }
}
