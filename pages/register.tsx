import AuthLayout from "../src/components/common/AuthLayout";
import RegisterForm from "../src/components/RegisterForm";
import Head from "next/head";

const Register = () => {
  return (
    <>
      <Head>
        <title>Pinhais Explorer - Registro</title>
        <link
          rel="shortcut icon"
          href="/favicon/favicon.png"
          type="image/x-icon"
        />
      </Head>
      <main>
        <AuthLayout actionText="Crie sua conta agora mesmo...">
          <RegisterForm />
        </AuthLayout>
      </main>
    </>
  );
};

export default Register;
