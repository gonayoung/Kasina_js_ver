
import React, { useEffect, useState } from 'react';
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { addCount, decreaseCount, deleteItem, calculateItemPrice, totalDiscount, totalPrice, finalPrice, sortName } from '../Store';
import { RootState } from '../Store';
import '../css/Cart.css';


function Cart() {

  // Redux에서 전체 state를 구조분해할당으로 가져옴
  const { user: { name, age }, cart} = useSelector((state) => state);

  // dispatch는  store.js 로 요청보내주는 함수
  let dispatch = useDispatch();

  const smallProdcuctStyle = {
    border: "1px solid #ddd",
    width: "120px",
    height: "120px",
    cursor: "pointer",
  };

  let textverticalAlign = {
    verticalAlign: "middle",
    textAlign: "center",
  };

  const [showContents, setShowContents] = useState(true);

  const toggleContents = () => {
    setShowContents(!showContents);
  };

  
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-sm-12" style={{ textAlign: "center" }}>
            {/* 사용자 이름과 나이 보여주기 */}
            <h5 style={{ padding: "50px" }}>
              {/* {name} {age}의 장바구니/ */}
              {name}'s Shopping Cart
            </h5>
            <Table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>상품이미지</th>
                  <th>상품명</th>
                  <th>수량</th>
                  <th>변경하기</th>
                </tr>
              </thead>
              <tbody>
                {/* 장바구니에 있는 상품 목록 출력 */}
                {cart.map(({ id, product_img, sub_title, size, count }, i) => (
                  <tr key={i}>
                    <td style={textverticalAlign}>{id}</td>
                    <td>
                      <Link to={`/detail/${id}`}>
                        <img src={process.env.PUBLIC_URL + product_img} style={smallProdcuctStyle} />
                      </Link>
                    </td>
                    <td style={textverticalAlign}>
                      {sub_title}
                      <br />
                      <span style={{ fontSize: "13px", color: "#888" }}>
                        사이즈: {size}
                      </span>
                    </td>
                    <td style={textverticalAlign}>{count}</td>
                    <td style={textverticalAlign}>
                      <Button
                        onClick={() => dispatch(addCount(id))}
                        variant="outline-dark"
                        style={{ marginRight: "10px" }}
                      >
                        +
                      </Button>
                      <Button
                        onClick={() => dispatch(decreaseCount(id))}
                        variant="outline-dark"
                        style={{ marginRight: "10px" }}
                      >
                        -
                      </Button>
                      <Button
                        onClick={() => dispatch(deleteItem(id))}
                        variant="dark"
                      >
                        상품삭제
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;



