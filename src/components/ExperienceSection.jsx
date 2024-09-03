import React from "react";
import { Layout, Card, Typography, Row, Col } from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const ExperienceSection = () => {
  return (
    <Content
      style={{
        backgroundColor: "#f5f5f5",
        padding: "80px 50px",
        minHeight: "100vh",
      }}
    >
      <Title level={2} style={{ textAlign: "center", marginBottom: "40px", color: "#000" }}>
        Professional Experience
      </Title>

      <Row justify="center">
        <Col xs={24} lg={18}>
          <Card
            style={{
              borderRadius: "10px",
              border: "none",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              marginBottom: "20px",
            }}
            bodyStyle={{ padding: "30px" }}
          >
            <Title level={4} style={{ marginBottom: "10px", color: "#000" }}>
              Full Stack Developer Intern - EZ Technologies, Pumpwell, Mangaluru
            </Title>
            <Paragraph style={{ fontStyle: "italic", color: "#555" }}>
              November 2022 - December 2023
            </Paragraph>
            <Paragraph style={{ color: "#555", fontSize: "1rem" }}>
              As a Full Stack Developer Intern at EZ Technologies, I developed and delivered multiple full-stack projects using React, Angular, Node.js, PHP, and MySQL. I gained expertise in both front-end and back-end development by working closely with clients to translate their requirements into tailored solutions. I also contributed significantly to the Patent Designer project using the MXDraw JS tool, a web-based application for patent design, and worked on numerous PHP-based projects.
            </Paragraph>
            <ul style={{ color: "#555", fontSize: "1rem", paddingLeft: "20px" }}>
              <li>Developed full-stack applications using React, Angular, Node.js, PHP, and MySQL.</li>
              <li>Gained hands-on experience with the MXDraw JS tool for web-based patent design applications.</li>
              <li>Collaborated closely with clients to deliver optimized solutions across various platforms.</li>
              <li>Enhanced performance and ensured seamless integration for web-based applications.</li>
            </ul>
          </Card>
        </Col>
      </Row>
    </Content>
  );
};

export default ExperienceSection;
