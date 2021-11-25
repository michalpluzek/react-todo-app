import React from "react";
import "./Task.css";

const Task = (props) => {
  const { id, text, isActive, isImportant, date, finishDate } = props.task;
  const finishTime = new Date(finishDate).toLocaleString();

  const active = (
    <>
      <p className={isImportant ? "red" : null}>
        <strong>{text}</strong> - do <span>{date} </span>
        <button onClick={() => props.done(id)}>Ukończone</button>
        <button onClick={() => props.remove(id)}>X</button>
      </p>
    </>
  );

  const done = (
    <>
      <p>
        <strong>{text}</strong> (
        <em>
          zrobić do <span>{date}</span>
        </em>
        )
        <br />
        {`Zadanie zakończono: ${finishTime}`}
        <button onClick={() => props.remove(id)}>X</button>
      </p>
    </>
  );

  return <div className="task">{isActive ? active : done}</div>;
};

export default Task;
