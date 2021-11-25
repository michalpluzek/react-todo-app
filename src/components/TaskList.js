import React from "react";
import Task from "./Task";
import "./TaskList.css";

const TaskList = () => {
  return (
    <div>
      <h2>TaskList</h2>
      <Task />
      <Task />
    </div>
  );
};

export default TaskList;
