import { useState } from 'react'
import './App.css'
import PersonalDetailsForm from './Form/PersonalDetailsForm'
import HeaderResume from './Resume/PersonalDetailsResume'

function App() {
  // const [count, setCount] = useState(0)

    const [ PersonalDetailsFormData, setPersonalDetailsFormData ] = useState(
        {resumeName: "", resumeTitle: "", phoneNumber: "", email: "", location: ""}
    );

    console.log(PersonalDetailsFormData);
        
    function handleChange(e) {
        setPersonalDetailsFormData(prevPersonalDetailsFormData => {
            return {
                ...prevPersonalDetailsFormData,
                [e.target.name]: e.target.value
            }
        })
    };

  return (
    <div className="App">
      <PersonalDetailsForm />
      {/* <HeaderResume {HeaderResume.resumeName}/> */}

    </div>
  )
}

export default App


//components
//Header - Name, job title? phone, email, location

//Work Experience - Job Component - be able to add and delete these
//job title, company, dates, bullet points

//Education - School, Dates - be able to add and delete

//things to add
//react-split - library to split the screen easily
//nanoid for id numbers
//find a library that might let me print out the resume part of the screen
