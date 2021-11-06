import React, { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/user";
import styles from "../../styles/Home.module.css";
import { changeStep } from "../features/step";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login({ name: name, password: password }));
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
          <p>Enter User Name: </p>
          <input
            className={styles.input}
            type="name"
            required
            onChange={(event) => {
              setName(event.target.value);
            }}
            placeholder="Enter your registered username"
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
        <div className={styles.link}>
          <p
            onClick={() => {
              dispatch(changeStep("signup"));
            }}
          >
            Not a user already? Sign in &#8811;
          </p>
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
