import React from "react";
import "./AddTask.css";

class AddTask extends React.Component {
  currentDate = new Date().toISOString().slice(0, 10);

  state = {
    text: "",
    checked: false,
    // date: new Date().toLocaleDateString().split(".").reverse().join("-"),
    date: this.currentDate,
  };

  handleDateChange = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  handleTextChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleCheckboxChange = (e) => {
    this.setState({
      checked: e.target.checked,
    });
  };

  handleClick = () => {
    if (this.state.text.length <= 2) {
      alert(`Za krótka nazwa: ${this.state.text}`);
      return;
    }
    this.props.add(this.state);
    this.setState({
      text: "",
      checked: false,
      date: this.currentDate,
    });
  };

  render() {
    const { text, checked, date } = this.state;
    let maxDate = this.currentDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";

    return (
      <div className="form">
        <input
          type="text"
          placeholder="Dodaj zadanie"
          value={text}
          onChange={this.handleTextChange}
        />
        <input
          type="checkbox"
          checked={checked}
          onChange={this.handleCheckboxChange}
          id="important"
        />
        <label htmlFor="inportant">Priorytet</label>
        <br />
        <label htmlFor="date">Do kiedy zrobić</label>
        <input
          type="date"
          value={date}
          min={this.currentDate}
          max={maxDate}
          id="date"
          onChange={this.handleDateChange}
        />
        <button onClick={this.handleClick}>Dodaj</button>
        <hr />
      </div>
    );
  }
}

export default AddTask;
