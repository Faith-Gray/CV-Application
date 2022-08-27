function WorkExperienceForm( { WorkExperienceFormData, handleChangeExperience } ) {

    return (
        <>
            <div className="formHeaders">Work Experience</div>
            <form>
                <input 
                    value={WorkExperienceFormData.jobTitle} 
                    type="text" 
                    onChange={handleChangeExperience} 
                    placeholder="Job"
                    name="jobTitle"
                />
                <input 
                    value={WorkExperienceFormData.company} 
                    type="text" 
                    onChange={handleChangeExperience} 
                    placeholder="Company"
                    name="company"
                />
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

            </form>
        </>
    );

};
  
export default WorkExperienceForm;