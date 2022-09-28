import React from 'react'
import { Route, Routes } from 'react-router-dom';
import CounterPage from './CounterPage'
import CoursePayment from './CoursePayment';
import Dummy from './Dummy';
import FavoritePage from './FavoritePage';
import Homepage from './Homepage'
import LoginPage from './LoginPage'
import MyCourse from './MyCourse';
import MyProfile from './MyProfile';
import MyProfileEdit from './MyProfileEdit';
import OurTeachers from './OurTeachers';
import RegisterPage from './RegisterPage'
import SchoolDetail from './SchoolDetail';
import Test from './Test';
import SchoolEditing from './SchoolEditing';

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
        <Route path='/school/:schoolid/teachers' element={<OurTeachers/>}/>
        <Route path='/test' element={<Test/>}/>
        <Route path='/favorite' element={<FavoritePage/>}/>
        <Route path='/school/:schoolid/edit' element={<SchoolEditing/>}/>
        <Route path='/my-profile' element={<MyProfile/>}/>
        <Route path='/my-profile/edit' element={<MyProfileEdit/>}/>
      </Routes>
    </div>
  )
}

export default Views