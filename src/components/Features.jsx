import React from 'react'
import {Row, Col} from "antd";

const itemArr = [
    {
        title: "Optimized job Search",
        content: "We let you search contract only jobs based on your skills, location and desired rate per hour Verified recruiters.",
        img: "./img/G1.png"
    },
    {
        title: "Recruiter communication",
        content: "IT Contractors can message recruiters to get immediate feedback on the job they have posted.", 
        img: "./img/G2.png"
    },
    {
        title: "Application Tracking",
        content: "We ensure your application to a job does not disappear in the wild. Our active recruiters and open jobs mean you will always get a response on your application.",
        img: "./img/G3.png"
    },
    {
        title: "Intelligent notifications",
        content: "Get notified for jobs that offer a higher rate / hour or open up in your desired location.",
        img: "./img/G4.png"
    },
    {
        title: "Verified recruiters",
        content: "Our recruiters are screened before they can post jobs on our platform. This ensures you see jobs that are active and aggressively being hired for."
        , img: "./img/G5.png"
    },
];



function createCol(item){
    return (
        <Col xs={24} sm={8} md={8} lg={8} xl={8} className="features-col">
            <img src={item.img} alt="icon" className="feature-img" />
            <div className="feature-block">
                <h className="feature-block--heading">{item.title}</h>
                    <p className="feature-block--para">
                        {item.content}
                    </p>
            </div>
        </Col>
    );
}

function Features(){
    return (
        <div className="features">
                <div className="features-content">
                    <h1 className="features-heading">Get notified for the right opportunity</h1>
                    <p className="features-para features-para--desktop">
                        Our job board is dedicated to contractor hiring by active recruiters. 
                        Get hired for the right skills and at the right rate!
                    </p>
                    <p className="features-para features-para--mobile">
                        Every applicant to the Toptal network is rigorously tested and vetted. Our highly selective process leads to a 98% trial-to-hire success rate.
                    </p>
                </div>
                <Row className="container">
                        {itemArr.map(createCol)}
                </Row>
        </div>
    )
}

export default Features;
