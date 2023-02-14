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

    // console.log(PersonalDetailsFormData);
        
    function handleChange(e) {
        setPersonalDetailsFormData(prevPersonalDetailsFormData => {
            return {
                ...prevPersonalDetailsFormData,
                [e.target.name]: e.target.value
            }
        })
    };

    // I think I need to make the form's use state an array to loop through

    const [ WorkExperienceFormData, setWorkExperienceFormData ] = useState(
      [{jobTitle: "", date: "", task: "", task2: "", task3: "", id: uuidv1()}]
    );

    // function handleChangeExperience(e) {
    //   setWorkExperienceFormData(prevWorkExperienceFormData => {
    //       return {
    //           ...prevWorkExperienceFormData,
    //           [e.target.name]: e.target.value
    //       }
    //   })
    // };

    const handleChangeExperience = (e, i) => {
      const { name, value } = e.target;
      const list = [...WorkExperienceFormData];
      list[i][name] = value;
      setWorkExperienceFormData(list);
    };
    
    // const handleChangeTask = (e, i) => {
    //   const { name, value } = e.target;
    //   const list = [...WorkExperienceFormData];
    //   list[i][name] = value;
    //   setWorkExperienceFormData([...WorkExperienceFormData, {list}]);
    // };

    const handleRemoveClick = (index) => {
      const list = [...WorkExperienceFormData];
      list.splice(index, 1);
      setWorkExperienceFormData(list);
      console.log(index);
    };

    const handleAddClick = () => {
      setWorkExperienceFormData([...WorkExperienceFormData, { jobTitle: "", date: "", task: "", task2: "", task3: "", id: uuidv1()}]);
    };

    // setState(
    //   state.map((item) => {
    //       if (item.id === id) {
    //           return { ...item, tasks: [...item.tasks, newTask] };
    //       }
    //       return item;
    //   }),
    // );

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
                    <>
                        <div className='jobGridContainer'>
                          <div className='workTitle'>{WorkExperienceFormData[i].jobTitle|| "Software Engineer, Google"}</div>
                          <div className='workDates'>{WorkExperienceFormData[i].date || "September 2018 - October 2020"}</div>
                          <ul className='workTasksList'>
                            {/* {WorkExperienceFormData.map(( x, i) => { */}
                          <li className='workTask'>{WorkExperienceFormData[i].task || "Prepared software engineering tasks with software engineering things."}</li>
                          <li className='workTask'>{WorkExperienceFormData[i].task2 || "Prepared software engineering tasks with software engineering things."}</li>
                          <li className='workTask'>{WorkExperienceFormData[i].task3 || "Prepared software engineering tasks with software engineering things."}</li>
                          </ul>
                        </div>
                      {console.log(x)}                      
                    </>
                );
              })}
          </div>
          {/* <div className='workExperienceSection'>
            <div className='resumeTitle'>WORK EXPERIENCE</div>
            <div className='jobGridContainer'>
              <div className='workTitle'>{WorkExperienceFormData.jobTitle|| "Software Engineer, Google"}</div>
              <div className='workDates'>{WorkExperienceFormData.date || "September 2018 - October 2020"}</div>
              <ul className='workTasksList'>
              <li className='workTask'>{WorkExperienceFormData.task || "Prepared software engineering tasks with software engineering things."}</li>
              </ul>
            </div>
          </div> */}
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
