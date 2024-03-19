/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import TaskCard from "../../components/card/TaskCard";
import TopHeader from "../../components/header/TopHeader";
import PageContent from "../../components/pageContent/PageContent";
import Button from "../../components/button/Button";
import TaskCounter from "../../components/taskCounter/TaskCounter";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"; 
import { Fragment, useEffect, useState } from "react";
import BadgesBox from "../../components/badgesBox/BadgesBox";

const TaskList = () => {
  const navigate = useNavigate() // will use for navigate to a page
  let tasks = useSelector((state) => state.tasks.allTasks) // get current all tasks from redux state
  
  const [filterOptions, setFilterOptions] = useState([]); // storing the selected filter options
  const [filteredTasks, setFilteredTasks] = useState([]); // storing the filtered tasks 

  // Handle any filter option selected
  const handleFilter = (filter) => {        
    let preFilters = [...filterOptions]
    // Check if the filter is not in the array and insert it
    if (!preFilters.includes(filter)) {
        preFilters.push(filter)
      setFilterOptions(preFilters)
    }
  }

  // Handle any filter option cancellation
  const handleFilterOptionCancel = (filter) => { 
    const newFilters = filterOptions.filter(value => value !== filter);
    setFilterOptions(newFilters);
  }

  // update the filter tasks based on selected filters changes
  useEffect(() => {    
    if (filterOptions) {
      const filteredTasks = tasks.filter(task => filterOptions.includes(task.priority)); // filter tasks based on priority
     setFilteredTasks(filteredTasks)  // update the filter tasks state
    }   
  },[filterOptions, tasks]) // Whenever filterOptions changes
  
  return (
      <Fragment>
        <header>
          <TopHeader title='Tasks'>
            <Button onClick={()=>navigate('/add-task')} type='button' className='primary'>Add Task</Button>
          </TopHeader>                
        </header>

        <main>
          <PageContent>
            {/* task Counter */}
            <TaskCounter tasks={tasks} handleFilter={handleFilter}  />
            
            {/* Selected Filter Option showing using Badges */}
            {
              filterOptions.length > 0 && <BadgesBox priorities={filterOptions} handleFilterOptionCancel={handleFilterOptionCancel}/>
            }
            
            {/* tasks List */}
            {
              // if there is filtered tasks, then show them
              filteredTasks.length > 0 ? filteredTasks?.map((task, index) => <TaskCard key={index} task={task} />)
                :
              // otherwise show all available tasks
              tasks?.map((task, index) => <TaskCard key={index} task={task} />)            
            }
          </PageContent>
        </main> 
      </Fragment>
  );
};

export default TaskList;