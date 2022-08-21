function EducationForm( { PersonalDetailsFormData, handleChange } ) {


    return (
        <form>
            <input 
                value={PersonalDetailsFormData.resumeName} 
                type="text" 
                onChange={handleChange} 
                placeholder="Name"
                name="resumeName"
            />
            <input 
                value={PersonalDetailsFormData.resumeTitle} 
                type="text" 
                onChange={handleChange} 
                placeholder="Title"
                name="resumeTitle"
            />
            <input 
                value={PersonalDetailsFormData.phoneNumber} 
                type="text" 
                onChange={handleChange} 
                placeholder="Phone Number"
                name="phoneNumber"
            />
            <input 
                value={PersonalDetailsFormData.email} 
                type="text" 
                onChange={handleChange} 
                placeholder="Email"
                name="email"
            />
            <input 
                value={PersonalDetailsFormData.location} 
                type="text" 
                onChange={handleChange} 
                placeholder="Location"
                name="location"
            />
        </form>
    );

};
  

export default EducationForm;