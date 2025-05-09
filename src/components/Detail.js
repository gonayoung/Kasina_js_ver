import React, { useState, useEffect } from 'react';
import data from '../db/item.js';
import '../css/Detail.css';
import { useParams, useNavigate } from 'react-router-dom';
import { addItem } from '../Store'; 
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Detail = () => {
  const dispatch = useDispatch(); 
  const { id } = useParams();
  const item = data.find((el) => el.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState(null);
  const [mainImage, setMainImage] = useState(item?.ImgDetail[0].imgDetail);

  useEffect(() => {
      window.scrollTo(0, 0); 
    
      if (!mainImage && item?.ImgDetail?.length > 0) {
        setMainImage(item.ImgDetail[0].imgDetail); 
      }
    }, [item, mainImage]);

  if (!item) return <div>상품 정보를 찾을 수 없습니다.</div>;

  const sizes = [220, 225, 230, 235, 240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300];


  return (
    <div className="detail-container">
      <div className="detail-top">
        {/* 왼쪽: 썸네일 + 메인이미지 */}
        <div className="detail-left">
          <div className="thumbnail-list">
            {item.ImgDetail.map((img, idx) => (
              <img
                key={idx}
                src={process.env.PUBLIC_URL + img.imgDetail}
                alt={`thumb-${idx}`}
                className={`thumbnail ${
                  mainImage === img.imgDetail ? "active" : ""
                }`}
                onClick={() => setMainImage(img.imgDetail)}
              />
            ))}
          </div>

          <div className="main-image">
            <img src={process.env.PUBLIC_URL + mainImage} alt="main" />
          </div>
        </div>

        {/* 오른쪽: 상품 정보 */}
        <div className="detail-right">
          <h5 className="brand">{item.title}</h5>
          <h2 className="main-title">{item.sub_title}</h2>
          <p className="desc">{item.content}</p>
          <p className="price">₩{parseInt(item.price).toLocaleString()}</p>
          <p className="membership"><img src={process.env.PUBLIC_URL + '/img/57.png'}></img>{item.membership}</p>

          <div className="size-label">SIZE</div>
          <div className="size-grid">
            {sizes.map((size) => (
              <button
                key={size}
                className={`size-btn ${
                  selectedSize === size ? "selected" : ""
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>

          <div className="button-box">
            <button className="bookmark-btn">♡</button>
            <Button
              variant="outline-dark"
              onClick={() => {
                dispatch(
                  addItem({
                    id: item.id,
                    product_img: item.product_img,
                    sub_title: item.sub_title,
                    size: selectedSize,
                    count: 1,
                    cartId: Date.now(),
                  })
                );
              }}
            >
              장바구니 담기
            </Button>

            <Link to="/cart">
              <Button variant="dark">주문상품 확인하기</Button>
            </Link>
          </div>

          <div className="info-tags">
            <p>• {item.itemNumber}</p>
            <p>• {item.color}</p>
          </div>

          <div className="accordion-box">
            <details>
              <summary>DETAILS</summary>
              <p>상품 상세 정보는 준비 중입니다.</p>
            </details>
            <details>
              <summary>SHIPPING AND RETURNS</summary>
              <p>배송 및 반품 정책은 여기에 표시됩니다.</p>
            </details>
            <details>
              <summary>REFUND AND A/S</summary>
              <p>환불 및 A/S 안내를 확인하세요.</p>
            </details>
          </div>
        </div>
      </div>

      {/* 하단: 전체 이미지 나열 */}
      <div className="bottom-gallery">
        {item.ImgDetail.map((img, idx) => (
          <img
            key={idx}
            src={process.env.PUBLIC_URL + img.imgDetail}
            alt={`bottom-${idx}`}
            className="bottom-image"
          />
        ))}
      </div>
    </div>
  );
};

export default Detail;
