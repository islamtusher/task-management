/* eslint-disable react/prop-types */
import { Dropdown } from "react-bootstrap";
import CustomToggler from "../dropDownToggler/CustomToggler";
import { useState } from "react";

const TaskCounter = ({ tasks }) => {
    const [filterOptions, setFilterOptions] = useState([]);

    const handleFilter = (filter) => {
        
        let preFilters = [...filterOptions]
        // Check if the filter is not in the array and insert it
        if (!preFilters.includes(filter)) {
            preFilters.push(filter)
            setFilterOptions(preFilters)
        }
    }

    console.log(filterOptions)
    return (
        <div className="tasks-counter-box">
            <span>Total: {tasks?.length}</span>
            <div className="d-flex align-items-center" style={{gap:'10px'}}>
                <span>Completed: {tasks?.filter(task => task.is_complete).length}</span>
                {/* Filter Dropdown */}
                <Dropdown onSelect={(evt) => handleFilter(evt)}>
                    <Dropdown.Toggle as={CustomToggler} id="dropdown-custom-components" />
                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="Low">Low</Dropdown.Item>
                        <Dropdown.Item eventKey="Medium">Medium</Dropdown.Item>
                        <Dropdown.Item eventKey="Heigh">Heigh</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
};

export default TaskCounter;