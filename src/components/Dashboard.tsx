import React from "react";
import styles from "../../styles/Dashboard.module.css";
import Card from "./subComponents/Card";
import { useSelector } from "react-redux";
import { list } from "../data/data";

function Dashboard() {
  const user = useSelector((state: any) => state.user.value);
  return (
    <div>
      <h1>Good Morning, {user.name}!</h1>
      <h3 className={styles.subHeading}>Your list of Mutual Funds:</h3>
      {list.map((item) => (
        <Card key={item.key} name={item.name} link={item.link} />
      ))}
    </div>
  );
}

export default Dashboard;
