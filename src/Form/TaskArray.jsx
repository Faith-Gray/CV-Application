import Task from "./Task";

const TaskArray = ({taskArray, handleTask}) => {
    return (
        <div>
            {taskArray.map(task => {
                return(
                    <Task task={task} handleTask={handleTask}/>
                )
            })}
        </div>
    )
};