import React, { Component } from 'react'
import Header from '../../sections/Header'
import Main from './Main'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "home"
          };
    }
    componentDidMount() {
        window.scrollTo(0, 60)
      }
    render() {
        return (
            <div>
                <Header
                    img={"https://res.cloudinary.com/decorelm/image/upload/v1644055136/decorelm-website/istockphoto-1191254426-170667a_p4pxsn.jpg"}
                    imgText={
                        "Better Design, Better Planet"
                    }
                    tag={
                        "interior design studio"
                    }
                    header={
                        "Meticulous design that creates forever homes"
                    }
                    subheader={
                        "Welcome to Decorelm Design Studio! Encompassing better design, putting the client at the core & create homes for a lifetime."
                    }
                    page={this.state.page}
                />
                <Main />
            </div>
        )
    }
}
