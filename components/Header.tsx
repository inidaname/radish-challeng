import { useState } from "react";
import {NextComponentType, NextPage} from "next";
import { Button } from ".";

interface Props {
  activateModal: boolean;
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Header: NextPage<Props> = ({activateModal, clickHandler}) => {

  return (
    <>
      <header className="md:container md:mx-auto h-24 flex flex-row justify-between items-center">
        <h1 className="font-bold text-lg">Challenge</h1>
        <p>We are talking {activateModal}</p>
        <Button clickHandler={clickHandler} />
      </header>
    </>
  )
}

export default Header