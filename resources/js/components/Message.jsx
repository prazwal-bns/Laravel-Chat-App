
import React from "react";

const Message = ({ userId, message }) => {
    return (
        <div className={`row ${userId === message.user_id ? "justify-content-end" : ""}`}>
            <div className="col-md-6">
                <small className="float-right text-muted">
                    {message.time} - {message.user.name}
                </small>
                <small className="text-muted">{message.name}</small>
                <div className={`alert alert-${userId === message.user_id ? "primary" : "secondary"}`} role="alert">
                    {message.text}
                </div>
            </div>
        </div>
    );
};

export default Message;
