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
      <FormGroup className="d-flex gap-3 align-items-center p-0 m-0" check>
        <Label className="d-flex gap-2 align-items-center m-0" check>
          <Input
            className={`${styles.input} d-flex gap-1 align-items-center m-0`}
            type="checkbox"
            id="remember"
          />{" "}
          Lembrar minha senha
        </Label>
        <a href="#" className={styles.text}>
          Esqueci minha senha
        </a>
      </FormGroup>
      <Button block className={`mt-4 ${styles.btnSubmit}`}>
        Entrar na minha conta
      </Button>

      <p className="text-center pt-5">Ou entre com:</p>
      <Button
        block
        className={`${styles.textBold} btn-light d-flex align-items-center justify-content-center gap-2 py-2`}
      >
        <img src="./login/icon-google.svg" alt="Icone da Google" />
        Entrar com o Google
      </Button>

      <p className="text-center mt-4">
        Não tem uma conta?{" "}
        <a href="/register" className={styles.text}>
          Crie agora mesmo!
        </a>
      </p>
    </Form>
  );
};

export default LoginForm;
