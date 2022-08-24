import { useState } from 'react'
import './App.css'
import PersonalDetailsForm from './Form/PersonalDetailsForm'
import PersonalDetailsResume from './Resume/PersonalDetailsResume'
import Header from './Header'

function App() {
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
      <Header />
      <div className='container'>
        <div className='form'>
          <PersonalDetailsForm PersonalDetailsFormData={PersonalDetailsFormData} handleChange={handleChange}/>

        </div>
        <div className='resume'>
          <PersonalDetailsResume PersonalDetailsFormData={PersonalDetailsFormData} handleChange={handleChange}/>
          <div className='personalDetailsSection'> 
            <div className='personalDetailsName'>JOHN DOEMAN</div>
            <div className='phone'>555-555-5555</div>
            <div className='email'>fhgray96@gmail.com</div>
            <div className='city'>Austin, TX</div>
            <div className='personalDetailsTitle'>Software Developer</div>
          </div>
          <div className='workExperienceSection'>
            <div className='resumeTitle'>WORK EXPERIENCE</div>
            <div className='workTitle'>Software Egineer,  Google</div>
            <div className='workDates'>September 2018 - October 2020</div>
            <div className='workTask'>Prepared software engineering tasks with software engineering things.</div>
          </div>
          <div className='educationSection'>
            <div className='resumeTitle'>EDUCATION</div>
            <div className='educationSchool'>Wichita State University</div>
            <div className='major'>Software Engineering</div>
            <div className='GPA'>3.5/4.0</div>
            <div className='Date'>December</div>
          </div>
        </div>
      </div>


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
