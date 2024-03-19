/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteTask, toggleTaskCompletion } from "../../features/tasks/tasksSlice"; // Import the deleteTask action
import React from "react";
import CustomBadge from "../badge/CustomBadge";
import ActionToggler from "../dropDownToggler/ActionToggler";


const TaskCard = ({ task }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { id, name, description, is_complete, priority} = task

     // handle delete a task
    const handleTaskDelete = () => {
        dispatch(deleteTask(id));
    }

    const handleCheckboxChange = () => {
        // Toggle the is_complete property of the task and dispatch the action
        dispatch(toggleTaskCompletion(task.id));
    };

    return (
        <div className="task-card">            
            <div className={`task-card-content ${priority === 'low' ? 'border-low' : priority === 'high' ? 'border-high': 'border-medium'}`}>
                <div className="task-card-header">                      
                    <div className="badges">
                        {/* Task is Complete or not Toggler */}
                        <input
                            type="checkbox"
                            checked={task?.is_complete ? true : false}
                            onChange={handleCheckboxChange}
                        />
                     
                        {   // Task Is Complete or not Badge
                            is_complete ?
                                <CustomBadge property='complete'/>
                                : 
                                <CustomBadge property='incomplete'/>
                        }
                       
                        {   // Task Priority Badge
                            priority && <CustomBadge property={priority} />
                        } 
                    </div>
                    {/* task actions dropdown */}
                    <Dropdown>
                        <Dropdown.Toggle as={ActionToggler} id="dropdown-basic" />
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={()=>navigate(`/edit-task/${id}`)}>Update</Dropdown.Item>
                            <Dropdown.Item onClick={handleTaskDelete} >Delete</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>   
                
                {/* Task Details */}
                <div className="body">
                    <h6 className="title">{name}</h6>
                    <span className="description">{description}</span>   
                </div>
                        
            </div>
        </div>
    );
};

export default TaskCard;