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
    ],
  };

  handleRemoveClick = (id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);

    // let tasks = Array.from(this.state.tasks);
    // tasks = tasks.filter(task=>task.id!==id)

    this.setState({
      tasks,
    });
  };

  handleDoneClick = (id) => {
    const tasks = [...this.state.tasks];
    // const index = tasks.findIndex((task) => task.id === id);
    // tasks[index].isActive = false;
    // task.finishDate = new Date().getTime();

    tasks.forEach((task) => {
      if (task.id === id) {
        task.isActive = false;
        task.finishDate = new Date().getTime();
      }
    });

    this.setState({
      tasks,
    });
  };

  render() {
    const { tasks } = this.state;

    return (
      <div className="App">
        <h1>Lista zadań</h1>
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
