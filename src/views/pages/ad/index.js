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
                img={"https://res.cloudinary.com/decorelm/image/upload/c_scale,w_1000/v1649864230/Decorelm_Living_Room_kfv2kc.webp"}
                imgText={
                    ""
                }
                tag={
                    "collaborate with us"
                }
                header={
                    "Transform your house into your dream home for one flat fee"
                }
                subheader={
                    "Are you struggling to choose the right colours, furniture & room layouts? Collaborate with us to make your home beautiful, swiftly & with no hidden charges."
                }
                page={"services"}
                line={
                    "line-in-middle mx-auto"
                }
            />
            <Main />
        </div>
    )
}

export default Ad;