import React from "react";
import data from "../db/item.js";
import "../css/Miloarchive.css";
import { useNavigate } from "react-router-dom"; 

const Miloarchive = () => {
  const navigate = useNavigate(); 
  const mainItem = ["/img/47.png"];
  const sideItems = data.slice(24, 28); // ID: 25~28 (모두 Detail2로 이동)

  return (
    <div className="milo-wrap">
      {/* 왼쪽 - 아이템 리스트 */}
      <div className="milo-left">
        <div className="milo-header">
          <strong>MILO ARCHIVE</strong>
        </div>

        <div className="grid-4">
          {sideItems.map((item, index) => (
            <div
              className="item-box"
              key={index}
              onClick={() => navigate(`/detail/${item.id}`)} 
              style={{ cursor: "pointer" }}
            >
              <img 	src={process.env.PUBLIC_URL + item.product_img} alt={item.title} />
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
      <div className="milo-right">
        <img 	src={process.env.PUBLIC_URL + "/img/47.png"} alt="main" />
        <div className="info">
          <strong>{mainItem.title}</strong>
          <p>{mainItem.sub_title}</p>
          <div className="price">{/* 메인 가격 필요시 여기에 */}</div>
        </div>
      </div>
    </div>
  );
};

export default Miloarchive;
