
import { useNavigate } from 'react-router-dom';
import TopHeader from '../../components/header/TopHeader';
import Button from '../../components/button/Button';
import TaskForm from '../../components/taskForm/TaskForm';

const AddNewTask = () => {
  const navigate = useNavigate() // to navigate to the another page

  return (
    <div className=''>
      <TopHeader title='Add Tasks'>
        <Button onClick={()=>navigate('/task-list')} type='button' className='primary'>Task List</Button>
      </TopHeader>   
      <div className="task-add-form page-content">
        <TaskForm/>
      </div>     
    </div>
     
    );
};

export default AddNewTask;