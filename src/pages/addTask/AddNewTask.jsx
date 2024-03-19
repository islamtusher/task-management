import { useForm } from 'react-hook-form';
import InputError from '../../components/inputError/InputError';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../../features/tasks/tasksSlice';
import { useNavigate } from 'react-router-dom';

const AddNewTask = () => {
  const navigate = useNavigate() // to navigate to the another page
  const tasks = useSelector((state) => state.tasks.allTasks) // get all tasks from redux state
  const dispatch = useDispatch() 

  console.log(tasks)
  const {
      register,
      handleSubmit,
      formState: { errors },
      reset
  } = useForm() // to handle form submission

  const onSubmit = (data) => {
    const { name, description } = data // destructured the data object
    if (data) {
      const newTask = {
          id: Math.random().toString(36).substr(2, 9), // giving a unique id
          name: name,
          description: description,
          completed: false,
      };
      dispatch(addTask(newTask)) // dispatching the add new task reducer
      navigate('/task-list') // once the new task added navigate
      reset(); // reset the entire form
    }
  };
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
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
          
          <button type="submit" className="btn btn-primary">Save</button>
      </form>
    );
};

export default AddNewTask;