import { useState } from "react";

function HeaderForm() {
    const [ headerFormData, setHeaderFormData ] = useState(
        {resumeName: "", resumeTitle: "", phoneNumber: "", email: "", location: ""}
    );

    function handleChange(e) {
        setFormInput(e.currentTarget.value)
    };

    return (
        <form>
            <input value={resumeName} type="text" onChange={handleChange} placeholder="Name"/>
            <input value={resumeTitle} type="text" onChange={handleChange} placeholder="Title"/>
            <input value={phoneNumber} type="text" onChange={handleChange} placeholder="Phone Number"/>
            <input value={email} type="text" onChange={handleChange} placeholder="Email"/>
            <input value={location} type="text" onChange={handleChange} placeholder="Location"/>
        </form>
    );
};
  
export default HeaderForm;