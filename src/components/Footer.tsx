import React from "react";
import styles from "../../styles/Home.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.footertext}>Mutual Fund listings @2021 . Contact. Freelance. Opportunity. More</p>
      {/* <p className={styles.footertext}>Language: English</p> */}
      <p className={styles.footertext}>Made by: Akashita Sahu</p>
    </div>
  );
}

export default Footer;
