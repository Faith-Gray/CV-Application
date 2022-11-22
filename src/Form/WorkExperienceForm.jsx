
function WorkExperienceForm( { WorkExperienceFormData, handleChangeExperience, handleAddClick, handleRemoveClick, handleAddTask } ) {

    return (
        <>

            {WorkExperienceFormData.map((x, i) => {

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
                        


                        {WorkExperienceFormData.map((x, i) => {
                        
                            return (
                                <input 
                                value={x.task} 
                                type="text" 
                                onChange={e => handleChangeExperience(e, i)} 
                                placeholder="Task"
                                name="task"
                            />
                            )
                        })}
                                                 
                        
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
                        
                        
                        <input 
                            className="addTaskButton"
                            value="Add Task" 
                            type="button" 
                            onClick={handleAddTask}
                            name="addTaskButton"
                            
                        />                
                    </form>
                );
            })}
        </>

        
    );

};
  
export default WorkExperienceForm;