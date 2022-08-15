import { useState } from 'react'
import './App.css'
import HeaderForm from './components/HeaderForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HeaderForm />

    </div>
  )
}

export default App


//components
//Header - Name, job title? phone, email, location

//Work Experience - Job Component - be able to add and delete these
//job title, company, dates, bullet points

//Education - School, Dates - be able to add and delete
