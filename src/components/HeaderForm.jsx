import { useState } from "react";

function HeaderForm() {
    const [ headerFormData, setHeaderFormData ] = useState(
        {resumeName: "", resumeTitle: "", phoneNumber: "", email: "", location: ""}
    );

    console.log(headerFormData);

    function handleChange(e) {
        setHeaderFormData(prevHeaderFormData => {
            return {
                ...prevHeaderFormData,
                [e.target.name]: e.target.value
            }
        })
    };

    return (
        <form>
            <input 
                // value={resumeName} 
                type="text" 
                onChange={handleChange} 
                placeholder="Name"
                name="resumeName"
            />
            <input 
                // value={resumeTitle} 
                type="text" 
                onChange={handleChange} 
                placeholder="Title"
                name="resumeTitle"
            />
            <input 
                // value={phoneNumber} 
                type="text" 
                onChange={handleChange} 
                placeholder="Phone Number"
                name="phoneNumber"
            />
            <input 
                // value={email} 
                type="text" 
                onChange={handleChange} 
                placeholder="Email"
                name="email"
            />
            <input 
                // value={location} 
                type="text" 
                onChange={handleChange} 
                placeholder="Location"
                name="location"
            />
        </form>
    );
};
  
export default HeaderForm;