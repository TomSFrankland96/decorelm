import React, { useEffect, useState } from 'react';
import Header from '../../sections/Header';
import Main from './Main.js';
import FooterCTA from "../../components/FooterCTA";

function Ad() {
    const [showCta, setShowCta] = useState(false)
    useEffect(() => {
        window.scrollTo(0, 60)
        setTimeout(function () { setShowCta(true); }, 8000);
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
                    "Multi Award-Winning Residential E-Design Service"
                }
                subheader={
                    "Feeling the pain choosing the right colours, furniture and room layouts? Collaborate with us to design, source & complete your home for one flat fee."
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

export default Ad;