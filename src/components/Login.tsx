import React, { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/user";
import styles from "../../styles/Home.module.css";
import { changeStep } from "../features/step";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login({ email: email, password: password }));
    dispatch(changeStep("dashboard"));
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div>
          <p>Enter Email: </p>
          <input
            className={styles.input}
            type="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            placeholder="Enter your registered e-mail"
          ></input>
        </div>
        <div>
          <p>Password: </p>
          <input
            className={styles.input}
            type="password"
            placeholder="Enter Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          ></input>
        </div>

        <div className={styles.subcontainer}>
          <input className={styles.checkbox} type="checkbox" required />
          <p>I am not a Robot</p>
        </div>
        <button
          type="submit"
          className={styles.button}
          onClick={() => {
            handleSubmit;
          }}
        >
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
