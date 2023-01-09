import { NextComponentType } from "next";
import React from "react";

interface Props {
  activateModal: boolean;
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Modal: NextComponentType<Props> = ({ activateModal, clickHandler }) => {
  return (
    <>
      {activateModal && (
        <div
          onClick={clickHandler}
          onKeyDown={clickHandler}
          className="w-full absolute top-0 left-0 h-screen bg-black/30 backdrop-blur-sm flex justify-center items-center"
        >
          <div className="flex justify-center w-1/2 h-1/2 bg-white relative items-center">
            <span className="absolute top-5 right-5" onClick={clickHandler} onKeyDown={clickHandler}>close</span>
            See me
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(Modal);
