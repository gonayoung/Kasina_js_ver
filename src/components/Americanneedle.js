import React from 'react';
import data from '../db/item.js';
import '../css/Americanneedle.css';
import { useNavigate } from 'react-router-dom';

const Americanneedle = () => {
    const mainItem = ["/img/52.png"];
    const sideItems = data.slice(28, 32); //오른쪽 이미지
      const navigate = useNavigate(); 

  return (
    <div className="american-wrap">
      <div className="american-left">
              <div className="american-header">
                  <strong>AMERICAN NEEDLE</strong>
              </div>
              <img src={process.env.PUBLIC_URL +"/img/52.png"} />
          
      </div>

      <div className="american-right">
  {sideItems.map((item, index) => (
          <div
          className="img-box"
          key={index}
          onClick={() => navigate(`/detail/${item.id}`)} // 클릭 시 상세페이지 넘어감
          style={{ cursor: 'pointer' }}
        >
      <img src={process.env.PUBLIC_URL + item.product_img} alt={item.title} />
        <div className='american_text'>
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

export default Americanneedle;


