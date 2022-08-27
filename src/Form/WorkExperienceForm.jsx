function WorkExperienceForm( { WorkExperienceFormData, handleChangeExperience } ) {

    return (
        <>
            <div className="formHeaders">Work Experience</div>
            <form>
                <input 
                    value={WorkExperienceFormData.jobTitle} 
                    type="text" 
                    onChange={handleChangeExperience} 
                    placeholder="Name"
                    name="resumeName"
                />
                <input 
                    value={WorkExperienceFormData.company} 
                    type="text" 
                    onChange={handleChangeExperience} 
                    placeholder="Title"
                    name="resumeTitle"
                />
                <input 
                    value={WorkExperienceFormData.date} 
                    type="text" 
                    onChange={handleChangeExperience} 
                    placeholder="Phone Number"
                    name="phoneNumber"
                />
                <input 
                    value={WorkExperienceFormData.task} 
                    type="text" 
                    onChange={handleChangeExperience} 
                    placeholder="Email"
                    name="email"
                />

            </form>
        </>
    );

};
  
export default WorkExperienceForm;