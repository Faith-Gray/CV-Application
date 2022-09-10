function WorkExperienceForm( { WorkExperienceFormData, handleChangeExperience } ) {

    const [counter, setCounter] = useState(0);
    const [inputValues, setInputValues] = useState({});

    function handleAddButton(e) {
        setCounter(counter + 1);
        console.log(counter)
    }


    const handleOnChange = (e) => {
        const abc = {};
        abc[e.target.className] = e.target.value;
        setInputValues({ ...inputValues, ...abc });
    };
    // const handleAddButton = () => {
    //     setCounter(counter + 1);
    //     console.log(counter);
    // };

    return (
        <>
            <div className="formButtonContainer">
                <div className="formHeaders">Work Experience</div>
                <button className="addJobButton">+</button>
            </div>
            <form>
                <input 
                    value={WorkExperienceFormData.jobTitle} 
                    type="text" 
                    onChange={handleChangeExperience} 
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
                    value={WorkExperienceFormData.date} 
                    type="text" 
                    onChange={handleChangeExperience} 
                    placeholder="Date(s)"
                    name="date"
                />
                <input 
                    value={WorkExperienceFormData.task} 
                    type="text" 
                    onChange={handleChangeExperience} 
                    placeholder="Task"
                    name="task"
                />
                {Array.from(Array(counter)).map((c, index) => {
                    return (
                        <input
                        onChange={handleOnChange}
                        key={c}
                        className={index}
                        type="text"
                        >
                        </input>
                    )
                })}
                
                <input 
                    className="addTaskButton"
                    value="Add Task" 
                    type="button" 
                    onClick={handleAddButton}
                    name="addTaskButton"
                    
                />                
            </form>
        </>
    );

};
  
export default WorkExperienceForm;