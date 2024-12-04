import React from "react";
import { Layout, Button, Row, Col, Card } from "antd";
import { NavLink } from "react-router-dom";
import { UserOutlined, IdcardOutlined } from '@ant-design/icons'; // Importing icons
import './HomePage.css'; // Import the CSS file for styling

const { Content, Footer } = Layout;

const HomePage = () => {
  return (
    <Layout className="home-layout">
      {/* Header Section with Background Image */}
      <div className="home-header">
        <h1>Welcome to the User and Role Management Portal</h1>
      </div>

      {/* Main Content */}
      <Content className="home-content">
        <Row gutter={[32, 32]} justify="center" className="content-row">
          {/* User Management Card */}
          <Col xs={24} sm={12} md={8}>
            <Card
              className="card"
              title="Manage Users"
              extra={<UserOutlined style={{ fontSize: "24px", color: "#1890ff" }} />}
            >
              <p className="card-description">
                Manage user accounts and their permissions.
              </p>
              <NavLink to="/users">
                <Button className="card-button" type="primary" size="large" block>
                  User
                </Button>
              </NavLink>
            </Card>
          </Col>

          {/* Role Management Card */}
          <Col xs={24} sm={12} md={8}>
            <Card
              className="card"
              title="Manage Roles"
              extra={<IdcardOutlined style={{ fontSize: "24px", color: "#1890ff" }} />}
            >
              <p className="card-description">
                Create roles for users to enhance access control.
              </p>
              <NavLink to="/roles">
                <Button className="card-button" type="primary" size="large" block>
                  Role
                </Button>
              </NavLink>
            </Card>
          </Col>
        </Row>
      </Content>

      {/* Footer Section */}
      <Footer className="home-footer">
        Developed by Pawan Poojary
      </Footer>
    </Layout>
  );
};

export default HomePage;
