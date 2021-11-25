import React from "react";
import "./Task.css";

const Task = (props) => {
  const { text, isActive, isImportant, date, finishDate } = props.task;

  return (
    <div className="task">
      <p className={isImportant ? "red" : null}>
        <strong>{text}</strong>
      </p>
      {isActive ? (
        <button onClick={() => props.done(props.task)}>Ukończone</button>
      ) : null}
      <button onClick={() => props.remove(props.task)}>X</button>
      <p>{`Wykonać do: ${date}`}</p>
      {isActive ? null : <p>{`Zadanie zakończono: ${finishDate}`}</p>}
    </div>
  );
};

export default Task;
