import { useRef } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { Button } from "reactstrap";

const RegisterCallToAction = function () {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="d-flex flex-column gap-3 align-items-sm-start align-items-center">
      <p className={styles.createAccountMessage}>
        Crie uma conta e desfrute do melhor do nosso site!
      </p>
      <Link href="/register">
        <Button className={styles.btnRegister}>Criar conta</Button>
      </Link>
    </div>
  );
};

export default RegisterCallToAction;
