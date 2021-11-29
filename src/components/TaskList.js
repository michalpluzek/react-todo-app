import React from "react";
import Task from "./Task";
import "./TaskList.css";

const TaskList = (props) => {
  const activeTasks = props.tasks
    .filter((task) => task.isActive)
    .sort((a, b) => {
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    })
    .map((task) => (
      <Task key={task.id} task={task} remove={props.remove} done={props.done} />
    ));

  const doneTasks = props.tasks
    .filter((task) => !task.isActive)
    .sort((a, b) => b.finishDate - a.finishDate)
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
