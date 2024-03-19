/* eslint-disable react/prop-types */
import { Dropdown } from "react-bootstrap";
import CustomToggler from "../dropDownToggler/CustomToggler";

const TaskCounter = ({ tasks, handleFilter }) => {
    
    return (
        <div className="tasks-counter-box">
            <span>Total: {tasks?.length}</span>
            <div className="d-flex align-items-center" style={{gap:'10px'}}>
                <span>Completed: {tasks?.filter(task => task.is_complete).length}</span>
                {/* Filter Dropdown */}
                <Dropdown onSelect={(evt) => handleFilter(evt)}>
                    <Dropdown.Toggle as={CustomToggler} id="dropdown-custom-components" />
                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="low">Low</Dropdown.Item>
                        <Dropdown.Item eventKey="medium">Medium</Dropdown.Item>
                        <Dropdown.Item eventKey="high">High</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
};

export default TaskCounter;