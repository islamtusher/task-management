// taskSlice.js

import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
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

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.allTasks); // Save only the tasks array
    localStorage.setItem("tasks", serializedState);
  } catch {
    // ignore write errors
  }
};

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    allTasks: loadState(),
  },
  reducers: {
    addTask(state, action) {
      state.allTasks = [...state.allTasks, action.payload]; // Ensure allTasks remains an array
      saveState(state);
    },
    updateTask(state, action) {
      const { id, updatedTask } = action.payload;
      state.allTasks = state.allTasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task
      );
      saveState(state);
    },
    deleteTask(state, action) {
      const taskId = action.payload;
      state.allTasks = state.allTasks.filter((task) => task.id !== taskId);
      saveState(state);
    },
  },
});

export const { addTask, updateTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
