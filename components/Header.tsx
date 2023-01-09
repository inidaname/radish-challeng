import React from "react";
import { NextPage} from "next";
import { ConnectButton } from '@rainbow-me/rainbowkit';


interface Props {
  activateModal: boolean;
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Header: NextPage<Props> = ({activateModal, clickHandler}) => {

  return (
    <>
      <header className="md:container md:mx-auto h-24 flex flex-row justify-between items-center">
        <h1 className="font-bold text-lg">Challenge</h1>
        <ConnectButton />
      </header>
    </>
  )
}

export default React.memo(Header)