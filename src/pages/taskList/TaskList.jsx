
// import Button from "../../components/button/Button";
import { useForm } from "react-hook-form";
import TaskCard from "../../components/card/TaskCard";
import TopHeader from "../../components/header/TopHeader";
import PageContent from "../../components/pageContent/PageContent";
import { useEffect, useState } from "react";
import InputError from "../../components/inputError/InputError";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  // const [priorityInput, setPriorityInput] = useState('low');

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
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    console.log(tasks)
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const onSubmit = (data) => {
    const { name, description } = data
    if (data) {
      const newTask = {
        id: Math.random().toString(36).substr(2, 9),
        name: name,
        description: description,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      reset();
    }
  };

  

  return (
      <div>
          <header>
              <TopHeader title='Tasks'>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                modal
                </button>
              </TopHeader>                
          </header>

          <main>
              <PageContent>
                  {
                      tasks.map((task, index) => <TaskCard key={index} task={task}/> )
                  }
              </PageContent>
          </main>

          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
              <div className="modal-body">
                  <div>
                    <label htmlFor="name" className="form-label">Task Name</label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        {...register("name", { required: 'This is required' })}
                      />
                    </div>
                    {errors?.name && <InputError message={errors.name.message} />}
                  </div>
                  <div>
                    <label htmlFor="name" className="form-label">Description</label>
                    <div className="input-group mb-3">
                      <input
                        type="textarea"
                        className="form-control"
                        {...register("description")}
                      />
                    </div>
                    {errors?.description && <InputError message={errors.description.message} />}
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                  <button type="submit" className="btn btn-primary">Save</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};

export default TaskList;