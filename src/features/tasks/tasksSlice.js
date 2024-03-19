// taskSlice.js

import { createSlice } from "@reduxjs/toolkit";

const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("tasks");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return [];
  }
};

const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state.allTasks); // Save only the tasks array
    localStorage.setItem("tasks", serializedState);
  } catch {
    // errors not handled
  }
};

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    allTasks: loadStateFromLocalStorage(),
  },
  reducers: {
    addTask(state, action) {
      state.allTasks = [...state.allTasks, action.payload]; // Ensure allTasks remains an array
      saveStateToLocalStorage(state);
    },
    updateTask(state, action) {
      const { id, updatedTask } = action.payload;
      state.allTasks = state.allTasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task
      );
      saveStateToLocalStorage(state);
    },
    deleteTask(state, action) {
      const taskId = action.payload;
      state.allTasks = state.allTasks.filter((task) => task.id !== taskId);
      saveStateToLocalStorage(state);
    },
    toggleTaskCompletion(state, action) {
      const taskId = action.payload;
      const task = state.allTasks.find((task) => task.id === taskId);
      if (task) {
        task.is_complete = !task.is_complete;
      }
      saveStateToLocalStorage(state);
    },
  },
});

export const { addTask, updateTask, deleteTask, toggleTaskCompletion } =
  taskSlice.actions;

export default taskSlice.reducer;
