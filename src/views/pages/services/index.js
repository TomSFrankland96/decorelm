import React, { Component } from 'react'
import Header from '../../sections/Header'
import Main from './Main'

import ReactGA from 'react-ga';

export default class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "services"
          };
    }
    componentDidMount() {
        window.scrollTo(0, 60)
        ReactGA.pageview(window.location.pathname);
      }
    render() {
        return (
            <div>
                <Header
                    img={"https://res.cloudinary.com/decorelm/image/upload/c_scale,w_1300/v1646079033/services/Services_Page_Header-min_zuomjw.webp"}
                    imgText={
                        "Home Design Service"
                    }
                    tag={
                        "collaborate with us"
                    }
                    header={
                        "5 Star Rated, Trusted Interior Design Service"
                    }
                    subheader={
                        "Finding it hard to overcome the design challenges of home design? Collaborate with us online where we can transform your home for one flat fee."
                    }
                    page={this.state.page}
                />
                <Main />
            </div>
        )
    }
}
