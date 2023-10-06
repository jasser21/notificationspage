import React from "react";
import Notification from "./Notification.js";
import notificationsData from "../data/notifications.json";
const NotificationsList = (props) => {
  return (
    <section className="mx-8 mb-8">
      {notificationsData.map((post, index) => (
        <Notification
          key={index}
          user={post.user}
          action={post.action}
          group={post.group}
          timestamp={post.timestamp}
          message={post.message}
          img={post.img}
          funct={props.fun}
        />
      ))}
    </section>
  );
};

export default NotificationsList;
