/* eslint-disable react/prop-types */


const TaskCounter = ({tasks}) => {
    return (
        <div className="tasks-counter-box">
            <span>Total: {tasks?.length}</span>
            <span>Completed: {tasks?.filter(task => task.is_complete).length}</span>
        </div>
    );
};

export default TaskCounter;