import React from 'react';
import '../css/Outfits.css';

const Outfits = () => {
    return (
        <div className="fit_outer">
            <h3>OUTFITS</h3>
            <div className='fit_wrap'>
                <img src= {process.env.PUBLIC_URL +'/img/18.png'} />
            </div>
        </div>
    );
};

export default Outfits;