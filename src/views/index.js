import React from 'react'
import { Route, Routes } from 'react-router-dom';
import CounterPage from './CounterPage'
import CoursePayment from './CoursePayment';
import Dummy from './Dummy';
import Homepage from './Homepage'
import LoginPage from './LoginPage'
import MyCourse from './MyCourse';
import RegisterPage from './RegisterPage'
import SchoolDetail from './SchoolDetail';

const Views = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/counter' element={<CounterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/dummy' element={<Dummy/>}/>
        <Route path='/my-course' element={<MyCourse/>}/>
        <Route path='/course-payment' element={<CoursePayment/>}/>
        <Route path='/school/:schoolid' element={<SchoolDetail/>}/>
      </Routes>
    </div>
  )
}

export default Views