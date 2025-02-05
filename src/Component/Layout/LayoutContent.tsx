import React, { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Layout, Menu, MenuProps } from "antd";
import {
  BranchesOutlined,
  DockerOutlined,
  ExportOutlined,
  ImportOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PartitionOutlined,
  PlusCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";

import "./Layout.css";

const { Header, Content, Sider } = Layout;

export default function LayoutContent(): JSX.Element {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const onClick: MenuProps["onClick"] = (e) => {
    navigate(e.key); // Điều hướng đến đường dẫn được lưu trong key
  };
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
        <PlusCircleOutlined />
          <span> {collapsed ? "MT" : "MINH TRÍ"}</span>
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          selectedKeys={[location.pathname]}
          onClick={onClick}
          items={[
            {
              key: "/xuat-du-lieu",
              icon: <ExportOutlined />,
              label: "Xuất dữ liệu",
            },
            {
              key: "/nguoi-dung",
              icon: <UserOutlined />,
              label: "Quản lý người dùng",
            },
            {
              key: "/nha-may",
              icon: <DockerOutlined />,
              label: "Quản lý nhà máy",
            },
            {
              key: "/bo-phan",
              icon: <PartitionOutlined />,
              label: "Quản lý bộ phận",
            },
            {
              key: "/nhom",
              icon: <BranchesOutlined />,
              label: "Quản lý nhóm",
            },

            {
              key: "/nhap-du-lieu",
              icon: <ImportOutlined />,
              label: "Nhập dữ liệu",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
