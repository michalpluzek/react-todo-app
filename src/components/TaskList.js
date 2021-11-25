import React from "react";
import Task from "./Task";
import "./TaskList.css";

const TaskList = (props) => {
  const activeTasks = props.tasks
    .map((task) => {
      if (!task.isActive) return null;
      return (
        <Task
          key={task.id}
          task={task}
          remove={props.remove}
          done={props.done}
        />
      );
    })
    .filter((task) => task);

  const doneTasks = props.tasks
    .map((task) => {
      if (task.isActive) return null;
      return (
        <Task
          key={task.id}
          task={task}
          remove={props.remove}
          done={props.done}
        />
      );
    })
    .filter((task) => task);

  return (
    <>
      <div className="activeTasks">
        <h2>{`Zadania do zrobienia (${activeTasks.length})`}</h2>
        {activeTasks}
      </div>
      <hr />
      <div className="doneTasks">
        <h2>{`Zadania do zrobienia (${doneTasks.length})`}</h2>
        {doneTasks}
      </div>
    </>
  );
};

export default TaskList;
