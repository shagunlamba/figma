import React from "react";
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

function Map(){
	return (
	<div className="map" >
		<Row type="flex" >
			<Col xs={24} sm={12} md={12} lg={12} xl={12} >
				<h2 className="map-heading">
					We have job openings in major cities in USA
				</h2>
				<div id="map-desktop--view">
				<p className="map-para">
					Search jobs based on your skills and location. <br />
					Let recruiters know if you are willing to travel or open for relocation	
				</p>
				<button  className="btn">Get started now</button>
				</div>
			</Col>
			<Col xs={24} sm={12} md={12} lg={12} xl={12}>
				<div className="div">
					<img src="./img/map.png"  alt="world-map img" className="map-image"/>
				</div>
			</Col>
			<Col xs={24} sm={12} md={12} lg={12} xl={12} id="map-mobile--view">
				<p className="map-para">
					Search jobs based on your skills and location. <br />
					Let recruiters know if you are willing to travel or open for relocation	
				</p>
				<button  className="btn">Hire an IT Contractor</button>
			</Col>
		</Row>
	</div>
	);
}

export default Map;