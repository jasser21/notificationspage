import React, { useState, useEffect, useContext } from "react";
import { notificationsContext } from "../App";
const Notification = (props) => {
  const [colorBol, setcolorBol] = useState(false);
  const { numofnotfopacity } = useContext(notificationsContext);
  const { decrementNotfNumber } = useContext(notificationsContext);
  const [isComponentClicked, setcompounentasclicked] = useState(false);
  useEffect(() => {
    console.log("Opacity Changed !");
    if (numofnotfopacity == 0) {
      setcolorBol(() => true);
    }
  }, [numofnotfopacity]);
  const changeColor = () => {
    setcolorBol(() => true);
  };

  const combinefunctions = () => {
    changeColor();
    if (!isComponentClicked) decrementNotfNumber();
    setcompounentasclicked(true);
  };
  const bgColor = colorBol ? "white" : "gray-200";
  return (
    <div
      className={"flex align-start  bg-" + bgColor + " rounded-2xl my-2"}
      onClick={combinefunctions}
    >
      <span className="w-15 m-5">
        <img className="w-10 " src={props.img} alt={props.user} />
      </span>
      <div className="flex justify-center flex-col">
        <div className="flex justify-start items-center">
          <p className="mr-1 font-bold">{props.user}</p>
          <p className="mr-1 font-thin text-gray-700">{props.action}</p>
          <p className="mr-1 font-bold">{props.group}</p>
        </div>

        <p>{props.post}</p>
        <p className="text-gray-500">{props.timestamp}</p>
        {props.message && (
          <p className="hover:bg-gray-200 bg-inherit p-3 w-20px border-solid border-color-black">
            {props.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Notification;
