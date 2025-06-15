import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNotifications } from "../../app/notificationsSlice";
import "./Notifications.css";

const Notifications = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notifications.list);
  const loading = useSelector((state) => state.notifications.loading);
  const notificationsRef = useRef(null);

  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);

  const handleToggleDrawer = () => {
    if (notificationsRef.current) {
      notificationsRef.current.classList.toggle("visible");
    }
  };

  return (
    <div className="notifications-container">
      <div className="menuItem" onClick={handleToggleDrawer}>
        Your notifications
      </div>
      <div ref={notificationsRef} className="notifications visible">
        <button onClick={handleToggleDrawer} className="close-btn">
          Close
        </button>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {notifications.length > 0 ? (
              notifications.map((notif) => (
                <li key={notif.id}>{notif.message}</li>
              ))
            ) : (
              <li>No new notifications</li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default React.memo(Notifications);

