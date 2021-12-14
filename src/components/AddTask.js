import React, { useContext, useState } from "react";
import { StoreContext } from "../store/StoreProvider";
import "./AddTask.css";

const AddTask = (props) => {
  const currentDate = new Date().toISOString().slice(0, 10);

  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);
  // const [date, setDate] = useState(new Date().toLocaleDateString().split(".").reverse().join("-"))
  const [date, setDate] = useState(currentDate);

  const { tasks, setTasks } = useContext(StoreContext);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setChecked(e.target.checked);
  };

  const getNewId = () => {
    const id = Math.floor(Math.random() * 1000);
    const checkId = tasks.findIndex((task) => task.id === id);

    if (checkId === -1) return id;
    else return getNewId();
  };

  const handleOnClick = () => {
    if (text.length <= 2) {
      alert(`Za krótka nazwa: ${text}`);
      return;
    }

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

    setText("");
    setChecked(false);
    setDate(currentDate);
  };

  let maxDate = currentDate.slice(0, 4) * 1 + 1;
  maxDate = maxDate + "-12-31";

  return (
    <div className="form">
      <input
        type="text"
        placeholder="Dodaj zadanie"
        value={text}
        onChange={handleTextChange}
      />
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
        id="important"
      />
      <label htmlFor="inportant">Priorytet</label>
      <br />
      <label htmlFor="date">Do kiedy zrobić</label>
      <input
        type="date"
        value={date}
        min={currentDate}
        max={maxDate}
        id="date"
        onChange={handleDateChange}
      />
      <button onClick={handleOnClick}>Dodaj</button>
      <hr />
    </div>
  );
};

export default AddTask;
