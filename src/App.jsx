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
      {jobTitle: "", date: "", task: ""}
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
            <div className='personalDetailsName'>{PersonalDetailsFormData.resumeName || "John Smith"}</div>
            <div className='personalDetailsGridContainer'>
              <div className='phone'>{PersonalDetailsFormData.phoneNumber || "316-524-2424"}</div>
              <div className='email'>{PersonalDetailsFormData.email || "fakeemail@gmail.com"}</div>
              <div className='city'>{PersonalDetailsFormData.location || "Austin, TX"}</div>
            </div>
            <div className='personalDetailsTitle'>{PersonalDetailsFormData.resumeTitle || "Software Engineer"}</div>

          </div>
          <div className='workExperienceSection'>
            <div className='resumeTitle'>WORK EXPERIENCE</div>
            <div className='jobGridContainer'>
              <div className='workTitle'>{WorkExperienceFormData.jobTitle|| "Software Engineer, Google"}</div>
              <div className='workDates'>{WorkExperienceFormData.date || "September 2018 - October 2020"}</div>
              <ul className='workTasksList'>
              <li className='workTask'>{WorkExperienceFormData.task || "Prepared software engineering tasks with software engineering things."}</li>
              </ul>
            </div>
          </div>
          <div className='educationSection'>
            <div className='resumeTitle'>EDUCATION</div>
            <div className='educationGridContainer'>
            <div className='educationSchool'>{EducationFormData.schoolName || "Wichita State University"}</div>
            <div className='educationDate'>{EducationFormData.schoolDate || "December 2017"}</div>
            <div className='major'>Major: {EducationFormData.major || "Software Engineering"}</div>
            <div className='GPA'>{EducationFormData.gpa || "3.5/4.0"}</div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default App;


//components
//Header - Name, job title? phone, email, location

//Work Experience - Job Component - be able to add and delete these
//job title, company, dates, bullet points

//Education - School, Dates - be able to add and delete

//things to add
//react-split - library to split the screen easily
//nanoid for id numbers
//find a library that might let me print out the resume part of the screen
