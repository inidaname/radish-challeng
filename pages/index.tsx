import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import type { NextPage } from "next";

import {Header, Footer} from "../components";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
  return (
    <>
      <Header />
        
      <Footer />
    </>
  );
}


export default Home