import React, { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/user";
import styles from "../../styles/Home.module.css";
import { changeStep } from "../features/step";

function SignUp() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [referal, setReferal] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState('Male')
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      login({ name: name, email: email, number: number, gender: gender, referal: referal })
    );
    dispatch(changeStep("dashboard"));
  };

  return (
    <div className={styles.container}>
      <h3>Please sign up to continue</h3>
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
            autoFocus
            placeholder="Enter a valid name"
            required
            onChange={(event) => {
              setName(event.target.value);
            }}
          ></input>
        </div>
        <div>
          <p>Enter Number: </p>
          <input
            className={styles.input}
            type="number"
            placeholder="Enter a valid number"
            onChange={(event) => {
              setNumber(event.target.value);
            }}
          ></input>
        </div>
        <div>
          <p>Choose Gender: </p>
          <input
            className={styles.radio}
            type="radio"
          ></input>
          <label>Male</label>
          <input
            className={styles.radio}
            type="radio"
            onClick={() => {setGender('Female')}}
          ></input>
          <label>Female</label>
        </div>
        <div>
          <p>Enter Email: </p>
          <input
            className={styles.input}
            type="email"
            placeholder="Enter a valid E-mail id"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          ></input>
        </div>
        <div>
          <p>New Password: </p>
          <input
            className={styles.input}
            type="password"
            placeholder="Set a password"
            onChange={(event) => {
              setReferal(event.target.value);
            }}
          ></input>
        </div>

        <div className={styles.subcontainer}>
          <input className={styles.checkbox} type="checkbox" required />
          <p>Agree to privacy policy?</p>
        </div>
        <div className={styles.link}>
          <p
            onClick={() => {
              dispatch(changeStep("login"));
            }}
          >
            Already a user? Log in &#8811;
          </p>
        </div>
        <button
          type="submit"
          className={styles.button}
          onClick={() => {
            handleSubmit;
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
