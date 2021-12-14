import React from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import StoreProvider from "../store/StoreProvider";

const App = () => {
  return (
    <StoreProvider>
      <div className="App">
        <h1>Lista zadań</h1>
        <AddTask />
        <TaskList />
      </div>
    </StoreProvider>
  );
};

export default App;
