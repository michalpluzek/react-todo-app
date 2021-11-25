import React from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends React.Component {
  state = {
    tasks: [
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
        isActive: false,
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
        date: "2021-11-24",
        isImportant: true,
        isActive: true,
        finishDate: null,
      },
    ],
  };

  handleRemoveClick = (task) => {
    console.log("usuwam: " + task.text);
  };
  handleDoneClick = (task) => {
    console.log("zadanie gotowe: " + task.text);
  };

  render() {
    const { tasks } = this.state;

    return (
      <div className="App">
        <AddTask />
        <TaskList
          tasks={tasks}
          remove={this.handleRemoveClick}
          done={this.handleDoneClick}
        />
      </div>
    );
  }
}

export default App;
