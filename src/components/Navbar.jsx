import {useState} from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { Drawer, Row, Col } from 'antd';

function Navbar(){
        const [visible, setVisible] = useState(false);
        const showDrawer = () => {
          setVisible(true);
        };
        const onClose = () => {
          setVisible(false);
        }
    return (
            <div className="navbar">
                <Row type="flex">
                    <Col xs={15} md={15} lg={15} xl={15}>
                        <div className="navbar-logo">
                            <img src="./img/logo.png" alt="logo"></img>
                        </div>
                    </Col>
                    <Col xs={0} sm={0} md={0} lg={2} xl={2}>
                        <span className="navbar-item">Recruiter</span>
                    </Col>
                    <Col xs={0} sm={0} md={0} lg={2} xl={2}>
                        <span className="navbar-item">Login</span>
                    </Col>
                    <Col xs={6} sm={6} md={3} lg={3} xl={3}>
                        <span className="navbar-item--active">Sign up</span>
                        <button className="navbar-btn" type="primary" onClick={showDrawer}>
                        <MenuOutlined style={{color: "#074369"}}/>
                        </button>
                    </Col>
                </Row>
                <Drawer
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible} >
                <ul className="navbar-list">
                    <li>Recruiter</li>
                    <li>Login</li>
                </ul>
                </Drawer>
            </div>
    );
}
export default Navbar;