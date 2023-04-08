import React from "react";
import "./notification.css";

const Notification = ({ message, onClose }) => {
    return (
        <div className="notification">
            <p>{message}</p>
            <button className="notification-close-button" onClick={onClose}>
                X
            </button>
        </div>
    );
};

export default Notification;
