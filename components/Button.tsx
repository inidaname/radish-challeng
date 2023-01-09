import React, { useState } from "react";
import { NextComponentType, NextPage } from "next";

interface Props {
  clickHandler:  (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: NextPage<Props> = ({clickHandler}) => {




  return (
    <>
      <button type="button" onClick={clickHandler} name="THis" className="border p-2 rounded rounded-2">Deposit</button>
    </>
  )
}


export default Button