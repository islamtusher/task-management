import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import TopHeader from '../../components/header/TopHeader';
import Button from '../../components/button/Button';
import TaskForm from '../../components/taskForm/TaskForm';
import { Fragment } from 'react';

const AddNewTask = () => {
  const navigate = useNavigate() // to navigate to the another page
  const tasks = useSelector((state) => state.tasks.allTasks) // get all tasks from redux state

  console.log(tasks)

  return (
    <Fragment>
      <TopHeader title='Add Tasks'>
        <Button onClick={()=>navigate('/task-list')} type='button' className='primary'>Task List</Button>
      </TopHeader>   
      <div className="task-add-form">
        <TaskForm/>
      </div>     
    </Fragment>
     
    );
};

export default AddNewTask;