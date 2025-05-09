import React, { useState } from "react";
import "../css/Bestitem.css";
import data from "../db/item.js";
import { useNavigate } from "react-router-dom";

function Bestitem() {
  const navigate = useNavigate();
  const [item, setItem] = useState(data.slice(0, 8)); // id 1~8만 사용
  const [slideIndex, setSlideIndex] = useState(0); // 현재 슬라이드 번호

  const itemsPerPage = 4;
  const maxIndex = Math.ceil(item.length / itemsPerPage) - 1;

  // 이전 슬라이드로
  const handlePrev = () => {
    setSlideIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  // 다음 슬라이드로
  const handleNext = () => {
    setSlideIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };
  const startIdx = slideIndex * itemsPerPage;
  const currentItems = item.slice(startIdx, startIdx + itemsPerPage);

  // 정렬 함수들
  const sortByName = () => {
    const sorted = [...item].sort((a, b) => a.title.localeCompare(b.title));
    setItem(sorted);
    setSlideIndex(0);
  };

  const sortByPriceLowToHigh = () => {
    const sorted = [...item].sort((a, b) => a.price - b.price);
    setItem(sorted);
    setSlideIndex(0);
  };

  const sortByPriceHighToLow = () => {
    const sorted = [...item].sort((a, b) => b.price - a.price);
    setItem(sorted);
    setSlideIndex(0);
  };

  return (
    <div className="bestitem-container">
      <div className="bestitem-header">
        <strong>BEST ITEMS</strong>
        <div className="col-md-6" style={{ textAlign: "right" }}>
          {/* select추가 */}
          <select
            onChange={(e) => {
              if (e.target.value === "low") sortByPriceLowToHigh();
              if (e.target.value === "high") sortByPriceHighToLow();
              if (e.target.value === "name") sortByName();
            }}
            style={{
              padding: "3px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              width: "120px",
              fontSize:"14px",
            }}
          >
            <option value="">정렬 선택</option>
            <option value="low">낮은 가격순</option>
            <option value="high">높은 가격순</option>
            <option value="name">이름순</option>
          </select>
        </div>
        {/* <span className="view-all">VIEW ALL</span> */}


      </div>

      <div className="bestitem-slide-wrapper">
        {/* 왼쪽 버튼 */}
        <button className="slide-btn left" onClick={handlePrev}>
          〈
        </button>

        {/* 슬라이드 영역 */}
        <div className="bestitem-slide">
          {currentItems.map((item) => (
            <div
              className="bestitem-card"
              key={item.id}
              onClick={() => navigate(`/detail/${item.id}`)}
              style={{ cursor: "pointer" }}
            >
              <img src={process.env.PUBLIC_URL + item.product_img} alt={item.title} />
              <h5 className="brand">{item.title}</h5>
              <p className="subtitle">{item.sub_title}</p>

              <div className="price-box">
                <p className="price">
                  ₩{parseInt(item.price).toLocaleString()}
                </p>
                {item.originalPrice && (
                  <>
                    <span className="original">
                      ₩{parseInt(item.originalPrice).toLocaleString()}
                    </span>
                    <span className="discount">{item.discountPercent}%</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 오른쪽 버튼 */}
        <button className="slide-btn right" onClick={handleNext}>
          〉
        </button>
      </div>
    </div>
  );
}

export default Bestitem;
