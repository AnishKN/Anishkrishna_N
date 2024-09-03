import React from "react";
import { Layout, Card, Typography, Row, Col, Button } from "antd";
import { GithubOutlined, LinkOutlined } from "@ant-design/icons";

const { Content } = Layout;
const { Meta } = Card;
const { Title } = Typography;

const ProjectsSection = () => {
  // Project Data
  const projects = [
    {
      title: "ThriveTracker",
      description: "An Early Warning System for academic tracking and prediction using ML-based EDA.",
      thumbnail: "https://via.placeholder.com/300x200", // Replace with actual thumbnail URL
      techStack: ["MERN"],
      previewLink: "https://example.com/thrivetracker",
      githubLink: "https://github.com/AnishKN/ThriveTracker",
    },
    {
      title: "GeniusGrid",
      description: "A Personalized Study Planner that integrates seamless backend data generation for ML models.",
      thumbnail: "https://via.placeholder.com/300x200", // Replace with actual thumbnail URL
      techStack: ["MERN"],
      previewLink: "https://example.com/geniusgrid",
      githubLink: "https://github.com/AnishKN/GeniusGrid",
    },
    {
      title: "ByteBuddy",
      description: "An AI Coding Assistant providing real-time guidance and personalized learning paths.",
      thumbnail: "https://via.placeholder.com/300x200", // Replace with actual thumbnail URL
      techStack: ["MERN"],
      previewLink: "https://example.com/bytebuddy",
      githubLink: "https://github.com/AnishKN/ByteBuddy",
    },
    {
      title: "Patent Designer",
      description: "A web-based tool for designing patents, developed using MXDraw JS tool.",
      thumbnail: "https://via.placeholder.com/300x200", // Replace with actual thumbnail URL
      techStack: ["Angular", "Node.js"],
      previewLink: "https://example.com/patentdesigner",
      githubLink: "https://github.com/AnishKN/PatentDesigner",
    },
    {
      title: "AI chat bot",
      description: "A web-based tool for designing patents, developed using MXDraw JS tool.",
      thumbnail: "https://via.placeholder.com/300x200", // Replace with actual thumbnail URL
      techStack: ["Angular", "Node.js"],
      previewLink: "https://example.com/patentdesigner",
      githubLink: "https://github.com/AnishKN/PatentDesigner",
    },
    {
      title: "Homestay",
      description: "A web-based tool for designing patents, developed using MXDraw JS tool.",
      thumbnail: "https://via.placeholder.com/300x200", // Replace with actual thumbnail URL
      techStack: ["Angular", "Node.js"],
      previewLink: "https://example.com/patentdesigner",
      githubLink: "https://github.com/AnishKN/PatentDesigner",
    },
  ];

  return (
    <Content
      style={{
        backgroundColor: "#f5f5f5",
        padding: "80px 50px",
        minHeight: "100vh",
      }}
    >
      <Title level={2} style={{ textAlign: "center", marginBottom: "40px", color: "#000" }}>
        Projects
      </Title>

      <Row gutter={[32, 32]} justify="center">
        {projects.map((project, index) => (
          <Col xs={24} md={12} lg={8} key={index}>
            <Card
              hoverable
              cover={<img alt={project.title} src={project.thumbnail} />}
              style={{
                borderRadius: "10px",
                border: "none",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Meta
                title={project.title}
                description={project.description}
                style={{ marginBottom: "20px" }}
              />
              <div style={{ marginBottom: "20px" }}>
                {project.techStack.map((tech, idx) => (
                  <img
                    key={idx}
                    src={`https://img.shields.io/badge/${tech}-brightgreen`} // Example tech stack icon
                    alt={tech}
                    style={{ height: "24px", marginRight: "8px" }}
                  />
                ))}
              </div>
              <Button
                type="link"
                href={project.previewLink}
                target="_blank"
                icon={<LinkOutlined />}
                style={{ marginRight: "10px" }}
              >
                Live Preview
              </Button>
              <Button
                type="link"
                href={project.githubLink}
                target="_blank"
                icon={<GithubOutlined />}
              >
                GitHub Repo
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </Content>
  );
};

export default ProjectsSection;
