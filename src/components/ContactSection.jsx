import React from "react";
import { Layout, Typography, Row, Col, Form, Input, Button, Space, message } from "antd";
import { MailOutlined, PhoneOutlined, SendOutlined } from "@ant-design/icons";
import axios from "axios";

const { Content } = Layout;
const { Title } = Typography;
const { TextArea } = Input;

const ContactSection = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      // Send data to the backend
      await axios.post("http://localhost:5000/send-email", values);
      message.success("Your message has been sent successfully!");
      form.resetFields();
    } catch (error) {
      message.error("There was an error sending your message. Please try again.");
    }
  };

  return (
    <Content
      style={{
        backgroundColor: "#fff",
        padding: "80px 50px",
        minHeight: "100vh",
      }}
    >
      <Title level={2} style={{ textAlign: "center", marginBottom: "40px", color: "#000" }}>
        Contact Me
      </Title>
      <Row gutter={[32, 32]} justify="center">
        {/* Contact Information */}
        <Col xs={24} md={12}>
          <Space direction="vertical" size="large">
            <Button
              type="link"
              href="tel:+6364668640"
              icon={<PhoneOutlined />}
              style={{ fontSize: "1.2rem", color: "#000" }}
            >
              +6364668640
            </Button>
            <Button
              type="link"
              href="mailto:anish.krishna.2105@gmail.com"
              icon={<MailOutlined />}
              style={{ fontSize: "1.2rem", color: "#000" }}
            >
              anish.krishna.2105@gmail.com
            </Button>
          </Space>
        </Col>

        {/* Contact Form */}
        <Col xs={24} md={12}>
          <Form
            form={form}
            name="contact"
            layout="vertical"
            onFinish={onFinish}
            style={{ maxWidth: "500px" }}
          >
            <Form.Item
              label="Your Name"
              name="name"
              rules={[{ required: true, message: "Please enter your name!" }]}
            >
              <Input placeholder="John Doe" />
            </Form.Item>
            <Form.Item
              label="Your Email"
              name="email"
              rules={[
                { required: true, message: "Please enter your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input placeholder="john.doe@example.com" />
            </Form.Item>
            <Form.Item
              label="Message"
              name="message"
              rules={[{ required: true, message: "Please enter your message!" }]}
            >
              <TextArea rows={4} placeholder="Write your message here..." />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" icon={<SendOutlined />} block>
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Content>
  );
};

export default ContactSection;
