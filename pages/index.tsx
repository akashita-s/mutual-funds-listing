import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navigation from "../src/components/Navigation";
import Login from "../src/components/Login";
import { useSelector } from "react-redux";
import SignUp from "../src/components/SignUp";
import Dashboard from "../src/components/Dashboard";
import Details from "../src/components/Details";
import Footer from "../src/components/Footer";

const Home: NextPage = () => {
  const currentStep = useSelector((state: any) => state.step.value);

  const Step = () => {
    if (currentStep == "login") return <Login />;
    if (currentStep == "signup") return <SignUp />;
    if (currentStep == "details") return <Details />;
    else return <Dashboard />;
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>MF Listing App</title>
      </Head>

      <div className={styles.container}>
        <Navigation />
        <Step />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
