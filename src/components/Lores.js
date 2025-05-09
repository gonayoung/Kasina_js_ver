import React from 'react';
import data from '../db/item.js';
import '../css/Lores.css';
import { useNavigate } from 'react-router-dom'; // 네이게이터 추가

const Lores = () => {

  const mainItem = {
    product_img: "/img/32.png",};
  const sideItems = data.slice(12, 16);
  const navigate = useNavigate(); //네비게이터 호출

  return (
    <div className="lores-wrap">
      <div className="lores-left">
        <div className="lores-header">
          <strong>LORES</strong>
        </div>
        <img src={process.env.PUBLIC_URL + mainItem.product_img} />
        <div className="info">
          <strong>{mainItem.title}</strong>
          <p>{mainItem.sub_title}</p>
        </div>
      </div>

      <div className="lores-right">
        {sideItems.map((item, index) => (
          <div
          className="img-box"
          key={index}
          onClick={() => navigate(`/detail/${item.id}`)} // 클릭 시 상세페이지 넘어감
          style={{ cursor: 'pointer' }}
        >
            <img 	src={process.env.PUBLIC_URL + item.product_img} />
            <div className="lores_text">
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

export default Lores;