import { Fragment } from "react";
import TopHeader from "../../components/header/TopHeader";
import Button from "../../components/button/Button";
import TaskForm from "../../components/taskForm/TaskForm";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const UpdateTask = () => {
    const navigate = useNavigate() // to navigate to the another page
    const { id } = useParams(); // Extract taskId parameter from URL
    const task = useSelector(state => state.tasks.allTasks.find(task => task.id === id));
    
    // console.log(task)
    return (
        <Fragment>
            <TopHeader title='Update Tasks'>
                <Button onClick={()=>navigate('/task-list')} type='button' className='primary'>Task List</Button>
            </TopHeader>   
            <div className="task-add-form page-content">
                <TaskForm selectedTask={task}/>
            </div>     
        </Fragment>
    );
};

export default UpdateTask;