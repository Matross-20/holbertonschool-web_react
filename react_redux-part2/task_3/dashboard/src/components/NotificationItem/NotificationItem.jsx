import React from "react";

const NotificationItem = ({ type, value, id }) => {
  const style = { color: type === "urgent" ? "red" : "blue" };

  const markAsRead = () => {
    // Implement mark as read logic
  };

  return (
    <div
      style={style}
      data-notification-type={type}
      onClick={() => markAsRead(id)}
    >
      {value}
    </div>
  );
};

export default NotificationItem;