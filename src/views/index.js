import React from 'react'
import { Route, Routes } from 'react-router-dom';
import '../custom.scss'
import ChangePassword from './ChangePassword';
import ClassroomManage from './ClassroomManage';
import CounterPage from './CounterPage'
import CourseDetail from './CourseDetail';
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
import SchoolEditing from './SchoolEditing';
import SchoolPayment from './SchoolPayment';
import SchoolRegister from './SchoolRegister';
import MySchool from './MySchool';
import SchoolManagement from './SchoolManagement';
import TeacherManagement from './TeacherManagement';

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
        <Route path='/favorite' element={<FavoritePage/>}/>
        <Route path='/school/:schoolid/edit' element={<SchoolEditing/>}/>
        <Route path='/my-profile' element={<MyProfile/>}/>
        <Route path='/my-profile/edit' element={<MyProfileEdit/>}/>
        <Route path='/my-profile/change-password' element={<ChangePassword/>}/>
        <Route path='/school-register' element={<SchoolRegister/>}/>
        <Route path='/school-payment-temp' element={<SchoolPayment/>}/>
        <Route path='/course/:courseid' element={<CourseDetail/>}/>
        <Route path='/:schoolid/classroom-manage' element={<ClassroomManage/>}/>
        <Route path='/my-school' element={<MySchool/>}/>
        <Route path='/school-manage/:schoolid' element={<SchoolManagement/>}/>
        <Route path='/:schoolid/teacher-manage' element={<TeacherManagement/>}/>
      </Routes>
    </div>
  )
}

export default Views