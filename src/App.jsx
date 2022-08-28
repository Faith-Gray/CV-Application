import { useState } from 'react'
import './App.css'
import PersonalDetailsForm from './Form/PersonalDetailsForm'
import PersonalDetailsResume from './Resume/PersonalDetailsResume'
import Header from './Header'
import WorkExperienceForm from './Form/WorkExperienceForm'
import EducationForm from './Form/EducationForm'

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

    const [ WorkExperienceFormData, setWorkExperienceFormData ] = useState(
      {jobTitle: "", company: "", date: "", task: ""}
    );

    function handleChangeExperience(e) {
      setWorkExperienceFormData(prevWorkExperienceFormData => {
          return {
              ...prevWorkExperienceFormData,
              [e.target.name]: e.target.value
          }
      })
    };

    const [ EducationFormData, setEducationFormData ] = useState(
      {schoolName: "", schoolDate: "", major: "", gpa: ""}
    );

    function handleChangeEducation(e) {
      setEducationFormData(prevEducationFormData => {
          return {
              ...prevEducationFormData,
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
          <WorkExperienceForm WorkExperienceFormData={WorkExperienceFormData} handleChangeExperience={handleChangeExperience}/>
          <EducationForm EducationFormData={EducationFormData} handleChangeEducation={handleChangeEducation}/>

        </div>
        <div className='resume'>
          <div className='personalDetailsSection'> 
            <div className='personalDetailsName'>{PersonalDetailsFormData.resumeName}</div>
            <div className='personalDetailsGridContainer'>
              <div className='phone'>{PersonalDetailsFormData.phoneNumber}</div>
              <div className='email'>{PersonalDetailsFormData.email}</div>
              <div className='city'>{PersonalDetailsFormData.location}</div>
            </div>
            <div className='personalDetailsTitle'>{PersonalDetailsFormData.resumeTitle}</div>

          </div>
          <div className='workExperienceSection'>
            <div className='resumeTitle'>WORK EXPERIENCE</div>
            <div className='jobGridContainer'>
              <div className='workTitle'>Software Engineer, Google</div>
              <div className='workDates'>September 2018 - October 2020</div>
              <div className='workTask'>Prepared software engineering tasks with software engineering things.</div>
            </div>
          </div>
          <div className='educationSection'>
            <div className='resumeTitle'>EDUCATION</div>
            <div className='educationGridContainer'>
            <div className='educationSchool'>Wichita State University</div>
            <div className='educationDate'>December 2017</div>
            <div className='major'>Major: Software Engineering</div>
            <div className='GPA'>3.5/4.0</div>
            </div>
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
