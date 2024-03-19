/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Dropdown } from "react-bootstrap";

const TaskCard = ({ task, handleTaskDelete }) => {
    const { id, name, time, assign_date, description } = task
    
    return (
        <div className="task-card">
            {/* <div className="card-header"></div> */}
            <div className="card-content">
                <div className="">
                    <h5 className="title">{name}</h5>
                    <span className="description">{description}</span>      
                </div>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={handleTaskDelete}>Delete</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
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