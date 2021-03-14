import React from "react";
import { Row, Col, Card } from 'antd';
import 'antd/dist/antd.css';
function Header() {
  return (
    <header className="header">
      <Row type="flex" >
        <Col xs={24} sm={24} md={12} lg={12} xl={12} >
          <span className="header-heading">
            Job board for IT Contractors
				</span>
          <div>
            <p className="header-para">
              Find your next contract job with convenience. Search based on your skills, rate per hr or your preferred location.
				</p>
            <button className="header-btn">Get started</button>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div id="#header" className="div">
            {/* <Card style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card> */}
            <img className="card-body" src='./img/Frame 663.png' alt="frame"/>
            <img src="./img/man.png" alt="man img" className="header-image" />
          </div>
        </Col>
      </Row>
    </header>
  )
}

export default Header;
