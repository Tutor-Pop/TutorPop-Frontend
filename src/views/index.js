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
import SearchPage from './SearchPage';
import SchoolManagement from './SchoolManagement';
import TeacherManagement from './TeacherManagement';
import TeacherPage from './TeacherPage';
import OpenSchoolRequest from './OpenSchoolRequest';
import UserManagement from './UserManagement';
import CourseManagement from './CourseManagement';
import AdminSchoolManagement from './AdminSchoolManagement';
import PayedPage from './PayedPage';


const Views = ({isLogin=false}) => {
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
        <Route path='/school-register' element={<SchoolRegister/>}/>
        <Route path='/school-payment-temp' element={<SchoolPayment/>}/>
        <Route path='/course/:courseid' element={<CourseDetail/>}/>
        <Route path='/:schoolid/classroom-manage' element={<ClassroomManage/>}/>
        <Route path='/school-manage/:schoolid' element={<SchoolManagement/>}/>
        <Route path='/search' element={<SearchPage/>}/>
        <Route path='/:schoolid/teacher-manage' element={<TeacherManagement/>}/>
        { /* Authorization is required after this line */ isLogin && <>
        <Route path='/my-school' element={<MySchool/>}/>
        <Route path='/my-profile' element={<MyProfile/>}/>
        <Route path='/my-profile/edit' element={<MyProfileEdit/>}/>
        <Route path='/my-profile/change-password' element={<ChangePassword/>}/>
        </>
        }
        <Route path='/teachers/:teacherid' element={<TeacherPage/>}/>
        <Route path='/admin/course_manage' element={<CourseManagement/>}/>
        <Route path='/admin/open_schoolRequest' element={<OpenSchoolRequest/>}/>
        <Route path='/admin/user_manage' element={<UserManagement/>}/>
        <Route path='/admin/school_manage' element={<AdminSchoolManagement/>}/>
        <Route path='/course/:courseid/payed' element={<PayedPage/>}/>
      </Routes>
    </div>
  )
}

export default Views