import React from "react";
import { useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap'

const Products = (props) => {
    let navigate = useNavigate();
    return (
        <div className="main_itembox">
            {/* <Nav.Link onClick={() => {navigate('/home/'+ props.i) }} className="c1" > */}
            <Nav.Link onClick={() => navigate(`/detail/${props.item.id}`)} className="c1">
                <img src={process.env.PUBLIC_URL + props.item.product_img} width="300px" />
                <h4>{props.item.title}</h4>
                <div className="main_textbox">
                    <p className="price">{props.item.price}</p>
                </div>
        </Nav.Link>
        </div>
    );
};

export default Products;

