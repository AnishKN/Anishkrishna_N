import React from "react";
import { Layout, Row, Col, Typography, Button, Space } from "antd";
import { GithubOutlined, LinkedinOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";

const { Footer } = Layout;
const { Text, Title, Link } = Typography;

const Footers = () => {
  return (
    <Footer
    className="bg-gray-900"
      style={{
        padding: "40px 20px",
        borderTop: "1px solid #f0f0f0",
        textAlign: "center",
      }}
    >
      <Row gutter={[32, 32]} justify="center">
        {/* About Section */}
        <Col xs={24} md={8}>
          <Title level={4} style={{ color: "#fff" }}>Anishkrishna N</Title>
          <Text style={{ color: "#fff" }}>
            A passionate developer with expertise in web development, AI, and analytics. I love creating intelligent applications that make a difference.
          </Text>
        </Col>

        {/* Links Section */}
        <Col xs={24} md={8}>
          <Title level={4} style={{ color: "#fff" }}>Quick Links</Title>
          <Space direction="vertical">
            <Link href="#about" style={{ color: "#fff" }}>About</Link>
            <Link href="#experience" style={{ color: "#fff" }}>Experience</Link>
            <Link href="#projects" style={{ color: "#fff" }}>Projects</Link>
            <Link href="#skills" style={{ color: "#fff" }}>Skills</Link>
          </Space>
        </Col>

        {/* Reach Me Button and Social Media Section */}
        <Col xs={24} md={8}>
          <Title level={4} style={{ color: "#fff" }}>Reach Me</Title>
          <Button
            type="default"
            ghost
            style={{
              borderColor: "#fff",
              color: "#fff",
              marginBottom: "20px",
            }}
          >
            Contact Me
          </Button>
          <br />
          <Title level={5} style={{ color: "#fff" }}>Follow Me</Title>
          <Space size="large">
            <Link href="https://github.com/yourgithubprofile" target="_blank">
              <GithubOutlined style={{ fontSize: "24px", color: "#fff" }} />
            </Link>
            <Link href="https://linkedin.com/in/yourlinkedinprofile" target="_blank">
              <LinkedinOutlined style={{ fontSize: "24px", color: "#fff" }} />
            </Link>
            <Link href="mailto:yourmail@gmail.com" target="_blank">
              <MailOutlined style={{ fontSize: "24px", color: "#fff" }} />
            </Link>
            <Link href="tel:+1234567890">
              <PhoneOutlined style={{ fontSize: "24px", color: "#fff" }} />
            </Link>
          </Space>
        </Col>
      </Row>
    </Footer>
  );
};

export default Footers;
