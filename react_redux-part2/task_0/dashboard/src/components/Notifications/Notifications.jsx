import React, { memo, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { markNotificationAsRead } from "../../app/notificationsSlice";
import "./Notifications.css";

const Notifications = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notifications.list);
  const notificationsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  console.log("Notifications component re-rendered");

  const handleToggleDrawer = () => {
    setIsVisible((prev) => !prev);
  };

  const handleMarkAsRead = (id) => dispatch(markNotificationAsRead(id));

  return (
    <div className="notifications-container">
      <div className="menuItem" onClick={handleToggleDrawer}>
        Your notifications
      </div>
      <div
        ref={notificationsRef}
        className={`notifications ${isVisible ? "" : "visible"}`}
      >
        <button onClick={handleToggleDrawer} className="close-btn">
          Close
        </button>
        <ul>
          {notifications.length > 0 ? (
            notifications.map((notif) => (
              <li key={notif.id} onClick={() => handleMarkAsRead(notif.id)}>
                {notif.message}
              </li>
            ))
          ) : (
            <li>No new notifications</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default memo(Notifications);
