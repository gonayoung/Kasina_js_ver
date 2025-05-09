import React from 'react';
import '../css/Archives.css';

const Archives = () => {
    return (
        <div className="ar_outer">
            <h3 className="ar_title">ARCHIVE</h3> 
            <div className='ar_wrap'>
                <div className='ar_1'>
                    <img src= {process.env.PUBLIC_URL +'/img/53.png'}/>
                    <strong>UMBRO X KASINA Recap</strong>
                </div>
                <div className='ar_1'>
                    <img src= {process.env.PUBLIC_URL +'/img/54.png'} />
                    <strong>Kasina CCC : HIKING</strong>
                </div>
                <div className='ar_1'>
                    <img src={process.env.PUBLIC_URL +'/img/55.png'} />
                    <strong>HA:US by MCM x Kasina RECAP</strong>
                </div>
            </div>
        </div>
    );
};

export default Archives;


