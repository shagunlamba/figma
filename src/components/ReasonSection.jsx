import React from 'react';
import { Row, Col } from "antd";

const reasonArr = [
    {
        title: "More $$$",
        content: "Get higher pay rate and hone your desired skills. Register to see how much your skills are worth. Our IT Contractors make an average of 30-50% more when switching from their full time jobs "
    },
    {
        title: "W2 Benefits",
        content: "Get all W2 benefits (healthcare, 401k, and more) without the hassle of full-time employment. Our careful selection of Staffing firms ensures they offer full benefits to their Contractors."
    },
    {
        title: "Flexibility",
        content: "Remote opportunities galore in the current environment. A large selection of our clients are open to contractors working remote from their base US location"
    }
];


function createReason(reasonItem) {
    return (
        <section className="reason-block">
            <img src="./img/tick-circle.png" alt="tick" className="tick-img" />
            <dt>{reasonItem.title}</dt>
            <dd>{reasonItem.content}</dd>
        </section>
    );
}


function ReasonSection() {
    return (
        <div className="reason-section">
            <Row type="flex">
                <Col xs={24} sm={12} md={12} lg={12} className="reason-section-images">
                <h3 className="reason-section-heading reason-section-heading--mobile-view">
                        Our top 3 reasons to switch to IT Contracting
                    </h3>
                    {/* All the avatars */}
                    <div className="center-image">
                        <img className="grid-image" src={'./img/Group 662.png'} alt="group-img" />
                    </div>

                </Col>
                <Col xs={24} sm={12} md={12} lg={12} className="reason-section-content">
                    <h3 className="reason-section-heading reason-section-heading--desktop-view">
                        Our top 3 reasons to switch to IT Contracting
                    </h3>
                    <dl>
                        {reasonArr.map(createReason)}
                    </dl>
                    <div>
                        <button className="reason-section-btn reason-section-btn--desktop">Get started now</button>
                        <button className="reason-section-btn reason-section-btn--mobile">Join now</button>
                    </div>
                </Col>

            </Row>
        </div>
    )
}

export default ReasonSection;