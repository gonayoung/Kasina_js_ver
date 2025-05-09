import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* 왼쪽 영역: 로고 및 회사 정보 */}
        <div className="footer-col company-info">
          <img src= {process.env.PUBLIC_URL + "/img/56.PNG"} alt="img56" className="footer-logo" />
          <p>(주)카시나 | 대표: 이은혁</p>
          <p>사업자등록: 211-87-21265 | 통신판매업신고번호: 강남-05242호</p>
          <p>개인정보 보호책임자: 이재우</p>
          <p>주소: 서울특별시 강남구 도산대로 317(신사동) 6F 카시나 온라인스토어</p>
          <p><strong>TEL</strong>: 02-3443-8144 | <strong>FAX</strong>: 02-3443-8146</p>
          <p className="footer-policy">
            <a href="#">Privacy</a> · <a href="#">Terms of Service</a>
          </p>
        </div>

        {/* 중앙 영역: 메뉴 */}
        <div className="footer-col footer-menu">
          <p>ABOUT US</p>
          <p>STORES</p>
          <p>MEMBERSHIP</p>
          <p>FAQ</p>
          <p>NOTICE</p>
        </div>

        {/* 오른쪽 영역: SNS 및 고객센터 */}
        <div className="footer-col contact-info">
          <p>INSTAGRAM</p>
          <p>YOUTUBE</p>
          <p>KAKAO TALK</p>
          <p>WORK WITH US</p>
          <br />
          <p>문의 : ONLINE CHAT</p>
          <p>운영시간 : 08:30 - 16:30 (MON~FRI)</p>
          <p>점심시간 : 11:30 - 13:30</p>
          <p>입점 및 제휴 문의 : <a href="mailto:contact@kasina.co.kr">contact@kasina.co.kr</a></p>
          <a href="#">구매안전(에스크로) 서비스 가입사실 확인</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;