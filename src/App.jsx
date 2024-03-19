import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import TaskList from './pages/taskList/TaskList';
import AddNewTask from './pages/addTask/AddNewTask';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/task-list" element={<TaskList />} />
      <Route path="/add-task" element={<AddNewTask />} />
    </Routes>
  )
}

export default App
