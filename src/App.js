import "./App.css";
import React, { useState, useEffect } from "react";
import NotificationsList from "./components/NotificationsList";
export const notificationsContext = React.createContext();

function App() {
  const [numOfNotifications, setNumNotifications] = useState(7);
  const [numofnotfopacity, setOpacity] = useState(100);
  useEffect(() => {
    if (numOfNotifications <= 0) {
      setOpacity(0);
    }
  }, [numOfNotifications]);
  const decrementNotfNumber = () => {
    setNumNotifications(numOfNotifications - 1);
  };
  const markasread = () => {
    setOpacity(0);
  };
  return (
    <div className="bg-white w-2/5  rounded-md block m-auto my-28 ">
      <notificationsContext.Provider
        value={{ decrementNotfNumber, numofnotfopacity }}
      >
        <div className="flex justify-between">
          <h1 className="m-8 text-xl font-bold">
            Notifications
            <span
              className={
                "text-white px-2 m-1 rounded-md bg-sky-900 opacity-" +
                numofnotfopacity +
                ""
              }
            >
              {numOfNotifications}
            </span>
          </h1>
          <h4 className="m-8 text-md font-" onClick={() => markasread()}>
            Mark all as read
          </h4>
        </div>
        <NotificationsList />
      </notificationsContext.Provider>
    </div>
  );
}

export default App;
