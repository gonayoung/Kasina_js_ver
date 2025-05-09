import React from 'react';
import data from '../db/item.js';
import '../css/Lockheedmartin.css';
import { useNavigate } from 'react-router-dom';

const Lockheedmartin = () => {
    const mainItem = ["/img/42.png"];
    const sideItems = data.slice(20, 24); //오른쪽 이미지
    const navigate = useNavigate();

  return (
    <div className="lock-wrap">
      <div className="lock-left">
              <div className="lock-header">
                  <strong>LOCKHEEDMARTIN</strong>
              </div>
              <img src= {process.env.PUBLIC_URL +"/img/42.png"} />

      </div>

      <div className="lock-right">
  {sideItems.map((item, index) => (
          <div
          className="img-box"
          key={index}
          onClick={() => navigate(`/detail/${item.id}`)} // 클릭 시 상세페이지 넘어감
          style={{ cursor: 'pointer' }}
        >
      <img src={process.env.PUBLIC_URL + item.product_img} alt={item.title} />
        <div className='lock_text'>
            <h5 className="brand">{item.title}</h5>
            <p className="subtitle">{item.sub_title}</p>
            <div className="price-box">
            <p className="price">₩{parseInt(item.price).toLocaleString()}</p>
        </div>
      </div>
    </div>
  ))}
</div>
    </div>
  );
};

export default Lockheedmartin;
