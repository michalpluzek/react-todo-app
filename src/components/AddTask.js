import React, { useState } from "react";
import "./AddTask.css";

const AddTask = (props) => {
  const currentDate = new Date().toISOString().slice(0, 10);

  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);
  // const [date, setDate] = useState(new Date().toLocaleDateString().split(".").reverse().join("-"))
  const [date, setDate] = useState(currentDate);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setChecked(e.target.checked);
  };

  const handleClick = () => {
    if (text.length <= 2) {
      alert(`Za krótka nazwa: ${text}`);
      return;
    }
    props.add(text, checked, date);

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
      <button onClick={handleClick}>Dodaj</button>
      <hr />
    </div>
  );
};

export default AddTask;
