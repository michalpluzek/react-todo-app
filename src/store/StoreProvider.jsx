import React, { createContext, useState } from "react";

export const StoreContext = createContext(null);

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

const StoreProvider = ({ children }) => {
  const [tasks, setTasks] = useState([...taskExample]);

  return (
    <StoreContext.Provider value={{ tasks, setTasks }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
