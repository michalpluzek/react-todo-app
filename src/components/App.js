import React, { useState } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

const taskExample = [
  {
    id: 0,
    text: "posprzątać dom",
    date: "2021-11-28",
    isImportant: false,
    isActive: true,
    finishDate: null,
  },
  {
    id: 1,
    text: "zrobić pranie",
    date: "2021-11-29",
    isImportant: false,
    isActive: true,
    finishDate: "2021-11-28",
  },
  {
    id: 2,
    text: "ugotować obiad",
    date: "2021-11-30",
    isImportant: false,
    isActive: true,
    finishDate: null,
  },
  {
    id: 3,
    text: "znaleźć pracę",
    date: "2021-12-24",
    isImportant: true,
    isActive: true,
    finishDate: null,
  },
  {
    id: 4,
    text: "zagrać w remake diablo 2",
    date: "2021-12-24",
    isImportant: true,
    isActive: true,
    finishDate: null,
  },
  {
    id: 5,
    text: "polecieć w kosmos",
    date: "2021-12-24",
    isImportant: false,
    isActive: true,
    finishDate: null,
  },
];

const App = () => {
  const [tasks, setTasks] = useState([...taskExample]);

  const handleRemoveClick = (id) => {
    const _tasks = [...tasks];
    const index = _tasks.findIndex((task) => task.id === id);
    _tasks.splice(index, 1);

    // let _tasks = Array.from(tasks);
    // _tasks = tasks.filter(task=>task.id!==id)

    setTasks(_tasks);
  };

  const handleDoneClick = (id) => {
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

  const handleAddClick = (text, checked, date) => {
    const newId = getNewId();

    const task = {
      id: newId,
      text,
      date,
      isImportant: checked,
      isActive: true,
      finishDate: null,
    };

    setTasks((prevValue) => [...prevValue, task]);
  };

  const getNewId = () => {
    const id = Math.floor(Math.random() * 1000);
    const checkId = tasks.findIndex((task) => task.id === id);

    if (checkId === -1) return id;
    else return getNewId();
  };

  return (
    <div className="App">
      <h1>Lista zadań</h1>
      <AddTask tasks={tasks} add={handleAddClick} />
      <TaskList
        tasks={tasks}
        remove={handleRemoveClick}
        done={handleDoneClick}
      />
    </div>
  );
};

export default App;
