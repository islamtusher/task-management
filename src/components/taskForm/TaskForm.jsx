/* eslint-disable react/prop-types */
// TaskForm.js (example component)

import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import InputError from '../inputError/InputError';
import { addTask, updateTask } from '../../features/tasks/tasksSlice'; // Import the addTask and updateTask actions
import { useState } from 'react';

const TaskForm = ({ selectedTask }) => {
    const navigate = useNavigate() // to navigate to the another page
    const dispatch = useDispatch();
    const [isComplete, setIsComplete] = useState(selectedTask?.is_complete)
    const [defaultPriority, setDefaultPriority] = useState(selectedTask?.priority)

    const {
      register,
      handleSubmit,
      formState: { errors },
      reset
    } = useForm() // to handle form submission   


    const onSubmit = (data) => {
        if (!data.name) return; // Prevent submission if task name is empty    

        if (selectedTask) {// If selectedTask exists, Then edit operation
            dispatch(updateTask({ id: selectedTask.id, updatedTask : data })); // Dispatch updateTask action
        } else {
            // console.log(data)
            const newTask = {
                id: Math.random().toString(36).substr(2, 9), // giving a unique id
                ...data,
            };
            dispatch(addTask(newTask)); // Dispatch addTask action                   
        }
        navigate('/task-list') // once the new task added navigate     
        reset(); // Reset form after submission
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
                <div className='d-flex align-items-center' style={{gap:'15px', fontSize:'13px'}}>
                    <div className='d-flex align-items-center'>    
                        <input
                            type="checkbox"
                            defaultValue={isComplete}
                            checked={isComplete ? true : false}
                            {...register("is_complete", {
                                onChange: ()=> setIsComplete(!isComplete)
                            })}
                        />
                        <label htmlFor="is_complete" className="form-label m-0 ms-1">Complete</label>
                        {errors?.is_complete && <InputError message={errors.is_complete.message} />}
                    </div>   
                    <div className='d-flex align-items-center'>    
                        <input
                            type="radio"
                            defaultValue={'low'}
                            {...register("priority", {
                                onChange : () => setDefaultPriority('low')
                            })}
                            defaultChecked={defaultPriority === 'low'} // Check if priority is 'low'                         
                        />                        
                        {errors?.priority && <InputError message={errors.priority.message} />}
                        <label htmlFor="priority" className="form-label m-0 ms-1">Low</label>
                    </div>
                    <div className='d-flex align-items-center'>    
                        <input
                            type="radio"
                            defaultValue={'high'}
                            {...register("priority", {
                                onChange : () => setDefaultPriority('high')
                            })}
                            defaultChecked={defaultPriority === 'high'} // Check if priority is 'high'
                        />              
                        <label htmlFor="priority" className="form-label m-0 ms-1">High</label>
                        {errors?.priority && <InputError message={errors.priority.message} />}
                    </div>
                    <div className='d-flex align-items-center'>    
                        <input
                            type="radio"
                            defaultValue={'medium'}
                            {...register("priority", {
                                onChange : () => setDefaultPriority('medium')
                            })}
                            defaultChecked={defaultPriority === 'medium'} // Check if priority is 'medium'
                        />              
                        <label htmlFor="priority" className="form-label m-0 ms-1">Medium</label>
                        {errors?.priority && <InputError message={errors.priority.message} />}
                    </div>

                </div>
                
                <button type="submit" className="btn btn-primary mt-3">Save</button>
            </form>
        </>
        
    );
};

export default TaskForm;
