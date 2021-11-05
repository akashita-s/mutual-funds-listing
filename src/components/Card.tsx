import React from "react";
import styles from "../../styles/Dashboard.module.css";
import { useDispatch } from "react-redux";
import { changeStep } from "../features/step";
import Image from "next/image";

const Card = ({ name }: any) => {
  const dispatch = useDispatch();
  return (
    <div
      className={styles.card}
      onClick={() => {
        dispatch(changeStep("details"));
      }}
    >
      <div className={styles.image}>
        <Image src="/stox.png" alt="image" height={50} width={50} />
      </div>
      <div>
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default Card;
