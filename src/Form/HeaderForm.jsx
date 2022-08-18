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
                value={headerFormData.resumeName} 
                type="text" 
                onChange={handleChange} 
                placeholder="Name"
                name="resumeName"
            />
            <input 
                value={headerFormData.resumeTitle} 
                type="text" 
                onChange={handleChange} 
                placeholder="Title"
                name="resumeTitle"
            />
            <input 
                value={headerFormData.phoneNumber} 
                type="text" 
                onChange={handleChange} 
                placeholder="Phone Number"
                name="phoneNumber"
            />
            <input 
                value={headerFormData.email} 
                type="text" 
                onChange={handleChange} 
                placeholder="Email"
                name="email"
            />
            <input 
                value={headerFormData.location} 
                type="text" 
                onChange={handleChange} 
                placeholder="Location"
                name="location"
            />
        </form>
    );

};
  
export default HeaderForm;