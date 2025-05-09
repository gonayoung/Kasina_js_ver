import React from "react";
import Nav from 'react-bootstrap/Nav';
import '../css/Header.css';
import { useNavigate } from 'react-router-dom';





function Header() {

  const navigate = useNavigate();

  return (
    <div className="navWrap">
    <Nav variant="underline" defaultActiveKey="/home" className="nav" >
      <Nav.Item>
      <Nav.Link className="nav-kasina" onClick={() => {navigate("/")}}>Kasina</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" onClick={() => navigate('/detail/14')}>NEW</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" onClick={() => navigate('/detail/22')}>DISCOVER</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3" onClick={() => navigate('/detail/20')}>BRANDS</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-4" onClick={() => navigate('/detail/8')}>FOOTWEAR</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-6" onClick={() => navigate('/detail/26')}>CLOTHING</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-7" onClick={() => navigate('/detail/29')}>ACCESSORISE</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-8" onClick={() => navigate('/detail/11')}>SALE</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-9" onClick={() => navigate('/detail/9')}>LAUNCHES</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-10" onClick={() => navigate('/detail/23')}>FEATURES</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-11" onClick={() => {navigate("/board");}} style={{color:'green'}}>BOARD</Nav.Link>
      </Nav.Item>

      <div className="navImg">
      <img src= {process.env.PUBLIC_URL +"/img/1.png"} alt="img1" style={{ cursor: "pointer" }} onClick={() => navigate("/search")}/>
        <img src= {process.env.PUBLIC_URL +"/img/2.png"} alt="img2" style={{ cursor: "pointer" }} onClick={() => navigate("/login")}/>
        <img src= {process.env.PUBLIC_URL +"/img/3.png"} alt="img3" style={{ cursor: "pointer" }} onClick={() => navigate("/cart")}/>
    </div>
    </Nav>

    </div>


  );
}

export default Header;