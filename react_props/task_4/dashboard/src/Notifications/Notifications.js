import React from "react";
import "./Notifications.css";
import NotificationItem from "./NotificationItem";
import { getLatestNotification } from "../utils/utils";
import closeButton from "../assets/close-icon.png";
import PropTypes from "prop-types";

export default function Notifications({ displayDrawer }) {
  return (
    <>
      <div className="menuItem">Your notifications</div>

      { displayDrawer ? 
        (<div className="Notifications">
          <button
            style={{
              right: 45,
              border: "none",
              position: "absolute",
              background: "transparent",
            }}
            aria-label="close"
            onClick={() => console.log("Close button has been clicked")}
          >
            <img src={closeButton} alt="close button icon" />
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem
              type="urgent"
              html={{ __html: getLatestNotification() }}
            />
          </ul>
        </div>) 
        : <></>
      }
    </>
  );
}

Notifications.defaultProps = {
  displayDrawer: false,
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};
