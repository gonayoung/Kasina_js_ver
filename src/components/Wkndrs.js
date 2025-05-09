import React from "react";
import data from "../db/item.js";
import "../css/Wkndrs.css";
import { useNavigate } from 'react-router-dom';

const Wkndrs = () => {
  const mainItem = ["/img/32.png"]; // 메인 이미지
  const sideItems = data.slice(16, 20); // 리스트 4개
  const navigate = useNavigate();

  return (
    <div className="wkndrs-wrap">
      <div className="wkndrs-left">
        <div className="wkndrs-header">
          <strong>WKNDRS</strong>
        </div>

        <div className="grid-4">
          {sideItems.map((item, i) => (
            <div
              className="img-box"
              key={i} 
              onClick={() => navigate(`/detail/${item.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <img src={process.env.PUBLIC_URL + item.product_img} />
              
              <div className="text-wrap">
                <h5>{item.title}</h5>
                <p>{item.sub_title}</p>
                <div className="price-wrap">
                  <p className="price">₩{parseInt(item.price).toLocaleString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 오른쪽 - 메인 이미지 */}
      <div className="wkndrs-right">
        <img src={process.env.PUBLIC_URL + "/img/37.png"} />
        <div className="info">
          <strong>{mainItem.title}</strong>
          <p>{mainItem.sub_title}</p>
          <div className="price">{/* 가격 필요 시 여기에 */}</div>
        </div>
      </div>
    </div>
  );
};

export default Wkndrs;
