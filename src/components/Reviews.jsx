import 'antd/dist/antd.css';
import { Avatar } from 'antd';
import { Row, Col } from 'antd';

const arr = [
    {
        img: "./img/C3.png",
        name: "Henry Smith",
        designation: "C# Developer",
        company: ""
    },
    {
        img: "./img/C2.png",
        name: "Katty Perry",
        designation: "HR Manager",
        company: "Nelson Corporation"
    },
    {
        img: "./img/C1.png",
        name: "Sandra James",
        designation: "Graphics Designer",
        company: ""
    }
];

function Stars(){
    return (
        <div className="stars">
            <img src="./img/star.png" alt="img"/>
            <img src="./img/star.png" alt="img"/>
            <img src="./img/star.png" alt="img"/>
            <img src="./img/star.png" alt="img"/>
            <img src="./img/starhalf.png" alt="img"/>
        </div>
    );
}


function createCard(arrItem){
    return (
        <Col sm={8} md={8} lg={8}>
                    <div className="card">
                        <Avatar size={55}  src={arrItem.img} />
                        <h1 className="card-title">{arrItem.name}</h1>
                        <p className="card-subtitle">{arrItem.designation}</p>
                        <p className="card-company">{arrItem.company}</p>
                        <Stars />
                        <p className="card-text">We help you with social media management and advertising to help you grow your business and reach new clients. We help you with social media management and advertising to help you grow your business and reach </p>
                    </div>
        </Col>
    );
}

function CustReviews(){
    return (
        <section className="reviews">
            <h5 className="reviews-heading">What our customers say</h5>
            <div className="site-card-border-less-wrapper">
            <div className="site-card-wrapper">
            <Row type="flex" >
                {
                    arr.map(createCard)
                }
            </Row>
            </div>
            </div>
        </section>
    )
}

export default CustReviews;
