import React from 'react';
import '../css/Launches.css';
import data from '../db/item.js';
import Timer from './Timer.js';
import { useNavigate } from 'react-router-dom';

function Launches() {
  const navigate = useNavigate();
  const selectedItems = data.slice(8, 12); // id 9~12

  return (
    <div className="launches-container">
      <div className="launches-header">
        <strong>LAUNCHES</strong>
        <span className="view-all">VIEW ALL</span>
      </div>

      <div className="launches-items">
        {selectedItems.map((item, index) => (
          <div
            className="launches-card"
            key={index}
            onClick={() => navigate(`/detail/${item.id}`)}
            style={{ cursor: 'pointer' }}
          >
            <img src={process.env.PUBLIC_URL + item.product_img} alt={item.title} />
            <h5 className="brand">{item.title}</h5>
            <p className="subtitle">{item.sub_title}</p>

            <div className="price-box">
              <p className="price">₩{parseInt(item.price).toLocaleString()}</p>
            </div>

            <div className="timer">
              <span>LAUNCH IN</span>
              <Timer hh={1} mm={0} ss={0} />
            </div>

            <div className="launch-btn">
              <button>UPCOMING</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Launches;
