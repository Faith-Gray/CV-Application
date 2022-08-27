function EducationForm( { EducationFormData, handleChangeEducation } ) {


    return (
        <>
        <div className="formHeaders">Education</div>
            <form>
                <input 
                    value={EducationFormData.schoolName} 
                    type="text" 
                    onChange={handleChangeEducation} 
                    placeholder="School"
                    name="schoolName"
                />
                <input 
                    value={EducationFormData.schoolDate} 
                    type="text" 
                    onChange={handleChangeEducation} 
                    placeholder="Date"
                    name="schoolDate"
                />
                <input 
                    value={EducationFormData.major} 
                    type="text" 
                    onChange={handleChangeEducation} 
                    placeholder="Major"
                    name="major"
                />
                <input 
                    value={EducationFormData.gpa} 
                    type="text" 
                    onChange={handleChangeEducation} 
                    placeholder="GPA"
                    name="gpa"
                />
            </form>
        </>
    );

};
  

export default EducationForm;