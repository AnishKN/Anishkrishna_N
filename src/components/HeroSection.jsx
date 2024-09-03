import React from "react";
import { Layout, Typography, Button } from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const HeroSection = () => {
  return (
    <Content
      style={{
        backgroundColor: "#fff",
        padding: "100px 50px",
        textAlign: "center",
        minHeight: "100vh",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <Title style={{ fontSize: "3rem", color: "#000" }}>
          Hello, I'm Anishkrishna N
        </Title>
        <Paragraph style={{ fontSize: "1.5rem", color: "#555" }}>
          I am a passionate developer specializing in full-stack development with a strong background in web technologies and AI-driven solutions. With expertise in React, Node.js, Angular, and more, I create intelligent, scalable applications that solve real-world problems. My work spans from building AI coding assistants to personalized study planners and advanced academic tracking systems.
        </Paragraph>
        <Button
          type="primary"
          style={{
            marginTop: "20px",
            borderColor: "#000",
            backgroundColor: "#000",
            color: "#fff",
          }}
          size="large"
        >
          Know More About Me
        </Button>
      </div>
    </Content>
  );
};

export default HeroSection;
