import React from "react";
import '../css/Login.css';
import { Link } from "react-router-dom";

function Login() {
  window.scroll({ top: 0, behavior: "auto" });

  return (
    <>
        <div className="section_path">
        </div>
        <div className="title_area">
          <h2>LOGIN</h2>
          <p>통합 멤버십 안내</p>
          <p>(주)Kasina에서 운영하는 브랜드를 하나의 계정으로 로그인 후 이용하실 수 있습니다.</p>
        </div>
        <div className="login_form">
          <div className="login">
            <input type="text" placeholder="ID or E-mail" />
            <input type="password" placeholder="Password" />
          </div>
        </div>
        <div className="security">
          <div className="login_security">
          </div>
        </div>
        <div className="login_btn">
          <button>LOGIN</button>
        </div>
        <div className="wrap_find">
          <div>
            <Link to="#">아이디 찾기</Link>
          </div>
          <div>
            <Link to="#">비밀번호 찾기</Link>
          </div>
        </div>
        <div className="login__util">
          <div>아직 회원이 아니신가요?</div>
          <div>
            지금 회원가입을 하시면<br></br>다양하고 특별한 혜택이 준비되어
            있습니다.
          </div>
          <div>
            <button>회원가입</button>
          </div>
        </div>
        <div className="login_sns">
          <div className="sns">SNS 로그인</div>
          <div className="wrap_sns_log">
            <button className="btnKakao">카카오 로그인</button>
            <button className="btnNaver">네이버 로그인</button>
            <button className="btnApple">Apple로 로그인</button>
          </div>
        </div>
    </>
  );
}

export default Login;