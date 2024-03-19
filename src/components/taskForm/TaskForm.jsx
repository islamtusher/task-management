/* eslint-disable react/prop-types */
// TaskForm.js (example component)

import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import InputError from '../inputError/InputError';
import { addTask, updateTask } from '../../features/tasks/tasksSlice'; // Import the addTask and updateTask actions

const TaskForm = ({ selectedTask }) => {
    const navigate = useNavigate() // to navigate to the another page
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset
    } = useForm() // to handle form submission
    
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        if (!data.name) return; // Prevent submission if task name is empty    
        const { name, description } = data // destructured the data object

        if (selectedTask) {
            // If selectedTask exists, Then edit operation
            dispatch(updateTask({ id: selectedTask.id, ...data })); // Dispatch updateTask action
        } else {
            const newTask = {
                id: Math.random().toString(36).substr(2, 9), // giving a unique id
                name: name,
                description: description,
                completed: false,
            };
            dispatch(addTask(newTask)); // Dispatch addTask action
            navigate('/task-list') // once the new task added navigate            
        }

        // Reset form after submission
        reset();
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name" className="form-label">Task Name</label>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            defaultValue={selectedTask ? selectedTask.name : ''}
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
                        defaultValue={selectedTask ? selectedTask.description : ''}
                        {...register("description")}
                    />
                    </div>
                    {errors?.description && <InputError message={errors.description.message} />}
                </div>
                
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </>
        
    );
};

export default TaskForm;
