import React from "react";
import {
  getStatusIcon,
  getPriorityIcon,
  getUserAvatar,
} from "../utils/iconUtils";

const Card = ({ ticket, user }) => {
  return (
    <div className="card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        <span className="user-avatar" title={user ? user.name : "Unassigned"}>
          {getUserAvatar(user ? user.name : "")}
        </span>
      </div>
      <h3 className="card-title">{ticket.title}</h3>
      <div className="card-footer">
        <span className="priority-icon" title={`Priority: ${ticket.priority}`}>
          {getPriorityIcon(ticket.priority)}
        </span>
        <span className="tag">
          {getStatusIcon(ticket.status)} {ticket.tag && `• ${ticket.tag}`}
        </span>
      </div>
    </div>
  );
};

export default Card;
