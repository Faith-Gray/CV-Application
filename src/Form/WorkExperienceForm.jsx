
function WorkExperienceForm( { WorkExperienceFormData, handleChangeExperience, handleAddClick, handleRemoveClick, handleAddTask } ) {

    // const [counter, setCounter] = useState(0);
    // const [inputValues, setInputValues] = useState({});

    // function handleAddButton(e) {
    //     setCounter(counter + 1);
    //     console.log(counter)
    // }


    // const handleOnChange = (e) => {
    //     const abc = {};
    //     abc[e.target.className] = e.target.value;
    //     setInputValues({ ...inputValues, ...abc });
    // };


    return (
        <>
            {/* <div className="formButtonContainer">
                <div className="formHeaders">Work Experience</div>
                <button className="addJobButton">+</button>
            </div> */}
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
                            // onChange={handleChangeExperience} 
                            placeholder="Position, Company"
                            name="jobTitle"
                            
                        />
                        {/* <input 
                            value={WorkExperienceFormData.company} 
                            type="text" 
                            onChange={handleChangeExperience} 
                            placeholder="Company"
                            name="company"
                        /> */}
                        <input 
                            value={x.date} 
                            type="text" 
                            onChange={e => handleChangeExperience(e, i)}
                            placeholder="Date(s)"
                            name="date"
                        />
                        


                        {x.task.map((x, i) => {
                        
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