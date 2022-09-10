const Task = ({task, handleTask}) => {

    const handleTask = (e) => {
        e.preventDefault()
        handleTask(e.currentTarget.id)
    }

    return (
        <div id={task.id} key={task.id + task.details} name='task' value={task.id} onClick={handleTask}>
            {task.details}
        </div>
    )
};

export default Task;