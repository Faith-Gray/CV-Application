import Task from "./Task";

const TaskArray = ({taskArray, handleAddTask}) => {
    return (
        <div>
            {taskArray.map(task => {
                return(
                    <Task task={task} handleAddTask={handleAddTask}/>
                )
            })}
        </div>
    );
};

export default TaskArray;