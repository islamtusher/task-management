import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import TaskList from './pages/taskList/TaskList';
import AddNewTask from './pages/addTask/AddNewTask';
import UpdateTask from './pages/updateTask/UpdateTask';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/task-list" element={<TaskList />} />
      <Route path="/add-task" element={<AddNewTask />} />
      <Route path="/edit-task/:id" element={<UpdateTask />} />
    </Routes>
  )
}

export default App
