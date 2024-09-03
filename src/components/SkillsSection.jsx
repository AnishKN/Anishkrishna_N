import React from "react";
import { Layout, Typography, Row, Col, Tag, Divider } from "antd";

const { Content } = Layout;
const { Title } = Typography;

const SkillsSection = () => {
  // Skills Data
  const skills = {
    "Programming Languages": ["Java", "PHP", "Python", "C", "C++", "SQL"],
    "Web Development": ["React", "Angular", "NodeJS", "Django", "HTML", "CSS", "JavaScript"],
    Database: ["MongoDB", "MySQL", "Oracle"],
    "Tools and Technologies": ["GitHub", "Postman", "phpMyAdmin"],
  };

  // Color Palette for Tags
  const colors = [
    "magenta",
    "red",
    "volcano",
    "orange",
    "gold",
    "lime",
    "green",
    "cyan",
    "blue",
    "geekblue",
    "purple",
  ];

  return (
    <Content
      style={{
        backgroundColor: "#f0f2f5",
        padding: "80px 50px",
        minHeight: "100vh",
      }}
    >
      <Title level={2} style={{ textAlign: "center", marginBottom: "40px", color: "#000" }}>
        Skills
      </Title>

      <Row gutter={[32, 32]} justify="center">
        {Object.entries(skills).map(([category, skillList], index) => (
          <Col xs={24} md={12} lg={10} key={index}>
            <Title level={4} style={{ color: "#000", marginBottom: "20px" }}>
              {category}
            </Title>
            <div>
              {skillList.map((skill, idx) => (
                <Tag
                  key={idx}
                  color={colors[idx % colors.length]}
                  style={{ fontSize: "1rem", padding: "5px 15px", marginBottom: "10px" }}
                >
                  {skill}
                </Tag>
              ))}
            </div>
            <Divider />
          </Col>
        ))}
      </Row>
    </Content>
  );
};

export default SkillsSection;
