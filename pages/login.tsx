import AuthLayout from "../src/components/common/AuthLayout";
import LoginForm from "../src/components/LoginForm";
import Head from "next/head";

const Login = () => {
  return (
    <>
      <Head>
        <title>Pinhais Explorer - Login</title>
        <link
          rel="shortcut icon"
          href="/favicon/favicon.png"
          type="image/x-icon"
        />
      </Head>
      <main>
        <AuthLayout actionText="Entre na sua conta agora...">
          <LoginForm />
        </AuthLayout>
      </main>
    </>
  );
};

export default Login;
