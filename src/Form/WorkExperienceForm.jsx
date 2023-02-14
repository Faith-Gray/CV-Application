
function WorkExperienceForm( { WorkExperienceFormData, handleChangeExperience, handleAddClick, handleRemoveClick, handleAddTask } ) {

    return (
        <>

            {WorkExperienceFormData.map((x, i) => {
                console.log(x.task);
                return (
                    
                    <form>
                        <div className="formButtonContainer">
                            <div className="formHeaders">Work Experience</div>
                            {WorkExperienceFormData.length !== 1 && <button className="subJobButton" type="button" onClick={handleRemoveClick}>-</button>}
                            {WorkExperienceFormData.length - 1 === i && <button className="addJobButton" type="button" onClick={handleAddClick}>+</button>}
                        </div>                        
                        <input 
                            value={x.jobTitle} 
                            type="text" 
                            onChange={e => handleChangeExperience(e, i)}
                            placeholder="Position, Company"
                            name="jobTitle"
                            
                        />

                        <input 
                            value={x.date} 
                            type="text" 
                            onChange={e => handleChangeExperience(e, i)}
                            placeholder="Date(s)"
                            name="date"
                        />
                        


                        {/* {x.task.map((y, index) => {
                        
                            return (
                                <input 
                                value={[y]} 
                                type="text" 
                                onChange={e => handleChangeTask(e, index)} 
                                placeholder="Task"
                                name="task"
                            />
                            )
                        })} */}
                                 
                        <input 
                            value={x.task} 
                            type="text" 
                            onChange={e => handleChangeExperience(e, i)} 
                            placeholder="Task"
                            name="task"
                        />    

                        <input 
                            value={x.task2} 
                            type="text" 
                            onChange={e => handleChangeExperience(e, i)} 
                            placeholder="Task"
                            name="task2"
                        />  

                        <input 
                            value={x.task3} 
                            type="text" 
                            onChange={e => handleChangeExperience(e, i)} 
                            placeholder="Task"
                            name="task3"
                        />                                              
                        
                        {/* {WorkExperienceFormData.map((x, i) => {
                            return(
                                <input 
                                    value={x.task} 
                                    type="text" 
                                    onChange={e => handleChangeExperience(e, i)} 
                                    placeholder="Task"
                                    name="task"
                                />
                                
                            )
                        })} */}

                        {/* To add later: Code to add multiple tasks */}
                        {/* {Array.from(Array(counter)).map((c, index) => {
                            return (
                                <input
                                onChange={handleOnChange}
                                key={c}
                                className={index}
                                type="text"
                                >
                                </input>
                            )
                        })} */}
                        
                        
                        {/* <input 
                            className="addTaskButton"
                            value="Add Task" 
                            type="button" 
                            onClick={handleAddTask}
                            name="addTaskButton"
                            
                        />                 */}
                    </form>
                );
            })}
        </>

        
    );

};
  
export default WorkExperienceForm;