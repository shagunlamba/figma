import React from "react";
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';


function ITC1(){
	return (
	<div className="it" >
		<Row type="flex" >
			<Col xs={24} sm={12} md={12} lg={12} xl={12}>
				<span className="it-heading">
                    Finding IT contractors for your company just got easier
				</span>
                <div >
                    <p className="it-para">
                        Every applicant on our site is open for IT Contracting. We make it easy for 
                        recruiters to search for qualified IT Contractors.
                    </p>
                    <button  className="it-button btn it-desktop--view">Hire an IT Contractor</button>
                </div>
            </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
				<div className="div">
					<img src="./img/woman-img.png"  alt="woman img" className="it-image"/>
				</div>
			    </Col>
            <Col xs={24} sm={12} md={12} lg={12} xl={12} >
				<button  className="it-button btn it-mobile--view">Get Started</button>
			</Col>
		</Row>
	</div>
	);
}

export default ITC1;