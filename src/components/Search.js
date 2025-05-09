import React, { useState } from 'react';
import Products from './Products'; 
import data from '../db/item'; 
import '../css/Search.css';


const Search = () => {
  const [input, setInput] = useState("");

  // 입력값에 따라 필터링된 상품 목록
  const filtered = data
    .filter((item) => item.id >= 1 && item.id <= 32) // 상품 id 조건
    .filter((item) =>
        (item.title + item.content).toLowerCase().includes(input.toLowerCase())
      );


  return (
    <div className="container">
      <h2>상품 검색</h2>
      <input
        placeholder="상품명을 입력하세요"
        // 검색어가 변경될 때마다 input 값을 업데이트
        onChange={(e) => setInput(e.target.value)}
        value={input}
        style={{
          padding: "8px",
          marginLeft: "10px",
          borderRadius: "4px",
          border: "2px solid #ccc",
          width: "250px",
          marginRight: "10px",
        }}
      />

      <div className="row">
        {filtered.length > 0 ? (
          filtered.map((item, i) => (
            <div key={item.id} style={{ textAlign: "center", margin: "10px" }}>
              <Products item={item} i={item.id} />
              <p>{item.sub_title}</p>
            </div>
          ))
        ) : (
          <p>검색 결과가 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default Search;