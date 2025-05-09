import React from 'react';
import '../css/Highlights.css';

const Highlights = () => {
    return (
        <div className="hi_outer">
            <h3>HIGHLIGHTS</h3>
            <div className='hi_wrap'>
                <div className='hi_1'>
                    <img src= {process.env.PUBLIC_URL +'/img/13.png'} />
                    <strong>NIKE NETHERLANDS 2004 REISSUE</strong>
                </div>
                <div className='hi_1'>
                    <img src= {process.env.PUBLIC_URL +'/img/14.png'} />
                    <strong>ON CLOUDEZONE 1</strong>
                </div>
                <div className='hi_1'>
                    <img src= {process.env.PUBLIC_URL +'/img/15.png'} />
                    <strong>ADIDAS X BRAIN DEAD</strong>
                </div>
            </div>
        </div>
    );
};

export default Highlights;