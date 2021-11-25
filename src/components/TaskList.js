import React from "react";
import Task from "./Task";
import "./TaskList.css";

const TaskList = (props) => {
  const activeTasks = props.tasks
    .filter((task) => task.isActive)
    .map((task) => (
      <Task key={task.id} task={task} remove={props.remove} done={props.done} />
    ));

  const doneTasks = props.tasks
    .filter((task) => !task.isActive)
    .map((task) => (
      <Task key={task.id} task={task} remove={props.remove} done={props.done} />
    ));

  return (
    <>
      <div className="activeTasks">
        <h2>{`Zadania do zrobienia (${activeTasks.length})`}</h2>
        {activeTasks.length > 0 ? activeTasks : <p>Brak zadań. Super!</p>}
      </div>
      <hr />
      <div className="doneTasks">
        <h3>{`Zadania do zrobienia (${doneTasks.length})`}</h3>
        {doneTasks.length > 5 && (
          <span style={{ fontSize: 10 }}>
            Wyświetlonych jest tylko 5 ostatnio ukończonych zadań
          </span>
        )}
        {doneTasks.slice(0, 5)}
      </div>
    </>
  );
};

export default TaskList;
