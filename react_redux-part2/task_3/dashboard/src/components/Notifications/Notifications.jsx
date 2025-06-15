import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getFilteredNotifications } from "../features/selectors/notificationsSelector";

const Notifications = () => {
  const [currentFilter, setCurrentFilter] = useState("all");
  const filteredNotifications = useSelector((state) =>
    getFilteredNotifications(state, currentFilter)
  );

  const handleSetFilterUrgent = () => setCurrentFilter("urgent");
  const handleSetFilterDefault = () => setCurrentFilter("default");

  return (
    <div className="Notifications">
      <button onClick={handleSetFilterUrgent}>‼️</button>
      <button onClick={handleSetFilterDefault}>??</button>
      {filteredNotifications.map((notification) => (
        <NotificationItem key={notification.id} {...notification} />
      ))}
    </div>
  );
};

export default Notifications;