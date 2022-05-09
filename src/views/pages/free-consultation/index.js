import React, { useEffect, useState } from 'react';
import Header from '../../sections/Header';
import Main from './Main.js';

function FreeConsultation() {
    return (
        <div>
            <Header
                img={"https://res.cloudinary.com/decorelm/image/upload/c_scale,w_1400/v1649864230/Decorelm_Living_Room_kfv2kc.webp"}
                tag={
                    "collaborate with us"
                }
                header={
                    "Transform your house into your dream home for one flat fee"
                }
                subheader={
                    "Are you decorating your home but struggling to choose the right colours, furniture & room layouts? Collaborate with us to make your home beautiful, swiftly & with no hidden charges."
                }
                line={
                    "line-in-middle mx-auto"
                }
                page={"ad"}
            />
            <Main />
        </div>
    )
}

export default FreeConsultation;