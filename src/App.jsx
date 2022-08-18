import { useState } from 'react'
import './App.css'
import HeaderForm from './Form/HeaderForm'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HeaderForm />
      {/* <HeaderResume /> */}

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
