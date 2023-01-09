import { useState } from "react";
import {NextComponentType} from "next";
import Button from "./Button";
import Modal from "./Modal";

const Header: NextComponentType = () => {

  const [clicked, setClickedButton] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    console.log(event.currentTarget)
    if (event.target === event.currentTarget) {
      setClickedButton((status) => !status)
    }

  }

  return (
    <>
      <header className="md:container md:mx-auto h-24 flex flex-row justify-between items-center">
        <h1 className="font-bold text-lg">Challenge</h1>
        <p>We are talking {clicked}</p>
        <Button clickHandler={handleClick} />
      </header>
      <Modal clickHandler={handleClick} activateModal={clicked} />
    </>
  )
}

export default Header