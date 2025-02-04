import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Nav1 from './nav1';
import Login from './login'
import Aman from './aman'
import './dashboard.css'

import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

import { Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const siderStyle = {
  overflow: 'auto',
  position: 'sticky',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
};

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Router>
      <Layout hasSider>
        <Sider style={siderStyle}>
          <div className="demo-logo-vertical" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<AppstoreOutlined />}>
              <Link to="/login">Login</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<AppstoreOutlined />}>
              <Link to="/nav1">Nav1</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<AppstoreOutlined />}>
              <Link to="/aman">aman</Link>
            </Menu.Item>
      
          </Menu>
        </Sider>

        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div
              style={{
                padding: 24,
                textAlign: 'center',
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              {/* Routes Configuration */}
              <Routes>
                <Route path="/" element={<h1>Home Page</h1>} />
                <Route path="/nav1" element={<Nav1 />} />
                <Route path="/login" element={<Login />} />
                <Route path="/aman" element={<Aman />} />
              </Routes>
            </div>
          </Content>

          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
