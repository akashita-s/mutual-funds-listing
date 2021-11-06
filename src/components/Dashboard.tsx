import React, { FormEvent, useState } from "react";
import styles from "../../styles/Dashboard.module.css";
import Card from "./subComponents/Card";
import { useSelector } from "react-redux";
import { list } from "../data/data";

function Dashboard() {
  const [name, setName] = useState("");
  const [foundUsers, setFoundUsers] = useState(list);
  const user = useSelector((state: any) => state.user.value);

  const filter = (e: any) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = list.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(list);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };

  return (
    <div className={styles.container}>
      <h1>Good Morning, {user.name}!</h1>
      <h3 className={styles.subHeading}>Your list of Mutual Funds:</h3>
      <input
        type="search"
        onChange={(e) => filter(e)}
        className={styles.input}
        placeholder="Filter"
      />

{foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((item) => (
            <Card key={item.key} name={item.name} link={item.link} />
          ))): (
          <h1>No results found!</h1>
        )}
    </div>
  );
}

export default Dashboard;
