import React, { useState } from 'react';

import Lightbox from '../../Lightbox/Lightbox.jsx';

const Service = (props) => {


    const [showLightBox, setShowLightbox] = useState('false')

    const turnLightOn = () => {
        setShowLightbox('true')
    }

    const turnLightOff = () => {
        setShowLightbox('false')
    }


    return (
        <div className='Service'>

            <div 
                className="image-container"
                style={ { backgroundImage: `url(${props.singleService.image})` } }
            ></div>
            <h3>{props.singleService.title}</h3>
            <Lightbox
                show={showLightBox}
                turnLightOff={turnLightOff}
                imageURL={props.singleService.image}
                imageALT={props.singleService.title}

            />
        </div>
    );
}

export default Service;