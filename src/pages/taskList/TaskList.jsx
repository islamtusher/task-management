
// import Button from "../../components/button/Button";
import TaskCard from "../../components/card/TaskCard";
import TopHeader from "../../components/header/TopHeader";
import PageContent from "../../components/pageContent/PageContent";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../../features/tasks/tasksSlice"; // Import the deleteTask action

const TaskList = () => {
  const navigate = useNavigate()
  const tasks = useSelector((state) => state.tasks.allTasks)
  const dispatch = useDispatch();
  console.log(tasks)
    // const tasks = [
    //     {
    //         id: '1',
    //         name: 'This is a test item',
    //         time: '10:00 AM',
    //         assign_date: '10 JAN 2024',
    //         end_date: '15 JAN 2024',
    //         description: 'Something will testing here...',
    //         status: 'Completed'
    //     }
    // ]

  const handleTaskDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  }

  return (
      <div>
        <header>
          <TopHeader title='Tasks'>
            <Button onClick={()=>navigate('/add-task')} type='button' className='primary'>Add Task</Button>
          </TopHeader>                
        </header>

        <main>
          <PageContent>
            {
              tasks.map((task, index) => {
                return (
                  <TaskCard
                    key={index}
                    task={task}
                    handleTaskDelete={() => handleTaskDelete(task.id)}
                  />
                )
              })
            }
          </PageContent>
        </main> 
      </div>
  );
};

export default TaskList;