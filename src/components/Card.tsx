import React from "react";
import styles from "../../styles/Dashboard.module.css";
import Image from "next/image";

function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image src="/stox.png" alt="image" height={50} width={50} />
      </div>
      <div>
        <div className={styles.subcontainer}>
          <p>Fund House:</p>
          <h3>SBI Mutual Funds</h3>
        </div>
        <div className={styles.subcontainer}>
          <p>Schema Category:</p>
          <h3>Equity Scheme - Contra Fund</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
