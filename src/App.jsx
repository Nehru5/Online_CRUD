import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Addstudent from './pages/Addstudent'
import Viewstudent from './pages/Viewstudent'
import UpdateStudent from './pages/UpdateStudent'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/addstudent' element={<Addstudent/>}/>
        <Route path='/viewstudent' element={<Viewstudent/>}/>
        <Route path='/updatestudent' element={<UpdateStudent/>}/>
      </Routes>
    </>
  )
}

export default App