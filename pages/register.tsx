import React, { FunctionComponent } from "react";
import AuthLayout from "../src/components/common/AuthLayout";
import RegisterForm from "../src/components/RegisterForm";

const Register: FunctionComponent = () => {
  return (
    <AuthLayout actionText="Crie sua conta agora mesmo...">
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;
