import React, { useContext } from "react";
import { StoreContext } from "../store/StoreProvider";
import "./Task.css";

const Task = ({ id, text, isActive, isImportant, date, finishDate }) => {
  const { tasks, setTasks } = useContext(StoreContext);

  const finishTime = new Date(finishDate).toLocaleString();

  const handleRemoveClick = () => {
    const _tasks = [...tasks];
    const index = _tasks.findIndex((task) => task.id === id);
    _tasks.splice(index, 1);

    // let _tasks = Array.from(tasks);
    // _tasks = tasks.filter(task => task.id !== id)

    setTasks(_tasks);
  };

  const handleDoneClick = () => {
    const _tasks = [...tasks];
    // const index = tasks.findIndex((task) => task.id === id);
    // tasks[index].isActive = false;
    // task.finishDate = new Date().getTime();

    _tasks.forEach((task) => {
      if (task.id === id) {
        task.isActive = false;
        task.finishDate = new Date().getTime();
      }
    });

    setTasks(_tasks);
  };

  const active = (
    <>
      <p className={isImportant ? "red" : null}>
        <strong>{text}</strong> - do <span>{date} </span>
        <button onClick={handleDoneClick}>Ukończone</button>
        <button onClick={handleRemoveClick}>X</button>
      </p>
    </>
  );

  const done = (
    <>
      <p>
        <strong style={{ textDecoration: "line-through" }}>{text}</strong> (
        <em>
          zrobić do <span>{date}</span>
        </em>
        )
        <br />
        {`Zadanie zakończono: ${finishTime}`}
        <button onClick={handleRemoveClick}>X</button>
      </p>
    </>
  );

  return <div className="task">{isActive ? active : done}</div>;
};

export default Task;
