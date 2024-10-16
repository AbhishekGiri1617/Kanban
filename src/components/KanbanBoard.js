import React from "react";
import Card from "./Card";
import {
  getStatusIcon,
  getUserAvatar,
  getPriorityIcon,
} from "../utils/iconUtils";

const KanbanBoard = ({ tickets, users, grouping, sorting }) => {
  const statusColumns = ["todo", "in progress", "done", "canceled"]; 

  const groupAndSortTickets = () => {
    const grouped = tickets.reduce((acc, ticket) => {
      let key;

      switch (grouping) {
        case "status":
          key = ticket.status.toLowerCase(); 
          break;
        case "userId":
          key = ticket.userId;
          break;
        case "priority":
          key = ticket.priority.toString();
          break;
        default:
          key = "other";
      }

      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(ticket);
      return acc;
    }, {});

    if (grouping === "status") {
      statusColumns.forEach((status) => {
        if (!grouped[status]) {
          grouped[status] = [];
        }
      });
    }

    Object.keys(grouped).forEach((key) => {
      grouped[key].sort((a, b) => {
        if (sorting === "priority") {
          return b.priority - a.priority; 
        } else {
          return a.title.localeCompare(b.title); 
        }
      });
    });

    return grouped;
  };

  const organizedTickets = groupAndSortTickets();

  const getColumnHeader = (group) => {
    switch (grouping) {
      case "status":
        return (
          <>
            {getStatusIcon(group)} {capitalizeStatus(group)}{" "}
            <span className="ticket-count">
              {(organizedTickets[group] || []).length}
            </span>
          </>
        );
      case "userId":
        const user = users.find((u) => u.id === group);
        return (
          <>
            <span className="user-avatar">
              {getUserAvatar(user ? user.name : "")}
            </span>
            {user ? user.name : "Unassigned"}{" "}
            <span className="ticket-count">
              {(organizedTickets[group] || []).length}
            </span>
          </>
        );
      case "priority":
        const priorityLabels = [
          "No Priority",
          "Low",
          "Medium",
          "High",
          "Urgent",
        ];
        return (
          <>
            {getPriorityIcon(parseInt(group))} {priorityLabels[parseInt(group)]}
            <span className="ticket-count">
              {(organizedTickets[group] || []).length}
            </span>
          </>
        );
      default:
        return group;
    }
  };

  const capitalizeStatus = (status) => {
    return status
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="kanban-board">
      {grouping === "status"
        ? 
          statusColumns.map((status) => (
            <div key={status} className="kanban-column">
              <h2 className="column-header">{getColumnHeader(status)}</h2>
              <div className="column-tickets">
                {(organizedTickets[status] || []).map((ticket) => (
                  <Card
                    key={ticket.id}
                    ticket={ticket}
                    user={users.find((u) => u.id === ticket.userId)}
                  />
                ))}
              </div>
            </div>
          ))
          Object.entries(organizedTickets).map(([group, tickets]) => (
            <div key={group} className="kanban-column">
              <h2 className="column-header">{getColumnHeader(group)}</h2>
              <div className="column-tickets">
                {tickets.map((ticket) => (
                  <Card
                    key={ticket.id}
                    ticket={ticket}
                    user={users.find((u) => u.id === ticket.userId)}
                  />
                ))}
              </div>
            </div>
          ))}
    </div>
  );
};

const capitalizeStatus = (status) => {
  return status
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export default KanbanBoard;
