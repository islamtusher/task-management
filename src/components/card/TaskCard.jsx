/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Badge, Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteTask } from "../../features/tasks/tasksSlice"; // Import the deleteTask action

const TaskCard = ({ task }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { id, name, time, assign_date, description, is_complete, priority} = task
    console.log(task)

     // handle delete a task
    const handleTaskDelete = () => {
        dispatch(deleteTask(id));
    }

    return (
        <div className="task-card">
            
            <div className="card-content">
                <div className="d-flex" style={{gap:'5px'}}>
                    {
                        is_complete ?
                            <Badge bg="success" text="light">  Complete </Badge>
                            :
                            <Badge bg="warning" text="dark">  Incomplete </Badge>                                                
                    }

                    {
                        priority === 'low' ? 
                            <Badge bg="secondary" text="light"> Low </Badge>
                            : priority === 'medium' ?
                            <Badge bg="warning" text="dark"> Medium/ </Badge>
                            : priority === 'danger' && 
                            <Badge bg="danger" text="dark"> Danger </Badge>
                    } 
                </div>    
                <div>
                    <h6 className="title">{name}</h6>
                    <span className="description">{description}</span>   
                </div>
                           
                {/* <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" />

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={()=>navigate(`/edit-task/${id}`)}>Update</Dropdown.Item>
                        <Dropdown.Item onClick={handleTaskDelete} >Delete</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> */}
            </div>
            {/* <div className="card-footer">
                <svg className="w-6 h-6 text-red-200 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
                {assign_date}
            </div> */}
        </div>
    );
};

export default TaskCard;