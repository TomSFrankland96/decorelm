import React, { useEffect, useState } from 'react';
import Header from '../../sections/Header';
import Main from './Main.js';
import FooterCTA from "../../components/FooterCTA";

function Services() {
    const [showCta, setShowCta] = useState(false)
    useEffect(() => {
        window.scrollTo(0, 60)
        setTimeout(function () { setShowCta(true); }, 3000);
    }, []);
    return (
        <div>
            <Header
                img={"https://res.cloudinary.com/decorelm/image/upload/c_scale,w_1300/v1646079033/services/Services_Page_Header-min_zuomjw.webp"}
                imgText={
                    ""
                }
                tag={
                    "collaborate with us"
                }
                header={
                    "Award-Winning Residential E-Design Service"
                }
                subheader={
                    "Finding it hard to overcome the challenges of home design? Collaborate with us to transform your home swiftly & for one flat fee."
                }
                page={"services"}
                line={
                    "line-in-middle mx-auto"
                }
            />
            <Main />
            <FooterCTA
                show={showCta}
            />
        </div>
    )
}

export default Services;