import React from "react";
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
function Header(){
    return (
        <header className="header">
            <Row type="flex" >
			<Col xs={24} sm={12} md={12} lg={12} xl={12} >
				<span className="header-heading">
                    Job board for IT Contractors
				</span>
				<div>
				<p className="header-para">
                    Find your next contract job with convenience. Search based on your skills, rate per hr or your preferred location.
				</p>
				<button  className="header-button btn">Get started</button>
				</div>
			</Col>
			<Col xs={24} sm={12} md={12} lg={12} xl={12}>
				<div className="div">
					<img src="./img/man.png"  alt="man img"  className="header-image"/>
				</div>
			</Col>
		    </Row>
        </header>
    )
}

export default Header;
