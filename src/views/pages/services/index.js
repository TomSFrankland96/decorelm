import React, { Component } from 'react'
import Header from '../../sections/Header'
import Main from './Main'

export default class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "services"
          };
    }
    componentDidMount() {
        window.scrollTo(0, 60)
      }
    render() {
        return (
            <div>
                <Header
                    img={"https://res.cloudinary.com/decorelm/image/upload/v1644053782/decorelm-website/IMG_4607_cu0ecd.jpg"}
                    imgText={
                        "Home Design Service"
                    }
                    tag={
                        "collaborate online with us"
                    }
                    header={
                        "Our online interior design service brings your dream home to life."
                    }
                    subheader={
                        "Whether you're refreshing a room or redesigning your entire home, collaborate with a professional interior design online to get your dream home for one flat fee."
                    }
                    page={this.state.page}
                />
                <Main />
            </div>
        )
    }
}
