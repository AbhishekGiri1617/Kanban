import React from "react";

// Corrected paths to icons based on their new location in the 'src/icon_FEtask' folder
import TodoIcon from "../icon_FEtask/To-do.svg";
import InProgressIcon from "../icon_FEtask/in-progress.svg";
import DoneIcon from "../icon_FEtask/Done.svg";
import CanceledIcon from "../icon_FEtask/Cancelled.svg";

import NoPriorityIcon from "../icon_FEtask/No-priority.svg";
import LowPriorityIcon from "../icon_FEtask/LP.svg";
import MediumPriorityIcon from "../icon_FEtask/MP.svg";
import HighPriorityIcon from "../icon_FEtask/HP.svg";
import UrgentPriorityColorIcon from "../icon_FEtask/UPC.svg";

// Function to return the status icon based on the status string
export const getStatusIcon = (status) => {
  switch (status.toLowerCase()) {
    case "todo":
      return <img src={TodoIcon} alt="To-do Icon" />;
    case "in progress":
      return <img src={InProgressIcon} alt="In Progress Icon" />;
    case "done":
      return <img src={DoneIcon} alt="Done Icon" />;
    case "canceled":
      return <img src={CanceledIcon} alt="Canceled Icon" />;
    default:
      return <img src={TodoIcon} alt="To-do Icon" />; // Default fallback if no status matches
  }
};

// Function to return the priority icon based on the priority number
export const getPriorityIcon = (priority) => {
  switch (priority) {
    case 0:
      return <img src={NoPriorityIcon} alt="No Priority Icon" />;
    case 1:
      return <img src={LowPriorityIcon} alt="Low Priority Icon" />;
    case 2:
      return <img src={MediumPriorityIcon} alt="Medium Priority Icon" />;
    case 3:
      return <img src={HighPriorityIcon} alt="High Priority Icon" />;
    case 4:
      return <img src={UrgentPriorityColorIcon} alt="Urgent Priority Icon" />;
    default:
      return <img src={TodoIcon} alt="To-do Icon" />; // Default fallback if no priority matches
  }
};

// Function to return a user avatar based on the name's first letter
export const getUserAvatar = (name) => {
  return name ? name.charAt(0).toUpperCase() : "👤";
};