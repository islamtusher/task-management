
// import Button from "../../components/button/Button";
import TaskCard from "../../components/card/TaskCard";
import TopHeader from "../../components/header/TopHeader";
import PageContent from "../../components/pageContent/PageContent";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"; 
import TaskCounter from "../../components/taskCounter/TaskCounter";
import { Fragment } from "react";

const TaskList = () => {
  const navigate = useNavigate()
  const tasks = useSelector((state) => state.tasks.allTasks)

  console.log(tasks)
  
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
          <TaskCounter tasks={tasks} />
          
          {/* tasks List */}
          {
            tasks?.map((task, index) => <TaskCard key={index} task={task} />)            
          }
          </PageContent>
        </main> 
      </Fragment>
  );
};

export default TaskList;