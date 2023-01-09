import React from 'react'
import { Inter } from "@next/font/google";
import type { NextPage } from "next";

import {Header, Footer, Modal} from "../components";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {

  const [clicked, setClickedButton] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    event.preventDefault();

    console.log(event.currentTarget)
    if (event.target === event.currentTarget) {
      setClickedButton((status) => !status)
    }

  }

  return (
    <>
      <div className="relative">
        <Header clickHandler={handleClick} activateModal={clicked} />
          
        <Footer />

      </div>
        <Modal clickHandler={handleClick} activateModal={clicked} />
    </>
  );
}


export default Home