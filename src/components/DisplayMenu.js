import React, { useState } from "react";

const DisplayMenu = ({
  grouping,
  sorting,
  onGroupingChange,
  onSortingChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="display-menu">
      <button onClick={() => setIsOpen(!isOpen)} className="display-button">
        <span className="icon">☰</span> Display <span className="arrow">▼</span>
      </button>
      {isOpen && (
        <div className="menu-dropdown">
          <div className="menu-item">
            <label htmlFor="grouping">Grouping</label>
            <select
              id="grouping"
              value={grouping}
              onChange={(e) => onGroupingChange(e.target.value)}
            >
              <option value="status">Status</option>
              <option value="userId">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="menu-item">
            <label htmlFor="sorting">Ordering</label>
            <select
              id="sorting"
              value={sorting}
              onChange={(e) => onSortingChange(e.target.value)}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayMenu;
