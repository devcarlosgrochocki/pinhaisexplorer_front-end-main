import React, { FunctionComponent } from "react";
import AuthLayout from "../src/components/common/AuthLayout";
import LoginForm from "../src/components/LoginForm";

const Login: FunctionComponent = () => {
  return (
    <AuthLayout actionText="Entre na sua conta agora...">
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
