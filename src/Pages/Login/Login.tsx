import { Button, LoginForm, TextInput } from "components-gallery";
import styles from "./Styles/styles.module.scss";
import { Link } from "react-router";

const Login = () => {
  return (
    <>
      <div className={styles.loginContainer}>
        <LoginForm
          className={styles.login}
          children={
            <div className={styles.loginForm}>
              Usuario*
              <TextInput />
              Contraseña*
              <TextInput />
              <Link to={"/ticketbooth"}>
                <Button size="full" type="submit" variant="primary">
                  Sign in
                </Button>
              </Link>
            </div>
          }
          formFooter={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                href="/"
                target="_blank"
                style={{
                  fontSize: "0.8rem",
                  color: "var(--blue-strong-primary)",
                }}
                rel="noopener noreferrer"
              >
                Terms and Conditions
              </a>
            </div>
          }
        />
      </div>
    </>
  );
};

export default Login;
