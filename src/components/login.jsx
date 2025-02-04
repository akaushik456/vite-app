import React from "react";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const Login = () => {
  const navigate = useNavigate();

  const onFinish = () => {
    navigate("/dashboard"); // Redirect to Dashboard
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <Title level={2}>Sign In</Title>
      <Text>Enter your username and password</Text>
      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        layout="vertical"
      >
        {/* Username Field */}
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please enter your username!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>

        {/* Password Field */}
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>

        {/* Remember Me & Forgot Password */}
        <Form.Item>
          <Checkbox>Remember me</Checkbox>
          <a style={{ float: "right" }} href="#">Forgot password?</a>
        </Form.Item>

        {/* Submit Button with Link */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            onClick={() => navigate("/dashboard")} // Manually handle the redirect
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
