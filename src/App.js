// src/App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import KanbanBoard from "./components/KanbanBoard";
import DisplayMenu from "./components/DisplayMenu";

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState("status");
  const [sorting, setSorting] = useState("priority");

  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => response.json())
      .then((data) => {
        setTickets(data.tickets);
        setUsers(data.users);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="App">
      <DisplayMenu
        grouping={grouping}
        sorting={sorting}
        onGroupingChange={setGrouping}
        onSortingChange={setSorting}
      />
      <KanbanBoard
        tickets={tickets}
        users={users}
        grouping={grouping}
        sorting={sorting}
      />
    </div>
  );
}

export default App;
