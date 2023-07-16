import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";
import styles from "./styles.module.scss";

const LoginForm = () => {
  return (
    <Form>
      <FormGroup>
        <Label for="name" className={styles.textBold}>
          Nome completo: <span className="text-danger">*</span>
        </Label>
        <Input
          type="text"
          className={`${styles.input} py-3`}
          placeholder="Digite seu nome completo"
        />
      </FormGroup>
      <FormGroup>
        <Label for="email" className={styles.textBold}>
          E-mail: <span className="text-danger">*</span>
        </Label>
        <Input
          type="email"
          className={`${styles.input} py-3`}
          id="email"
          placeholder="Digite seu e-mail"
        />
        <FormFeedback id="email-error"></FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="password" className={styles.textBold}>
          Senha: <span className="text-danger">*</span>
        </Label>
        <Input
          type="password"
          className={`${styles.input} py-3`}
          id="password"
          placeholder="Digite sua senha"
        />
        <FormFeedback id="password-error"></FormFeedback>
      </FormGroup>
      <Button block className={`mt-4 ${styles.btnSubmit}`}>
        Criar minha conta
      </Button>

      <p className="text-center mt-4">
        Já tem uma conta?{" "}
        <a href="/login" className={styles.text}>
          Entre agora mesmo!
        </a>
      </p>
    </Form>
  );
};

export default LoginForm;
