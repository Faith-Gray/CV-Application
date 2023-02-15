import { useState } from 'react';
import './App.css';
import PersonalDetailsForm from './Form/PersonalDetailsForm';
import Header from './Header';
import WorkExperienceForm from './Form/WorkExperienceForm';
import EducationForm from './Form/EducationForm';
import { v1 as uuidv1 } from 'uuid';

function App() {
    const [ PersonalDetailsFormData, setPersonalDetailsFormData ] = useState(
        {resumeName: "", resumeTitle: "", phoneNumber: "", email: "", location: ""}
    );

        
    function handleChange(e) {
        setPersonalDetailsFormData(prevPersonalDetailsFormData => {
            return {
                ...prevPersonalDetailsFormData,
                [e.target.name]: e.target.value
            }
        })
    };


    const [ WorkExperienceFormData, setWorkExperienceFormData ] = useState(
      [{jobTitle: "", date: "", task: "", task2: "", task3: "", id: uuidv1()}]
    );



    const handleChangeExperience = (e, i) => {
      const { name, value } = e.target;
      const list = [...WorkExperienceFormData];
      list[i][name] = value;
      setWorkExperienceFormData(list);
    };

    const handleRemoveClick = (id) => {
      const list = WorkExperienceFormData.filter((item) => item.id !== id);
      setWorkExperienceFormData(list);
    };

    const handleAddClick = () => {
      setWorkExperienceFormData([...WorkExperienceFormData, { jobTitle: "", date: "", task: "", task2: "", task3: "", id: uuidv1()}]);
    };



    const handleAddTask = (id) => {
      setWorkExperienceFormData (
        WorkExperienceFormData.map((item) => {
          if (item.id === id) {
              return { ...item, task: [...item.task, { task: ""}] };
          } else {
          return {...item};        
          };
        }),
      )
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
          <WorkExperienceForm WorkExperienceFormData={WorkExperienceFormData} handleChangeExperience={handleChangeExperience}
          handleAddClick={handleAddClick} handleRemoveClick={handleRemoveClick} handleAddTask={handleAddTask}/>
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
            {WorkExperienceFormData.map(( x, i) => {
                return (
                    // <li key={WorkExperienceFormData.id}>
                    <>
                        <div className='jobGridContainer'>
                          <div className='workTitle'>{WorkExperienceFormData[i].jobTitle|| "Software Engineer, Google"}</div>
                          <div className='workDates'>{WorkExperienceFormData[i].date || "September 2018 - October 2020"}</div>
                          <ul className='workTasksList'>
                          <li className='workTask'>{WorkExperienceFormData[i].task || "Built a full-stack web app to allow users to simulate and visualize large sets of data."}</li>
                          <li className='workTask'>{WorkExperienceFormData[i].task2 || "Built RESTful APIs that served data to the JavaScript front-end based on dynamically chosen user inputs,"}</li>
                          <li className='workTask'>{WorkExperienceFormData[i].task3 || "Tested software for bugs and operating speed, fixing bugs and documenting processing to increase efficiency by 18%."}</li>
                          </ul>
                        </div>
                    </>
                    // </li>
                );
              })}
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
