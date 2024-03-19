/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Badge, Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteTask, toggleTaskCompletion } from "../../features/tasks/tasksSlice"; // Import the deleteTask action
import React from "react";
import CustomBadge from "../badge/CustomBadge";


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
            <div className={`card-content ${priority === 'low' ? 'border-low' : priority === 'high' ? 'border-high': 'medium'}`}>
                <div className="d-flex align-items-center" style={{ gap: '5px' }}>                      
                   {/* Task is Complete or not Toggler */}
                    <input
                        type="checkbox"
                        checked={task.is_complete}
                        onChange={handleCheckboxChange}
                    />
                    {/* Task Is Complete or not Badge */}
                    {
                        is_complete ?
                            <CustomBadge property='complete'/>
                            : 
                            <CustomBadge property='incomplete'/>
                    }
                    {/* Task Priority Badge */}
                    {
                        priority && <CustomBadge property={priority} />
                    } 
                </div>   
                
                {/* Task Details */}
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