import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "../../styles/Dashboard.module.css";
import { changeStep } from "../features/step";
import axios from "axios";
import Chart from "./subComponents/Chart";
import { useSelector } from 'react-redux'

function Details() {
  const [name, setName] = useState();
  const [schemeType, setSchemeType] = useState();
  const [schemeCategory, setSchemeCategory] = useState();
  const [code, setCode] = useState();
  const [fundHouse, setFundHouse] = useState();

  const fund = useSelector((state: any) => state.fund.value)

  const fundData = () => {
    axios
      .get(fund.link)
      .then(function (response) {
        setName(response.data.meta.scheme_name);
        setSchemeType(response.data.meta.scheme_type);
        setSchemeCategory(response.data.meta.scheme_category);
        setCode(response.data.meta.scheme_code);
        setFundHouse(response.data.meta.fund_house);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  useEffect(() => {
    fundData();
  }, []);

  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <h1>{name}</h1>
      <h3>Type: {schemeType}</h3>
      <h3>Category: {schemeCategory}</h3>
      <h3>Code: {code}</h3>
      <h3>Fund House: {fundHouse}</h3>
      <Chart />
      <p
        className={styles.link}
        onClick={() => {
          dispatch(changeStep("dashboard"));
        }}
      >
        Back
      </p>
    </div>
  );
}

export default Details;
